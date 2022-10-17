
import {createLink} from "./layout";

function createFormWidget(widget, widgetId, labelText, attributes={}){
    const widgetDiv = document.createElement("div");
    widgetDiv.classList.add("form-control-container");

    const widgetLabel = document.createElement("label");
    widgetLabel.classList.add("contact-form-label");
    widgetLabel.textContent = labelText;
    widgetLabel.htmlFor = widgetId;
    widgetDiv.appendChild(widgetLabel);

    const formControl = document.createElement(widget);
    formControl.id = widgetId;

    for (const key in attributes){
        if( (attributes.hasOwnProperty(key)) ){
            formControl.setAttribute(key, attributes[key]);
        }
    }
    widgetDiv.appendChild(formControl);
    return widgetDiv;
}

function createContactLink(heading, href, text=""){
    const contactLinkContainer = document.createElement("div");
    contactLinkContainer.classList.add("contact-detail-link");

    const contactHeading = document.createElement("h2");
    contactHeading.classList.add("contact-link-heading");
    contactHeading.textContent = heading;
    contactLinkContainer.appendChild(contactHeading);

    const contactLink = createLink(href, text);
    contactLink.classList.add("contact-link", "color-change");
    contactLinkContainer.appendChild(contactLink);
    return contactLinkContainer;
}

function generateContactDetails(){
    const contactDetailsContainer = document.createElement("div");
    contactDetailsContainer.classList.add("contact-details");

    const phoneNumber = createContactLink("Call",
                                              "tel:404-555-1234",
                                              "404-555-1234");
    contactDetailsContainer.appendChild(phoneNumber);

    const emailAddress = createContactLink("Email",
                                          "mailto:furusato@furusatoresturant.com",
                                          "furusato@furusatoresturant.com");
    contactDetailsContainer.appendChild(emailAddress);

    const location = document.createElement("div");
    location.classList.add("contact-detail-link");
    const locationHeading = document.createElement("h2");
    locationHeading.classList.add("contact-link-heading");
    locationHeading.textContent = "Visit";
    location.appendChild(locationHeading);

    const address = document.createElement("p");
    address.textContent = "Furusato\n\r309 14th St. NW\n\rAtlanta,GA 30318";
    address.classList.add("contact-address");
    location.appendChild(address);

    const addressLink = createLink("https://goo.gl/maps/EKERbRBzcBsZoHf8A",
                                   "Google Maps");
    addressLink.classList.add("google-maps-btn","contact-btn")
    location.appendChild(addressLink);
    contactDetailsContainer.appendChild(location);

    return contactDetailsContainer;
}

function generateContactForm(){
    const contactFormContainer = document.createElement("div");
    contactFormContainer.classList.add("contact-container", "flex-container");

    const contactForm = document.createElement("form");
    contactForm.classList.add("contact-form")

    const contactHeading = document.createElement("h2");
    contactHeading.classList.add("contact-form-heading");
    contactHeading.textContent = "Contact Us";
    contactForm.appendChild(contactHeading);

    const formFlexContainer = document.createElement("div");
    formFlexContainer.classList.add("form-flex");
    
    const contactInfoContainer = document.createElement("div");
    contactInfoContainer.classList.add("contact-form-info-container")
    const nameformInput = createFormWidget("input", "contact-name", "Name:", 
                                          {"class":"contact-form-input","type":"text"});
    contactInfoContainer.appendChild(nameformInput);

    const emailformInput = createFormWidget("input", "contact-email", "E-mail:", 
                                           {"class":"contact-form-input","type":"text"});
    contactInfoContainer.appendChild(emailformInput);

    const subjectformInput = createFormWidget("input", "contact-subject", "Subject:", 
                                             {"class":"contact-form-input", "type":"text"});
    contactInfoContainer.appendChild(subjectformInput);
    formFlexContainer.appendChild(contactInfoContainer);

    const messageBoxContainer = document.createElement("div"); 
    messageBoxContainer.classList.add("contact-form-message-container");
    const messageBox = createFormWidget("textarea", "contact-message", 
                                        "Message:", {"rows":"15", "cols":"45"});
    messageBox.classList.add("form-message-box");
    messageBoxContainer.appendChild(messageBox);

    const contactFormButton = document.createElement("button");
    contactFormButton.classList.add("contact-form-btn", "contact-btn");
    contactFormButton.textContent = "Send";
    messageBoxContainer.appendChild(contactFormButton);
    formFlexContainer.appendChild(messageBoxContainer);

    contactForm.appendChild(formFlexContainer);
    contactFormContainer.appendChild(contactForm);

    const contactDetails = generateContactDetails();
    contactFormContainer.appendChild(contactDetails)
    return contactFormContainer;
}


function renderContactForm(){
    const main = document.getElementsByTagName("main")[0];
    const form = generateContactForm();
    main.appendChild(form);
}

export {renderContactForm}