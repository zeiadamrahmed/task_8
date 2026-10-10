const track = document.querySelector(".slider-track");
const slider = document.querySelector(".product-slider");

const originalHTML = track.innerHTML;
const originalWidth = track.scrollWidth;

// كرر لحد ما يغطي الشاشة مرتين على الأقل
let copies = Math.max(2, Math.ceil((slider.offsetWidth * 2) / originalWidth));
track.innerHTML = originalHTML.repeat(copies);

// اضبط الأنيميشن على طول مجموعة واحدة بالظبط
const oneSetWidth = originalWidth + 16; // 16px = gap-3
track.style.setProperty("--shift", `-${oneSetWidth}px`);
//
AOS.init();
