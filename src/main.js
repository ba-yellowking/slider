import { ImageSlider } from "./imageSlider/ImageSlider.js";

const images = [
  "/posters/lotr1.jpg",
  "/posters/lotr2.jpg",
  "/posters/lotr3.jpg",
  "/posters/hp1.jpg",
  "/posters/hp2.jpg",
  "/posters/hp3.jpg",
];

const container = document.getElementById("slider");
const slider = new ImageSlider(container, images);

document.getElementById("prev-btn").addEventListener("click", () => {
  slider.goBack();
})

document.getElementById("next-btn").addEventListener("click", () => {
  slider.goForward();
});
