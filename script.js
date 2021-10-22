let songListElement = document.getElementById("song-list");
let songTile = songListElement.querySelectorAll("img.song-tile");
let songsLength = songTile.length;
let activeSongTile = songListElement.querySelector("img.song-tile.active");
let songLeftArrow = document.getElementById("songs-left");
let songRightArrow = document.getElementById("songs-right");
let songName = document.getElementById("song-name");
let songArtist = document.getElementById("song-artist");
let songUrl = document.getElementById("song-url");
let playpause = document.getElementById("play-pause");
let playpauseIcon = playpause.querySelector("i");

const songList = [
  {
    tile: "",
    name: "Song name 1",
    artist: "Utkarsh, Pubby",
    url: "./ranjish hi sahi.mp3",
  },
  {
    tile: "",
    name: "Song name 2",
    artist: "Utkarsh",
    url: "./Goodbye - Dark Intro Theme [A Netflix Original Series].mp3",
  },
  {
    tile: "",
    name: "Song name 1",
    artist: "Utkarsh, Pubby",
    url: "./ranjish hi sahi.mp3",
  },
];

const updateSongTiles = () => {
  // console.log("updating song tiles");
  // console.log(
  //   "song list element",
  //   songListElement,
  //   "song tile",
  //   songTile,
  //   "song length",
  //   songsLength,
  //   "active song tile",
  //   activeSongTile,
  //   "left arrow",
  //   songLeftArrow,
  //   "right arrow",
  //   songRightArrow,
  //   "song name",
  //   songName,
  //   "song artist",
  //   songArtist,
  //   "song url",
  //   songUrl,
  //   "playpause",
  //   playpause
  // );
  songList.forEach((s, index) => {
    let image = document.createElement("img");
    image.src = s.tile;
    image.classList.add("song-tile");
    image.setAttribute("data-song-id", index);
    if (index === 0) {
      image.classList.add("active");
    }
    songListElement.append(image);
  });
  songTile = songListElement.querySelectorAll("img.song-tile");
  songsLength = songTile.length;
  activeSongTile = songListElement.querySelector("img.song-tile.active");
  updateSongsScroller();
  checkActiveSongIndex();
};

const updateSongsScroller = () => {
  // console.log("updating song scroller");
  activeSongTile = songListElement.querySelector("img.song-tile.active");
  activeSongTile.scrollIntoView({ inline: "center" });
};

const checkActiveSongIndex = () => {
  // console.log("checking active song index");
  let activeSongTileIndex = 0;
  songTile.forEach((el, index) => {
    if (el.classList.contains("active")) {
      activeSongTileIndex = index;
    }
  });
  if (activeSongTileIndex <= 0) {
    songLeftArrow.classList.remove("d-flex");
    songLeftArrow.classList.add("d-none");
  } else if (activeSongTileIndex + 1 === songsLength) {
    songRightArrow.classList.remove("d-flex");
    songRightArrow.classList.add("d-none");
  } else {
    if (songLeftArrow.classList.contains("d-none")) {
      songLeftArrow.classList.add("d-flex");
      songLeftArrow.classList.remove("d-none");
    }
    if (songRightArrow.classList.contains("d-none")) {
      songRightArrow.classList.add("d-flex");
      songRightArrow.classList.remove("d-none");
    }
  }
  songName.textContent = songList[activeSongTileIndex]["name"];
  songArtist.textContent = songList[activeSongTileIndex]["artist"];
  songUrl.src = songList[activeSongTileIndex]["url"];
  songUrl.setAttribute("autoplay", "true");
  return activeSongTileIndex;
};

songLeftArrow.addEventListener("click", () => {
  // console.log("left arrow clicked");
  if (checkActiveSongIndex() > 0) {
    const prevEle = activeSongTile.previousElementSibling;
    activeSongTile.classList.remove("active");
    prevEle.classList.add("active");
    updateSongsScroller();
    checkActiveSongIndex();
  }
});

songRightArrow.addEventListener("click", () => {
  // console.log("right arrow clicked");
  if (checkActiveSongIndex() < songsLength) {
    const nextEle = activeSongTile.nextElementSibling;
    activeSongTile.classList.remove("active");
    nextEle.classList.add("active");
    updateSongsScroller();
    checkActiveSongIndex();
  }
});

playpause.addEventListener("click", () => {
  if (songUrl.paused) {
    songUrl.play();
  } else {
    songUrl.pause();
    songUrl.removeAttribute("autoplay");
  }
});

songUrl.addEventListener("play", () => {
  playpauseIcon.classList.remove("fa-play");
  playpauseIcon.classList.add("fa-pause");
});

songUrl.addEventListener("pause", () => {
  playpauseIcon.classList.add("fa-play");
  playpauseIcon.classList.remove("fa-pause");
});

updateSongTiles();
