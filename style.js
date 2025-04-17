document.addEventListener("DOMContentLoaded", function () {
  function showAlert(type, message) {
    let alertBoxx = document.getElementById("alertBoxx");
    let alertMessagee = document.getElementById("alertMessagee");

    let closeBtnn = document.querySelector(".closebtnn");
    alertBoxx.className = `alert1 ${type} show`;
    alertMessagee.textContent = message;

    setTimeout(() => {
      alertBoxx.style.opacity = "1";
      setTimeout(() => {
        alertBoxx.style.display = "block";
      }, 500);
    }, 4000);

    if (closeBtnn) {
      closeBtnn.onclick = function () {
        alertBoxx.style.opacity = "0";
        setTimeout(() => {
          alertBoxx.style.display = "none";
        }, 500);
      };
    }
  }

  let closeBtnn = document.querySelector(".closebtnn");
  if (closeBtnn) {
    closeBtnn.onclick = function () {
      let alertBoxx = document.getElementById("alertBoxx");
      if (alertBoxx) alertBoxx.classList.remove("show");
    };
  }

  let submit = document.getElementById("submit");
  let theme = document.getElementById("theme");
  let myName = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("tel");
  let message = document.getElementById("message");
  let form = document.getElementById("myForm1");

  // --- ВОССТАНОВЛЕНИЕ ---
  if (theme && localStorage.getItem("theme")) theme.value = localStorage.getItem("theme");
  if (myName && localStorage.getItem("name")) myName.value = localStorage.getItem("name");
  if (email && localStorage.getItem("email")) email.value = localStorage.getItem("email");
  if (phone && localStorage.getItem("phone")) phone.value = localStorage.getItem("phone");
  if (message && localStorage.getItem("message")) message.value = localStorage.getItem("message");

  // --- СОХРАНЕНИЕ ---
  if (theme) theme.addEventListener("input", () => localStorage.setItem("theme", theme.value));
  if (myName) myName.addEventListener("input", () => localStorage.setItem("name", myName.value));
  if (email) email.addEventListener("input", () => localStorage.setItem("email", email.value));
  if (phone) phone.addEventListener("input", () => localStorage.setItem("phone", phone.value));
  if (message) message.addEventListener("input", () => localStorage.setItem("message", message.value));

  if (submit) {
    submit.onclick = () => {
      let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      let phoneRegex = /^\+7\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/;
      let messageRegex = /^[а-яА-ЯёЁa-zA-Z\s.,!?"'()-]+$/;
      let textWithoutNumbersRegex = /^[^0-9]+$/;

      if (!theme.value.trim()) {
        showAlert("error", "Пожалуйста, введите тему.");
        return;
      }
      if (!textWithoutNumbersRegex.test(theme.value.trim())) {
        showAlert("error", "Тема не должна содержать цифры.");
        return;
      }
      if (!myName.value.trim()) {
        showAlert("error", "Пожалуйста, введите имя.");
        return;
      }
      if (!textWithoutNumbersRegex.test(myName.value.trim())) {
        showAlert("error", "Имя не должно содержать цифры.");
        return;
      }
      if (!email.value.trim()) {
        showAlert("error", "Пожалуйста, введите email.");
        return;
      }
      if (!emailRegex.test(email.value.trim().toLowerCase())) {
        showAlert("error", "Введите корректный email.");
        return;
      }
      if (!phone.value.trim()) {
        showAlert("error", "Пожалуйста, введите номер телефона.");
        return;
      }
      if (!phoneRegex.test(phone.value.trim())) {
        showAlert("error", "Введите корректный номер телефона в формате +7 000 000 00 00.");
        return;
      }
      if (!message.value.trim()) {
        showAlert("error", "Пожалуйста, введите сообщение.");
        return;
      }
      if (!messageRegex.test(message.value.trim())) {
        showAlert("error", "Сообщение должно содержать только буквы и знаки препинания, без цифр и специальных символов.");
        return;
      }

      emailjs.init('jKG4dinn9OqZjtrR3');
      emailjs.send("service_ubs361p", "template_p1ikm4r", {
        title: theme.value,
        name: myName.value,
        message: message.value,
        email: email.value,
        tel: phone.value
      }).then(response => {
        console.log('Письмо успешно отправлено!', response);
        showAlert("success", "Письмо успешно отправлено!");
        form.reset();

        // --- УДАЛЕНИЕ  ---
        localStorage.removeItem("theme");
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("phone");
        localStorage.removeItem("message");
      }).catch(error => {
        console.log('Возникла ошибка...', error);
        showAlert("error", "Ошибка при отправке письма.");
      });
    };
  }

  let myForm = document.getElementById("myForm");
  if (myForm) {
    myForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let emailInput = document.getElementById("email1");
      let email = emailInput.value.trim().toLowerCase();
      let gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      let alertBox = document.getElementById("alertBox");
      let alertMessage = document.getElementById("alertMessage");
      let closeBtn = document.querySelector(".closebtn");

      if (!gmailRegex.test(email)) {
        alertBox.className = "alert error";
        alertMessage.textContent = "Ошибка, проверьте вашу почту";
      } else {
        alertBox.className = "alert success";
        alertMessage.textContent = "Отлично, ваша почта отправлена.";
      }

      alertBox.style.display = "block";
      alertBox.style.opacity = "1";

      setTimeout(() => {
        alertBox.style.opacity = "0";
        setTimeout(() => {
          alertBox.style.display = "none";
        }, 500);
      }, 4000);

      closeBtn.onclick = function () {
        alertBox.style.opacity = "0";
        setTimeout(() => {
          alertBox.style.display = "none";
        }, 600);
      };
    });
  }

  let scrollContainer = document.getElementById("scrollContainer");
  let cardWidth = 350;

  function scrollLeft() {
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: -cardWidth,
        behavior: "smooth"
      });
    }
  }

  function scrollRight() {
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: cardWidth,
        behavior: "smooth"
      });
    }
  }

  let leftBtn = document.getElementById("scrollLeftBtn");
  let rightBtn = document.getElementById("scrollRightBtn");

  if (leftBtn) leftBtn.addEventListener("click", scrollLeft);
  if (rightBtn) rightBtn.addEventListener("click", scrollRight);

  let cardData = [
    {
      imgSrc: '../img/sergy.png',
      alt: 'Сергей Иванов',
      name: 'Сергей Иванов',
      age: '35 лет',
      specialization: 'Инженер-строитель, технология монолитного строительства.',
      experience: '5 лет.',
      description: 'Сергей начал карьеру в крупной строительной компании, где участвовал в возведении жилых комплексов и торговых центров. Его занятия всегда насыщены практическими примерами с реальных объектов.'
    },
    {
      imgSrc: '../img/maxim.png',
      alt: 'Максим Кузнецов',
      name: 'Максим Кузнецов',
      age: '41 год',
      specialization: 'Строительная механика, конструкции зданий.',
      experience: 'более 15 лет, из них 12 — в преподавании.',
      description: 'В центре читает курсы по расчёту строительных конструкций, строительной механике, основам проектирования. Особое внимание уделяет математической подготовке студентов и применению расчётных программ (SCAD, LIRA).'
    },
    {
      imgSrc: '../img/ann.png',
      alt: 'Анна Петрова',
      name: 'Анна Петрова',
      age: '39 лет',
      specialization: 'Сметное дело, экономика строительства.',
      experience: '10 лет.',
      description: 'Работала в генподрядной организации, где занималась составлением и проверкой смет, а также сопровождением тендерной документации. Преподаёт дисциплины, связанные с ценообразованием, сметным делом и применением специализированного ПО: ГРАНД-Смета, Smeta.RU. На занятиях делает упор на практическую отработку навыков и понимание нормативной базы.'
    },
    {
      imgSrc: '../img/alexy.png',
      alt: 'Алексей Морозов',
      name: 'Алексей Морозов',
      age: '38 лет',
      specialization: 'Управление строительными работами, охрана труда.',
      experience: '15 лет.',
      description: 'Работает в должности прораба, имеет опыт руководства строительными бригадами на различных объектах — от частного строительства до государственных заказов. В центре обучает организации строительного процесса, планированию, документообороту, технике безопасности и охране труда.'
    },
    {
      imgSrc: '../img/katerina.png',
      alt: 'Екатерина Лебедева',
      name: 'Екатерина Лебедева',
      age: '32 года',
      specialization: 'Архитектура и проектирование.',
      experience: '8 лет.',
      description: 'Екатерина — выпускница архитектурного факультета, работает в сфере проектирования общественных зданий и индивидуального жилья. В образовательной деятельности делает упор на развитие пространственного мышления и навыков работы в проектных программах — ArchiCAD, AutoCAD, Revit.'
    }
  ];
  
  cardData.forEach(data => {
    let card = document.createElement('div');
    card.classList.add('card');

    let img = document.createElement('img');
    img.src = data.imgSrc;
    img.alt = data.alt;
    card.appendChild(img);

    let cardText = document.createElement('div');
    cardText.classList.add('card-text');

    let h3 = document.createElement('h3');
    h3.textContent = data.name;
    cardText.appendChild(h3);

    let age = document.createElement('p');
    age.innerHTML = `<strong>Возраст:</strong> ${data.age}.`;
    cardText.appendChild(age);

    let specialization = document.createElement('p');
    specialization.innerHTML = `<strong>Специализация:</strong> ${data.specialization}`;
    cardText.appendChild(specialization);

    let experience = document.createElement('p');
    experience.innerHTML = `<strong>Опыт работы:</strong> ${data.experience}`;
    cardText.appendChild(experience);

    let description = document.createElement('p');
    description.textContent = data.description;
    cardText.appendChild(description);

    card.appendChild(cardText);
    scrollContainer.appendChild(card);
  });
});
function togglePopup() {
  let overlay = document.getElementById('popupOverlay');
  overlay.classList.toggle('show');
}

