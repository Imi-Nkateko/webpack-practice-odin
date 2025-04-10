// index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import { menuSection } from "./menu";
import { aboutSection } from "./about.js";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

const content = document.querySelector("#content");

const heroSection = document.createElement("div");

heroSection.innerHTML = `<div className="hero">
<h1>This is the Hero section</h1>
<p>This is the page  users will see when they open the site
</div>`;

content.appendChild(heroSection);

menuBtn.addEventListener("click", () => {
  if (content.contains(heroSection)) {
    content.removeChild(heroSection);
    content.appendChild(menuSection);
  }
});
