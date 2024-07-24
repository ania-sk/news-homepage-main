 //select open menu button
const openMenuButton = document.getElementById("open-menu-button");
//select close button
const closeMenuButton = document.getElementById("close-menu-button");
//select menu
const navMenu = document.getElementById("nav-menu");

//add event listener to open menu button
openMenuButton.addEventListener("click", function(){
    
    //display black transparent box
    navMenu.classList.toggle("open");
    //display white background
    navMenu.querySelector(".nav-box").classList.toggle("open");
    //display menu list
    navMenu.querySelector(".navigation-list").classList.toggle("open");

    //display X
    closeMenuButton.classList.toggle("open");
    //hide menu img
    openMenuButton.classList.remove("open");
    
});

//add event listener to close menu button
closeMenuButton.addEventListener("click", function(){
    
    //hide black transparent box
    navMenu.classList.remove("open");
    //hide white background
    navMenu.querySelector(".nav-box").classList.remove("open");
    //hide menu
    navMenu.querySelector(".navigation-list").classList.remove("open");

    //hide X
    closeMenuButton.classList.remove("open");
    //display menu img
    openMenuButton.classList.toggle("open");
});