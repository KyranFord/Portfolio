projbox = document.getElementById("project-container")
linkbox = document.getElementById("links")
infobox = document.getElementById("info")
contactbox = document.getElementById("contact")

function homeButton(){
  projbox.classList.add("hidden");
  linkbox.classList.remove("hidden");
  infobox.classList.remove("hidden");
  contactbox.classList.add("hidden");
  homebox.innerHTML ="Hello there! I'm a creative technologist based in the UK, blending a love for graphic design with a passion for programming. Leveraging a First Class Honours degree in Mathematics and a distinction-bound Master's in Artificial Intelligence, I marry analytical prowess with cutting-edge tech skills to craft innovative solutions. Adept at mastering new tools and technologies, I'm on the quest for challenging roles to fuel my insatiable appetite for learning and contribute my unique blend of skills. Let's reshape the future of technology, together!";

}

function infoButton(){
  infobox.classList.add("visible");
  infobox.classList.remove("hidden");
  linkbox.classList.add("visible");
  linkbox.classList.remove("hidden");
  projbox.classList.add("hidden");
  contactbox.classList.add("hidden");
  infobox.innerHTML="Welcome to my portfolio website! As a developer and graphic designer with a Bachelor's degree in Mathematics and a Master's degree in Artificial Intelligence, I offer a unique blend of skills that enable me to create visually stunning designs that are both user-friendly and intelligent. With years of experience in both fields, I bring a fresh perspective to every project I work on, whether it's building a custom website, creating a new brand identity, or developing a software solution. I invite you to explore my portfolio and see how I can help bring your vision to life with innovative and effective solutions. Let's work together to achieve your goals!";
}

function projectsButton(){
  projbox.classList.add("visible");
  projbox.classList.remove("hidden");
  linkbox.classList.add("hidden");
  infobox.classList.add("hidden");
  contactbox.classList.add("hidden");
}

function contactButton(){
  contactbox.classList.add("visible");
  contactbox.classList.remove("hidden");
  linkbox.classList.add("visible");
  linkbox.classList.remove("hidden");
  projbox.classList.add("hidden");
  infobox.classList.add("hidden");
  contactbox.innerHTML="Contact me via email @ kyranford@hotmail.co.uk or using the links!"
}
