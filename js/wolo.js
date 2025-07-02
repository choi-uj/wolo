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

// const btnPlayStop = document.querySelector('.btn-play-stop');
// let isPlaying = true;
// const swiper = new Swiper('.main-swiper', {
//   loop: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: '.my-pagination',
//     type: 'custom',
//     renderCustom: function (swiper, current, total) {
//       return `<span class="">${current}</span> / 
//         <span>${total}</span>
//         <div class="progress"><div class="bar"></div></div>
//       `;
//     },
//   }
// });

// btnPlayStop.addEventListener('click', playStop)
// function playStop() {
//   const vidioBar = document.querySelector('.main-swiper .bar');
//   if(isPlaying) {
//     btnPlayStop.innerHTML = '<i class="ri-play-circle-line"></i>';
//     swiper.autoplay.pause();
//   } else {
//     btnPlayStop.innerHTML = '<i class="ri-pause-circle-line"></i>';
//     swiper.autoplay.resume();
//   }
//   isPlaying = !isPlaying
// }


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
/* 브랜드 */

gsap.from('.brand-list', {
    scale: 0,duration: 0.5,
    scrollTrigger: {
      trigger: '.brand-box',
      start: 'top 40%',
    }
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
      start: 'top 80',
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
/* 인재채용 */