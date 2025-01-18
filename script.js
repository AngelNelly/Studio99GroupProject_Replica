const dots = document.querySelectorAll(".dot");
const cards = document.querySelectorAll(".testimonial-card");

// Variable to track the last active card index
let lastActiveIndex = -1;

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    // Remove the active class from all dots
    dots.forEach((d) => d.classList.remove("active"));

    // Add active class to the clicked dot
    dot.classList.add("active");

    // If there's a previously active card, keep it active
    if (lastActiveIndex !== -1 && lastActiveIndex !== index) {
      cards[lastActiveIndex].classList.add("active");
    }

    // Add active class to the currently selected card
    cards[index].classList.add("active");

    // Remove active class from all other cards
    cards.forEach((card, i) => {
      if (i !== index && i !== lastActiveIndex) {
        card.classList.remove("active");
      }
    });

    // Update the last active index
    lastActiveIndex = index;
  });
});
