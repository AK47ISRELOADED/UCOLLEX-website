gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();




gsap.to("#nav",{
    top:"-20%",
    scrollTrigger:{
      scroller:"#main",
      trigger:"#nav",
      start:"top -10%",
      end:"top -10%",
      scrub:true,
    //   markers:true,
    }
})
  gsap.to("#mov-logo",{
    left:"-100%",
    scrollTrigger:{
        scroller:"#main",
        trigger:"#mov-logo",
        start:"top 90%",
        // markers:true,
        
    }
})




  var i = document.querySelector("#plus");
var hide = document.querySelector("#hide1");
var qt1 = document.querySelector("#quest1");

i.addEventListener("mouseenter",function(){


    hide.style.opacity = "1";
    hide.style.height = "18vh";
    qt1.style.backgroundColor = "#fff";
    qt1.style.color = "#000";
    i.style.rotate = "-90deg";
    console.log("heyyy");
    
   
})

i.addEventListener("mouseleave",function(){


      hide.style.opacity = "0";
    hide.style.height = "0vh";
    qt1.style.backgroundColor = "#000";
    qt1.style.color = "#fff";
  
    i.style.rotate = "90deg";
    console.log("hello");
    
  })

  var i1 = document.querySelector("#plus1");
var hide2 = document.querySelector("#hide2");
var qt2 = document.querySelector("#quest2");


i1.addEventListener("mouseenter",function(){


    hide2.style.opacity = "1";
    hide2.style.height = "18vh";
    qt2.style.backgroundColor = "#fff";
    qt2.style.color = "#000";
  
    i1.style.rotate = "-90deg";
    console.log("heyyy");
    
   
})

i1.addEventListener("mouseleave",function(){


      hide2.style.opacity = "0";
    hide2.style.height = "0vh";
    qt2.style.backgroundColor = "#000";
    qt2.style.color = "#fff";
  
    i1.style.rotate = "90deg";
    console.log("hello");
    
  })





  var i2 = document.querySelector("#plus2");
  var hide3 = document.querySelector("#hide3");
  var qt3 = document.querySelector("#quest3");

  
  i2.addEventListener("mouseenter",function(){
  
  
      hide3.style.opacity = "1";
      hide3.style.height = "18vh";
      qt3.style.backgroundColor = "#fff";
      qt3.style.color = "#000";
    
      i2.style.rotate = "-90deg";
      console.log("heyyy");
      
     
  })
  
  i2.addEventListener("mouseleave",function(){
  
  
        hide3.style.opacity = "0";
      hide3.style.height = "0vh";
      qt3.style.backgroundColor = "#000";
      qt3.style.color = "#fff";
    
      i2.style.rotate = "90deg";
      console.log("hello");
      
    })
  

    var i3 = document.querySelector("#plus3");
    var hide4 = document.querySelector("#hide4");
    var qt4 = document.querySelector("#quest4");

    
    i3.addEventListener("mouseenter",function(){
    
    
        hide4.style.opacity = "1";
        hide4.style.height = "18vh";
        qt4.style.backgroundColor = "#fff";
        qt4.style.color = "#000";
      
        i3.style.rotate = "-90deg";
        
       
    })
    
    i3.addEventListener("mouseleave",function(){
    
    
          hide4.style.opacity = "0";
        hide4.style.height = "0vh";
        qt4.style.backgroundColor = "#000";
        qt4.style.color = "#fff";
      
      
        i3.style.rotate = "90deg";
        
      })
    
  
