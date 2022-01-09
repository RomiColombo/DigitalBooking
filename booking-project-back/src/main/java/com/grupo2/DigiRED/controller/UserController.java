package com.grupo2.DigiRED.controller;

import com.grupo2.DigiRED.ResourceNotFoundException;
import com.grupo2.DigiRED.email.Utility;
import com.grupo2.DigiRED.model.Role;
import com.grupo2.DigiRED.model.Users;
import com.grupo2.DigiRED.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.util.List;

import lombok.RequiredArgsConstructor;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import org.thymeleaf.context.IContext;

import javax.mail.MessagingException;
import javax.security.auth.message.AuthException;
import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {
    private final UserService userService;

    @Autowired
    private TemplateEngine templateEngine;

    @PostMapping
    public ResponseEntity<Users> saveUser(@RequestBody Users users, HttpServletRequest request) throws MessagingException, UnsupportedEncodingException {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/users").toUriString());

        String url = Utility.getSiteURL(request);

        if (userService.findByEmailUser(users.getEmail())){
            return new ResponseEntity("Ya existe un usuario registrado con este email", HttpStatus.BAD_REQUEST);
        }
        return ResponseEntity.created(uri).body(userService.saveUser(users, url));
    }

    @PostMapping("/role")
    public ResponseEntity<Role> saveRole (@RequestBody Role role){
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/users/role").toUriString());
        return ResponseEntity.created(uri).body(userService.saveRole(role));
    }

    @GetMapping
    public ResponseEntity<List<Users>> getUsers(){
        return ResponseEntity.ok().body(userService.getUsers());
    }

    @GetMapping("/{email}")
    public ResponseEntity<Users> getUserByEmail(@PathVariable String email){
        return ResponseEntity.ok().body(userService.getUser(email));
    }

    @GetMapping("/verification/{code}")
    public ResponseEntity<Users> getUserByVC(@PathVariable String code){
        return ResponseEntity.ok().body(userService.getUserByVC(code));
    }

    @GetMapping("/role")
    public ResponseEntity<List<Role>> getRoles(){
        return ResponseEntity.ok().body(userService.getRoles());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUserById(@PathVariable Long id) throws ResourceNotFoundException {
        userService.deleteUser(id);
        return ResponseEntity.status(HttpStatus.OK).body("Usuario eliminado...");
    }

    @DeleteMapping("role/{id}")
    public ResponseEntity<?> deleteRoleById(@PathVariable Long id) throws ResourceNotFoundException {
        userService.deleteRole(id);
        return ResponseEntity.status(HttpStatus.OK).body("Rol eliminado...");
    }

    @GetMapping("/verify")
    public String verifyUser(@Param("verificationCode") String verificationCode, Model model){
        boolean verified = userService.verify(verificationCode);

        String pageTittle = verified ? "Se verificó correctamente" : "Algo salió mal :(";
        model.addAttribute("pageTitle", pageTittle);

        Context context = new Context();
        String templateOK = templateEngine.process("verificationOK", context);
        String templateFail = templateEngine.process("verificationFail", context);

        return (verified ? templateOK : templateFail);
    }
}