gsap.registerPlugin(ScrollTrigger)

/* 헤더 */
const headerGnb = document.querySelector('#gnb');
const header = document.querySelector('header');
const gnbDep1 = document.querySelectorAll('#gnb .dep1>li');
const menu = document.querySelector('.header-util .menu-wrap');
const langWrap = document.querySelector('.header-util .lang-wrap');
const langBtn = document.querySelector('.header-util .lang-wrap button');
const hBreakpoint = 1440;

// 메뉴 상태가 변경된 직후 DOM을 강제로 갱신하여 반영하도록 합니다.
const updateMenuState = () => {
    if (menu.classList.contains('open')) {
        header.classList.add('scroll');
        header.classList.add('scroll-a');
    } else {
        header.classList.remove('scroll-a');
        if (window.scrollY >= header.offsetHeight) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    }
};

// 반응형 처리
if (window.innerWidth >= hBreakpoint) {
    headerGnb.addEventListener('mouseenter', function() {
        header.classList.add('scroll-a');
        header.classList.add('scroll');
    });
    headerGnb.addEventListener('mouseleave', function() {
        header.classList.remove('scroll-a');
        if (window.scrollY >= header.offsetHeight) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    });
} 

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY >= header.offsetHeight) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});

langBtn.addEventListener('click', () => {
    langWrap.classList.toggle('active');
});

if (window.innerWidth < hBreakpoint) {
    menu.addEventListener('click', function () {
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
            updateMenuState();  // 메뉴 상태를 업데이트
        } else {
            menu.classList.add('open');
            updateMenuState();  // 메뉴 상태를 업데이트
        }
    });

    // 마우스오버로 인해 메뉴가 닫히지 않도록 하는 코드 추가
    headerGnb.addEventListener('mouseenter', function() {
        if (!menu.classList.contains('open')) {
            header.classList.add('scroll-a');
            header.classList.add('scroll');
        }
    });

    headerGnb.addEventListener('mouseleave', function() {
        if (!menu.classList.contains('open')) {
            header.classList.remove('scroll-a');
            if (window.scrollY >= header.offsetHeight) {
                header.classList.add('scroll');
            } else {
                header.classList.remove('scroll');
            }
        }
    });
}



// window.addEventListener('resize', checkScreenSize);

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
const totalSlides = document.querySelectorAll('.swiper-slide').length;
let progressTimeout;
let animationDuration = 3000;
const progressInner = document.querySelector('.progress-inner');
let delay = 3000; // autoplay delay와 동일하게
let mainSwiper;

document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.querySelector('.btn-play');
  const stopBtn = document.querySelector('.btn-stop');

  mainSwiper = new Swiper('.main-swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    on: {
      init: function () {
        playCurrentVideo(this);
      },
      slideChangeTransitionStart: function () {
        pauseAllVideos();
      },
      slideChangeTransitionEnd: function () {
        playCurrentVideo(this);
      }
    }
  });

  playBtn.addEventListener('click', () => {
    console.log('재생 버튼 클릭');
    mainSwiper.autoplay.start();
    playCurrentVideo(mainSwiper);
    playBtn.style.display = 'none';
    stopBtn.style.display = 'flex';
  });

  stopBtn.addEventListener('click', () => {
    console.log('정지 버튼 클릭');
    mainSwiper.autoplay.stop();
    pauseAllVideos();
    playBtn.style.display = 'flex';
    stopBtn.style.display = 'none';
  });

  function pauseAllVideos() {
    document.querySelectorAll('.swiper-slide video').forEach(video => {
      video.pause();
    });
  }

  function playCurrentVideo(swiper) {
    const currentSlide = swiper.slides[swiper.activeIndex];
    const video = currentSlide.querySelector('video');
    if (video) {
    //   video.currentTime = 0; // 처음부터
      video.play().catch(err => console.log('비디오 재생 오류:', err));
    }
     }

    // function resetProgressBar() {
    // const progressBar = document.querySelector('.progress-bar::after');
    // if (!progressBar) return;

    // progressBar.style.animation = 'none';
    // progressBar.offsetHeight; // 강제 리플로우
    // progressBar.style.animation = null; // 애니메이션 다시 시작
    // }

    function startProgressBar() {
        progressInner.style.transition = 'none';
        progressInner.style.width = '0%';
        // 리플로우 강제 → transition 초기화 후 시작
        void progressInner.offsetWidth;

        progressInner.style.transition = `width ${delay}ms linear`;
        progressInner.style.width = '100%';
    }

    function resetProgressBar() {
    progressInner.style.transition = 'none';
    progressInner.style.width = '0%';
    }

    mainSwiper.on('slideChangeTransitionStart', () => {
        resetProgressBar();
    });

    mainSwiper.on('slideChangeTransitionEnd', () => {
        startProgressBar();
    });

    mainSwiper.on('autoplayStart', () => {
       startProgressBar();
    });

    mainSwiper.on('autoplayStop', () => {
       resetProgressBar();
    });

    // mainSwiper.on('slideChangeTransitionStart', resetProgressBar);
});





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

const swiperVision = new Swiper(".way-swiper", {
        loop: true,
        autoplay: {delay: 0},
        slidesPerView: 'auto',
        speed: 3000,
        spaceBetween: 40,
    });

const way1p = gsap.timeline({
  scrollTrigger: {
        trigger: '.way-1p',
        start: 'top 50%'
    }
});
way1p.from('.way-1p img', {scale: 0.95,opacity: 0})
    .from('.way-1p .txt', {opacity: 0, x: 1000})

const way2p = gsap.timeline({
  scrollTrigger: {
        trigger: '.way-2p',
        start: 'top 50%'
    }
});
way2p.from('.way-2p img', {scale: 0.95,opacity: 0})
    .from('.way-2p .txt', {opacity: 0, x: -1000})
    


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