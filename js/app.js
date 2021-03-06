/* LOADING */
const container = $('.container');
const sound = $('audio')[0];
const startSound= () => sound.pause();
const openPage = () =>{
    $('.loader').fadeOut('5000');  //user can see loading sign
    container.fadeIn('3000');
    sound.play();
}

container.css('display','none');
$(window).on('load', () => setTimeout(openPage, 1000));
setTimeout(startSound, 4000); //it should last 3s, so I added 1s from previous setTimeout


/* MENU */ 
const header = $('header');
const menu = $('nav.menu');
let headerPosition = header.offset().top;
const hamburgerMenu = $('div.hamburgerMenu');
const hamburgerList = $('ul.hamburgerList');
const hamburgerItem = $("div.hamburgerItem");

let scrollFunction = ()=>{
    let scrollDocument = $(document).scrollTop();
        
    if (scrollDocument>=headerPosition){
        menu.addClass('sticky');
    }else{
        menu.removeClass('sticky');
    }
}

let hamburgerFunction = () => {
    hamburgerList.slideDown(500);
    hamburgerItem.css("backgroundColor","#22a389");
    hamburgerItem.first().css({
        "transform-origin": "30% 30%",
        "transform": "rotate(60deg)",
        "transition-duration": "2s"
    });
    hamburgerItem.eq(1).css({
        "transform": "rotate(-60deg)",
        "transition-duration": "2s"
    });
    hamburgerItem.last().css("display","none"); 
}

let hamburgerListFunction = () => {
   hamburgerItem.css("backgroundColor","grey");
   hamburgerItem.first().css({
       "transform": "rotate(0deg)",
       "transition-duration": "2s"
   });
   hamburgerItem.eq(1).css({
       "transform": "rotate(0deg)",
       "transition-duration": "2s"
   });
   hamburgerItem.last().show(2000);
   hamburgerList.delay(2000).slideUp(500);
};

hamburgerList.hide();
$(window).on('scroll', scrollFunction);
hamburgerMenu.on('click', hamburgerFunction);
hamburgerList.on('click', hamburgerListFunction);



/* SCROLLING */ 
let scroll = () =>{
   $('a[href^="#"]').on('click',function(event){
       let href = $(this).attr('href');
       let desiredHeight = ($(window).height() * 0.14);
        
       if(href.length) {
           event.preventDefault();
           $('html, body').animate({
               scrollTop: $('body').find(href).offset().top-desiredHeight
           },1000);
       }
   });
};
scroll();

//document.cookie = "username=Mokon";


/*
 Before:
 
 // LOADING
var container = $('.container');
var sound = $('audio')[0];
container.css('display','none');

$(window).on('load', function() {
    setTimeout(function(){ //user can see loading sign
        $('.loader').fadeOut('5000');
        container.fadeIn('3000');
        sound.play();
    },1000)
});

setTimeout(function(){
    sound.pause();
},4000); //it should last 3s, so I added 1s from previous setTimeout


// MENU 
var header = $('header');
var menu = $('nav.menu');
var headerPosition = header.offset().top;

$(window).on('scroll',function(){
    var scrollDocument = $(document).scrollTop();
    
    if (scrollDocument>=headerPosition){
        menu.addClass('sticky');
    }else{
        menu.removeClass('sticky');
    }
});


var hamburgerMenu = $('div.hamburgerMenu');
var hamburgerList = $('ul.hamburgerList');
var hamburgerItem = $("div.hamburgerItem");

hamburgerList.hide();

hamburgerMenu.on('click', function(){
    hamburgerList.slideDown(500);
    hamburgerItem.css("backgroundColor","#22a389");
    hamburgerItem.first().css({
        "transform-origin": "30% 30%",
        "transform": "rotate(60deg)",
        "transition-duration": "2s"
    });
    hamburgerItem.eq(1).css({
        "transform": "rotate(-60deg)",
        "transition-duration": "2s"
    });
    hamburgerItem.last().css("display","none"); 
});

hamburgerList.on('click', function(){
   hamburgerItem.css("backgroundColor","grey");
   hamburgerItem.first().css({
       "transform": "rotate(0deg)",
       "transition-duration": "2s"
   });
   hamburgerItem.eq(1).css({
       "transform": "rotate(0deg)",
       "transition-duration": "2s"
   });
   hamburgerItem.last().show(2000);
   $(this).delay(2000).slideUp(500);
});


// SCROLLING
function scroll(){
   $('a[href^="#"]').on('click',function(event){
       var href = $(this).attr('href');
       var desiredHeight = ($(window).height() * 0.14);
        
       if(href.length) {
           event.preventDefault();
           $('html, body').animate({
               scrollTop: $('body').find(href).offset().top-desiredHeight
           },1000);
       }
   });
};
scroll();
*/