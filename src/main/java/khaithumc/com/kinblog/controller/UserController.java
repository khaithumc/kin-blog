package khaithumc.com.kinblog.controller;

import khaithumc.com.kinblog.model.AuthenticationRequest;
import khaithumc.com.kinblog.model.AuthenticationResponse;
import khaithumc.com.kinblog.model.User;
import khaithumc.com.kinblog.repository.UserRepository;
import khaithumc.com.kinblog.services.impl.UserDetailServiceImpl;
import khaithumc.com.kinblog.utils.JwtUtil;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailServiceImpl userDetailService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/hello")
    public String hello() {
        return "Hello World";
    }

    @PostMapping("/authenticate")
    public ResponseEntity<String> getAuthenticationToken(@RequestBody User user) throws Exception {
        JSONObject jsonObject = new JSONObject();
        try {
        Authentication authentication = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
            if (authentication.isAuthenticated()) {

                UserDetails userDetails = userDetailService.loadUserByUsername(user.getUsername());

                String token = jwtUtil.generateToken(userDetails, userRepository.findByUsername(user.getUsername()).getRole().getNameRole());
                jsonObject.put("name", authentication.getName());
                jsonObject.put("authorities", authentication.getAuthorities());
                jsonObject.put("token", token);
                //jsonObject.put("token", jwtUtil.createToken(email, userRepository.findByEmail(email).getRole()));
                return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.OK);
            }
       } catch (JSONException e) {
            try {
                jsonObject.put("exception", e.getMessage());
            }catch (JSONException e1) {
                e1.printStackTrace();
            }
            return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.UNAUTHORIZED);
        }
        return null;
    }

}
