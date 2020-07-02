(function() {
    // Navigation
    const navToggler = document.querySelector(".aside-nav-toggler");
    const sideBar = document.querySelector(".aside");
    const mainContent = document.querySelector(".main-content");

    // Navigation Slide Sections
    const navLinks = document.querySelectorAll(".nav li a"),
        totalNavLinks = navLinks.length;
    const sections = document.querySelectorAll(".section"),
        totalSections = sections.length;

    // Navbar
    navToggler.addEventListener("click", function() {
        if (window.innerWidth < 991) {
            sideBar.classList.toggle("open");
        }
        if (sideBar.classList.contains("open") && window.innerWidth > 767) {
            mainContent.style.marginLeft = "263.05px";
        } else if (!sideBar.classList.contains("open")) {
            mainContent.style.marginLeft = "0px";
        }
    });

    // Navbar on resize 
    window.addEventListener("resize", function() {
        if (window.innerWidth > 991 && sideBar.classList.contains("open")) {
            sideBar.classList.remove("open");
            mainContent.style.marginLeft = "263.05px";
        } else if (window.innerWidth > 991 && !sideBar.classList.contains("open")) {
            mainContent.style.marginLeft = "263.05px";
        } else if (window.innerWidth < 991 && !sideBar.classList.contains("open")) {
            mainContent.style.marginLeft = "0px";
        }
    });
    // NavLinks Active
    const hireBtn = document.querySelector(".hire-me");
    hireBtn.addEventListener("click", activeLink);

    for (let i = 0; i < totalNavLinks; i++) {
        navLinks[i].addEventListener("click", activeLink);
    }

    function activeLink(e) {
        document.querySelector(".nav li a.active").classList.remove("active");
        this.classList.add("active");
        if (e.target.classList.contains("hire-me")) {
            document.querySelector(".nav li:nth-child(4) a").classList.add("active");
        }
    }

    // Filter Links
    const filterBtns= document.querySelectorAll(".project-filter-btn"),
         totalFilterBtn = filterBtns.length;
          projects = document.querySelectorAll(".projects-portfolio"),
          totalProjects = projects.length;

    for(let i = 0; i < totalFilterBtn; i++) {
      filterBtns[i].addEventListener("click", filterPortfolio);
    }

    function filterPortfolio(e) {
      const target = e.target.dataset.filter;
      document.querySelector(".project-filter-btn.active").classList.remove("active");
      for(let i = 0; i < totalProjects; i++) {
        this.classList.add("active");
        if(target === "all") {
          projects[i].style.display = "block";
        } else if(projects[i].dataset.category === target) {
          projects[i].style.display = "block";
        } else {
          projects[i].style.display = "none";
        }
      }
    }


    // deleted code
    // add active class navlinks
    // function activeNavLink() {
    //     for (let i = 0; i < totalNavLinks; i++) {
    //         navLinks[i].addEventListener("click", function(e) {
    //             // remove active class from home 
    //             document.querySelector(".nav li a.active").classList.remove("active");
    //             // grab link name to find section
    //             const link = navLinks[i].getAttribute("href").split("#")[1];
    //             // remove active links from any others
    //             navLinks[i].classList.remove("active");
    //             // add to this specific link
    //             this.classList.add("active");
    //         });
    //     }
    // }
    // const hireBtn = document.querySelector(".hire-me");
    // hireBtn.addEventListener("click", function(e) {
    //     let activeLink = document.querySelector(".nav li a.active");
    //     activeLink.classList.remove("active");
    //     const contactBtn = document.querySelector(".nav li:nth-child(4) a");
    //     if (e.target.classList.contains("hire-me")) {
    //         contactBtn.classList.add("active");
    //     } else {
    //         contactBtn.classList.remove("active");
    //     }
    // });

    // Lightbox



})();
