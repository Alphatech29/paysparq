document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("hide");
  const contentToHide = document.querySelector(".board-bal h2");
  const originalContent = contentToHide.textContent;
  let isHidden = false;

  toggleButton.innerHTML = '<span><i class="fa-solid fa-eye"></i></span>';

  toggleButton.addEventListener("click", function () {
      if (isHidden) {
          contentToHide.textContent = originalContent;
          toggleButton.querySelector("span").innerHTML = '<i class="fa-solid fa-eye"></i>';
      } else {
          contentToHide.textContent = "$xxxx.xx";
          toggleButton.querySelector("span").innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
      }
      isHidden = !isHidden;
  });
});






document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.VtuTab .buydata');
    const tabContents = document.querySelectorAll('.Field');

    // Show the first tab and its content by default
    tabButtons[0].classList.add('active');
    tabContents[0].classList.add('active');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add 'active' class to the clicked button and corresponding content
            const tabId = button.getAttribute('data-tab');
            const tabContent = document.getElementById(tabId);

            button.classList.add('active');
            tabContent.classList.add('active');
        });
    });
});



function initializeTabSwitching() {
  // Get the tab and body elements
  const tabButtons = document.querySelectorAll('.shop-tab');
  const tabBodies = document.querySelectorAll('.shop-body');

  // Add click event listeners to the tab buttons
  tabButtons.forEach(tabButton => {
    tabButton.addEventListener('click', () => {
      // Remove the 'active' class from all tab buttons and bodies
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabBodies.forEach(body => body.classList.remove('active'));

      // Add the 'active' class to the clicked tab button and corresponding body
      tabButton.classList.add('active');
      const tabId = tabButton.getAttribute('data-tab');
      const correspondingBody = document.getElementById(tabId);
      correspondingBody.classList.add('active');
    });
  });
}

// Call the function to initialize tab switching
initializeTabSwitching();




document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const body = document.body;
  
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      body.style.overflow = sidebar.classList.contains("active") ? "hidden" : "auto";
  
      if (sidebar.classList.contains("active")) {
        sidebar.style.transform = "translateX(0)";
      } else {
        sidebar.style.transform = "translateX(-100%)";
      }
    });
  
    document.addEventListener("click", (event) => {
      if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove("active");
        body.style.overflow = "auto";
        sidebar.style.transform = "translateX(-100%)";
      }
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const ellipseImage = document.querySelector(".Ellipse644");
    const dropdownContent = document.querySelector(".dropdown-content");
  
    ellipseImage.addEventListener("click", function (event) {
      event.stopPropagation();
      dropdownContent.classList.toggle("show");
    });
  
    window.addEventListener("click", function () {
      if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
      }
    });
  
    dropdownContent.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".subp3");
    const subLists = document.querySelectorAll(".sub-list");
  
    dropdownButtons.forEach((dropdownButton, index) => {
      const subList = subLists[index];
  
      dropdownButton.addEventListener("click", function () {
        subList.classList.toggle("sub-list-active");
      });
  
      document.addEventListener("click", function (event) {
        if (!dropdownButton.contains(event.target)) {
          subList.classList.remove("sub-list-active");
        }
      });
    });
  });
  

   document.addEventListener('DOMContentLoaded', function () {
    // Get all tab items and content items
    const tabItems = document.querySelectorAll('.venor-tab-21');
    const contentItems = document.querySelectorAll('.vendor-hist-body');
  
  // Set the initial display for the first tab's content to "flex"
  contentItems[0].style.display = 'flex';

  tabItems.forEach(tabItem => {
      tabItem.addEventListener('click', function () {
          // Remove the 'active' class from all tab items
          tabItems.forEach(item => {
              item.classList.remove('active');
          });

          // Add the 'active' class to the clicked tab
          tabItem.classList.add('active');

          // Hide all content items
          contentItems.forEach(contentItem => {
              contentItem.style.display = 'none';
          });

          // Get the corresponding content item based on the data-tab attribute
          const dataTab = tabItem.getAttribute('data-tab');
          const correspondingContent = document.getElementById(dataTab);

          // Show the corresponding content item
          correspondingContent.style.display = 'flex';
      });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const viewIcon = document.querySelector(".view");
  const popup = document.querySelector(".view-popup");
  const closeBtn = document.querySelector(".vendor-close-btn");

  viewIcon.addEventListener("click", function () {
    if (popup.style.display === "flex") {
      popup.style.display = "none";
      enableScroll();
    } else {
      popup.style.display = "flex";
      disableScroll();
    }
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
    enableScroll();
  });

  function disableScroll() {
    // Get the current scroll position
    const scrollY = window.scrollY;

    // Add styles to disable scrolling
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
  }

  function enableScroll() {
    // Remove the styles to enable scrolling
    const scrollY = parseInt(document.body.style.top, 10);
    document.body.style.position = "";
    document.body.style.top = "";
    
    // Scroll to the previous position
    window.scrollTo(0, Math.abs(scrollY));
  }
});




// This code is for product image upload
    const input = document.getElementById('imageUpload');
    const selectedImagesContainer = document.getElementById('selectedImages');
    const imageFormatText = document.getElementById('imageFormatText');

    input.addEventListener('change', function (event) {
        const files = event.target.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type.includes('image/jpeg') || file.type.includes('image/png')) {
                const imageNameElement = document.createElement('p');
                imageNameElement.textContent = file.name;
                selectedImagesContainer.appendChild(imageNameElement);
            } else {
                console.log('Unsupported file format: ' + file.type);
            }
        }

        // Hide the format text
        imageFormatText.style.display = 'none';
    });


    //This code is for selction of product type container and display it
    const productTypeSelect = document.getElementById("productType");
    const physicalContainer = document.getElementById("physicalContainer");
    const digitalContainer = document.getElementById("digitalContainer");

    productTypeSelect.addEventListener("change", function () {
      if (this.value === "physical") {
        physicalContainer.style.display = "block";
        digitalContainer.style.display = "none";
      } else if (this.value === "digital") {
        physicalContainer.style.display = "none";
        digitalContainer.style.display = "block";
      } else {
        physicalContainer.style.display = "none";
        digitalContainer.style.display = "none";
      }
    });






    
  