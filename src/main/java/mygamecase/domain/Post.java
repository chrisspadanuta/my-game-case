package mygamecase.domain;

import java.util.Date;

public class Post {
    private Player player;
    private Game game;
    private String message;
    private Date date;

    public Post(Player player, Game game, String message, Date date) {
        this.player = player;
        this.game = game;
        this.message = message;
        this.date = date;
    }

    public Player getPlayer() {
        return player;
    }

    public Game getGame() {
        return game;
    }

    public String getMessage() {
        return message;
    }

    public Date getDate() {
        return date;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Post post = (Post) o;

        if (player != null ? !player.equals(post.player) : post.player != null) return false;
        if (game != null ? !game.equals(post.game) : post.game != null) return false;
        if (message != null ? !message.equals(post.message) : post.message != null) return false;
        return date != null ? date.equals(post.date) : post.date == null;
    }

    @Override
    public int hashCode() {
        int result = player != null ? player.hashCode() : 0;
        result = 31 * result + (game != null ? game.hashCode() : 0);
        result = 31 * result + (message != null ? message.hashCode() : 0);
        result = 31 * result + (date != null ? date.hashCode() : 0);
        return result;
    }
}
