const title = document.querySelector("#title");

// function handleResize(){
//     console.log("I have been resized");
// }

function handleClick(){
    if (title.style.color ==  "blue")
    {
        title.style.color =  "white";
    }
    else
    {
        title.style.color =  "blue";
    }
    // console.log(event);
    // console.log("I have been resized");
}

title.addEventListener("click",handleClick);






// const title = document.getElementById("title");
// title.innerHTML = "Hi! From JS";
// title.style.color = 'red';
// document.title ="I control this page !! HAHAHAHAHAHAHA";
// console.dir(document);





