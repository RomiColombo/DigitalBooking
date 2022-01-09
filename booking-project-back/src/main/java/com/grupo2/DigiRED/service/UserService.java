package com.grupo2.DigiRED.service;

import com.grupo2.DigiRED.model.Role;
import com.grupo2.DigiRED.model.Users;
import com.grupo2.DigiRED.repository.RoleRepository;
import com.grupo2.DigiRED.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import net.bytebuddy.utility.RandomString;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService implements UserDetailsService {
    private final UserRepository userRepo;
    private final RoleRepository roleRepo;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private TemplateEngine templateEngine;

    private static final Logger log = Logger.getLogger(UserService.class);

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Users users = userRepo.findByEmail(email);
        if (users == null){
            log.error("User not found in the database");
            throw new UsernameNotFoundException("Usuario no encontrado en la base de datos");
        }
        else if(!users.isEnabled()){
            log.error("Usuario pendiente de validación");
            throw new UsernameNotFoundException("Usuario pendiente de validación");
        }
        else{
            log.info("User found in the database: " + users);
        }

        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(users.getRol().getName()));
        return new User(users.getEmail(), users.getPassword(),authorities);
    }

    public Boolean findByEmailUser(String email){
        return userRepo.existsByEmail(email);
    }

    public Users saveUser(Users users, String url) throws MessagingException, UnsupportedEncodingException {
        log.info("Saving new user " + users.getFirstName() + " to the database");
        users.setPassword(passwordEncoder.encode(users.getPassword()));

        users.setEnable(false);

        String randomCode = RandomString.make(64);
        users.setVerificationCode(randomCode);

        userRepo.save(users);

        sendVerificationMail(users, url);

        return users;
    }

    public String getEmailUserSession() {
        Authentication user = SecurityContextHolder.getContext().getAuthentication();
        return user.getName();
    }

    public void sendVerificationMail(Users users, String url) throws MessagingException, UnsupportedEncodingException {
        String subject = "Verificar email";
        String senderMail = "DIGIRENT";

        Context context = new Context();
        context.setVariable("firstName", users.getFirstName());
        String verifyURL = url + "/users/verify?verificationCode=" + users.getVerificationCode();
        context.setVariable("verifyURL", verifyURL);
        String templateUser = templateEngine.process("verification",context);

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom("reservasdigirent@gmail.com", senderMail);
        helper.setTo(users.getEmail());
        helper.setSubject(subject);
        helper.setText(templateUser, true);

        mailSender.send(message);
    }

    public boolean verify(String verificationCode) {
        Users users = userRepo.findByVCQuery(verificationCode);

        if (users == null && users.isEnabled()){
            return false;
        }
        else {
            users.setEnable(true);
            return true;
        }
    }

    public Role saveRole(Role role) {
        return roleRepo.save(role);
    }

    public Users getUser(String email) {
        return userRepo.findByEmail(email);
    }

    public Users getUserByVC (String code){
        return userRepo.findByVerificationCode(code);
    }

    public List<Users> getUsers() {
        return userRepo.findAll();
    }

    public List<Role> getRoles() {
        return roleRepo.findAll();
    }

    public void deleteUser(Long id) {
        userRepo.deleteById(id);
    }

    public void deleteRole(Long id) {
        roleRepo.deleteById(id);
    }
}