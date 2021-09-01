function openmenu() {
  document.getElementById("menu-items").style.display="flex";
  document.getElementById("menu-icon2").style.display="flex";
  document.getElementById("menu-icon").style.display="none";
}

function closemenu() {
  document.getElementById("menu-items").style.display="none";
  document.getElementById("menu-icon2").style.display="none";
  document.getElementById("menu-icon").style.display="flex";
}

function thacks(){
    document.getElementById("all-events-content").style.display="none";
    document.getElementById("thacks-content").style.display="flex";
    document.getElementById("rec-content").style.display="none";

    document.getElementById("thacks").setAttribute("class", "event-category");
    document.getElementById("all").removeAttribute("class", "event-category");
    document.getElementById("recon-o-rax").removeAttribute("class", "event-category");

    document.getElementById("thacks-heading").style.color="white";
    document.getElementById("all-event-heading").style.color="black";
    document.getElementById("rec-heading").style.color="black";
}

function recno(){
  document.getElementById("all-events-content").style.display="none";
  document.getElementById("thacks-content").style.display="none";
  document.getElementById("rec-content").style.display="flex";

  document.getElementById("thacks").removeAttribute("class", "event-category");
  document.getElementById("all").removeAttribute("class", "event-category");
  document.getElementById("recon-o-rax").setAttribute("class", "event-category");

  document.getElementById("thacks-heading").style.color="black";
  document.getElementById("all-event-heading").style.color="black";
  document.getElementById("rec-heading").style.color="white";
}

function allcontent(){
  document.getElementById("all-events-content").style.display="flex";
  document.getElementById("thacks-content").style.display="none";
  document.getElementById("rec-content").style.display="none";

  document.getElementById("thacks").removeAttribute("class", "event-category");
  document.getElementById("all").setAttribute("class", "event-category");
  document.getElementById("recon-o-rax").removeAttribute("class", "event-category");

  document.getElementById("thacks-heading").style.color="black";
  document.getElementById("all-event-heading").style.color="white";
  document.getElementById("rec-heading").style.color="black";
}