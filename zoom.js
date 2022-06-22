"use strict"

const scale = 2.5

const imageTag = document.querySelector('img')

imageTag.addEventListener('click', e => {
  const element = e.currentTarget
  const posX = e.layerX - e.layerX / scale;
  const posY = e.layerY - e.layerY / scale;

  element.classList.toggle('active')
  element.style['transform-origin'] = '0 0';
  element.style.transition = 'transform 0.4s ease-out 0s';
  element.style.transform = `scale(${scale}) translate(${-posX}px, ${-posY}px)`;
})

imageTag.addEventListener('mousemove', e => {
  const element = e.currentTarget

  if (e.currentTarget.classList.contains('active')) {
    const posX = e.layerX - e.layerX / scale;
    const posY = e.layerY - e.layerY / scale;
    element.style['transform-origin'] = '0 0';
    element.style.transform = `scale(${scale}) translate(${-posX}px, ${-posY}px)`;
  }
})

imageTag.addEventListener('mouseleave', e => {
  const element = e.currentTarget

  element.classList.remove('active')
  element.style.transform = 'none';
})
