package khaithumc.com.kinblog.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "post")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_post")
    private long id;

    @Column
    private String title;

    @Column
    private String thumbnail;

    @Column(name = "short_description")
    private String shortDes;

    @Column
    private String content;

    @Column(name = "created_at")
    private LocalDate createdAt;

    @Column(name = "updated_at")
    private LocalDate updatedAt;

    @Column(name = "url_detail")
    private String urlDetail;

   /* @Column(name = "id_category")
   private long idCategory;

    /*@ManyToOne
    @JoinColumn(name = "id_category")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private Category category;*/
}
