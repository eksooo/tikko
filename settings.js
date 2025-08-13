const settings = document.querySelector(".settings-button");

settings.addEventListener("mouseenter", function () {
  const audio = document.getElementById("hoverAudio");
  audio.play();
});

settings.addEventListener("click", function () {
  const audio = document.getElementById("clickAudio");
  audio.play();
});
