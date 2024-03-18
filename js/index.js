function sidebar(){
   var sidebarElement = document.getElementById("sidebar")
   var bodyElement = document.getElementById("body")
   var landingPage = document.getElementById("landing-page")

   //desktop
   if (window.screen.width >= 1024 && window.screen.height >= 768) {
     if(sidebarElement.style.display == "none") {
          sidebarElement.style.display = "block";
          bodyElement.style.overflow = 'hidden'; 
     }
     else {
          sidebarElement.style.display = "none";
          bodyElement.style.overflow="auto";
     }
   }
   else {
        if (sidebarElement.style.display == "none") {
             
             bodyElement.style.overflow = 'hidden'; 
             landingPage.style.visibility = "hidden";
             sidebarElement.style.display="block";
          }
          else {
               bodyElement.style.overflow="auto";
               sidebarElement.style.display="none";
               landingPage.style.visibility = "visible";
          }
   }
}
