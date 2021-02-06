package khaithumc.com.kinblog;

import khaithumc.com.kinblog.model.Role;
import khaithumc.com.kinblog.model.User;
import khaithumc.com.kinblog.services.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class KinBlogApplication implements CommandLineRunner {

    @Autowired
    private IService<Role> roleIService;

    @Autowired
    private IService<User> userIService;


    public static void main(String[] args) {
        SpringApplication.run(KinBlogApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        /*Role role = new Role();
        role.setNameRole("user");
        roleIService.add(role);

        User user = new User();
        user.setEmail("user@gmail.com");
        user.setUsername("user");
        user.setPassword(new BCryptPasswordEncoder().encode("1234"));

        for(Role r : roleIService.getAll()) {
            if(r.getNameRole().equalsIgnoreCase("user")) {
                user.setRole(roleIService.getById(r.getIdRole()).get());
            }
        }
        userIService.add(user);*/
    }
}
