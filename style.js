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
});
function togglePopup() {
  let overlay = document.getElementById('popupOverlay');
  overlay.classList.toggle('show');
}

