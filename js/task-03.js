const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');

const markup = images
  .map(image => {
    const item = document.createElement('li');
    item.classList.add('gallery-item');

    const img = document.createElement('img');
    img.setAttribute('url', `${image.url}`);
    img.setAttribute('alt', `${image.alt}`);

    item.append(img);
    console.log(item);
    return item;
  })
  .join('');

galleryEl.insertAdjacentHTML('beforeend', markup);

// const item = document.createElement('li');
// item.classList.add('gallery-item');
// const img = document.createElement('img');
// img.setAttribute('url', `jj;jkl`);
// img.setAttribute('alt', `ihjpijm`);

// item.append(img);
// console.log(item);
//console.log(img);
