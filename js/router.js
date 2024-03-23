//handle link default behaviour and location changes
const route = (event) => {

    //capture the click event for the link which we use to call preventDefault(). This prevents
    // the anchor tag from performing its default behaviour of navigating to the link target or href
    event = event || window.event;
    event/preventDefault();
    // pass our href value to the third argument
    // this updates the url on the browser
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "pages/404.html",
    "/": "pages/home.html",
    "/about": "pages/about.html",
};

const handleLocation = async () => {
    //capture pathname from current location
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("page-wrapper").innerHTML = html;

};

// handle cases where users click the forward or back buttons
window.onpopstate = handleLocation;

//once thats done we can give global access to our route function
window.route = route;

// make a call to handle location on page load
// to handle the correct page for whatever the user first lands on
handleLocation();