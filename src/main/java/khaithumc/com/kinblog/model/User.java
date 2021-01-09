package khaithumc.com.kinblog.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User {
    private long idUser;
    private long idRole;
    private String username;
    private String password;
    private String email;
}
