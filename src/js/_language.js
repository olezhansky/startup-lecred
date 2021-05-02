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
        en: "Consultation",
        ru: "Консультация",
        ua: "Консультація",
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
    },
    aboutTittle: {
        en: "About",
        ru: "О компании",
        ua: "Про компанію", 
    },
    aboutText: {
      en: "About",
      ru: "О компании",
      ua: "Про компанію", 
  },
    aboutP1: {
      en: "LECRED Law Firm is a group of lawyers engaged in legal support and protection of the rights and interests of individuals and legal entities.According to statistics in Ukraine today, every fifth person has legal issues or difficulties, namely:",
      ru: "ЮК 'LECRED' – група юристов, которая занимается юридическим сопровождением и защитой прав и интересов физических и юридических лиц. По статистике в Украине сегодня каждое пятое лицо имеет юридические вопросы или сложности, а именно:",
      ua: "ЮК 'LECRED' - група юристів, яка займається юридичним супроводом і захистом прав і інтересів фізичних і юридичних осіб. За статистикою в Україні сьогодні кожна п'ята особа має юридичні питання або складності, а саме:", 
    },
    aboutP2: {
      en: "-is a 'hostage' of the enslaving terms of contracts, according to which the amount of accrued interest and fines is dozens of times greater than the actually borrowed money;",
      ru: "-является «заложником» кабальных условий договоров, по которым сумма насчитанных процентов и штрафов в десятки раз больше фактически занятых денег;",
      ua: "-є «заручником» кабальних умов договорів, за якими сума нарахованих відсотків і штрафів в десятки разів більше фактично зайнятих грошей;", 
    },
    aboutP3: {
      en: "-has lost hope to return the borrowed money;",
      ru: "-потерял надежду вернуть одолженные деньги;",
      ua: "-втратив надію повернути позичені гроші;;", 
    },
    aboutP4: {
      en: "-does not know how to legally deal with the inspection authorities or appeal against their actions;",
      ru: "-не знает каким образом законно разобраться с проверяющими органами или обжаловать их действия;",
      ua: "-не знає яким чином законно розібратися з перевіряючими органами або оскаржити їх дії;", 
    },
    aboutP5: {
      en: "-does not know how to legally deal with the inspection authorities or appeal against their actions;",
      ru: "-имеет открытые судебные производства;",
      ua: "-не знає яким чином законно розібратися з перевіряючими органами або оскаржити їх дії;", 
    },
    aboutP6: {
      en: "-other situations.",
      ru: "-другие ситуации.",
      ua: "-інші ситуації.", 
    },
    aboutP7: {
      en: "If the above situation happened to you, do not give up - there is a way out...",
      ru: "В случае если вышеописанная ситуация случилась с Вами, не стоит опускать руки – выход есть...",
      ua: "У разі якщо вищеописана ситуація трапилася з Вами, не варто опускати руки - вихід є...", 
    },
    principlesTitle: {
      en: "Basic principles of work",
      ru: "Основные принципы работы",
      ua: "Основні принципи роботи", 
    },
    principlesText1: {
      en: "The goal is to provide quality legal support to the Client.",
      ru: "Цель - обеспечение качествой юридической поддержки Клиента.",
      ua: "Мета - забезпечення якості юридичної підтримки Клієнта.", 
    },
    principlesText2: {
      en: "No guarantees until a complete study and analysis of your problem.",
      ru: "Никаких гарантий до момента полного изучения и анализа Вашей проблемы.",
      ua: "Ніяких гарантій до моменту повного вивчення та аналізу Вашої проблеми.", 
    },
    principlesText3: {
      en: "Free analysis and description of all risks, provides you with the opportunity to objectively assess the need for cooperation.",
      ru: "Бесплатный анализ и описание всех рисков, обеспечивает Вам возможность объективно оценить необходимость сотрудничества.",
      ua: "Безкоштовний аналіз і опис всіх ризиків, забезпечує Вам можливість об'єктивно оцінити необхідність співпраці.", 
    },
    servicesMainTitle: {
      en: "Scope of our services",
      ru: "Сфера наших услуг",
      ua: "Сфера наших послуг", 
    },
    servicesTitle1: {
      en: "Arbitrage practice",
      ru: "Судебная практика",
      ua: "Судова практика", 
    },
    servicesBtn1: {
      en: "More details",
      ru: "Подробней",
      ua: "Детальніше", 
    },
    servicesTitleItem1: {
      en: "Arbitrage practice",
      ru: "Судебная практика",
      ua: "Судова практика", 
    },
    servicesSubTitleItem1: {
      en: "Protection of your interests regardless of the stage of the trial",
      ru: "Защита Ваших интересов вне зависимости от стадии судебного процесса",
      ua: "Захист Ваших інтересів незалежно від стадії судового процесу", 
    },
    servicesText1Item1: {
      en: "providing advice on litigation risks when concluding transactions, analysis of the counterparty's litigation cases;",
      ru: "предоставление консультаций по вопросам судебных рисков при заключении сделок, анализ судебных дел контрагента;",
      ua: "надання консультацій з питань судових ризиків при укладанні угод, аналіз судових справ контрагента;", 
    },
    servicesText2Item1: {
      en: "pre-trial settlement of disputes;",
      ru: "досудебное урегулирование споров;",
      ua: "досудове врегулювання спорів;", 
    },
    servicesText3Item1: {
      en: "preparation of legal opinions on litigation prospects and strategy;",
      ru: "подготовка юридических заключений относительно перспектив судебного рассмотрения и стратегии",
      ua: "підготовка юридичних висновків щодо перспектив судового розгляду і стратегії;", 
    },
    servicesText4Item1: {
      en: "representation and protection of the Client's interests in courts of all instances at any stage of the judicial process (civil, economic and administrative cases);",
      ru: "представительство и защита интересов Клиента в судах всех инстанций на любой стадии судебного процесса (гражданские, хозяйственные и административные дела);",
      ua: "представництво і захист інтересів Клієнта в судах всіх інстанцій на будь-якій стадії судового процесу (цивільні, господарські та адміністративні справи);", 
    },
    servicesText5Item1: {
      en: "representation and protection of the interests of the Client at the stage of execution of court decisions.",
      ru: "представительство и защита интересов Клиента на стадии исполнения судебных решений.",
      ua: "представництво і захист інтересів Клієнта на стадії виконання судових рішень.", 
    },
    servicesBtnItem1: {
      en: "Leave a request",
      ru: "Оставить заявку",
      ua: "Залишити заявку", 
    },

    servicesTitle2: {
      en: "Corporate law",
      ru: "Корпоративное право",
      ua: "Корпоративне право", 
    },
    servicesBtn2: {
      en: "More details",
      ru: "Подробней",
      ua: "Детальніше", 
    },
    servicesTitleItem2: {
      en: "Corporate law",
      ru: "Корпоративное право",
      ua: "Корпоративне право",  
    },
    servicesSubTitleItem2: {
      en: "Creation, reorganization and liquidation of legal entities",
      ru: "Создание, реорганизация и ликвидация юридических лиц",
      ua: "Створення, реорганізація та ліквідація юридичних осіб", 
    },
    servicesText1Item2: {
      en: "company registration in Ukraine and business structuring;",
      ru: "регистрация компании в Украине и структурирование бизнеса;",
      ua: "реєстрація компанії в Україні і структурування бізнесу;", 
    },
    servicesText2Item2: {
      en: "development and analysis of corporate agreements;",
      ru: "разработка и анализ корпоративных договоров;",
      ua: "розробка та аналіз корпоративних договорів;", 
    },
    servicesText3Item2: {
      en: "development of charters and other internal documents of companies;",
      ru: "разработка уставов и других внутренних документов компаний;",
      ua: "розробка статутів та інших внутрішніх документів компаній;", 
    },
    servicesText4Item2: {
      en: "advising on corporate governance of the company, opportunities for its improvement;",
      ru: "консультирование по вопросам корпоративного управления компанией, возможности его усовершенствования;",
      ua: "консультування з питань корпоративного управління компанією, можливості його удосконалення;", 
    },
    servicesText5Item2: {
      en: "advising on corporate governance of the company, opportunities for its improvement;",
      ru: "правовое сопровождение интересов клиентов в корпоративных спорах",
      ua: "консультування з питань корпоративного управління компанією, можливості його удосконалення;", 
    },
    servicesText6Item2: {
      en: "legal registration of amendments to constituent documents or other changes related to the activities of legal entities, in particular, in connection with a change in the size of the authorized capital, a change in the composition of participants, a change in governing bodies, reorganization of legal entities (transformation, division, separation, affiliation, merger) and dr.",
      ru: "юридическое оформление изменений в учредительные документы или иных изменений, связанных с деятельностью юридических лиц, в частности, в связи с изменением размера уставного капитала, изменением состава участников, изменением органов управления, реорганизацией юридических лиц (преобразование, разделение, выделение, присоединение, слияние) и др.",
      ua: "юридичне оформлення змін до установчих документів чи інших змін, пов'язаних з діяльністю юридичних осіб, зокрема, у зв'язку зі зміною розміру статутного капіталу, зміною складу учасників, зміною органів управління, реорганізацією юридичних осіб (перетворення, поділ, виділення, приєднання, злиття) і ін.", 
    },
    servicesBtnItem2: {
      en: "Leave a request",
      ru: "Оставить заявку",
      ua: "Залишити заявку", 
    },

    servicesTitle3: {
      en: "Land law",
      ru: "Земельное право",
      ua: "Земельне право", 
    },
    servicesBtn3: {
      en: "More details",
      ru: "Подробней",
      ua: "Детальніше", 
    },
    servicesTitleItem3: {
      en: "Land law",
      ru: "Земельное право",
      ua: "Земельне право",  
    },
    servicesSubTitleItem3: {
      en: "Representing and advising the Client on the implementation of land rights",
      ru: "Представительство и консультирование Клиента по реализации прав на землю",
      ua: "Представництво та консультування Клієнта по реалізації прав на землю", 
    },
    servicesText1Item3: {
      en: "support of contracts for the purchase / lease / donation of a land plot;",
      ru: "сопровождение договоров покупки/аренды/дарения земельного участка;",
      ua: "супровід договорів купівлі / оренди / дарування земельної ділянки;", 
    },
    servicesText2Item3: {
      en: "legal registration of the right to a land plot;",
      ru: "юридическое оформление права на земельный участок;",
      ua: "юридичне оформлення права на земельну ділянку;", 
    },
    servicesText3Item3: {
      en: "assistance in agreeing on any changes in the rights to the object;",
      ru: "помощь при согласовании каких-либо изменений в правах на объект;",
      ua: "допомога при узгодженні будь-яких змін в правах на об'єкт;", 
    },
    servicesText4Item3: {
      en: "providing individual advice in the field of land law;",
      ru: "предоставления индивидуальных консультаций в сфере земельного права;",
      ua: "надання індивідуальних консультацій в сфері земельного права;", 
    },
    servicesText5Item3: {
      en: "legal support for state registration of a land plot;",
      ru: "правовое сопровождение государственной регистрации земельного участка;",
      ua: "правовий супровід державної реєстрації земельної ділянки;", 
    },
    servicesText6Item3: {
      en: "registration of rights to a land plot with the receipt of the relevant documents of title and their state registration;",
      ru: "оформление прав на земельный участок с получением соответствующих правоустанавливающих документов и их государственная регистрация;",
      ua: "оформлення прав на земельну ділянку з отриманням відповідних правовстановлюючих документів та їх державна реєстрація;", 
    },
    servicesText7Item3: {
      en: "other issues that arise when managing a land plot.",
      ru: "другие вопросы, которые возникают при управлении земельным участком.",
      ua: "інші питання, які виникають при управлінні земельною ділянкою.", 
    },
    servicesBtnItem3: {
      en: "Leave a request",
      ru: "Оставить заявку",
      ua: "Залишити заявку", 
    },

    servicesTitle4: {
      en: "Labor law",
      ru: "Трудовое право",
      ua: "Трудове право", 
    },
    servicesBtn4: {
      en: "More details",
      ru: "Подробней",
      ua: "Детальніше", 
    },
    servicesTitleItem4: {
      en: "Labor law",
      ru: "Трудовое право",
      ua: "Трудове право",  
    },
    servicesSubTitleItem4: {
      en: "Advising on the protection of rights related to labor legislation",
      ru: "Консультирование по вопросам защиты прав, связанных с трудовым законодательством",
      ua: "Консультування з питань захисту прав, пов'язаних з трудовим законодавством", 
    },
    servicesText1Item4: {
      en: "providing advice on the forms and types of labor agreements, the procedure for concluding and terminating labor agreements;",
      ru: "предоставление консультаций в отношении форм и видов трудовых соглашений, порядка заключения и расторжения трудовых соглашений;",
      ua: "надання консультацій щодо форм і видів трудових угод, порядку укладення та розірвання трудових угод;", 
    },
    servicesText2Item4: {
      en: "development of draft collective agreements;",
      ru: "разработка проектов коллективных договоров;",
      ua: "розробка проектів колективних договорів;", 
    },
    servicesText3Item4: {
      en: "preparation of draft labor contracts and agreements;",
      ru: "подготовка проектов трудовых контрактов и договоров;",
      ua: "підготовка проектів трудових контрактів і договорів;", 
    },
    servicesText4Item4: {
      en: "development of draft local acts of legal entities (for example, internal labor regulations, staff regulations, regulations on wages, job descriptions, etc.);",
      ru: "разработка проектов локальных актов юридических лиц (например, правила внутреннего трудового распорядка, положения о персонале, положение об оплате труда, должностные инструкции и др.);",
      ua: "розробка проектів локальних актів юридичних осіб (наприклад, правила внутрішнього трудового розпорядку, положення про персонал, положення про оплату праці, посадові інструкції та ін.);", 
    },
    servicesText5Item4: {
      en: "drafting orders, documents regulating the procedure for incentives and bringing to responsibility of employees;",
      ru: "составление проектов приказов, документов, регламентирующих порядок поощрений и привлечения к ответственности работников;",
      ua: "складання проектів наказів, документів, що регламентують порядок заохочень та притягнення до відповідальності працівників;", 
    },
    servicesText6Item4: {
      en: "providing advice on dismissal and (or) staff reduction;",
      ru: "предоставление консультаций по вопросам увольнения и (или) сокращения персонала;",
      ua: "надання консультацій з питань звільнення та (або) скорочення персоналу;", 
    },
    servicesText7Item4: {
      en: "development of the most effective models (mechanisms) to protect employers from possible risks associated with the disclosure of confidential information by employees;",
      ru: "разработка наиболее эффективных моделей (механизмов) защиты работодателей от возможных рисков, связанных с разглашением сотрудниками конфиденциальной информации;",
      ua: "розробка найбільш ефективних моделей (механізмів) захисту роботодавців від можливих ризиків, пов'язаних з розголошенням співробітниками конфіденційної інформації;", 
    },
    servicesText8Item4: {
      en: "representing the interests of the employer during inspections carried out by supervisory authorities on the use of hired labor;",
      ru: "представление интересов работодателя при проверках, осуществляющихся контролирующими органами, по вопросам использования наемного труда;",
      ua: "представлення інтересів роботодавця при перевірках, що здійснюються контролюючими органами, з питань використання найманої праці;", 
    },
    servicesText9Item4: {
      en: "representation of the interests of the parties in the resolution of labor disputes in court.",
      ru: "представительство интересов сторон при разрешении трудовых споров в суде.",
      ua: "представництво інтересів сторін при вирішенні трудових спорів в суді.", 
    },
    servicesBtnItem4: {
      en: "Leave a request",
      ru: "Оставить заявку",
      ua: "Залишити заявку", 
    },
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