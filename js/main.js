$(document).ready(function () {
  const hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
  });

  const reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  let menuButton = $(".header-top__menu-button");
  menuButton.on("click", function () {
    $(".header-nav").toggleClass("header-nav--visible");
  });

  let modalButton = $("[data-toggle=mobile]");
  let closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    $(".modal__overlay").addClass("modal__overlay--visible");
    $(".modal__dialogue").addClass("modal__dialogue--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    $(".modal__overlay").removeClass("modal__overlay--visible");
    $(".modal__dialogue").removeClass("modal__dialogue--visible");
  }
});
