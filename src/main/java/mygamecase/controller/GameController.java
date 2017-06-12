package mygamecase.controller;

import javax.annotation.PostConstruct;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import mygamecase.db.PlayerGamesDatabase;
import mygamecase.domain.Friend;
import mygamecase.domain.Game;
import mygamecase.domain.Player;
import mygamecase.domain.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/games")
public class GameController {
	@Autowired private PlayerGamesDatabase playerGamesDB;

	private ArrayList<Game> games = null;

	@PostConstruct
	public void init() {
		ObjectMapper mapper = new ObjectMapper();

		try {
			games = mapper.readValue(new ClassPathResource("games.json").getFile(), new TypeReference<List<Game>>(){});
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value="/game", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public Game getGame() {
		return new Game(1, "Super Mario Bros");
	}

	@RequestMapping(value="/list", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Game>> getList() {
		return new ResponseEntity<>(games, HttpStatus.OK);
	}

	@RequestMapping(value="/list", method=RequestMethod.POST)
	public ResponseEntity<?> setList() {
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@RequestMapping(value="/players/{playerId}/games", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Game>> getPlayerGames(@PathVariable("playerId") long playerId) {
		return new ResponseEntity<>(playerGamesDB.getPlayerGames(playerId), HttpStatus.OK);
	}

	@RequestMapping(value="/players/{playerId}/games", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> setPlayerGames(@PathVariable("playerId") long playerId, @RequestBody List<Game> games) {
		playerGamesDB.setPlayerGames(playerId, games);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@RequestMapping(value="/players/{playerId}/post", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> createPost(@PathVariable("playerId") long playerId, @RequestBody Post newPost) {
		System.out.print(newPost.getMessage());
		System.out.print(newPost.getGame());
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@RequestMapping(value="/players/{playerId}/posts", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Post>> getPosts(@RequestParam Long playerId) {
		return new ResponseEntity<>(new ArrayList<Post>(), HttpStatus.OK);
	}

	@RequestMapping(value="/friends/{playerId}", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Friend>> getFriends(@PathVariable("playerId") long playerId) {
		return new ResponseEntity<>(new ArrayList<Friend>(), HttpStatus.OK);
	}

	@RequestMapping(value="/friends/{playerId}/posts", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Post>> getFriendsPosts(@PathVariable("playerId") long playerId) {
		return new ResponseEntity<>(new ArrayList<Post>(), HttpStatus.OK);
	}
}
