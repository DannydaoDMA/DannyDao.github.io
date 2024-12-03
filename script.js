function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    const hamburger = document.getElementById('hamburger');

    // Toggle the 'show' class to control dropdown visibility
    dropdown.classList.toggle('show');

    // Optionally change the hamburger icon to a cross (X) when menu is open
    hamburger.classList.toggle('fa-bars');
    hamburger.classList.toggle('fa-xmark');
}

function cancel() {
    const dropdown = document.querySelector('.dropdown');
    const hamburger = document.getElementById('hamburger');

    // Hide the dropdown menu
    dropdown.classList.remove('show');

    // Optionally reset the hamburger icon to bars
    hamburger.classList.toggle('fa-bars');
    hamburger.classList.toggle('fa-xmark');
}

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}