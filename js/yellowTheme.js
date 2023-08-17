function yellowThemeOn(){
    navbar.style.backgroundColor="#B22A80";
    document.getElementById("logo-nav").style.backgroundColor="#E930C0";
    document.getElementById("rajkiya").style.color="#FEFF60";
    slider.style.backgroundColor="#FF8EF9";
    document.getElementById("col-notice").style.border="2px solid #B22A80";
    document.getElementById("col-buttons").style.border="2px solid #B22A80";

    var btn = document.querySelectorAll(".btn-14");
    btn.forEach(butt => {
        butt.style.background="#B22A80";
    });

// Marquee
    document.getElementsByClassName("free")[0].style.border="2px dashed #1E77BD";

    var marq = document.querySelectorAll(".marq-a");
    marq.forEach(marqu => {
        marqu.style.color="#10564F";
    }); //marquee end


// profile
    var photo = document.querySelectorAll(".profile-photos");
    photo.forEach(profile => {
        profile.style.boxShadow = "1px -1px 4px #04345C";
    });

    //profile Image
    var image = document.querySelectorAll(".img");
    image.forEach(img => {
        img.style.border="2px solid #1E77BD";
    });
    



    
} //function closing
