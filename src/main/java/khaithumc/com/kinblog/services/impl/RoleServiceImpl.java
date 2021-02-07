package khaithumc.com.kinblog.services.impl;

import khaithumc.com.kinblog.enums.EnumRole;
import khaithumc.com.kinblog.models.Role;
import khaithumc.com.kinblog.repository.RoleRepository;
import khaithumc.com.kinblog.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public Optional<Role> findByName(EnumRole nameRole) {
        return Optional.empty();
    }
}
