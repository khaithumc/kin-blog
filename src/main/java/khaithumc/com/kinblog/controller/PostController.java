package khaithumc.com.kinblog.controller;

import khaithumc.com.kinblog.model.Post;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PostController {
    private List<Post> posts = new ArrayList<>();

    @PostMapping("/post")
    public Post create(@RequestBody Post post) {
        return post;
    }

    @GetMapping("/posts")
    public List<Post> getAllPost() {
        return posts;
    }
}
