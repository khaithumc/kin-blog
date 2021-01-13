package khaithumc.com.kinblog.services.impl;

import khaithumc.com.kinblog.model.Post;
import khaithumc.com.kinblog.repository.PostRepository;
import khaithumc.com.kinblog.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PostServiceImpl implements PostService {

    @Autowired
    PostRepository postRepos;

    @Override
    public List<Post> getAll() {
       List<Post> posts =  postRepos.findAll();
       return  posts;
    }
}
