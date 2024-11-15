// Proudct Section
document.querySelectorAll('.favorite').forEach(favorite => {
    favorite.addEventListener('click', () => {
        favorite.classList.toggle('active');
        if (favorite.classList.contains('active')) {
            favorite.innerHTML = '<i class="fas fa-heart" style="color: #e6002d;"></i>';
        } else {
            favorite.innerHTML = '<i class="fas fa-heart"></i>';
        }
    });
});
document.querySelectorAll('.colors span').forEach(size => {
    size.addEventListener('click', () => {

        const isActive = size.classList.contains('active');
        
        size.parentElement.querySelectorAll('span').forEach(s => s.classList.remove('active'));
        
        if (!isActive) {
            size.classList.add('active');
        }
    });
});

// Review Section
document.addEventListener("DOMContentLoaded", function () {
    const reviewsContainer = document.querySelector('.reviews');
    const reviewElements = Array.from(document.querySelectorAll('.review'));
    let isUserScrolling = false; 
    let scrollInterval;
    const scrollDelay = 1000; 
    let currentIndex = 0; 

    function startAutoScroll() {
        scrollInterval = setInterval(() => {

            currentIndex = (currentIndex + 1) % reviewElements.length;
            scrollToElement(currentIndex);
        }, scrollDelay);
    }

    function stopAutoScroll() {
        clearInterval(scrollInterval);
    }

    function scrollToElement(index) {
        const selectedElement = reviewElements[index];
        const offset = -50; 
        const elementPosition = selectedElement.offsetLeft + offset;
        
        reviewsContainer.scrollTo({
            left: elementPosition,
            behavior: 'smooth'
        });
    }

    reviewsContainer.addEventListener('scroll', () => {
        if (!isUserScrolling) {
            isUserScrolling = true;
            stopAutoScroll();
            setTimeout(() => {
                isUserScrolling = false;
                startAutoScroll();
            }, scrollDelay);
        }
    });

    startAutoScroll();
});

// Prefooter Section
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.floating-image');
    const titleChars = document.querySelectorAll('#title span');
    const containerHeight = document.querySelector('.image-container').offsetHeight;
    const containerWidth = document.querySelector('.image-container').offsetWidth;
  
    images.forEach((img, index) => {

      const imgWidth = img.offsetWidth;
      const imgHeight = img.offsetHeight;
      const startX = Math.random() * (containerWidth - imgWidth);
      const startY = containerHeight + imgHeight;
  
      img.style.left = `${startX}px`;
      img.style.top = `${startY}px`;
  

      img.style.filter = Math.random() < 0.5 ? 'grayscale(1)' : 'sepia(1)';
      

      const duration = imgHeight > 150 ? 25000 + Math.random() * 5000 : 15000 + Math.random() * 5000;
  
      setTimeout(() => {
        animateImage(img, startX, startY, imgHeight, duration);
      }, index * 8000); 
    });
  
    function animateImage(img, startX, startY, imgHeight, duration) {
      img.style.transition = `transform ${duration}ms linear, filter ${duration / 2}ms ease-in-out`;
      img.style.transform = `translateY(-${startY + imgHeight}px)`;
  
      img.addEventListener('transitionend', () => {
        const newStartY = containerHeight + imgHeight;
        img.style.transition = 'none';
        img.style.transform = `translateY(${newStartY}px)`;
  

        img.style.filter = Math.random() < 0.5 ? 'grayscale(1)' : 'sepia(1)';
  
        setTimeout(() => {
          img.style.transition = `transform ${duration}ms linear, filter ${duration / 2}ms ease-in-out`;
          img.style.transform = `translateY(-${newStartY + imgHeight}px)`;
        }, 50);
      });
  
      setTimeout(() => {
        img.style.filter = 'none';
      }, duration / 2);
    }
  
    function checkOverlap() {
      titleChars.forEach((char) => {
        char.classList.remove('outline');
      });
  
      images.forEach((img) => {
        const imgRect = img.getBoundingClientRect();
  
        titleChars.forEach((char) => {
          const charRect = char.getBoundingClientRect();
          
          if (
            imgRect.top < charRect.bottom &&
            imgRect.bottom > charRect.top &&
            imgRect.left < charRect.right &&
            imgRect.right > charRect.left
          ) {
            char.classList.add('outline');
          }
        });
      });
    }
  
    setInterval(checkOverlap, 100);
});

//Running Text Section
function startRunningText(selector, speed = 1) {
    const runningText = document.querySelector(selector);
    const parentElement = runningText.parentElement;

    const clone = runningText.cloneNode(true);
    parentElement.appendChild(clone);

    parentElement.style.position = 'relative';
    parentElement.style.overflow = 'hidden';
    runningText.style.position = 'absolute';
    clone.style.position = 'absolute';

    let xPos1 = 0;
    let xPos2 = runningText.offsetWidth; 

    function animateRunningText() {
        xPos1 -= speed;
        xPos2 -= speed;

        if (xPos1 <= -runningText.offsetWidth) {
            xPos1 = xPos2 + runningText.offsetWidth;
        }
        if (xPos2 <= -clone.offsetWidth) {
            xPos2 = xPos1 + clone.offsetWidth;
        }

        runningText.style.transform = `translateX(${xPos1}px)`;
        clone.style.transform = `translateX(${xPos2}px)`;
        requestAnimationFrame(animateRunningText);
    }

    animateRunningText();
}

startRunningText('.running-text-content', 1);

// fAQ Section
document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');
        const icon = item.querySelector('i');
        if (parent.classList.contains('active')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });
});

// Trial-Alert
document.addEventListener("DOMContentLoaded", function() {

    function showAlert(target) {
        let alertMessage = `This is a portfolio website, you will be directed to: ${target.textContent || target.href || target.alt} pages!`;
        alert(alertMessage);
    }

    const shopNowButton = document.querySelector(".shop-now");
    if (shopNowButton) {
        shopNowButton.addEventListener("click", function(e) {
            e.preventDefault(); 
            showAlert(shopNowButton);
        });
    }

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            showAlert(button);
        });
    });

    const loadMoreButton = document.querySelector(".load-more-button");
    if (loadMoreButton) {
        loadMoreButton.addEventListener("click", function(e) {
            e.preventDefault();
            showAlert(loadMoreButton);
        });
    }

    const contactUsButton = document.querySelector(".promo-cta-button");
    if (contactUsButton) {
        contactUsButton.addEventListener("click", function(e) {
            e.preventDefault(); 
            showAlert(contactUsButton);
        });
    }

    const navbarLinks = document.querySelectorAll(".nav a");
    navbarLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            showAlert(link);
        });
    });

    const footerLinks = document.querySelectorAll(".footer-link");
    footerLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); 
            showAlert(link);
        });
    });
});
