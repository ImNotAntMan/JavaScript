function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    /* tabcontent 클래스의 요소를 모두 가져와서 저장한 다음 안 보이게 한다. */
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    /* tablinks 클래스의 모든 요소를 얻은 다음 active 클래스 요소를 없앤다. */
    tablinks = document.getElementsByClassName("tablinks");
    for(i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
