function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
      console.log("tesete");
    } else {
      x.style.display = "flex";
      console.log("tetetets");
    }
}