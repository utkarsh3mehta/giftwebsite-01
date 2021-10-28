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
let parallaxImages = document.querySelectorAll(".parallax-layer");

document.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  parallaxImages.forEach((el) => {
    let speed = el.dataset.speed;
    el.style.transform = `translateY(${scroll * speed}px)`;
  });
});

const songList = [
  {
    tile: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Ankur%20The%20Ghalat%20Family%20Dil%20Haare%20Sofar%20Bombay.jpg",
    name: "Dil Haare",
    artist: "Ankur Tiwari",
    url: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Ankur%20The%20Ghalat%20Family%20Dil%20Haare%20Sofar%20Bombay.mp3",
  },
  {
    tile: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/AURORA%20RUNAWAY.webp",
    name: "Runaway",
    artist: "Aurora",
    url: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/AURORA%20RUNAWAY.mp3",
  },
  {
    tile: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Deathcab%20official%20audio.jpg",
    name: "Deathcab",
    artist: "Ditty",
    url: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Deathcab%20official%20audio.mp3",
  },
  {
    tile: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Easy%20Wanderlings%20Dream%20To%20Keep%20Us%20Going.jpg",
    name: "Dream to keep us going",
    artist: "Easy Wanderlings",
    url: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Easy%20Wanderlings%20Dream%20To%20Keep%20Us%20Going.mp3",
  },
  {
    tile: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Ed%20Sheeran%20Shape%20of%20You%20Official%20Music%20Video.png",
    name: "Shape of you",
    artist: "Ed Sheeran",
    url: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Ed%20Sheeran%20Shape%20of%20You%20Official%20Music%20Video.mp3",
  },
  {
    tile: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Elina%20Wild%20Enough%20Live%20video.jpg",
    name: "Wild Enough",
    artist: "Elina",
    url: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Elina%20Wild%20Enough%20Live%20video.mp3",
  },
  {
    tile: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Goli%20Maar%20Bheje%20Mein%20HD%20VIDEO%20Satya%20Saurabh%20Shukla%20Manoj%20Bajpai%20Best%20Bollywood%20Hindi%20Song.jpg",
    name: "Goli maare bheje mein",
    artist: "Saurabh Shukla, Satya",
    url: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Goli%20Maar%20Bheje%20Mein%20HD%20VIDEO%20Satya%20Saurabh%20Shukla%20Manoj%20Bajpai%20Best%20Bollywood%20Hindi%20Song.mp3",
  },
  {
    tile: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Har%20Dua%20by%20Classic%20Kid%20Sid.jpg",
    name: "Har dua",
    artist: "Classis Kid Sid",
    url: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Har%20Dua%20by%20Classic%20Kid%20Sid.mp3",
  },
  {
    tile: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/I%20Got%20You%20Babe%20Walk%20off%20the%20Earth.jpg",
    name: "I got you babe",
    artist: "Walk off the earth",
    url: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/I%20Got%20You%20Babe%20Walk%20off%20the%20Earth.mp3",
  },
  {
    tile: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/We%20Found%20Love%20Lindsey%20Stirling%20VenTribe.jpg",
    name: "We found love",
    artist: "Lindsey Stirling",
    url: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/We%20Found%20Love%20Lindsey%20Stirling%20VenTribe.mp3",
  },
  {
    tile: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Waste.jpeg",
    name: "Waste",
    artist: "Oh wonder",
    url: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Waste.mp3",
  },
  {
    tile: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Tame%20Impala%20The%20Less%20I%20Know%20the%20Better%20Official%20Audio.png",
    name: "The less I know the better",
    artist: "Tame Impala",
    url: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Tame%20Impala%20The%20Less%20I%20Know%20the%20Better%20Official%20Audio.mp3",
  },
  {
    tile: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Taba%20Chake%20Walk%20With%20Me%20Official%20Video.jpg",
    name: "Walk with me",
    artist: "Taba Chake",
    url: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Taba%20Chake%20Walk%20With%20Me%20Official%20Video.mp3",
  },
  {
    tile: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Since%20Your%20Love%20ft%20Brandon%20Hampton%20Official%20Video.jpg",
    name: "Since your love",
    artist: "Brandon Hamptom",
    url: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Since%20Your%20Love%20ft%20Brandon%20Hampton%20Official%20Video.mp3",
  },
  {
    tile: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Regina%20Spektor%20Fidelity.jpg",
    name: "Fidelity",
    artist: "Regina Spektor",
    url: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Regina%20Spektor%20Fidelity.mp3",
  },
  {
    tile: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Passenger%20Let%20Her%20Go%20Official%20Video.jpg",
    name: "Let her go",
    artist: "Passenger",
    url: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Passenger%20Let%20Her%20Go%20Official%20Video.mp3",
  },
  {
    tile: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Oh%20Wonder%20How%20It%20Goes.png",
    name: "How It Goes",
    artist: "Oh wonder",
    url: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Oh%20Wonder%20How%20It%20Goes.mp3",
  },
  {
    tile: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Musafir%20x%20Wanderer%20An%20Original%20by%20Yugm%20x%20Sridev%20Ramesh.jpg",
    name: "Musafir x Wanderer",
    artist: "Yugm x Sridev Ramesh",
    url: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Musafir%20x%20Wanderer%20An%20Original%20by%20Yugm%20x%20Sridev%20Ramesh.mp3",
  },
  {
    tile: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Maroon%205%20Memories%20Official%20Video.png",
    name: "Memories",
    artist: "Maroon 5",
    url: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Maroon%205%20Memories%20Official%20Video.mp3",
  },
  {
    tile: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Jos%C3%A9%20Gonz%C3%A1lez%20Stay%20Alive%20Official%20Video.jpg",
    name: "Stay alive",
    artist: "Jose Gonzalez",
    url: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Jos%C3%A9%20Gonz%C3%A1lez%20Stay%20Alive%20Official%20Video.mp3",
  },
  {
    tile: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Jon%20Bellion%20All%20Time%20Low%20Official%20Music%20Video.mp3.png",
    name: "All time low",
    artist: "Jon Bellion",
    url: "https://assets-itkkids-001.fra1.cdn.digitaloceanspaces.com/prabjyot/Jon%20Bellion%20All%20Time%20Low%20Official%20Music%20Video.mp3.mp3",
  },
];

const updateSongTiles = () => {
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
  activeSongTile.scrollIntoView({ inline: "center", block: "center" });
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
