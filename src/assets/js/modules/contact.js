import info from '../../images/callmeifyougetlostid.png';

const contactPage = (content) => {
  content.innerHTML = "";
  // Header Container
  const headerContainer = document.createElement('div');
  headerContainer.style["textAlign"] = "center";
  headerContainer.style["padding"] = "25px";
  // Header
  const header = document.createElement('h1');
  header.textContent = "Connect with us";

  // Contact info

  const contact = new Image(600, 400);
  contact.src = info;

  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contactContainer');
  contactContainer.style['textAlign'] = "center";
  
  headerContainer.appendChild(header);
  contactContainer.appendChild(contact);

  content.appendChild(headerContainer);
  content.appendChild(contactContainer);
}

export default contactPage;