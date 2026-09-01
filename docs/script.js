document.querySelectorAll(".optional-image[data-src]").forEach((image) => {
  const slot = image.closest(".media-slot");

  image.addEventListener("load", () => {
    image.hidden = false;
    slot?.classList.add("has-image");
  });

  image.addEventListener("error", () => {
    image.hidden = true;
    slot?.classList.remove("has-image");
  });

  image.src = image.dataset.src;
});
