// header script
function menubtn(){
    let menu = document.getElementById("menuu-btn");
    let menuwrap = document.querySelector(".ei-site-nav-list");
    menu.addEventListener('click' , function(){
        menuwrap.classList.toggle("ei-show");
    });
    function activelinks(){
      // active class
      let links = document.querySelectorAll(".ei-nav-link");
      links.forEach((link) => {
        link.addEventListener("click", function () {
          // Remove 'active' class from all links
          links.forEach((item) => item.classList.remove("active"));

          // Add 'active' class to the clicked link
          this.classList.add("active");
        });
      });
    }
    activelinks();
}
menubtn();
    
// hero slider script
document.addEventListener( 'DOMContentLoaded', function() {
    var splidehero = new Splide( '.ei-splide-hero', {
    perPage: 1,
    rewind : true,
    arrows: false,
    pagination: true,
    perMove : 1
    } );
    splidehero.mount();
});

// video player play/pause
function playPause() {
    let myVideo = document.getElementById("video1");
    let play = document.getElementById("play-video");
    let overlay = document.getElementById("overlay");
    if (myVideo.paused){
        myVideo.play();     
        play.style.display = "none";
        overlay.style.display = "none";
    }else{
        myVideo.pause();
        play.style.display = "block";
        overlay.style.display = "block";
    }
} 