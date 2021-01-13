package khaithumc.com.kinblog.controller;

import khaithumc.com.kinblog.model.Post;
import khaithumc.com.kinblog.model.Test;
import khaithumc.com.kinblog.services.impl.PostServiceImpl;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/post")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    @Autowired
    private PostServiceImpl postService;


    @GetMapping
    public ResponseEntity<List<Post>> getAllPost() {
        List<Post> postLists = postService.getAll();
        return new ResponseEntity<List<Post>>(postLists, new HttpHeaders(), HttpStatus.OK);
    }
}
