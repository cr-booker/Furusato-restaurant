import {renderLayout} from "./layout";
import {renderHome} from "./home";
import {renderMenu} from "./menu";
import {renderContactForm} from "./contact";
import './css/style.css';

function setBanner(node){
    const main = document.getElementsByTagName('main')[0];
    const bannerTitle = document.querySelector(".banner-title");
    const bannerSubtitle = document.querySelector(".banner-subtitle"); 
    const banner = document.getElementById("headerBanner");
    banner.className = "";
    main.innerHTML = "";

    switch (node.id){
        case "home-tab":
            bannerTitle.textContent = "WELCOME";
            bannerSubtitle.textContent = "IRASHAIMASE | いらっしゃいませ";
            banner.classList.add("home-banner-img");
            renderHome();
            break;
        case "menu-tab":
            bannerTitle.textContent = "MENU";
            bannerSubtitle.textContent = "";
            banner.classList.add("menu-banner-img");
            renderMenu();
            
            break;
        case "contact-tab":
            bannerTitle.textContent = "CONTACT";
            bannerSubtitle.textContent = "";
            banner.classList.add("contact-banner-img");
            renderContactForm();
    }
}

function initPage(){
    renderLayout();
    const navList = document.querySelector(".header-navList");

    navList.addEventListener("click", (event) => {
        const navListTab = event.target;
        if (navListTab.classList.contains("navList-active")){
            return;
        }
        if ( navListTab.classList.contains("navList-entry")){
            document.querySelector(".navList-active").classList.toggle("navList-active");
            navListTab.classList.add("navList-active");
            setBanner(navListTab); 
        }
    });
};

initPage();

