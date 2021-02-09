package khaithumc.com.kinblog.models;

import khaithumc.com.kinblog.enums.EnumRole;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

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

    // mappedBy trỏ tới tên biến persons ở trong Address.
    @ManyToMany(mappedBy = "roles")
    // LAZY để tránh việc truy xuất dữ liệu không cần thiết. Lúc nào cần thì mới query
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private List<User> users;

    public Role() {
    }

    public Role(EnumRole nameRole) {
        this.nameRole = nameRole;
    }
}
