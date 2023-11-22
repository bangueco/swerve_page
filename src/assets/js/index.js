import '../css/style.css';
import homePage from './modules/home.js';

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
}

// Event listeners for buttons

document.querySelector('#home').addEventListener('click', () => {
  renderContent('home');
});

window.onload = () => {
  // default content to be used
  renderContent('home');
}