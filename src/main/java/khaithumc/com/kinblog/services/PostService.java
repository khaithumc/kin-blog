package khaithumc.com.kinblog.services;

import khaithumc.com.kinblog.model.Post;

import java.util.List;
import java.util.Optional;

public interface PostService {
    List<Post> getAll();

    Post addPost(Post post);

    Optional<Post> getPostById(Long id);
}
