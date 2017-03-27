package mygamecase.domain;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.Date;

public class Game {
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private long id = -1;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String name = "";

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Platform platform = null;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Date release;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String developer;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String publisher;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String description;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Region region;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private long[] otherVersions;

    public Game() {}

    public Game(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Platform getPlatform() {
        return platform;
    }

    public void setPlatform(Platform platform) {
        this.platform = platform;
    }

    public Date getRelease() {
        return release;
    }

    public void setRelease(Date release) {
        this.release = release;
    }

    public String getDeveloper() {
        return developer;
    }

    public void setDeveloper(String developer) {
        this.developer = developer;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Region getRegion() {
        return region;
    }

    public void setRegion(Region region) {
        this.region = region;
    }

    public long[] getOtherVersions() {
        return otherVersions;
    }

    public void setOtherVersions(long[] otherVersions) {
        this.otherVersions = otherVersions;
    }
}
