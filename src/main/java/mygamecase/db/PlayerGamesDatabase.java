package mygamecase.db;

import mygamecase.domain.Game;
import mygamecase.domain.PlayersGame;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class PlayerGamesDatabase {
    private Map<Long,List<PlayersGame>> playersGames = new HashMap<>();

    public List<Game> getPlayerGames(Long playerId) {
        if (!playersGames.containsKey(playerId)) {
            return new ArrayList<>();
        }

        List<PlayersGame> playersGameList = playersGames.get(playerId);
        List<Game> games = new ArrayList<>();
        for (PlayersGame playersGame : playersGameList) {
            games.add(playersGame.getGame());
        }
        return games;
    }

    public void setPlayerGames(Long playerId, List<Game> games) {
        System.out.println("received playerId: " + playerId);
        List<PlayersGame> playersGameList = new ArrayList<>();
        for (Game game : games) {
            playersGameList.add(new PlayersGame(game));
        }
        playersGames.put(playerId, playersGameList);
    }
}
