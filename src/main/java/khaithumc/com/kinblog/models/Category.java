package khaithumc.com.kinblog.models;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long categoryId;

    @Column
    private String nameCategory;

    @OneToMany
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private List<Post> posts;
}
