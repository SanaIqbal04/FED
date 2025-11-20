var eersteStreepjesButton = document.querySelector("header button");
eersteStreepjesButton.onclick = eersteStreepjesButtonKlik;
function eersteStreepjesButtonKlik() {
  if (eersteStreepjesButton.ariaExpanded == "false") {
    eersteStreepjesButton.ariaExpanded = "true"
  }
  else {
    eersteStreepjesButton.ariaExpanded = "false"
  }
}
