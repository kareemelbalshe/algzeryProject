document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function() {
        sections.forEach(function(section) {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = 1;
                section.style.transform= 'translateX(0)';
            } else {
                section.style.opacity = 0;
                section.style.transform= 'translateX(-100%)';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('article');

    window.addEventListener('scroll', function() {
        sections.forEach(function(section,i) {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = 1;
                section.style.transform= 'translateX(0)';
            } else {
                if(i%2===0){
                    section.style.opacity = 0;
                    section.style.transform= 'translateX(-100%)';
                }
                else{
                    section.style.opacity = 0;
                    section.style.transform= 'translateX(100%)';
                }
            }
        });
    });
});