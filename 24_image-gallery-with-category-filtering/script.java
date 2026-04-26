function filterImages(category) {
  let images = document.getElementsByClassName("image");

  for (let i = 0; i < images.length; i++) {
    if (category === "all") {
      images[i].style.display = "block";
    } 
    else if (images[i].classList.contains(category)) {
      images[i].style.display = "block";
    } 
    else {
      images[i].style.display = "none";
    }
  }
}
