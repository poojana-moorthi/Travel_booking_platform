document.addEventListener("DOMContentLoaded", () => {
  // SELECT BUTTONS
  const contactBtn = document.querySelector("nav .btn");
  const searchBtn = document.querySelector(".booking__container form .btn");
  const subscribeForm = document.querySelector(".subscribe__form");
  const viewAllBtn = document.querySelector(".view__all");
  
  let selectedClass = ""; // start with no class selected

  // CONTACT BUTTON
  contactBtn.addEventListener("click", () => {
    alert("Contact us at: support@poojanatravel.com 📧");
  });

  // SEARCH FLIGHTS BUTTON
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!selectedClass) {
      alert("Please select a class first ✈️");
    } else {
      alert(`Searching ${selectedClass} class flights ✈️`);
    }
  });

  // SUBSCRIBE FORM
  subscribeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = subscribeForm.querySelector("input").value;
    if (email === "" || !email.includes("@")) {
      alert("Please enter a valid email 😅");
    } else {
      alert("Subscribed successfully 🎉");
      subscribeForm.reset();
    }
  });

  // VIEW ALL BUTTON
  viewAllBtn.addEventListener("click", () => {
    document.getElementById("destinations").scrollIntoView({
      behavior: "smooth",
    });
  });

  // CLASS SWITCHING
  const classOptions = document.querySelectorAll(".booking__nav .class-option");
  classOptions.forEach(option => {
    option.addEventListener("click", () => {
      // Remove active from all
      classOptions.forEach(o => o.classList.remove("active"));

      // Add active to clicked option
      option.classList.add("active");

      // Update selectedClass variable
      selectedClass = option.dataset.class;

      // Update search button text
      searchBtn.innerHTML = `<i class="ri-search-line"></i> Search ${selectedClass} Flights`;
    });
  });

  // NAVIGATION SMOOTH SCROLL
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});

document.querySelectorAll(".date-input").forEach(input => {
  input.addEventListener("focus", () => {
    input.type = "date"; // switch to date picker
  });
  input.addEventListener("blur", () => {
    if (!input.value) input.type = "text"; // revert if empty
  });
});

