// console.log("test");
// const burger = document.querySelector(".header__burger");
// const navBar = document.querySelector(".nav-bar");
// const headerMenue = document.querySelectorAll(".header__link");
// const dropdownBtn = document.querySelector(".dropdown-btn");
// const dropdownList = document.querySelector(".dropdown__list");
// // const dropdownInput = document.querySelector(".dropdown_input");

// const allLang = ["en", "ru", "ua"];
// // location.href = window.location.pathname + "#en";

// dropdownBtn.addEventListener("click", (event) => {
//   event.stopPropagation();
//   dropdownList.classList.toggle("show");
// });
const langArr = {
    menu: {
      en: "Main",
      ru: "Главная",
      ua: "Головна",
    },
    menu2: {
        en: "About",
        ru: "О нас",
        ua: "Про нас",
    },
    menu3: {
        en: "Principles",
        ru: "Принципы",
        ua: "Принципи",
    },
    menu4: {
        en: "Services",
        ru: "Услуги",
        ua: "Послуги",
    },
    menu5: {
        en: "Why",
        ru: "Почему мы",
        ua: "Чому ми",
    },
    menu6: {
        en: "Contacts",
        ru: "Контакты",
        ua: "Контакти",
    },
    menu7: {
        en: "Leave application",
        ru: "Оставить заявку",
        ua: "Залишити замовлення",
    },
    menu8: {
        en: "Information",
        ru: "Информация",
        ua: "Інформація",
    },
    sliderTitle1: {
        en: "LEGAL PROTECTION OF YOUR RIGHTS AND INTERESTS",
        ru: "ЮРИДИЧЕСКАЯ ЗАЩИТА ВАШИХ ПРАВ И ИНТЕРЕСОВ",
        ua: "ЮРИДИЧНИЙ ЗАХИСТ ВАШИХ ПРАВ ТА ІНТЕРЕСІВ",
    },
    sliderTitle2: {
        en: "ANALYSIS OF YOUR SITUATION WITHIN 24 HOURS",
        ru: "АНАЛИЗ ВАШЕЙ СИТУАЦИИ В ТЕЧЕНИИ 24 ЧАСОВ",
        ua: "АНАЛІЗ ВАШОЇ СИТУАЦІЇ ПРОТЯГОМ 24 ГОДИН",
    },
    sliderTitle3: {
        en: "Transparent and honest terms of cooperation",
        ru: "Прозрачные и честные условия сотрудничества",
        ua: "Прозорі і чесні умови співпраці",
    },
    sliderBtn1: {
        en: "Submit your application",
        ru: "Оставить заявку",
        ua: "Залишити заявку",
    },
    sliderBtn2: {
      en: "Submit your application",
      ru: "Оставить заявку",
      ua: "Залишити заявку",
  },
    sliderBtn3: {
      en: "Submit your application",
      ru: "Оставить заявку",
      ua: "Залишити заявку",
    },
    topBtn: {
        en: "Free consultation",
        ru: "Бесплатная консультация",
        ua: "Безкоштовна консультація", 
    }

  };
  ;
  console.log("test");
  const burger = document.querySelector(".header__burger");
  const navBar = document.querySelector(".nav-bar");
  const headerMenue = document.querySelectorAll(".header__link");
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdownList = document.querySelector(".dropdown__list");
  // const dropdownInput = document.querySelector(".dropdown_input");
  
  const allLang = ["ru", "ua", "en"];
  // location.href = window.location.pathname + "#en";
  
  dropdownBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdownList.classList.toggle("show");
  });
  
  const changeURLLanguage = (e) => {
    e.stopPropagation();
    let lang = e.target.dataset.value;
  
    location.href = window.location.pathname + "#" + lang;
  
    dropdownList.classList.toggle("show");
    console.log(event.target);
  
    changeLanguage();
  };
  
  dropdownList.addEventListener("click", changeURLLanguage);
  document.addEventListener("click", (event) => {
    if (dropdownList.classList.contains("show")) {
      dropdownList.classList.remove("show");
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Tab" || event.key === "Escape") {
      dropdownList.classList.remove("show");
    }
  });
  

  function changeLanguage() {
    let hash = window.location.hash;
    console.log("hash-1 ", hash);
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
      location.href = window.location.pathname + "#ru";
      location.reload();
      console.log("Error");
    }
    console.log(langArr["menu"][hash]);
  
    dropdownBtn.textContent = hash.toUpperCase();
    for (let key in langArr) {
      let element = document.querySelector(".lng-" + key);
      if (element && langArr[key][hash]) {
        element.textContent = langArr[key][hash];
      }
    }
  }
  changeLanguage();
  ;
  console.log('Hello');;