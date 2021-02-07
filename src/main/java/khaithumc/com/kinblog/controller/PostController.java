package khaithumc.com.kinblog.controller;

import khaithumc.com.kinblog.models.Post;
import khaithumc.com.kinblog.services.impl.PostServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/post")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    @Autowired
    private PostServiceImpl postService;


    @GetMapping
    public ResponseEntity<List<Post>> getAllPost() {
        return new ResponseEntity<>(postService.getAll(), new HttpHeaders(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Post> addPost(@RequestBody Post post) {
        post.setCreatedAt(LocalDate.now());
        return new ResponseEntity<>(postService.add(post), new HttpHeaders(), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(postService.getById(id).get(), new HttpHeaders(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deletePostById(@PathVariable("id") Long id) {
        postService.deleteById(id);
    }

}
