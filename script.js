// layout functions

// function for dynamic styling in navbar
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a"); // Select all navbar links
  // get the current pathname
  const currentPath = window.location.pathname;

  links.forEach((link) => {
    const href = link.getAttribute("href");

    // validate the link if the link have the same value for attribute
    if (href === currentPath || currentPath.includes(href)) {
      // add underline
      link.classList.add("underline");
    } else {
      // remove underline
      link.classList.remove("underline");
      link.classList.add("hover:underline");
    }
  });
});

// function to toggle navbar content
document.addEventListener("DOMContentLoaded", () => {
  // get the Important DOMS
  const toggleNavbarButton = document.getElementById("toggleNavbar");

  toggleNavbarButton.addEventListener("click", () => {
    Swal.fire({
      title: "Where did you want to go? ",
      html: `
        <div class="flex flex-col gap-2 items-start">
          <a href="index.html" class="hover:underline max-md:text-md max-sm:text-sm">---> Home</a>  
          <a href="about.html" class="hover:underline max-md:text-md max-sm:text-sm">---> About</a>  
          <a href="portfolio.html" class="hover:underline max-md:text-md max-sm:text-sm">---> Porfolio</a>  
          <a href="contact.html" class="hover:underline max-md:text-md max-sm:text-sm">---> Contacts</a>  
        </div>
      `,
      showConfirmButton: false,
      customClass: {
        popup: "bg-dark text-white", // Custom class for the whole popup
        title: "text-lg",
      },
    });
  });
});

// validation for pathname to activate my dynamic styling
document.addEventListener("DOMContentLoaded", () => {
  if (
    window.location.pathname === "/Franciss" ||
    window.location.pathname === "/"
  ) {
    window.location.href = "index.html";
  }
});
// about page styles cuz im lazy to manually put all the style
document.addEventListener("DOMContentLoaded", () => {
  // get the target div element
  const stacks = document.querySelectorAll("#techstack a");

  stacks.forEach((stacks) => {
    stacks.classList.add("hover:text-orange-400");
  });
});
