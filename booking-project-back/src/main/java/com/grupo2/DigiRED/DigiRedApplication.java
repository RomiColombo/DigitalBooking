package com.grupo2.DigiRED;

import com.grupo2.DigiRED.model.Role;
import com.grupo2.DigiRED.model.Users;
import com.grupo2.DigiRED.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@SpringBootApplication
public class DigiRedApplication{

	public static void main(String[] args) {
		SpringApplication.run(DigiRedApplication.class, args);
	}
	@Bean
	PasswordEncoder passwordEncoder(){
		return new BCryptPasswordEncoder();
	}

	@Bean
	public WebMvcConfigurer configurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
						.allowedOrigins("*");
			}
		};
	}
	/*
	@Bean
	CommandLineRunner run(UserService userService){
		return args ->{
			Role user = userService.saveRole(new Role(null,"ROLE_USER"));
			Role admin = userService.saveRole(new Role(null,"ROLE_ADMIN"));

			userService.saveUser(new Users(null,"Luis","Chavez",
					"Luis123","lchavez@gmail.com" ,"123123", user));
			userService.saveUser(new Users(null,"Andrea","Pais",
					"perfect","apais@gmail.com" ,"123123", admin));

		};
	}
	*/

}
