package khaithumc.com.kinblog.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
public class Category {
    private long categoryId;
    private String nameCategory;

    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private List<Post> posts;
}
