// gallery footer
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("gallery-item")) {
      // const src = e.target.getAttribute("src");
      // document.querySelector(".modal-zoom").src = src;
      const myModal = new bootstrap.Modal(
        document.getElementById("exampleModal")
      );
      myModal.show();
    }
  });