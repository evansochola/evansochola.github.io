function sidebar(){
   var sidebarElement = document.getElementById("sidebar")
   var mainElement = document.getElementById("main")
   var footerElement = document.getElementById("footer")

   if (sidebarElement.style.display == "none") {
        sidebarElement.style.display="block"
        mainElement.style.display="none"
        footerElement.style.display="none"
   }
   else {
        sidebarElement.style.display="none"
        mainElement.style.display="block"
        footerElement.style.display="block"
   }
}
