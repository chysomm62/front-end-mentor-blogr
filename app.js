// menu toggle
const menu = document.getElementById("menu");
const toggler = document.querySelector(".toggler");

toggler.addEventListener("click", () => {
  if (toggler.checked) {
    menu.classList.toggle("menu");
    console.log(true);
  } else {
    console.log(false);
    menu.classList.remove("menu");
  }
});
// end of menu toggle

// dropdowns

const dropItems = document.querySelectorAll(".drop-items");
const Btns = document.querySelectorAll(".click-btn");

Btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btnDiv = e.currentTarget.parentElement.parentElement;

    dropItems.forEach((item) => {
      if (item.parentElement == btnDiv) {
        item.classList.toggle("show-drop");
      } else {
        item.classList.remove("show-drop");
      }
    });
  });
});

// end of dropdowns
