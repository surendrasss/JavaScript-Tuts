console.log("Welcome to Toggle console!!!")

let toggleNavStatus = false;


//When we are looking to manipulate css file we ofte use querySelector
//queryselctor gives us the functionality to play and tweak with css styling
//Make sure that whenever you style css file you always use the correct class name prefixed by a dot

//We create a function which will have all the functionality we need to add to our toggle button 


let toggleNav = function(){
    let getSidebar = document.querySelector('.sidebar');
    let getSidebarUl = document.querySelector(".sidebar ul");
    let getSideTitle = document.querySelector(".sidebar ul span");
    let getSideLinks = document.querySelectorAll(".sidebar ul a"); 


    if (toggleNavStatus === false ) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = '370px';
        getSideTitle.style.opacity = '0.5';

        let arrayLength = getSideLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSideLinks[i].style.opacity = '1';
            
        }
    toggleNavStatus = true;
    }


    else if (toggleNavStatus === true ) {
        getSidebar.style.width = '50px';
        getSideTitle.style.opacity = '0';

        let arrayLength = getSideLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSideLinks[i].style.opacity = '1';
            
        }
    
    getSidebarUl.style.visibility = "hidden";
    toggleNavStatus = false;
    }
}