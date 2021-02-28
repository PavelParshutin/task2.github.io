const wraper = document.querySelectorAll('.img_wrappwer')
const images = document.querySelectorAll('.img_container')
const closeBtn = document.querySelector(".close_btn")
const reestablishBtn = document.querySelector(".reestablishBtn")
const xMark = document.querySelectorAll(".x-mark")

const countElem = document.createElement("div")
countElem.textContent = images.length
document.body.prepend(countElem);

const dateTimeBlock = document.createElement("div")
document.body.prepend(dateTimeBlock);
function getDate(){
    let date = new Date()
   let year = date.getFullYear();
   let month = date.getMonth();
   let day = date.getDate();
   let hours = date.getHours();
   let minites = date.getMinutes();
    dateTimeBlock.innerHTML = `${day}:${month+1}:${year} ${hours}:${minites}`;
}
setInterval( getDate, 1000)

for(let img of images ){
    img.addEventListener("click", function(){
        img.parentElement.classList.remove("img_wrappwer")
        img.classList.remove("img_container")
        img.classList.add("big_img")
        document.body.style.backgroundColor = "black"
        closeBtn.classList.add("active_btn");
        
        closeBtn.addEventListener("click", ()=>{
            document.body.style.backgroundColor = "white"
            img.classList.remove("big_img")
            img.classList.add("img_container")
            img.parentElement.classList.add("img_wrappwer")
            closeBtn.classList.remove("active_btn")
        })
    })
}


const imagesCollection = []

for(let xBtn of xMark){
    xBtn.addEventListener("click",() =>{
        imagesCollection.push(xBtn.parentElement)
        xBtn.parentElement.hidden = true;
        reestablishBtn.disabled = false;
		countElem.textContent = images.length - imagesCollection.length
    })
}

reestablishBtn.addEventListener("click",()=>{
    if(imagesCollection.length > 0){
        for(let item of imagesCollection){
           item.hidden = false 
        }
        reestablishBtn.disabled = true
        imagesCollection.length = 0
		countElem.textContent = images.length
    }
})

















