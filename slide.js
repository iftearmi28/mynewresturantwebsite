
// side navigation

function openNav() {
    document.getElementById('side-nav').style.width = "250px";
}
function closeNav() {
    document.getElementById('side-nav').style.width = "0";
}
//reference of dom node and hide all children
var slideShow = function (container) {
    this.images = [];
    this.curImages = 0;
    for (let i = 0; i < container.childElementCount; i++) {
        this.images.push(container.children[i]);
        this.images[i].style.display = 'none';
    }

var nextSlide = function () {
    for (let i = 0; i < this.images.length; i++) {
        this.images[i].style.display = 'none';
    }
    this.images[this.curImages].style.display = 'block';
    this.curImages++;
    if(this.curImages >= this.images.length ){
        this.curImages = 0;
    }
    window.setTimeout(nextSlide.bind(this), 3000);
};

nextSlide.call(this);

}

slideShow(document.getElementById('slide-container')); 


//new slide
// for next prev
var slideIndex = 1;
 newSlideShow();
 function plusSlides(n) {
     newSlideShow(slideIndex += n);
 }
 
 function newSlideShow(n) {
     var i;
     var slides = document.getElementsByClassName('slide-item');
     for (let i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";         
     }
    //slideIndex++;
     
     if (n > slides.length) {
        slideIndex = 1;
     }
     if (n < 1) {
        slideIndex = slides.length;
     }
     slides[slideIndex-1].style.display = "block";
     //setTimeout(newSlideShow, 3000);
 }

 //for auto slide
 /*var autoSlideIndex = 0;
 autoSlider();
 
 
 function autoSlider() {
     var i;
     var autoSlides = document.getElementById('item-slide');
     for (let i = 0; i < autoSlides.length; i++) {
        autoSlides[i].style.display = "none";         
     }
     autoSlideIndex++;
     if (autoSlideIndex > autoSlides.length) {
        autoSlideIndex = 1;
     }
     
     autoSlides[autoSlideIndex-1].style.display = "block";
    setTimeout(autoSlider, 2000);
 }

 var autoSlideIndex = 0;
 showSlides1();
 
 function showSlides1() {
   var i;
   var slider = document.getElementsByClassName('slide-item');
 
   for (i = 0; i < slider.length; i++) {
     slider[i].style.display = "none";  
   }
   autoSlideIndex++;
   if (autoSlideIndex > slider.length) {autoSlideIndex = 1}    
   
   slider[autoSlideIndex-1].style.display = "block";  
 
   setTimeout(showSlides1, 4000); // Change image every 2 seconds
 }
*/

//read  more 
// append content

var ourStory =document.getElementById("our-story");
var ourDedicate =document.getElementById("dedicate");
var ourJourney= document.getElementById("our-journey");
var customerSer= document.getElementById("customer");
var mainDiv=document.getElementById('originial-div');

var seeallBtn=document.getElementById('btn-group1');
seeallBtn.addEventListener('click', seeAll)
function seeAll() {
    //var appendDiv=document.getElementById('append-content');
    ourStory.style.display="block";
    ourDedicate.style.display="block";
    ourJourney.style.display="block";
    customerSer.style.display="block";
  //var mainDiv=document.getElementById('originial-div');
    //appendDiv.append(mainDiv);
}

var story=document.getElementById('btn-group2');
story.addEventListener('click', storyContent)
function storyContent() {
    ourStory.style.display="block";
    ourDedicate.style.display="none";
    ourJourney.style.display="none";
    customerSer.style.display="none";
}

var dedicationBtn=document.getElementById('btn-group3');
dedicationBtn.addEventListener('click', dedicatContent)
function dedicatContent() {
    
    ourStory.style.display="none";
    ourDedicate.style.display="block";
    ourJourney.style.display="none";
    customerSer.style.display="none";
}

var journeyBtn=document.getElementById('btn-group4');
journeyBtn.addEventListener('click', journeyContent)
function journeyContent() {
    ourStory.style.display="none";
    ourDedicate.style.display="none";
    ourJourney.style.display="block";
    customerSer.style.display="none";
}

var costomerBtn=document.getElementById('btn-group5');
costomerBtn.addEventListener('click', customerContent)
function customerContent() {
    ourStory.style.display="none";
    ourDedicate.style.display="none";
    ourJourney.style.display="none";
    customerSer.style.display="block";
}

//append content

var buttons = document.getElementsByClassName("read-less-more-container");
for (var i = 0; i < buttons.length; i++){
  buttons[i].onclick = showMore;
}

function showMore() {   
  var spanText = this.querySelector(".my-text");
  var childDiv = this.querySelector(".my-container");  
  var readMore = this.querySelector(".read");  
  
  if (childDiv.style.display == "none"){
    childDiv.style.display = "inline";
    readMore.innerHTML = "Read Less";
    spanText.style.display = "none";
  }
  else{
    childDiv.style.display = "none";
    readMore.innerHTML = "Read More";
    spanText.style.display = "inline";
  }    
}
    

//model box
var modal = document.getElementById('modal-box');
var modalButton = document.getElementById('modal-button');
var closeButton = document.getElementById('close');

modalButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);

function openModal() {
    modal.style.display = "block";
    
}

function closeModal() {
    modal.style.display = "none";
}
/*
// show modal after loading 
function showModal() {  
    setTimeout(openModal, 5000);
    //setInterval(openModal, 3000);
}*/


//form validation



function loginValidate() {
    var email=document.myform.email.value;
    var password=document.myform.password.value;
   
var exp=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
var result=exp.test(email);
if(result){
    //alert('invalid email');
    document.myform.email.style.border="1px solid lightgreen";
    document.getElementById('emailerror').innerHTML="valid Email";
    document.getElementById('emailerror').style.color="rgb(22, 153, 44)";
}else{
    document.myform.email.style.border="1px solid red";
    document.getElementById('emailerror').innerHTML="Please, enter valid email";
    return false;
}    
var exp=/^[A-Za-z0-9\s]{5,10}$/;
var result=exp.test(password);
if(result){ 
    document.myform.password.style.border="1px solid lightgreen";
    document.getElementById('passworderror').innerHTML="valid password";
    document.getElementById('passworderror').style.color="rgb(22, 153, 44)";
}else{
    document.myform.password.style.border="1px solid red";
    document.getElementById('passworderror').innerHTML="Please, enter valid password";
    return false;
}



}

//background color

var changeBg= document.getElementById('change-bg');
var switchBg=document.getElementById('switch-input');

switchBg.addEventListener('click', bgChangerblack);

function bgChangerblack() {
    var elm=document.body;
    elm.classList.toggle('dark-mode');
}


// menu animate
/*
var seeMenuList = document.querySelector('.s-menu');
var effect = document.querySelectorAll('.effect div');
//var cross = document.querySelector('.cross');
var menu = document.querySelector('.menu');
var textItem=document.getElementsByClassName('.box-text');


seeMenuList.addEventListener('click', function () {
    effect.forEach(function (element) {
        element.style.width="50%";
        element.style.height="auto";
       
        
    

    })
    //menu.classList.add('menu-js');
    for (let i = 0; i < textItem.length; i++) {
    textItem[i].style.display="block";
}
})
*/
var seeList= document.querySelector('.menu-button');
var effect= document.querySelectorAll('.menu-box div');
var menu= document.querySelector('.menu-item');
//var scrollMenu=document.getElementById('scroll');

seeList.addEventListener('click', showList);
/*window.onscroll= function () {
    showList();
};*/
function showList() {
    //if(document.body.scrollTop > 1450 || document.documentElement.scrollTop > 1450){
        effect.forEach(function (element) {
        element.style.width='49%';
        element.style.visibility='visible';
        element.style.opacity='1';
        //element.style.transform='translateX(0%)';

    })
    //document.querySelectorAll('.menu-box ').className="slideRight"; 
    //}
   
}

//Animate on scroll 
AOS.init({
    offset: 120,
    duration: 1000,
});
















