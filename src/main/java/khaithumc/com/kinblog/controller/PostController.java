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

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/post")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    @Autowired
    private PostServiceImpl postService;

    private List<Post> posts = new ArrayList<>();

    @GetMapping
    public ResponseEntity<List<Post>> getAllPost() {
        posts = postService.getAll();
        return new ResponseEntity<>(posts, new HttpHeaders(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Post> addPost(@RequestBody Post post) {
        post.setCreatedAt(LocalDate.now());
        return new ResponseEntity<>(postService.addPost(post), new HttpHeaders(), HttpStatus.CREATED);
    }
}
