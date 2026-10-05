/* =========================================================
   TEJASWANI SIRAPURAPU PORTFOLIO
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     ELEMENTS
  ======================================================= */

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  const navItems = document.querySelectorAll(
    "#navLinks .nav-link"
  );

  const sections = document.querySelectorAll(
    "main section[id]"
  );

  const backToTop = document.getElementById(
    "backToTop"
  );

  const year = document.getElementById(
    "year"
  );

  const contactForm = document.getElementById(
    "contactForm"
  );

  const formNote = document.getElementById(
    "formNote"
  );


  /* =======================================================
     CURRENT YEAR
  ======================================================= */

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* =======================================================
     MOBILE MENU
  ======================================================= */

  if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

      const isOpen =
        navLinks.classList.toggle("open");

      menuBtn.setAttribute(
        "aria-label",
        isOpen
          ? "Close menu"
          : "Open menu"
      );

      menuBtn.textContent =
        isOpen ? "✕" : "☰";

    });

  }


  /* =======================================================
     CLOSE MOBILE MENU
  ======================================================= */

  navItems.forEach((link) => {

    link.addEventListener("click", () => {

      navItems.forEach((item) => {
        item.classList.remove("active");
      });

      link.classList.add("active");

      if (navLinks) {
        navLinks.classList.remove("open");
      }

      if (menuBtn) {
        menuBtn.textContent = "☰";

        menuBtn.setAttribute(
          "aria-label",
          "Open menu"
        );
      }

    });

  });


  /* =======================================================
     ACTIVE NAV ON SCROLL
  ======================================================= */

  if ("IntersectionObserver" in window) {

    const sectionObserver =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (!entry.isIntersecting) {
              return;
            }

            const currentId =
              entry.target.getAttribute("id");

            navItems.forEach((link) => {

              const linkTarget =
                link.getAttribute("href");

              link.classList.toggle(
                "active",
                linkTarget === `#${currentId}`
              );

            });

          });

        },
        {
          rootMargin:
            "-35% 0px -55% 0px"
        }
      );


    sections.forEach((section) => {
      sectionObserver.observe(section);
    });

  }


  /* =======================================================
     REVEAL ANIMATION
  ======================================================= */

  const revealElements =
    document.querySelectorAll(".reveal");


  if ("IntersectionObserver" in window) {

    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });

  } else {

    revealElements.forEach((element) => {
      element.classList.add("visible");
    });

  }


  /* =======================================================
     BACK TO TOP
  ======================================================= */

  window.addEventListener(
    "scroll",
    () => {

      if (!backToTop) {
        return;
      }

      if (window.scrollY > 450) {

        backToTop.classList.add(
          "show"
        );

      } else {

        backToTop.classList.remove(
          "show"
        );

      }

    },
    { passive: true }
  );


  if (backToTop) {

    backToTop.addEventListener(
      "click",
      () => {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }


  /* =======================================================
     CONTACT FORM
  ======================================================= */

  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();


        const name =
          document.getElementById("name")
            ?.value.trim() || "";

        const email =
          document.getElementById("email")
            ?.value.trim() || "";

        const subject =
          document.getElementById("subject")
            ?.value.trim() || "";

        const message =
          document.getElementById("message")
            ?.value.trim() || "";


        const mailSubject =
          subject ||
          "Message from Tejaswani Portfolio";


        const mailBody =
          `Name: ${name}\n` +
          `Email: ${email}\n\n` +
          `${message}`;


        const mailto =
          "mailto:tejaswanisirapurapu@gmail.com" +
          "?subject=" +
          encodeURIComponent(mailSubject) +
          "&body=" +
          encodeURIComponent(mailBody);


        if (formNote) {

          formNote.textContent =
            "Opening your email app...";

        }


        window.location.href = mailto;

      }
    );

  }


  /* =======================================================
     ESC KEY - CLOSE MOBILE MENU
  ======================================================= */

  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        navLinks &&
        navLinks.classList.contains("open")
      ) {

        navLinks.classList.remove("open");

        if (menuBtn) {

          menuBtn.textContent = "☰";

          menuBtn.setAttribute(
            "aria-label",
            "Open menu"
          );

        }

      }

    }
  );


});
