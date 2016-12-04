
//Add scrollspy to body
$('body').scrollspy({target: ".navbar", offset: 90});

//Slow scrolling 
$(".navbar a").on('click', function(event) {

  


    // Prevent button change immidiately on click, will wait to scroll and change from scroll location
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    
    //Scroll takes 1000 milliseconds
    
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){
      window.location.hash = hash;
    });
});