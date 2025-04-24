document.addEventListener("DOMContentLoaded", function () {
    let scrollContainer = document.getElementById("scrollContainer");
    console.log(scrollContainer)
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
    cardData.forEach(function(data) {
      let card = document.createElement('div');
      card.className = 'card';
    
      card.innerHTML = 
        '<img src="' + data.imgSrc + '" alt="' + data.alt + '">' +
        '<div class="card-text">' +
          '<h3>' + data.name + '</h3>' +
          '<p><strong>Возраст:</strong> ' + data.age + '.</p>' +
          '<p><strong>Специализация:</strong> ' + data.specialization + '</p>' +
          '<p><strong>Опыт работы:</strong> ' + data.experience + '</p>' +
          '<p>' + data.description + '</p>' +
        '</div>';
    
      scrollContainer.appendChild(card);
    });
});