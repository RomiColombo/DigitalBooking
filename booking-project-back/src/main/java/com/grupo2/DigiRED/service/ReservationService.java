package com.grupo2.DigiRED.service;

import com.grupo2.DigiRED.ResourceNotFoundException;
import com.grupo2.DigiRED.model.Reservation;
import com.grupo2.DigiRED.model.Users;
import com.grupo2.DigiRED.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.util.List;

@Service
public class ReservationService {

    @Autowired
    ReservationRepository repository;

    @Autowired
    UserService userService;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private TemplateEngine templateEngine;

    //call all the reservations
    public List<Reservation> getAllReservations() {
        return repository.findAll();
    }

    // creating reservation
    public void createReservation(Reservation reservation) throws MessagingException, UnsupportedEncodingException {
        repository.save(reservation);
        sendVerificationMail(reservation);
    }

    // update reservation by id
    public String updateReservation(Long id, Reservation r) {
        if(repository.save(r) != null){
            return "Actualizó bien";
        }else{
            return "Upps actualizó mal";
        }
    }

    // find reservation by id
    public Reservation findReservation(Long id) throws ResourceNotFoundException {
        Reservation r = repository.findById(id).orElse(null);
        if(r == null)
            throw new ResourceNotFoundException("No se encontro la Reserva");
        return r;
    }

    public List<Reservation> findReservationByUserId(Long id) throws ResourceNotFoundException{

        List<Reservation> reservation = repository.findByUserid(id);

        return reservation;
    }

    //Delete reservation
    public String deleteReservation(Long id) {
        repository.deleteById(id);
        return "Eliminado exitosamente" + id;
    }

    public void sendVerificationMail(Reservation reservation) throws MessagingException, UnsupportedEncodingException {
        String subject= "Confirmación de Reserva";
        String senderMail= "DIGIRENT";

        Users userName = userService.getUser(userService.getEmailUserSession());

        Context context = new Context();
        context.setVariable("firstName", userName.getFirstName());
        context.setVariable("idReserva", reservation.getId());
        context.setVariable("startDate", reservation.getStartDate());
        context.setVariable("reservationHour", reservation.getReservationHour());
        context.setVariable("endDate", reservation.getEndDate());

        String templateReservation = templateEngine.process("reservation", context);

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom("reservasdigirent@gmail.com", senderMail);
        helper.setTo(userService.getEmailUserSession()); //CHEQUEAR EL ATRIBUTO PRINCIPAL DE SESION
        helper.setSubject(subject);
        helper.setText(templateReservation, true);

        mailSender.send(message);
    }
}