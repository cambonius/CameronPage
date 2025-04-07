document.addEventListener("DOMContentLoaded", function() {
    // Get the toggle switch element by its id
    const darkModeToggle = document.getElementById("darkModeToggle");
  
    // Check if the user has a saved dark mode preference in localStorage
    const darkModeEnabled = localStorage.getItem("darkMode") === "true";
    if (darkModeEnabled) {
      // If dark mode was enabled, check the toggle and add the dark mode class
      darkModeToggle.checked = true;
      document.body.classList.add("dark-mode");
    }
  
    // Listen for changes on the toggle switch
    darkModeToggle.addEventListener("change", function() {
      if (this.checked) {
        // When toggle is switched on, add dark mode class and save preference
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "true");
      } else {
        // When toggle is switched off, remove dark mode class and update preference
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "false");
      }
    });
  });
  