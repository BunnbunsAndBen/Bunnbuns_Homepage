function $(id){  //less typing
    if(id.startsWith(".")){
        return document.getElementsByClassName(id.substring(1));
    }else{
        return document.getElementById(id);
    }
}

/* nav mobile menu & button */
document.addEventListener("click", function(event) {
    var isClickInside = $('mobile-btn').contains(event.target);
    var navLinks = $('nav-links').contains(event.target);
    
    if($("nav-links").style.display == "none" || $("nav-links").style.display == ""  || navLinks){
        $('nav-links').style.display = "block";
    }else{
        $("nav-links").style.display = "none";
    }
    if (!isClickInside && !navLinks) {
        //the click was outside the nav dropdown
        $("nav-links").style.display = "none";
    }
});
// set devMode to false in production //
var devMode = false;

var devBaseUrl = "/";
var baseUrl = "";

if(devMode){
    baseAPI = devBaseUrl;
    baseUrl = devBaseUrl;
}else{
    baseAPI = baseUrl;
}
