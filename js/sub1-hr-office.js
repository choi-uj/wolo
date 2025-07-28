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