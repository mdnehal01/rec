function blueThemeOn(){
    navbar.style.backgroundColor="#04345C";
    document.getElementById("logo-nav").style.backgroundColor="#1E77BD";
    document.getElementById("rajkiya").style.color="white";
    slider.style.backgroundColor="#BAD3E4";
    document.getElementById("col-notice").style.border="2px solid #04345C";
    document.getElementById("col-buttons").style.border="2px solid #04345C";

    var btn = document.querySelectorAll(".btn-14");
    btn.forEach(butt => {
        butt.style.background="#10564F";
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

function defaultTheme(){
    navbar.style.backgroundColor="";
    document.getElementById("logo-nav").style.backgroundColor="";
    document.getElementById("rajkiya").style.color="";
    slider.style.backgroundColor="";
    document.getElementById("col-notice").style.border="";
    document.getElementById("col-buttons").style.border="";

    var btn = document.querySelectorAll(".btn-14");
    btn.forEach(butt => {
        butt.style.background="";
    });

    document.getElementsByClassName("free")[0].style.border="";

    var marq = document.querySelectorAll(".marq-a");
    marq.forEach(marqu => {
        marqu.style.color="";
    });


// profile
    var photo = document.querySelectorAll(".profile-photos");
    photo.forEach(profile => {
        profile.style.boxShadow = "";
    })

    //profile Image
    var image = document.querySelectorAll(".img");
    image.forEach(img => {
        img.style.border="";
    })
}



