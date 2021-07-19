window.addEventListener("load", () => {
  document.getElementById("load-text").style.display = "none";

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

  const dropDowns = document.querySelectorAll(".dropdown");
  const dropItems = document.querySelectorAll(".drop-items");
  const Btns = document.querySelectorAll(".click-btn");

  // dropDowns.forEach((element) => {
  //   const drop = element.querySelector(".drop-items");
  //   const clickBtn = element.querySelector(".click-btn");
  //   console.log(clickBtn);

  //   clickBtn.addEventListener("click", () => {
  //     clickBtn.classList.toggle("rotate-btn");
  //     drop.classList.toggle("show-drop");
  //   });
  // });

  Btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const btnDiv = e.currentTarget.parentElement.parentElement;
      const currentBtn = e.currentTarget.parentElement;
      const btnSibling = currentBtn.nextElementSibling;

      dropItems.forEach((item) => {
        if (item.parentElement == btnDiv) {
          item.classList.toggle("show-drop");
          if (btnSibling.classList.contains("show-drop")) {
            btn.classList.toggle("rotate-btn");
          } else {
            setTimeout(function () {
              btn.classList.remove("rotate-btn");
            }, 100);
          }
        } else {
          item.classList.remove("show-drop");
        }
      });
    });
  });

  // end of dropdowns
});
