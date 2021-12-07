function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "";
    }

    tablinks = document.getElementsByClassName("tablink");
    for(i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks.className.replace(" active", "");
    }
    
    document.getElementById(cityName).style.display = "block";
    evt.cuttentTarget.className += " active";
}