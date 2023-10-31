/* FAQ Accordian */
document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");

  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");

    //Toggle icon when clicked on icon or header

    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");


    //Toggle visibility of the faq body when clicked on header

    groupBody.classList.toggle("open");

    //Close other open FAQ bodies except for the one that's right now opened

    const otherGroups = faqContainer.querySelectorAll(".faq-group");

    otherGroups.forEach( (otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherGroupIcon = otherGroup.querySelector(".faq-group-header i");

        otherGroupBody.classList.remove("open");
        otherGroupIcon.classList.remove("fa-minus");
        otherGroupIcon.classList.add("fa-plus");
      }
      
    });

  });
});



/* Mobile Menu on hamburger button click */

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  })
});