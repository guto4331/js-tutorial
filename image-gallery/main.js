const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];
const altText = ['Closeup of a human eye', 'Beautiful rock', 'Flowers', 'Ancient mural', 'Moth'];

for(i = 0; i < images.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
}

btn.addEventListener('click', () => {
    if(btn.classList.contains('dark')){
        btn.classList.remove('dark');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else{
        btn.classList.add('dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
