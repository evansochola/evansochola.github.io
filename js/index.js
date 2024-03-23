function sidebar(){
   var sidebarElement = document.getElementById("sidebar")
   var bodyElement = document.getElementById("body")
   var landingPage = document.getElementById("landing-page")
   var pageWrapper = document.getElementById("page-wrapper")

   //desktop
   if (window.screen.width >= 1024 && window.screen.height >= 768) {
     if(sidebarElement.style.display == "none") {
          sidebarElement.style.display = "block";
     }
     else {
          sidebarElement.style.display = "none";
     }
   }
   else {
        if (sidebarElement.style.display == "none") {
             
             bodyElement.style.overflow = 'hidden'; 
             pageWrapper.style.visibility = "hidden";
             sidebarElement.style.display="block";
          }
          else {
               bodyElement.style.overflow="auto";
               pageWrapper.style.visibility = "visible";
               sidebarElement.style.display="none";
          }
   }
}
