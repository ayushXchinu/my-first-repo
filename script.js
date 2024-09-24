var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(det){
    crsr.style.left = det.x+30+"px"
    crsr.style.top = det.y+"px"
    blur.style.left = det.x-90+"px"
    blur.style.top = det.y-95+"px"
})


gsap.to("#nav",{
    backgroundColor:"black",
    height:"100px",
    duration:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
})

gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -40%",
        end:"top -50%",
        scrub:4
    }
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(element){
    element.addEventListener("mouseenter",function(){
        crsr.style.scale = 4
        crsr.style.border = "1px solid white"
        crsr.style.backgroundColor = "transparent"
    })
    element.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid rgb(146, 200, 8)"
        crsr.style.backgroundColor = "rgb(146, 200, 8)"
    })
})

gsap.from("#about-us img,#in-about-us",{
    y:50,
    opacity:0,
    duration:6,
    scrollTrigger:{
        trigger:"#about-us",
        scoller:"body",
        start: "top 40%",
        end:"top 42%",
        scrub:3
    }
})

gsap.from("#colon1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scoller:"body",
        marker:true,
        start:"top 50%",
        end:"top 90%",
        scrub:5
    }
})

gsap.from("#colon2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#colon1",
        scoller:"body",
        // marker:true,
        start:"top 60%",
        end:"top 90%",
        scrub:5
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scoller:"body",
        // marker:true,
        start:"top 70%",
        end:"top 70%",
        scrub:6
    }
})