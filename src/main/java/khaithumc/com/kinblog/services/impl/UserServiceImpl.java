package khaithumc.com.kinblog.services.impl;

import khaithumc.com.kinblog.models.User;
import khaithumc.com.kinblog.repository.UserRepository;
import khaithumc.com.kinblog.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public Optional<User> findByUsername(String username) {
        return Optional.empty();
    }

    @Override
    public Boolean existsByUsername(String username) {
        return null;
    }

    @Override
    public Boolean existsByEmail(String email) {
        return null;
    }
}
