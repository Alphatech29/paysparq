
//This code toggle the vtu tab and body
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.VtuTab .buydata');
    const tabContents = document.querySelectorAll('.vtu-body');

    tabButtons[0].classList.add('active');
    tabContents[0].classList.add('active');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            const tabContent = document.getElementById(tabId);

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            tabContent.classList.add('active');
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('.form-check-input');
  
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("click", function () {
        if (checkbox.checked) {
          uncheckOtherCheckboxes(checkbox);
        }
      });
    });
  
    function uncheckOtherCheckboxes(checkedCheckbox) {
      checkboxes.forEach(function (checkbox) {
        if (checkbox !== checkedCheckbox) {
          checkbox.checked = false;
        }
      });
    }
  });



document.getElementById('upload').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const files = event.target.files;
    const fileList = document.getElementById('show-file');

    fileList.innerHTML = ""; // Clear previous entries

    for (let i = 0; i < files.length; i++) {
        const listItem = document.createElement('div');
        listItem.textContent = `${i + 1}. ${files[i].name}`;
        fileList.appendChild(listItem);
    }
}



//THIS CODE IS TO OPEN AND CLOSE REMIT POPUP
function openRemit() {
  document.querySelector('.remit-fund').style.display = 'flex';
}
function closeRemit() {
  document.querySelector('.remit-fund').style.display = 'none';
}





function toggleTab(tab) {
  // Get the tab and body elements
  const tabButtons = document.querySelectorAll('.course-tab');
  const tabBodies = document.querySelectorAll('.content');

  // Remove the 'active' class from all tab buttons and bodies
  tabButtons.forEach(btn => btn.classList.remove('active'));
  tabBodies.forEach(body => body.classList.remove('active'));

  // Add the 'active' class to the clicked tab button and corresponding body
  tab.classList.add('active');
  const tabId = tab.getAttribute('data-tab');
  const correspondingBody = document.getElementById(tabId);
  correspondingBody.classList.add('active');
}

function toggleTab(tab) {
  // Check if the clicked tab is already active
  if (!tab.classList.contains('active')) {
    // Get the tab and body elements
    const jobtabs = document.querySelectorAll('.my-jobs');
    const jobBodies = document.querySelectorAll('.order-body');

    // Remove the 'active' class from all tab buttons and bodies
    jobtabs.forEach(btn => btn.classList.remove('active'));
    jobBodies.forEach(body => body.classList.remove('active'));

    // Add the 'active' class to the clicked tab button and corresponding body
    tab.classList.add('active');
    const tabId = tab.getAttribute('data-tab');
    const correspondingBody = document.getElementById(tabId);

    if (correspondingBody) {
      correspondingBody.classList.add('active');
    }
  }
}
