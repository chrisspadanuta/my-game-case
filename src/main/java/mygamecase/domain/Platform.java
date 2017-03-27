package mygamecase.domain;

public enum Platform {
    NES("Nintendo Entertainment System", "Nintendo", "NES"),
    GAMEBOY("Gameboy", "Nintendo", "GB"),
    GENESIS("Genesis", "Sega", "GEN"),
    SNES("Super Nintendo", "Nintendo", "SNES"),
    SEGA_CD("Sega CD", "Sega", "SCD"),
    SEGA_32X("32X", "Sega", "32X"),
    SATURN("Saturn", "Sega", "SAT"),
    PS1("Playstation", "Sony", "PS1"),
    N64("Nintendo 64", "Nintendo", "N64"),
    GAMEBOY_COLOR("Gameboy Color", "Nintendo", "GBC"),
    DREAMCAST("Dreamcast", "Sega", "DC"),
    PS2("Playstation 2", "Sony", "PS2"),
    GAMECUBE("GameCube", "Nintendo", "GC"),
    GAMEBOY_ADVANCE("Gameboy Advance", "Nintendo", "GBA"),
    XBOX("Xbox", "Microsoft", "XBOX"),
    NINTENDO_DS("Nintendo DS", "Nintendo", "NDS"),
    XBOX_360("Xbox 360", "Microsoft", "XB360"),
    WII("Nintendo Wii", "Nintendo", "WII"),
    PS3("Playstation 3", "Sony", "PS3"),
    NINTENDO_3DS("Nintendo 3DS", "Nintendo", "N3DS"),
    WII_U("Nintendo Wii U", "Nintendo", "WIIU"),
    XBOX_ONE("Xbox One", "Microsoft", "XBONE"),
    PS4("Playstation 4", "Sony", "PS4"),
    SWITCH("Nintendo Switch", "Nintendo", "NSW");

    String name;
    String company;
    String abbreviation;

    Platform(String name, String company, String abbreviation) {
        this.name = name;
        this.company = company;
        this.abbreviation = abbreviation;
    }
}
