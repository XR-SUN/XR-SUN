let btn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content")

function revealContent(){
    if (hiddenContent.classList.contains("reveal-btn")){
        hiddenContent.classList.remove("reveal-btn");
        console.log(hiddenContent.classList)
    }else{
        hiddenContent.classList.add("reveal-btn")
        console.log(hiddenContent.classList)
    }
}

btn.addEventListener("click", revealContent)