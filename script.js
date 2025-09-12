// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Navbar scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Scroll progress indicator
const scrollProgress = document.querySelector(".scroll-progress");
window.addEventListener("scroll", () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  scrollProgress.style.width = scrolled + "%";
});

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Custom cursor
const cursor = document.querySelector(".cursor");
const cursorFollower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX - 10 + "px";
  cursor.style.top = e.clientY - 10 + "px";

  setTimeout(() => {
    cursorFollower.style.left = e.clientX - 20 + "px";
    cursorFollower.style.top = e.clientY - 20 + "px";
  }, 100);
});

// Hide cursor on touch devices
document.addEventListener("touchstart", () => {
  cursor.style.display = "none";
  cursorFollower.style.display = "none";
});

// Portfolio project handler
function openProject(projectId) {
  alert(
    `Opening ${projectId} - In a real portfolio, this would open a detailed project page or modal`
  );
}

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(e.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const project = formData.get("project");
  const message = formData.get("message");

  // Simulate form submission
  alert(
    `Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}.`
  );

  // Reset form
  e.target.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Add hover effects to interactive elements
document
  .querySelectorAll(".portfolio-item, .skill-card, .cta-button, .submit-btn")
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(2)";
      cursor.style.borderColor = "#c44569";
    });

    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)";
      cursor.style.borderColor = "#ff6b6b";
    });
  });

// Add some dynamic background animation
function createFloatingElements() {
  for (let i = 0; i < 5; i++) {
    const element = document.createElement("div");
    element.style.cssText = `
            position: fixed;
            width: ${Math.random() * 6 + 4}px;
            height: ${Math.random() * 6 + 4}px;
            background: rgba(255, 107, 107, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
            pointer-events: none;
            z-index: 1;
        `;
    document.body.appendChild(element);

    // Remove element after animation
    setTimeout(() => {
      element.remove();
    }, 20000);
  }
}

// Create floating elements periodically
setInterval(createFloatingElements, 5000);
createFloatingElements(); // Initial call
