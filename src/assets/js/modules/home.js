import smudge from '../../images/smudge.png';

const homePage = (content) => {
  content.innerHTML = "";
  // Header Container
  const headerContainer = document.createElement('div');
  headerContainer.style["textAlign"] = "center";
  headerContainer.style["padding"] = "25px";
  // Header
  const header = document.createElement('h1');
  header.textContent = "Best restaurant in your local area";
  // Paragraph
  const paragraph = document.createElement('p');
  paragraph.textContent = "swerving since 1899 with passion and love"

  // Image Container
  const imageContainer = document.createElement('div');
  imageContainer.style['textAlign'] = "center";
  // Image
  const smudgeTheCat = new Image(500, 350);
  smudgeTheCat.src = smudge;

  // Append elements
  headerContainer.appendChild(header);
  headerContainer.appendChild(paragraph);
  imageContainer.appendChild(smudgeTheCat);
  content.appendChild(headerContainer);
  content.appendChild(imageContainer);
}

export default homePage;