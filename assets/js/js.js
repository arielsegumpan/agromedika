// // Get all elements with class 'dropdown'
// var dropdowns = document.querySelectorAll('.dropdown');

// // Iterate over each dropdown element
// dropdowns.forEach(function(dropdown) {
//     // Add event listener for mouseenter event (hover in)
//     dropdown.addEventListener('mouseenter', function() {
//         // Find the dropdown menu within the current dropdown and fadeIn
//         var dropdownMenu = this.querySelector('.dropdown-menu');
//         if (dropdownMenu) {
//             dropdownMenu.style.display = 'block'; // Ensure menu is visible
//             setTimeout(function() {
//                 dropdownMenu.style.opacity = '1'; // Fade in the menu
//             }, 10);
//         }
//     });

//     // Add event listener for mouseleave event (hover out)
//     dropdown.addEventListener('mouseleave', function() {
//         // Find the dropdown menu within the current dropdown and fadeOut
//         var dropdownMenu = this.querySelector('.dropdown-menu');
//         if (dropdownMenu) {
//             dropdownMenu.style.opacity = '0'; // Fade out the menu
//             setTimeout(function() {
//                 dropdownMenu.style.display = 'none'; // Hide menu after fading out
//             }, 300);
//         }
//     });

//     // Add CSS transition for smooth appearance
//     dropdown.querySelector('.dropdown-menu').style.transition = 'opacity 0.3s ease';
// });

//  Add hover event handlers
//  $('.dropdown').hover(
//   function () {
//       // On hover in
//       $(this).find('.dropdown-menu.drop-1').stop(true, true).delay(200).fadeIn(300);
//   },
//   function () {
//       // On hover out
//       $(this).find('.dropdown-menu.drop-1').stop(true, true).delay(200).fadeOut(300);
//   },

//   function () {
//     // On hover in
//     $(this).find('.dropdown-menu.drop-2').stop(true, true).delay(200).fadeIn(300);
//   },
//   function () {
//       // On hover out
//       $(this).find('.dropdown-menu.drop-2').stop(true, true).delay(200).fadeOut(300);
//   }
// );

// Close dropdown menus when clicking outside of them
// $(document).on('click', function(e) {
//   if (!$(e.target).closest('.dropdown').length) {
//       $('.dropdown-menu').removeClass('show');
//   }
// });

// // Prevent closing dropdown menu when clicking inside it
// $('.dropdown-menu').on('click', function(e) {
//   e.stopPropagation();
// });




document.addEventListener('DOMContentLoaded', function () {
  const scrollBtn = document.getElementById('scroll_btn');

  // Initial check for scroll position
  checkScroll();

  // Add scroll event listener
  window.addEventListener('scroll', function () {
    checkScroll();
  });

  // Add click event listener to the button
  scrollBtn.addEventListener('click', function () {
    scrollToTop(300);
  });

  function checkScroll() {
    // Show/hide the button based on the scroll position
    if (window.scrollY > 80) {
      scrollBtn.style.display = 'block';
      // $('header.position-fixed.w-100').addClass('bg-lteal');
    } else {
      scrollBtn.style.display = 'none';
      // $('header.bg-lteal.position-fixed.w-100').removeClass('bg-lteal');
    }
  }

  function scrollToTop(duration) {
    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    function scrollStep(timestamp) {
      const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
      const progress = Math.min(1, (currentTime - startTime) / duration);

      window.scrollTo(0, start - start * progress);

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }
});


// function handleIntersection(entries, observer) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         startCounterAnimation(entry.target);
//         observer.unobserve(entry.target);
//       }
//     });
//   }
  
//   function startCounterAnimation(valueDisplay) {
//     let startValue = 0;
//     let endValue = parseInt(valueDisplay.getAttribute("data-val"));
//     let interval = 800;
//     let duration = Math.floor(interval / endValue);
  
//     function updateCounter() {
//       startValue += 1;
//       valueDisplay.textContent = startValue;
  
//       if (startValue < endValue) {
//         requestAnimationFrame(updateCounter);
//       }
//     }
  
//     updateCounter();
//   }
  
//   let observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
//   let valueDisplays = document.querySelectorAll(".num");
  
//   valueDisplays.forEach((valueDisplay) => {
//     observer.observe(valueDisplay);
//   });
  
//   // Check initial state of elements
//   valueDisplays.forEach((valueDisplay) => {
//     if (observer.takeRecords().some((entry) => entry.target === valueDisplay && entry.isIntersecting)) {
//       startCounterAnimation(valueDisplay);
//     }
//   });
  

  $(document).ready(() => {
    $('[data-fancybox="gallery"]').fancybox({
      buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
      ],
      loop: false,
      protect: true
    });
  });

// $(document).ready(function () {
//   let container = $('.container-img');
//   let cards = $('.card');

//   $('#gallery-search').on('input', function () {
//       let searchTerm = $(this).val().toLowerCase();
//       let matchingCards = cards.filter(function () {
//       let caption = $(this).find('a').data('caption').toLowerCase();
//           return caption.includes(searchTerm);
//       });

//       // Clear the container
//       container.empty();

//       // Append matching cards to the container with fadeIn animation
//       matchingCards.each(function () {
//           $(this).removeClass('fade-out').addClass('fade-in').appendTo(container).hide().fadeIn();
//       });

//       // Add fade-out class to non-matching cards and fade them out
//       cards.not(matchingCards).each(function () {
//           $(this).removeClass('fade-in').addClass('fade-out').fadeOut();
//       });
//   });
// });

// $(document).ready(function () {
//   let container = $('.container-img');
//   let cards = $('.card');

//   // Filter gallery based on category
//   $('#filter-menu').on('click', '.filter-item', function () {
//     let selectedFilter = $(this).data('filter');
//     let matchingCards;

//     if (selectedFilter === 'all') {
//       matchingCards = cards;
//     } else {
//       matchingCards = cards.filter(function () {
//         let caption = $(this).find('a').data('caption').toLowerCase();
//         return caption.includes(selectedFilter.toLowerCase());
//       });
//     }

//     // Clear the container
//     container.empty();

//     // Append matching cards to the container with fadeIn animation
//     matchingCards.each(function () {
//       $(this).removeClass('fade-out').addClass('fade-in').appendTo(container).hide().fadeIn();
//     });

//     // Add fade-out class to non-matching cards and fade them out
//     cards.not(matchingCards).each(function () {
//       $(this).removeClass('fade-in').addClass('fade-out').fadeOut();
//     });
//   });
// });
$(document).ready(function () {

  $('figure.wp-block-table').addClass('table-responsive table-striped');
  $('figure.wp-block-table table').addClass('table align-middle');
  $('figure.wp-block-table thead tr th').addClass('col');
  nextCard();
  setInterval(nextCard, 5000); 


  let container = $('.container-img');
  let cards = $('.card');

  // Filter gallery based on category
  $('#filter-menu').on('click', '.filter-item', function () {
    let selectedFilter = $(this).data('filter');
    let matchingCards;

    if (selectedFilter === 'all') {
      matchingCards = cards;
    } else {
      matchingCards = cards.filter(function () {
        let dataId = $(this).find('a').data('id').toLowerCase();
        return dataId === selectedFilter.toLowerCase();
      });
    }

    // Clear the container
    container.empty();

    // Append matching cards to the container with fadeIn animation
    matchingCards.each(function () {
      $(this).removeClass('fade-out').addClass('fade-in').appendTo(container).hide().fadeIn();
    });

    // Add fade-out class to non-matching cards and fade them out
    cards.not(matchingCards).each(function () {
      $(this).removeClass('fade-in').addClass('fade-out').fadeOut();
    });
  });
});

$(document).ready(function () {
  let container = $('.container-img-pdf');
  let cards = $('.card');

  $('#filter-menu-2').on('click', '.filter-item', function () {
    let selectedFilter = $(this).data('filter');
    let matchingCards;

    if (selectedFilter === 'all') {
      matchingCards = cards;
    } else {
      matchingCards = cards.filter(function () {
        let dataId = $(this).data('id').toLowerCase();
        return dataId === selectedFilter.toLowerCase();
      });
    }

    container.empty();

    matchingCards.each(function () {
      $(this).removeClass('fade-out').addClass('fade-in').appendTo(container).hide().fadeIn();
    });

    cards.not(matchingCards).each(function () {
      $(this).removeClass('fade-in').addClass('fade-out').fadeOut();
    });
  });
});


var shadow = '0 20px 50px rgba(0,34,45,0)';
var currentIndex = 1; // Start with the second card

function styles(item_id, x, y, z , opacity, shadow){
	$(item_id).css({
		transform: 'translate3d('+ x +'px, ' + y + 'px, ' + z +'px)',
		opacity: opacity,
		'box-shadow': shadow,
		transition: 'transform 1s ease, opacity 1s ease' // Smooth transition
	});
}

function nextCard() {
  $('#first, #second, #third').removeClass('focus');
  currentIndex = currentIndex % 3 + 1; // Cycle through 1, 2, 3
  var currentId = '#' + (currentIndex === 1 ? 'first' : currentIndex === 2 ? 'second' : 'third');
  $(currentId).addClass('focus');

  if (currentIndex === 1) {
    styles('#first', 0, -37, 0, 1, shadow);
    styles('#second', 70, 50, -50, 0.2, 'none');
    styles('#third', 110, -107, -60, 0, 'none');
  } else if (currentIndex === 2) {
    styles('#first', 110, -107, -60, 0, 'none');
    styles('#second', 0, -50, 0, 1, shadow);
    styles('#third', 70, 50, -50, 0.2, 'none');
  } else {
    styles('#first', 70, 50, -50, 0.2, 'none');
    styles('#second', 110, -107, -60, 0, 'none');
    styles('#third', 0, -50, 0, 1, shadow);
  }
}



