package khaithumc.com.kinblog.repository;

import khaithumc.com.kinblog.enums.EnumRole;
import khaithumc.com.kinblog.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByNameRole(EnumRole nameRole);
}
