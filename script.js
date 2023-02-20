function hamburger(){
    const button = document.querySelector(".nav2");

    button.classList.toggle("active");
}

function connect(){
    const button = document.querySelector(".connect");
    const arrow = document.querySelector(".connect_img");
    
    button.classList.toggle("active");
    arrow.classList.toggle("active");
    
}

function company(){
    const button = document.querySelector(".company");
    const arrow = document.querySelector(".company_img");
    
    button.classList.toggle("active");
    arrow.classList.toggle("active");
}

function product(){
    const button = document.querySelector(".product");
    const arrow = document.querySelector(".product_img");
    
    button.classList.toggle("active");
    arrow.classList.toggle("active");
}


/*DESKTOP JS*/

function desktopConnect(){
    
    const desktopButton = document.querySelector(".desktop_connect")

    const arrow = document.querySelector(".desktop_connect_img");

    desktopButton.classList.toggle("active");
    arrow.classList.toggle("active");
}

function desktopCompany(){

    const desktopButton = document.querySelector(".desktop_company")

    const arrow = document.querySelector(".desktop_company_img");

    desktopButton.classList.toggle("active");
    arrow.classList.toggle("active");
}

function desktopProduct(){

    const desktopButton = document.querySelector(".desktop_product")

    const arrow = document.querySelector(".desktop_product_img");

    desktopButton.classList.toggle("active");
    arrow.classList.toggle("active");
}
