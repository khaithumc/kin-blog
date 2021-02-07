package khaithumc.com.kinblog.services.impl;

import khaithumc.com.kinblog.models.Post;
import khaithumc.com.kinblog.repository.PostRepository;
import khaithumc.com.kinblog.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService<Post> {

    @Autowired
    private PostRepository postRepos;

    @Override
    public List<Post> getAll() {
       return  postRepos.findAll();
    }

    @Override
    public Post add(Post post) {
        return postRepos.save(post);
    }

    @Override
    public Optional<Post> getById(Long id) {
        return postRepos.findById(id);
    }

    @Override
    public void deleteById(Long id) {
        postRepos.deleteById(id);
    }
}
