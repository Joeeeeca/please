document.addEventListener("DOMContentLoaded", function () {
  // Function to set a cookie
  function setCookie(name, value, days) {
      var expires = "";
      if (days) {
          var date = new Date();
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
          expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  // Function to get a cookie value
  function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == " ") c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
  }

  // Function to close the popup
  function closePopup() {
      var popupOverlay = document.getElementById("popup-overlay");
      if (popupOverlay) {
          popupOverlay.style.display = "none";
      }
      var secondChanceForm = document.getElementById("second-chance-form");
      if (secondChanceForm) {
          secondChanceForm.style.display = "block";
      }
  }

  // Function to show the thank you section
  function showThankYouSection() {
      var thankYouSection = document.getElementById("thank-you-section");
      if (thankYouSection) {
          thankYouSection.style.display = "block";
      }
  }

  // Check if the popup should be shown and show it
  if (shouldShowPopup()) {
      var popupOverlay = document.getElementById("popup-overlay");
      if (popupOverlay) {
          popupOverlay.style.display = "block";
      }
  } else {
      showThankYouSection();
  }

  // Add event listener to the close button
  var closePopupButton = document.getElementById("close-popup");
  if (closePopupButton) {
      closePopupButton.addEventListener("click", function () {
          closePopup();
      });
  }

  // Function to close the second chance form
  function closeSecondChanceForm() {
      var secondChanceForm = document.getElementById("second-chance-subscribe-form");
      if (secondChanceForm) {
          secondChanceForm.style.display = "none";
      }
  }

  // Add event listener to the second chance form
  var secondChanceForm = document.getElementById("second-chance-subscribe-form");
  if (secondChanceForm) {
      secondChanceForm.addEventListener("submit", function (event) {
          // Prevent the default form submission
          event.preventDefault();

          // Perform any additional actions needed when the second chance form is submitted

          // Close the second chance form after submission
          closeSecondChanceForm();

          // Set a cookie when the user submits the second chance form
          setCookie("subscribed", "true", 365); // Set the cookie to remember that the user has subscribed for 365 days

          // Show the thank you section
          showThankYouSection();
          // Log to the console to check if the event listener is triggered
          console.log("Form submission prevented.");
      });
  }
});
  document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelector('.carousel-slides');
    const slides2 = document.querySelector('.carousel-slides2');

    let slideIndex = 0;
    const slideWidth = carousel.offsetWidth; // Width of each slide

    // Function to move the slides
    function moveSlides() {
        slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
        console.log('Slide index:', slideIndex);
        console.log('Slide position:', slides.style.transform);
    }

    function moveSlides2() {
        const slideWidth2 = slides2.children[0].offsetWidth; // Width of the first slide in the second set
        const slideIndex2 = slideIndex * (window.innerWidth > 1024 ? 3 : 3.2); // Adjust based on screen width
        slides2.style.transform = `translateX(-${slideIndex2 * slideWidth2}px)`; // Update position
        console.log("Second carousel slide position:", slides2.style.transform);
    }

    // Event listener for the next button
    nextButton.addEventListener('click', function() {
        slideIndex++;
        if (slideIndex >= slides.children.length) {
            slideIndex = 0; // Reset index if it exceeds the number of slides
        }
        moveSlides();
        moveSlides2();
    });

    // Event listener for the previous button
    prevButton.addEventListener('click', function() {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slides.children.length - 1; // Set index to the last slide if it goes below 0
        }
        moveSlides();
        moveSlides2();
    });
});




  
  
  
  