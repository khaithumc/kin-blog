package khaithumc.com.kinblog.services.impl;

import khaithumc.com.kinblog.model.Post;
import khaithumc.com.kinblog.repository.PostRepository;
import khaithumc.com.kinblog.services.PostService;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PostServiceImpl implements PostService {

    @Autowired
    PostRepository postRepos;

    @Override
    public List<Post> getAll() {
       return  postRepos.findAll();
    }

    @Override
    public Post addPost(Post post) {
        return postRepos.save(post);
    }

    @Override
    public Optional<Post> getPostById(Long id) {
        return postRepos.findById(id);
    }

    @Override
    public void deletePostById(Long id) {
        postRepos.deleteById(id);
    }
}
