projbox = document.getElementById("project-container")
linkbox = document.getElementById("links")
infobox = document.getElementById("info")
contactbox = document.getElementById("contact")

function homeButton(){
  projbox.classList.add("hidden");
  contactbox.classList.add("hidden");
  setTimeout(function(){
    infobox.classList.remove("hidden")
    linkbox.classList.remove("hidden")
    linkbox.classList.add("visible");
    infobox.classList.add("visible");
    homebox.innerHTML ="Hello there! I'm a creative technologist based in the UK, blending a love for graphic design with a passion for programming. Leveraging a First Class Honours degree in Mathematics and a distinction-bound Master's in Artificial Intelligence, I marry analytical prowess with cutting-edge tech skills to craft innovative solutions. Adept at mastering new tools and technologies, I'm on the quest for challenging roles to fuel my insatiable appetite for learning and contribute my unique blend of skills. Let's reshape the future of technology, together!";  
  }, 500);
}

function projectsButton(){
  linkbox.classList.add("hidden");
  infobox.classList.add("hidden");
  contactbox.classList.add("hidden");
  setTimeout(function(){
    projbox.classList.add("visible");
    projbox.classList.remove("hidden");
  }, 500);
}

function contactButton(){
  projbox.classList.add("hidden");
  infobox.classList.add("hidden");
  setTimeout(function(){
    contactbox.classList.add("visible");
    contactbox.classList.remove("hidden");
    linkbox.classList.add("visible");
    linkbox.classList.remove("hidden");
    contactbox.innerHTML="Contact me via email @ kyranford@hotmail.co.uk or using the links!"
}, 500);
}

// JavaScript to hide the custom scrollbar when not scrolling
const projectContainer = document.querySelector('.project-container');
projectContainer.addEventListener('mouseenter', () => {
  projectContainer.classList.add('show-scrollbar');
});
projectContainer.addEventListener('mouseleave', () => {
  projectContainer.classList.remove('show-scrollbar');
});