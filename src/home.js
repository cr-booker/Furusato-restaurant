import {createLink} from "./layout";

function generateLocationDiv(){
    const locationDiv =  document.createElement("div");
    locationDiv.classList.add("location-hours");

    const addressLink = createLink("https://goo.gl/maps/EKERbRBzcBsZoHf8A",
                                   "309 14th St NW, Atlanta, GA 30318");
    addressLink.classList.add("location-link", "color-change")
    const addressLinkContainer = document.createElement("div");
    addressLinkContainer.appendChild(addressLink);
    locationDiv.appendChild(addressLinkContainer);

    const hours = document.createElement("p");
    hours.classList.add("hours-text");
    hours.textContent = "Monday through Sunday \r\n1pm - 11pm"
    locationDiv.appendChild(hours)
    return locationDiv;
}

function generateAboutSection(){
    const aboutSection = document.createElement("section");
    aboutSection.classList.add("flex-container", "about");

    const aboutTextPanel = document.createElement("div");
    aboutTextPanel.classList.add("about-text");
    
    const aboutText = document.createElement("div");
    aboutText.classList.add("container");
    const aboutTextTitle = document.createElement("h2");
    aboutTextTitle.classList.add("about-text-title")
    aboutTextTitle.textContent = "Our Story";
    aboutText.appendChild(aboutTextTitle);

    const aboutTextContent = document.createElement("p");
    aboutTextContent.classList.add("about-text-content")
    aboutTextContent.textContent = `Boasting an authentic and artistic
                                    atmosphere, Furusato (ふるさと), is the brainchild of 
                                    renowned chef Sado Takahashi. Known for his artful craftsmanship 
                                    and beautiful presentations. Furusato  translates to hometown in 
                                    japanese, honoring his roots, Chef Sado upholds the cooking 
                                    customs from the training he received in his birthplace of Okinawa, Japan.`
    aboutText.appendChild(aboutTextContent);
    aboutTextPanel.appendChild(aboutText);
    
    const aboutImgPanel = document.createElement("div");
    aboutImgPanel.classList.add("about-img"); 

    aboutSection.appendChild(aboutTextPanel);
    aboutSection.appendChild(aboutImgPanel);
    return aboutSection;
}

function renderHome(){
    const main = document.getElementsByTagName('main')[0];
    const location = generateLocationDiv();
    const about = generateAboutSection();
    main.appendChild(location);
    main.appendChild(about);
}

export {renderHome};