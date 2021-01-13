package khaithumc.com.kinblog.repository;

import khaithumc.com.kinblog.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
