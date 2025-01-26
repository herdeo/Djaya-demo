const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("ul-list1");
const menuList2 = document.getElementById("ul-list2");
const filterButton = document.querySelectorAll(".menuSelection button");
const filterableCards = document.querySelectorAll(".menu-list .item_menu");

// mendefinisikan fungsi filter item
const filterCards = (e) => {
  document.querySelector(".activemenu").classList.remove("activemenu");
  e.target.classList.add("activemenu");

  // "Melakukan iterasi pada setiap item yang dapat difilter."
  let filterName = e.target.getAttribute("data-name");
  filterableCards.forEach((card) => {
    card.classList.add("hide");
    if (card.dataset.name === filterName || filterName === "all") {
      card.classList.remove("hide");
    }
  });
};
// Tambahkan event listener klik ke setiap tombol filter.
filterButton.forEach((button) => button.addEventListener("click", filterCards));

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
  menuList2.classList.toggle("hidden");
});

const swiper = new Swiper(".sliderSwiper", {
  // Optional parameters

  loop: false,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
