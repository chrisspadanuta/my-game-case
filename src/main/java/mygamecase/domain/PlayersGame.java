package mygamecase.domain;

public class PlayersGame {
    private Game game;
    private Progress progress;
    private int rating; // 0 - 5

    public PlayersGame(Game game) {
        this.game = game;
        this.progress = Progress.NOT_PLAYING;
        this.rating = -1;
    }

    public PlayersGame(Game game, Progress progress, int rating) {
        this.game = game;
        this.progress = progress;
        this.rating = rating;
    }

    public Game getGame() {
        return game;
    }

    public Progress getProgress() {
        return progress;
    }

    public int getRating() {
        return rating;
    }
}
