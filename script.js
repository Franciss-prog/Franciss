// function for darkmode and lightmode
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleLight");
  const icon = document.querySelector("#toggleLight i");
  const body = document.querySelector("body");

  toggleButton.addEventListener("click", () => {
    // Toggle dark/light classes
    body.classList.toggle("bg-light");
    body.classList.toggle("text-dark");

    // Toggle icon
    icon.classList.toggle("bi-moon");

    // Toggle hover button classes
    toggleButton.classList.toggle("border-black");
    toggleButton.classList.toggle("hover:bg-dark");
    toggleButton.classList.toggle("hover:text-light");
  });
});

// function for dynamic styling
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a"); // Select all navbar links
  // get the current pathname
  const currentPath = window.location.pathname;

  links.forEach((link) => {
    const href = link.getAttribute("href");

    // validate the link if the link have the same value for attribute
    if (currentPath.includes(href) || href === currentPath) {
      // add underline
      link.classList.add("underline");
    } else {
      // remove underline
      link.classList.remove("underline");
    }
  });
});
