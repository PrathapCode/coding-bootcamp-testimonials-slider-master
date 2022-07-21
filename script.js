const paragraph = document.querySelector(".paragraph");
const nameh4 = document.querySelector(".name h4");
const namep = document.querySelector(".name p");

const image = document.getElementById("tanya-image");

const arrows = document.querySelector(".arrows-tanya");


arrows.addEventListener("click" , function() {


    if(nameh4.innerHTML === "Tanya Sinclair") {
        nameh4.innerHTML = "John Tarkpor";
        namep.innerHTML = "Junior Front-end Developer";
        paragraph.innerHTML = "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.";
    } else {
        nameh4.innerHTML = "Tanya Sinclair"
        namep.innerHTML = "UX Engineer"
        paragraph.innerHTML = "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.";
    }


    if (image.src.match ("/images/image-tanya.jpg")) {
        image.src = "/images/image-john.jpg"
    } else {
        image.src = "/images/image-tanya.jpg"
    }


})
