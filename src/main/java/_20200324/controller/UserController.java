package _20200324.controller;

import _20200324.domain.User;
import _20200324.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/User")
public class UserController {
    private IUserService userService;

    @Autowired
    public void setUserService(IUserService userService) {
        this.userService = userService;
    }


    @RequestMapping("/findAll")
    public String findAll(Model model) {
        List<User> users = userService.findAll();
        model.addAttribute("users", users);
        return "20200324/user";

    }

    @RequestMapping("/delete/{id}")
    public String delete(@PathVariable("id") long id) throws IOException {
        userService.delete(id);
        System.out.println(id);
        return "redirect:/User/findAll";/*Restful风格的特殊些*/
    }

    @RequestMapping("/save")
    public String save(User user) throws IOException {
        userService.save(user);
        return "redirect:findAll";
    }

    @RequestMapping("/findOne")
    public String findOne(Model model, long id) {
        User user = userService.findOne(id);
        model.addAttribute(user);
        return "20200324/user_edit";
    }

    @RequestMapping("/update")
    public String update(Model model, User user) throws IOException {
        userService.update(user);
        return "redirect:findAll";
    }
}
