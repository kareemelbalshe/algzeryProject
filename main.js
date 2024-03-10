const itemHeaders = document.querySelectorAll(".accordion-item-header");
const i1=document.getElementById("i1")
const i2=document.getElementById("i2")
const i3=document.getElementById("i3")
const i4=document.getElementById("i4")
const i5=document.getElementById("i5")
const i6=document.getElementById("i6")

itemHeaders.forEach((accordion) => {
  accordion.addEventListener("click", collapseAccordions);

  function collapseAccordions() {
    const activeAccordion = document.querySelector(".active");
    if (activeAccordion && activeAccordion !== accordion) {
      activeAccordion.classList.toggle("active");
      activeAccordion.nextElementSibling.style.maxHeight = 0;
    }

    accordion.classList.toggle("active");
    const accordionItemBody = accordion.nextElementSibling;

    if (accordion.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  }
});
window.addEventListener("load",()=>{
    setInterval(()=>{
        i1.style.opacity="1"
    },1500)
    setInterval(()=>{
        i2.style.opacity="1"
    },2000)
    setInterval(()=>{
        i3.style.opacity="1"
    },2500)
    setInterval(()=>{
        i4.style.opacity="1"
    },3000)
    setInterval(()=>{
        i5.style.opacity="1"
    },3500)
    setInterval(()=>{
        i6.style.opacity="1"
    },4000)
})
