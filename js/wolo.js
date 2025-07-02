gsap.registerPlugin(ScrollTrigger)

/* 헤더 */
const headerGnb = document.querySelector('#gnb')
const header = document.querySelector('header')
const gnbDep1 = document.querySelectorAll('#gnb .dep1>li')

headerGnb.addEventListener('mouseenter', function() {
  header.classList.add('scroll-a')
  header.classList.add('scroll')
});
headerGnb.addEventListener('mouseleave', function() {
    header.classList.remove('scroll-a')
    if(window.scrollY >= header.offsetHeight) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll')
    }

});
window.addEventListener('scroll',() => {
    console.log(window.scrollY);
    if(window.scrollY >= header.offsetHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})



const langWrap = document.querySelector('.header-util .lang-wrap')
const langBtn = document.querySelector('.header-util .lang-wrap button')
langBtn.addEventListener('click', () => {
    langWrap.classList.toggle('active');
})




/* 푸터 */
const familyBtn = document.querySelector('.family-link .family-site button')
const familyList = document.querySelector('.family-link .family-site')
familyBtn.addEventListener('click', function() {
    familyList.classList.toggle('active')
})

/* 섹션 */
const section = gsap.utils.toArray('#main-page section');
// => Node List 형태의 유사 배열을 배열로 변환

section.forEach(section => {
    gsap.from(section, {
        y: 100, opacity: 0, duration: 0.5,
        scrollTrigger: {
            trigger: section,
            start: 'top 70%',
        }
    })
});

/* 메인비주얼 */
const progressBar = document.querySelector('.main-swiper .bar');
const playBtn = document.querySelector('.swiper-controls .btn-play');
const stopBtn = document.querySelector('.swiper-controls .btn-stop');
let progressTimeout;
let pausedAt = 0;
let animationDuration = 3000;

const mainSwiper = new Swiper('.main-swiper', {
    pagination: {
        el: '.pagination-progress',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return `<span class="">0${current}</span><div class="progress"><div class="bar"></div></div><span>0${total}</span>`;
        },
    // on: {
    //     init: () => {resetProgressBar()},
    //     slideChangeTransitionStart: () => {
    //         resetProgressBar()
    //     }
    }
});

let pagingSwiper = new Swiper(".main-swiper", {
    autoplay: {delay: animationDuration},
    effect: 'fade',
    loop: true,
	pagination: {
		el: '.pagination-bullet',
		type : 'bullets',
    clickable: true,
	},
});
/*
function resetProgressBar() {
    progressBar.style.animation = 'none';
    progressBar.offsetHeight;
    progressBar.style.animation = `progress ${animationDuration}ms linear`;
    progressTimeout = setTimeout(() => {}, animationDuration)
}
*/
/*
playBtn.addEventListener('click', () => {
    // progressBar.style.animationPlayState = 'running';
    mainSwiper.autoplay.start();
    stopBtn.style.display = 'block';
    playBtn.style.display = 'none';
});

stopBtn.addEventListener('click', () => {
    // progressBar.style.animationPlayState = 'paused';
    mainSwiper.autoplay.stop();
    stopBtn.style.display = 'none';
    playBtn.style.display = 'block'; 
});
*/




/* 판매량 */

function countUp(selector, target, duration = 1500) {
    const el = document.querySelector(selector);
    if (!el) return;

    let start = 0;
    const end = parseInt(target, 10);
    const frameRate = 60;
    const totalFrames = Math.round(duration / (1000 / frameRate)); 
    const increment = end / totalFrames; 
    
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        el.textContent = end.toLocaleString();
      } else {
        el.textContent = Math.floor(start).toLocaleString();
      }
    }, 1000 / frameRate);
  }
  window.addEventListener('DOMContentLoaded', () => {
    ScrollTrigger.create({
    trigger: '.compet-wrap',
    start: 'top 70%',
    onEnter: () => {
      countUp('.n1', 1, 500);
      countUp('.n2', 100);
      countUp('.n3', 40);
      countUp('.n4', 1600);
      }
    }); 
  });

/* 히스토리 */

const history = gsap.timeline({
    
  scrollTrigger: {
        trigger: '.history',
        start: 'top 40%'
    }
});
history.from('.history li:nth-child(1)', {opacity: 0, x: 1000, duration: 0.3})    
        .from('.history li:nth-child(2)', {opacity: 0, x: 1000, duration: 0.3}) 
        .from('.history li:nth-child(3)', {opacity: 0, x: 1000, duration: 0.3}) 
        .from('.history li:nth-child(4)', {opacity: 0, x: 1000, duration: 0.3}) 
        .from('.history li:nth-child(5)', {opacity: 0, x: 1000, duration: 0.3}) 
        .from('.history li:nth-child(6)', {opacity: 0, x: 1000, duration: 0.3}) 
    

/* 브랜드 */


const brand = gsap.utils.toArray('.brand-list');

brand.forEach(brand => {
    gsap.from(brand, {
        y: 100, opacity: 0, delay: 1, duration: 0.5,
        scrollTrigger: {
            trigger: '.brand .container',
            start: 'top 30%',
        }
    })
});




/* 비전 */

gsap.from('.small-img', {
    x: 2000,
    duration: 3,
    scrollTrigger: {
      trigger: '.way-main',
      start: 'top 60%',
      end: 'bottom 80%',
      scrub: true
    }
});

gsap.to('.ani-img', {
    scale: 1.7,y: 760,x: -840,
    scrollTrigger: {
      trigger: '.small-img',
      start: 'top 80%',
      scrub: true
    }
});

const vis3 = gsap.timeline({
  scrollTrigger: {
        trigger: '.way-1p',
        start: 'top 30%'
    }
});
vis3.from('.way-1p img', {scale: 0.95,opacity: 0})    
    .to('.ani-img', {opacity: 0})
    .from('.way-1p .txt', {opacity: 0, x: 1000})
    


/* 뉴스 */



const news = gsap.timeline({
  scrollTrigger: {
        trigger: '.news',
        start: 'top 40%'
    }
});
news.from('.news-list li:nth-child(1)', {opacity: 0, x: 1000, duration: 0.3})    
    .from('.news-list li:nth-child(2)', {opacity: 0, x: 1000, duration: 0.3}) 
    .from('.news-list li:nth-child(3)', {opacity: 0, x: 1000, duration: 0.3}) 


/* 인재채용 */