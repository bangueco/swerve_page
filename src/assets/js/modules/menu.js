import menu_1 from '../../images/menu/menuSisig.png';

/**
 * Generate menu based on given value and which container should it put
 * @param {Number} quantity 
 * @param {Document} container 
 */
const menuGenerator = (quantity, container) => {
  for (let x = 1; x <= quantity; x++) {
    const menuCard = document.createElement('div');
    menuCard.classList.add('menuCard');
    const cardTitle = document.createElement('h1');
    cardTitle.classList.add('cardTitle');
    cardTitle.textContent = `Menu ${x}`;
  
    const menu1 = new Image(150, 150);
    menu1.src = menu_1;
  
    menuCard.appendChild(cardTitle);
    menuCard.appendChild(menu1);
    container.appendChild(menuCard);
  }
}

const menuPage = (content) => {
  content.innerHTML = "";
  // Header Container
  const headerContainer = document.createElement('div');
  headerContainer.style["textAlign"] = "center";
  headerContainer.style["padding"] = "25px";
  // Header
  const header = document.createElement('h1');
  header.textContent = "List of menu we have";
  // Paragraph
  const paragraph = document.createElement('p');
  paragraph.textContent = "they look tasty right?";

  // Menu Container
  const menuContainer = document.createElement('div');
  menuContainer.style['display'] = 'flex';
  menuContainer.style['flexWrap'] = 'wrap';
  menuContainer.style['gap'] = "20px";
  menuContainer.style['justifyContent'] = "center";
  menuGenerator(6, menuContainer);
  menu

  // Append elements
  headerContainer.appendChild(header);
  headerContainer.appendChild(paragraph);
  content.appendChild(headerContainer);
  content.appendChild(menuContainer);
}

export default menuPage;