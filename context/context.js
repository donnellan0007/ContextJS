// custom javascript context menu

// let context = document.getElementById("context-menu");
let context = document.getElementsByTagName("context")[0];
let test_div = document.getElementsByClassName("test-item");

for (var i = 0; i < test_div.length; i++) {
  test_div[i].addEventListener("contextmenu", (e) => {
    e.preventDefault();
    context.style.display = "block";
    context.style.top = `${e.pageY}px`;
    context.style.left = `${e.pageX}px`;
  });
}

window.addEventListener("mouseup", (e) => {
  if (e.button === 0) {
    if (e.target.tagName == "CONTEXT") {
      context.style.display = "block";
    } else {
      context.style.display = "none";
    }
  }
});