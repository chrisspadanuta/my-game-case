package mygamecase.db;

import mygamecase.domain.Post;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class GamePostsDatabase {
    private List<Post> posts = new ArrayList<>();

    public List<Post> getGamePostsByDate(Long playerId) {
        //posts.sort(Comparator.comparing(Post::getDate));
        return posts.stream().sorted((game1, game2) ->
                game2.getDate().compareTo(game1.getDate()))
                .collect(Collectors.toList());
    }

    public void addGamePost(Post post) {
        posts.add(post);
    }

    public void removeGamePost(Post post) {
        posts.remove(post);
    }
}
