// Get all the anchor (link) elements on the page
const links = document.querySelectorAll("a");

// Iterate through each link
links.forEach(link => {
  // Add a click event listener to each link
  link.addEventListener("click", function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the original href of the link
    const originalHref = link.getAttribute("href");

    // Append your parameter to the original href
    const newHref = originalHref + "?ref=example.com";

    // Navigate to the new href
    window.location.href = newHref;
  });
});
