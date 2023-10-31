function myFunction() {
    var x = document.getElementsByClassName("hamber-nav")[0];
    if (x.style.display === "inline-block") {
      x.style.display = "none";
    } else {
      x.style.display = "inline-block";
    }
  }