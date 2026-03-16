(function () {
  const popup = document.querySelector('.popup');
  const closePopup = document.querySelector('.form__button--close');
  const LoginBtns = document.querySelectorAll('.header__login');
  const emailInput = document.getElementById('user-email');
  const passwordInput = document.getElementById('user-password');
  const loginBtn = document.querySelector('.form__button--login');
  const escBtn = 'Escape';
  let htmlAllCollection = document.all;
  let tabIndexRestoreFunctions;

  function isDescendant(ancestor, descendant) {
    do {
      if (descendant === ancestor) {
        return true;
      }
    } while ((descendant = descendant.parentNode));
    return false;
  }

  popup.classList.remove('popup--no-js');

  if (popup) {
    const showPopup = () => {
      emailInput.focus();
      popup.classList.remove('visually-hidden');
      document.body.style.overflowY = 'hidden';
    };

    const hidePopup = () => {
      popup.classList.add('visually-hidden');
      document.body.style.overflowY = 'visible';
      tabIndexRestoreFunctions.forEach((f) => f());
      tabIndexRestoreFunctions = null;
    };
    loginBtn.addEventListener('click', () => {
      const popupUserInfo = {
        email: emailInput.value,
        password: passwordInput.value,
      };
      localStorage.setItem('popup-user', JSON.stringify(popupUserInfo));
    });

    LoginBtns.forEach((button) => {
      button.href = '#';
      button.addEventListener('click', () => {
        showPopup();
        tabIndexRestoreFunctions = Array.prototype.filter
          .call(
              htmlAllCollection,
              (descendant) =>
                descendant.tabIndex > -1 && !isDescendant(popup, descendant)
          )
          .map((descendant) => {
            var oldTabIndex = descendant.tabIndex;
            descendant.tabIndex = -1;
            return () => (descendant.tabIndex = oldTabIndex);
          });
      });
    });

    closePopup.addEventListener('click', (event) => {
      event.preventDefault();
      hidePopup();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === escBtn) {
        hidePopup();
      }
    });

    document.addEventListener('click', (event) => {
      if (event.target === popup) {
        hidePopup();
      }
    });
  }
})();

(function () {
  const header = document.querySelector('.header');
  const toggleHeaderBtn = document.querySelector('.header__button--toggle');
  const headerLinks = document.querySelectorAll('.header a');

  header.classList.remove('header--no-js');
  toggleHeaderBtn.removeAttribute('disabled');

  toggleHeaderBtn.addEventListener('click', () => {
    header.classList.toggle('header--opened');
    document.body.classList.toggle('overflow-hidden');
  });

  headerLinks.forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('header--opened');
      document.body.classList.remove('overflow-hidden');
    });
  });
})();

(function () {
  const faqSection = document.querySelector('.faq');
  const faqList = document.querySelector('.faq__list');
  const faqBtns = document.querySelectorAll('.faq__button');

  if (faqSection) {
    faqList.classList.remove('faq__list--no-js');

    faqBtns.forEach((button) => {
      button.addEventListener('click', (evt) => {
        for (let i = 0; i < faqBtns.length; i++) {
          if (faqBtns[i] === evt.target) {
            faqBtns[i].parentElement.classList.toggle('faq__item--active');
          }
        }
      });
    });
  }
})();

(function () {
  const filterForm = document.querySelector('.filter__form');
  const filterBtns = document.querySelectorAll('.filter__button--options');
  const catalog = document.querySelector('.catalog');
  const catalogFilter = document.querySelector('.filter');
  const filterToggleBtn = document.querySelector(
      '.catalog__button--toggle-filter'
  );
  const closeFilterBtn = document.querySelector('.filter__button-close');
  const filterLables = document.querySelectorAll('.filter__option label');
  const escBtn = 'Escape';
  const mediaQuery = 768;

  let tabIndexRestoreFunctions;
  let htmlAllCollection = document.all;

  function isDescendant(ancestor, descendant) {
    do {
      if (descendant === ancestor) {
        return true;
      }
    } while ((descendant = descendant.parentNode));
    return false;
  }

  if (window.innerWidth <= 1023) {
    filterLables.forEach((label) => {
      label.tabIndex = -1;
    });
  } else if (window.innerWidth > 1023) {
    filterLables.forEach((label) => {
      label.tabIndex = 0;
    });
  }

  const handleWindowChange = () => {
    if (window.innerWidth >= mediaQuery) {
      document.body.classList.remove('overflow-hidden');
    }
  };

  window.addEventListener(`resize`, () => handleWindowChange());

  if (catalog) {
    catalog.classList.remove('catalog--no-js');

    const hideFilter = () => {
      catalogFilter.classList.remove('filter--show');
      document.body.classList.remove('overflow-hidden');
      tabIndexRestoreFunctions.forEach((f) => f());
      tabIndexRestoreFunctions = null;
    };

    const showFilter = () => {
      catalogFilter.classList.add('filter--show');
      document.body.classList.add('overflow-hidden');
    };

    filterToggleBtn.addEventListener('click', () => {
      showFilter();
      tabIndexRestoreFunctions = Array.prototype.filter
        .call(
            htmlAllCollection,
            (descendant) =>
              descendant.tabIndex > -1 && !isDescendant(filterForm, descendant)
        )
        .map((descendant) => {
          var oldTabIndex = descendant.tabIndex;
          descendant.tabIndex = -1;
          return () => (descendant.tabIndex = oldTabIndex);
        });
    });

    closeFilterBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      hideFilter();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === escBtn) {
        hideFilter();
      }
    });

    document.addEventListener('click', (event) => {
      if (event.target === catalogFilter) {
        hideFilter();
      }
    });
  }

  if (filterForm) {
    filterBtns.forEach((button) => {
      button.addEventListener('click', (evt) => {
        evt.preventDefault();
        for (let i = 0; i < filterBtns.length; i++) {
          if (filterBtns[i] === evt.target) {
            filterBtns[i].parentElement.classList.toggle(
                'filter__control--active'
            );
          }
        }
      });
    });
  }
})();

(function () {
  const slider = document.querySelector('.slider');

  if (slider) {
    // eslint-disable-next-line
    let swiper = new Swiper('.slider', {
      speed: 700,
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      uniqueNavElements: true,
      spaceBetween: 30,

      breakpoints: {
        0: {
          grabCursor: true,
          slidesPerView: 2,
          slidesPerGroup: 2,
          simulateTouch: true,
          pagination: {
            type: 'fraction',
            renderFraction: function (currentClass, totalClass, index, total) {
              return `<span class='swiper-pagination-bullet ${currentClass}'>${index}
                  </span> <span> of </span> <span class='swiper-pagination-bullet ${totalClass}'> ${total}</span>`;
            },
          },
        },

        768: {
          grabCursor: true,
          slidesPerView: 2,
          slidesPerGroup: 2,
          simulateTouch: true,
          pagination: {
            type: 'bullets',
            renderBullet: function (index) {
              return `<span class='dot swiper-pagination-bullet'>${
                index + 1
              }</span>`;
            },
          },
        },

        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          simulateTouch: false,
          allowTouchMove: false,
          pagination: {
            type: 'bullets',
            renderBullet: function (index) {
              return `<span class='dot swiper-pagination-bullet'>${
                index + 1
              }</span>`;
            },
          },
        },
      },
    });
  }
})();

(function () {
  const subscriptionForm = document.querySelector('.subscription__form');
  const subscriptionBtn = document.querySelector('.subscription__button');
  const footerEmailInput = document.getElementById('email');
  const errorMsg = document.getElementById('error-message');

  subscriptionForm.addEventListener('submit', (event) => {
    event.preventDefault();
  });

  subscriptionBtn.addEventListener('click', () => {
    const regExp =
      /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (footerEmailInput.value !== regExp) {
      errorMsg.style.display = 'block';
      setTimeout(function () {
        errorMsg.style.display = 'none';
      }, 1000);
    } else if (footerEmailInput.value === regExp) {
      errorMsg.style.display = 'none';
    }
  });
})();
