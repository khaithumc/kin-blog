package khaithumc.com.kinblog.models;

import khaithumc.com.kinblog.enums.EnumRole;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "role")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_role")
    private long idRole;

    @Enumerated(EnumType.STRING)
    @Column(name = "name_role", length = 20)
    private EnumRole nameRole;

    public Role() {
    }

    public Role(EnumRole nameRole) {
        this.nameRole = nameRole;
    }
}
