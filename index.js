const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){

    title.classList.toggle(CLICKED_CLASS);

    // // const currentClass = title.className;
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // // if(currentClass!= CLICKED_CLASS){
    // if(!hasClass){
    //     // title.className = CLICKED_CLASS;
    //     title.classList.add(CLICKED_CLASS);
    // } else{
    //     title.classList.remove(CLICKED_CLASS);
    //     // title.className = " ";
    // }
}

//This is test for github

function init(){
    title.addEventListener("click",handleClick);
}
init();



/****************************************************************** */
// // const age = prompt("How old are you");
// // if(age >= 18){
// //     alert("Come in!");
// // }
// // else{
// //     alert("Go Back!");
// // }

// const title = document.querySelector("#title");

// // function handleResize(){
// //     console.log("I have been resized");
// // }

// function handleClick(){
//     if (title.style.color ==  "blue")
//     {
//         title.style.color =  "white";
//     }
//     else
//     {
//         title.style.color =  "blue";
//     }
//     // console.log(event);
//     // console.log("I have been resized");
// }

// title.addEventListener("mouseenter",handleClick);

// function handleOffline(){
//     alert("Connect Fail!");
// }

// function handleOnline(){
//     alert("Connect Success!");
// }

// window.addEventListener("offline",handleOffline);
// window.addEventListener("online",handleOnline);


// // const title = document.getElementById("title");
// // title.innerHTML = "Hi! From JS";
// // title.style.color = 'red';
// // document.title ="I control this page !! HAHAHAHAHAHAHA";
// // console.dir(document);





