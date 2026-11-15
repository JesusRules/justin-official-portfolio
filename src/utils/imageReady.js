export function imageReady(image) {
  const loaded = image.complete ? Promise.resolve() : new Promise(resolve => {
    image.addEventListener('load', resolve, { once: true });
    image.addEventListener('error', resolve, { once: true });
  });
  return loaded.then(() => image.decode?.().catch(() => {}));
}

export function preloadImage(src) {
  const image = new Image();
  image.src = src;
  return imageReady(image);
}

export function imagesReady(element) {
  return Promise.all(Array.from(element.querySelectorAll('img'), imageReady));
}
