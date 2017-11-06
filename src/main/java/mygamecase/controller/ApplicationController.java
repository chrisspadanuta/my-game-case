package mygamecase.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class ApplicationController {
    @GetMapping
    public ModelAndView list() {
        return new ModelAndView("index");
    }

    @RequestMapping(value="registration", method= RequestMethod.GET)
    public ModelAndView gameRegistration() {
        return new ModelAndView("index");
    }

    @RequestMapping(value="players/{playerId}/profile", method= RequestMethod.GET)
    public ModelAndView players() {
        return new ModelAndView("index");
    }

    @RequestMapping(value="soundtest", method= RequestMethod.GET)
    public ModelAndView soundTest() {
        return new ModelAndView("index");
    }
}
