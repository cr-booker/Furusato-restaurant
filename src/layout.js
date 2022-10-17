import facebookIconImg from "./imgs/icons/facebook.svg";
import  instagramIconImg from "./imgs/icons/instagram.svg";
import twitterIconImg from "./imgs/icons/twitter.svg";
import {renderHome} from "./home";

function createImg(src, alt=""){
  const image =  new Image();
  image.src = src;
  image.alt = alt;
  return image;
}

function createLink(href, text=""){
  const link = document.createElement("a");
  link.href= href;
  link.textContent = text;
  return link;
}

function generateNav(){
  const navBar = document.createElement("nav");

  const navList = document.createElement("ul");
  navList.classList.add("header-navList", "flex-container");

  const homeLiEntry = document.createElement("li");
  homeLiEntry.id = "home-tab"
  homeLiEntry.classList.add("navList-active" ,"navList-entry", "color-change");
  homeLiEntry.textContent = "Home";
  navList.appendChild(homeLiEntry);
  
  const menuLiEntry = document.createElement("li");
  menuLiEntry.id = "menu-tab"
  menuLiEntry.classList.add("navList-entry", "color-change");
  menuLiEntry.textContent = "Menu";
  navList.appendChild(menuLiEntry);

  const contactLiEntry =  document.createElement("li")
  contactLiEntry.id = "contact-tab";
  contactLiEntry.classList.add("navList-entry", "color-change");
  contactLiEntry.textContent = "Contact";
  navList.appendChild(contactLiEntry);

  navBar.appendChild(navList);
  return navBar;
}

function generateBanner(){
  const headerBanner = document.createElement("div");
  headerBanner.id = "headerBanner";
  headerBanner.classList.add("home-banner-img");

  const bannerTitle = document.createElement("h2");
  bannerTitle.classList.add("banner-title");
  bannerTitle.textContent = "WELCOME";

  const bannerSubtitle = document.createElement("p"); 
  bannerSubtitle.classList.add("banner-subtitle");
  bannerSubtitle.textContent = "IRASHAIMASE | いらっしゃいませ";
  
  const bannerText = document.createElement("div");
  bannerText.classList.add("banner-text");
  bannerText.appendChild(bannerTitle);
  bannerText.appendChild(bannerSubtitle);
  headerBanner.appendChild(bannerText);

  return headerBanner;
}
  
function generateHeader(){
    const header = document.createElement('header');
    const pageH1Title = document.createElement("h1");
    pageH1Title.textContent = "Furusato";

    const pageTitle = document.createElement("div");
    pageTitle.id = "page-title";
    pageTitle.appendChild(pageH1Title);

    const navBar = generateNav();
    const headerFlexContainer = document.createElement("div");
    headerFlexContainer.classList.add("flex-container", "container");
    headerFlexContainer.appendChild(pageTitle);
    headerFlexContainer.appendChild(navBar);
    header.appendChild(headerFlexContainer);

    const headerBanner = generateBanner(); 
    header.appendChild(headerBanner);
    return header;
}

function generateSocialLinks(){
  const socialLinks = document.createElement("div");
  socialLinks.classList.add("social");

  const facebookLink = createLink("https://facebook.com");
  facebookLink.classList.add("social-link");

  const facebookIcon = createImg(facebookIconImg, "facebook logo");
  facebookIcon.classList.add("social-link-icon");
  facebookLink.appendChild(facebookIcon);  
  socialLinks.appendChild(facebookLink);
  
  const instagramLink = createLink("https://instagram.com");
  instagramLink.classList.add("social-link");

  const instagramIcon = createImg(instagramIconImg, "instagram logo");
  instagramIcon.classList.add("social-link-icon");
  instagramLink.appendChild(instagramIcon);
  socialLinks.appendChild(instagramLink);

  const twitterLink = createLink("https://twitter.com");
  twitterLink.classList.add("social-link");

  const twitterIcon = createImg(twitterIconImg, "twitter logo");
  twitterIcon.classList.add("social-link-icon");
  twitterLink.appendChild(twitterIcon);
  socialLinks.appendChild(twitterLink);
  
  return socialLinks;
}

function generateFooter(){
  const footer = document.createElement("footer");
  const social = generateSocialLinks();
  footer.appendChild(social);
  const copyrightContainer = document.createElement("div");
  copyrightContainer.classList.add("copyright");
  const copyright = document.createElement("small");
  copyright.classList.add("copyright-notice")
  copyright.textContent = "© 2021 Furusato Japanese Restaurant.";
  copyrightContainer.appendChild(copyright);
  footer.appendChild(copyrightContainer);
  return footer;

}

function renderLayout(){
    const contentDiv = document.getElementById("content");
    const headerPanel = generateHeader();
    contentDiv.appendChild(headerPanel);
    
    const contentPanel = document.createElement("main");
    contentDiv.appendChild(contentPanel);
    const footer = generateFooter();
    contentDiv.appendChild(footer);
    renderHome()
}

export {renderLayout};
export {createLink};