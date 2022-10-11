function buttonToggle(){
    var tog = document.getElementById("hamburger");
    if (tog.innerHTML == "s"){
        tog.innerHTML = '<div><li><a href="">Home</a></li><li><a href="">About</a></li><li><a href="">Services</a></li><li><a href="">portfolio</a></li><li><a href="">Contact</a></li></div>';
    }else{
        tog.innerHTML = "";
    }

}



