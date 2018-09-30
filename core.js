/** Core js: ******************************************************************/

let main = document.querySelector('#main');
let contributorsSection = main.querySelector('#contributors');

function addData (data) {
  data.forEach(({name, about}) => {
    name  = escapeHtml(name);
    about = escapeHtml(about);

    contributorsSection.innerHTML +=
    '<article>' +
      `<h3 class="name">Hello! I am <b>${name}</b>, here is a little about me:</h3>` +
      `<p class="about">${about}</p>` +
    '</article>';
  });
}

/** Escape HTML special chars in JS for basic security */

function escapeHtml(unsafe) {
  return unsafe
   .replace(/&/g, "&amp;")
   .replace(/</g, "&lt;")
   .replace(/>/g, "&gt;")
   .replace(/"/g, "&quot;")
   .replace(/'/g, "&#039;");
 }

/** Add your details below: ***************************************************/

const data = [
  {
    "name":  "Sarnava",
    "about": "I am an open source enthusiast and free lancer involved in various projects and contributing to a host of open source projects. This repo was initially created when I was learning JQuery, but now this repo will serve a noble cause! It will test the power of OPEN SOURCE in GENERAL and HACKTOBERFEST in particular. ANYONE seeing this repo just comment HI with your name just as I have done. Make sure that your name is within the data array of objects and include some details about yourself! IFF you want you can STAR the repo and SPREAD it among your friends(It will help us get bigger). Let us all be friends and remain conected."
  },
  {
    "name":  "U-ways",
    "about": "I like tea and contributing to open-source!"
  },
];

addData(data);
