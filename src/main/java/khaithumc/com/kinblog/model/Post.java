package khaithumc.com.kinblog.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Getter
@Setter
public class Post {
    private long idPost;

    private String title;

    private String thumbnail;

    private String shortDesciption;

    private String content;

    private Date createdAt;

    private Date updatedAt;

    private String linkProduct;

    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private Category category;
}
