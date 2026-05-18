// LOADER

window.addEventListener("load", () => {

  document.querySelector(".loader").style.display = "none";

});

// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.onclick = () => {

  nav.classList.toggle("active");

};

// CLOSE MENU WHEN LINK IS CLICKED

const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");

  });

});

// REVEAL ANIMATION

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((el) => {

    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      el.classList.add("active");

    }

  });

});

// FAQ

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

  item.addEventListener("click", () => {

    item.classList.toggle("active");

  });

});

// COUNTER

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  const updateCounter = () => {

    const target = +counter.dataset.target;
    const count = +counter.innerText;

    const increment = target / 100;

    if(count < target){

      counter.innerText = Math.ceil(count + increment);

      setTimeout(updateCounter,20);

    }else{

      counter.innerText = target;

    }

  };

  updateCounter();

});

// TESTIMONIAL SLIDER

const testimonials = document.querySelectorAll(".testimonial");

let index = 0;

setInterval(() => {

  testimonials[index].classList.remove("active");

  index = (index + 1) % testimonials.length;

  testimonials[index].classList.add("active");

},4000);

// PRICING TOGGLE

const toggle = document.getElementById("togglePrice");

const prices = document.querySelectorAll(".price");

toggle.addEventListener("change", () => {

  prices.forEach(price => {

    if(toggle.checked){

      price.innerText = price.dataset.year;

    }else{

      price.innerText = price.dataset.month;

    }

  });

});

// CUSTOM CURSOR

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";

  cursor.style.top = e.clientY + "px";

});

// SCROLL PROGRESS

window.addEventListener("scroll", () => {

  const scrollTop = document.documentElement.scrollTop;

  const height =
  document.documentElement.scrollHeight -
  document.documentElement.clientHeight;

  const progress = (scrollTop / height) * 100;

  document.querySelector(".progress-bar").style.width =
  progress + "%";

});
