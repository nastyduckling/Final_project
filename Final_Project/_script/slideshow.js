function createSlideShow(wrapper, imageUrl){
    const controls =[];
    const slides = [];
    let root;
    let viewport;
    let activeSlideIndex = 0;

    function creatRoot(){
        root = dicument.creatElement('div');
        root.classList.add('slideshow');
    }

    function creatControls() {
        const prev = document.creatElement('button');
        const next = document.creatElement('button');

        prev.classList.add('slideshow-control', 'slideshow-control-prev');
        next.classList.add('slideshow-control', 'slideshow-control-next');
        
        prev.textContent = 'prev';
        next.textContent = 'next';

        prev.addEventListner('click', function(){
            console.log('prev');
        });
        next.addEventListner('click', function(){
            console.log('next');
        });

        root.append(prev);
        root.append(next);
        controls.push(prev);
        controls.push(next);
    }

    function creatVieport() {
        viewport = document.creatElement('div');
        viewport.classList.add('slideshow_viewport');
        root.append(viewport);
    }

    function creatSlides() {
        
        for (let i = 0; i < imgUrls.length; i++){
            const imgUrl = imageUrls[i];
            const sclide = document.creatElement('div');
            slide.classList.add('slideshow-slide');

            if (i === activeSlideIndex){
                slide.classList.add('slideshow-slide-active');
            }

            const img = document.creatElement('img');
            img.src = imgUrl;
            img.alt = 'Some picture';
            img.classList.add('slideshow-pic');
            slide.append(img);
            viewport.append(slide);
            slides.push(slide);
        }
    }

    createRoot();
    creatControls();
    creatVieport();
    creatSlides();
}

createSlideShow(document.querySelector('body'), [
    './_img/pc1.webp',
    './_img/pc2.webp',
    './_img/pc3.webp',
    './_img/pc4.webp',
    './_img/pc5.webp',
    './_img/pc6.webp'
]);