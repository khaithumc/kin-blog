package khaithumc.com.kinblog.services;


import java.util.List;
import java.util.Optional;

public interface PostService<T> {
    List<T> getAll();

    T add(T t);

    Optional<T> getById(Long id);

    void deleteById(Long id);
}
