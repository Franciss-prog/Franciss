// function for darkmode and lightmode
document.addEventListener("DOMContentLoaded", () => {
  const toggleTheme = document.getElementById("toggleLight");
  const toggleNavbar = document.getElementById("toggleNavbar");
  const icon = document.querySelector("#toggleLight i");
  const body = document.querySelector("body");
  const html = document.documentElement;
  toggleTheme.addEventListener("click", () => {
    // Toggle dark/light classes
    body.classList.toggle("bg-light");
    body.classList.toggle("text-dark");

    html.classList.toggle("dark");
    // Toggle icon
    icon.classList.toggle("bi-moon");

    // Toggle hover button classes
    toggleTheme.classList.toggle("border-black");
    toggleTheme.classList.toggle("hover:bg-dark");
    toggleTheme.classList.toggle("hover:text-light");

    // toggle for smaller screen navbar
    toggleNavbar.classList.toggle("border-dark");
  });
});

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
        <a href="index.html" class="hover:underline">---> Home</a>  
        <a href="index.html" class="hover:underline">---> About</a>  
        <a href="index.html" class="hover:underline">---> Porfolio</a>  
        <a href="index.html" class="hover:underline">---> Contacts</a>  
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
    window.location.href = "/index.html";
  }
});
