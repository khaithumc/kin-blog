package khaithumc.com.kinblog.services;

import khaithumc.com.kinblog.models.User;

import java.util.Optional;

public interface UserService {
    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}
