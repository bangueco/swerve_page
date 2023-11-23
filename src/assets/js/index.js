import '../css/style.css';
import homePage from './modules/home.js';
import menuPage from './modules/menu.js';

const content = document.querySelector('#content');

/**
 * Render content based on parameter
 * 
 * Available pages: home, menu and contact
 * 
 * @param {String} page 
 */
const renderContent = (page) => {
  if (page === 'home') return homePage(content);
  if (page === 'menu') return menuPage(content);
}

// Event listeners for buttons

document.querySelector('#home').addEventListener('click', () => {
  renderContent('home');
});

document.querySelector('#menu').addEventListener('click', () => {
  renderContent('menu');
});

window.onload = () => {
  // default content to be used
  renderContent('home');
}