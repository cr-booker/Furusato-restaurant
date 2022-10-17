function createMenuItem(name, description, price){
    const menuItem = document.createElement("li");
    menuItem.classList.add("menu-item");

    const itemNameContainter = document.createElement("div");
    itemNameContainter.classList.add("menu-item-name-container");
    const itemName = document.createElement("p");
    itemName.classList.add("menu-item-name");
    itemName.textContent = name;
    itemNameContainter.appendChild(itemName);

    const itemPrice = document.createElement("span");
    itemPrice.classList.add("menu-item-price");
    itemPrice.textContent = price;
    itemNameContainter.appendChild(itemPrice);

    menuItem.appendChild(itemNameContainter);

    const itemDescription = document.createElement("p");
    itemDescription.classList.add("menu-item-description");
    itemDescription.textContent = description;
    menuItem.appendChild(itemDescription);
    return menuItem;
}

function generateMenuSection(name, menuItems){
    const menuSection = document.createElement("div");
    menuSection.classList.add("menu-section");

    const menuTitle = document.createElement("h2");
    menuTitle.classList.add("menu-section-title");
    menuTitle.textContent = name;
    menuSection.appendChild(menuTitle);

    const menuItemList = document.createElement("ul");
    menuItemList.classList.add("menu-list");
    menuSection.appendChild(menuItemList);

    const itemsToAdd = [].concat(menuItems || []);
    itemsToAdd.forEach(item => {menuItemList.appendChild(item)})
    return menuSection;
}


function renderMenu(){
    const main = document.getElementsByTagName("main")[0];
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const appetizers = [
        createMenuItem("Agedashi",
        "Deep fried tofu with bonito flakes",
        "6"), 

        createMenuItem("Shrimp Shumai", 
        "Steamed Shrimp Dumplings",
        "6"),

        createMenuItem("Gyoza", 
        "Deep fried pork dumpling",
        "5"),

        createMenuItem("Hamachi Kama", 
        "Grilled yellowtail collar",
        "15"),
    ]
    const appetizersSection = generateMenuSection("Appetizers", appetizers);
    menuContainer.appendChild(appetizersSection);

    const ramenAndUdon = [
        createMenuItem("Tonkatsu Ramen",
        "Pork chasu, egg, & vegetables in rich pork bone broth",
        "12"),

        createMenuItem("Chicken Udon",
        "Chicken, egg, spinach, green onion and fish cake in shoyu broth",
        "10")
    ]
    const ramenUdonSection = generateMenuSection("Ramen & Udon", ramenAndUdon);
    menuContainer.appendChild(ramenUdonSection);

    const sushi = [
        createMenuItem("Dried Gourd Roll (Kanpyo Maki)",
        "Savory and sweet traditional ingredient made from gourd",
        "10"),

        createMenuItem("Eel & cucumber roll (Unakyu maki)",
        "Grilled eel, cucumber and avocado with eel sauce",
        "14"),

        createMenuItem("Yellowtail Roll (Negihama Maki)",
        "tender diced yellowtail sashimi mixed with green onion",
        "14"),


        createMenuItem("Kakinoha-zushi",
        "pressed sushi rice topped with salmon & wrapped persimmon leaves",
        "16"),

        createMenuItem("Temaki",
        "egg, tuna, cucumber, Japanese mushrooms, and pickled plum",
        "15"),
    ]

    const sushiSection = generateMenuSection("Sushi", sushi);
    menuContainer.appendChild(sushiSection);

    const desserts = [
        createMenuItem("Matcha Cheese Cake",
        "Smooth and creamy matcha cheesecake with a sweet blueberry swirl.",
        "6"),

        createMenuItem("Matcha Box",
        "green tea ice cream, azuki bean, mochi, kinako sprinkled on w/sweet soy reduction ",
        "7"),

        createMenuItem("Mochi Icecream",
        "vanilla, with strawberry sauce drizzled and kinako powder sprinkled ",
        "6"),
    ]

    const dessertSection = generateMenuSection("Desserts", desserts);
    menuContainer.appendChild(dessertSection);

    menu.appendChild(menuContainer);
    main.appendChild(menu);
}

export {renderMenu}
