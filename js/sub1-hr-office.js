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
    const isScrollActive = window.scrollY >= header.offsetHeight;
    
    if (menu.classList.contains('open')) {
        header.classList.add('scroll', 'scroll-a');
    } else {
        header.classList.toggle('scroll', isScrollActive);
        header.classList.remove('scroll-a');
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
const section = gsap.utils.toArray('#content section');
// => Node List 형태의 유사 배열을 배열로 변환

section.forEach(section => {
    gsap.from(section, {
        y: -100, opacity: 0, duration: 0.5,
        scrollTrigger: {
            trigger: section,
            start: 'top 70%',
        }
    })
});
/* sub-header */
const subHeader = gsap.timeline({
  scrollTrigger: {
        trigger: '.sub-header',
        start: 'top 70%'
    }
});
subHeader.from('.sub-main h2', {y: -50,opacity: 0,duration: 0.3, delay: 0.3})
        .from('.sub-main h3', {y: -50,opacity: 0,duration: 0.3})

/* office */
const office1 = gsap.timeline({
  scrollTrigger: {
        trigger: '.office1',
        start: 'top 50%'
    }
});
office1.from('.office1 img', {scale: 0.5,opacity: 0})
    .from('.office1 .inner-text', {opacity: 0, x: 1000})
    .from('.office1 .inner-text h4', {opacity: 0, y: -50})

const office2 = gsap.timeline({
  scrollTrigger: {
        trigger: '.office2',
        start: 'top 50%'
    }
});
office2.from('.office2 img', {scale: 0.5,opacity: 0})
    .from('.office2 .inner-text p', {opacity: 0, x: -1000})
    .from('.office2 .inner-text h4', {opacity: 0, y: -50})
    

/* welfare */
const welfare = gsap.timeline({
  scrollTrigger: {
        trigger: '.welfare',
        start: 'top 40%'
    }
});
welfare.from('.wel-list li:nth-child(1)', {opacity: 0, x: 1000, duration: 0.4, delay: 0.5})    
        .from('.wel-list li:nth-child(3)', {opacity: 0, x: 1000, duration: 0.4}) 
        .from('.wel-list li:nth-child(5)', {opacity: 0, x: 1000, duration: 0.4}) 

/* hiring */
const hiring = gsap.timeline({
  scrollTrigger: {
        trigger: '.sub-hiring',
        start: 'top 40%'
    }
});
hiring.from('.sub-hiring .hr-txt h4', {opacity: 0, y: -50, duration: 0.4, delay: 0.5})    
        .from('.sub-hiring .hr-inner p', {opacity: 0, y: -50, duration: 0.4}) 
        .from('.sub-hiring .hr-inner .go-btn', {opacity: 0, y: -50, duration: 0.4}) 
