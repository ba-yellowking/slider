import "./ImageSlider.css";

export class ImageSlider {
  constructor(element, images, mainImageId = 0, slideByCount = 1) {
    this.element = element;
    this.images = images;
    this.imageCount = 5;
    this.mainImageId = mainImageId;
    this.slideByCount = slideByCount;

    this.render();
  }

  loadImages() {
    const half = Math.floor(this.imageCount / 2);
    const start = this.mainImageId - half;
    const end = this.mainImageId + half;

    const visible = [];

    for (let i = start; i <= end; i++) {
      let index = i;
      if (index < 0) index = this.images.length + index;
      if (index >= this.images.length) index = index % this.images.length;
      visible.push(this.images[index]);
    }

    return visible;
  }

  render() {
    this.element.innerHTML = "";

    const visibleImages = this.loadImages();

    visibleImages.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.classList.add("slider-item");
      if (index === Math.floor(this.imageCount / 2)) {
        img.classList.add("main");
      }
      this.element.appendChild(img);
    });
  }

  goForward() {
    this.mainImageId = (this.mainImageId + this.slideByCount) % this.images.length;
    this.render();
  }

  goBack() {
    this.mainImageId =
      (this.mainImageId - this.slideByCount + this.images.length) % this.images.length;
    this.render();
  }
}
