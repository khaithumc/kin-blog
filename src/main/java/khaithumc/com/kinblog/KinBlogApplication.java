package khaithumc.com.kinblog;

import khaithumc.com.kinblog.enums.EnumRole;
import khaithumc.com.kinblog.models.Role;
import khaithumc.com.kinblog.models.User;
import khaithumc.com.kinblog.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@SpringBootApplication
public class KinBlogApplication implements CommandLineRunner {
    public static void main(String[] args) {
        SpringApplication.run(KinBlogApplication.class, args);
    }

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        /*User user = new User();
        user.setUsername("admin1");
        user.setEmail("admin1@gmail.com");
        user.setPassword(new BCryptPasswordEncoder().encode("1234"));

        List<Role> roles = new HashSet<>();
        roles.add(new Role(EnumRole.ROLE_ADMIN));
        roles.add(new Role(EnumRole.ROLE_USER));

        user.setRoles(roles);
        userRepository.save(user);*/

    }
}
