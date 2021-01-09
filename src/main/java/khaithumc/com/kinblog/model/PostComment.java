package khaithumc.com.kinblog.model;

import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

@Getter
@Setter
public class PostComment {
    private long idComment;
    private long idPost;
    private long idUser;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String content;
}
