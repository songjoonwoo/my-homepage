let slideIndex = 1;
let slideInterval; // 자동 슬라이드를 위한 변수

// 페이지가 로드되면 슬라이드 시작
window.onload = function() {
    showSlides(slideIndex);
    startSlideShow();
}

// 자동 슬라이드 시작 함수
function startSlideShow() {
    slideInterval = setInterval(function() {
        plusSlides(1);
    }, 4000); // 4초마다 다음 슬라이드로 이동
}

// 다음/이전 슬라이드 보여주는 함수
function plusSlides(n) {
    clearInterval(slideInterval); // 수동 조작 시 자동 슬라이드 초기화
    showSlides(slideIndex += n);
    startSlideShow(); // 다시 자동 슬라이드 시작
}

// 핵심 슬라이드 로직 함수
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("active");
    }
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].classList.add("active");
}
