let btn = document.querySelector(".btn");
const hiddenContent = document.querySelector(".hidden-content")
function revealContent(){
    if (hiddenContent.classList.contains("reveal-btn")){
        hiddenContent.classList.remove("reveal-btn");
    }else{
        hiddenContent.classList.add("reveal-btn");
    }
}

btn.addEventListener("click", revealContent)