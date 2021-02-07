package khaithumc.com.kinblog.services;

import khaithumc.com.kinblog.enums.EnumRole;
import khaithumc.com.kinblog.models.Role;

import java.util.Optional;

public interface RoleService {
    Optional<Role> findByName(EnumRole nameRole);
}
