var mainText = document.getElementById("mainText");
var num = 0;
mainText.addEventListener("click", counter);

function counter () {
  num++;
  console.log("ping")
  if (num == 30) {
    mainText.innerHTML = "<p>You Discovered<br>An Easter Egg</p>"
    mainText.removeEventListener("click", counter);
  }
}
