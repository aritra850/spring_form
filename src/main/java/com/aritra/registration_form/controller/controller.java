package com.aritra.registration_form.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class controller {
	@GetMapping("/")
	public String form(Model model) {
		Student student = new Student();
		model.addAttribute("student", student);
		return "index";
	}
	
	@PostMapping("/studata")
	public String submit_form(@ModelAttribute("student") Student student) {
		return "studata";
	}
}
