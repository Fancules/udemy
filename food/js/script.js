document.addEventListener("DOMContentLoaded", () => {
    const tab = document.querySelector(".tabheader__items"),
          content = document.querySelectorAll(".tabcontent"),
          tabs = tab.querySelectorAll(".tabheader__item");
    
    function hide(){
        content.forEach(item => {
           item.style.display = "none"; 
        });
        tabs.forEach(item => {
            item.classList.remove("tabheader__item_active");
        });
    }
    function makeActive(i = 0){
        tabs[i].classList.add("tabheader__item_active");
        content[i].style.display = "block";
    }
    hide(); 
    makeActive();
    
    tab.addEventListener("click", e => {
       const target = e.target;
        tabs.forEach((item, i) => {
            if(target == item){
                hide();
                makeActive(i);
            }
        });
    });
    
});