package khaithumc.com.kinblog.repository;

import khaithumc.com.kinblog.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("FROM User WHERE email=:email")
    User findByEmail(@Param("email") String email);

    @Query("FROM User WHERE username=:username")
    User findByUsername(@Param("username") String username);
}
