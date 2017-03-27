package mygamecase.controller;

import javax.annotation.PostConstruct;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import mygamecase.domain.Game;
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
}
