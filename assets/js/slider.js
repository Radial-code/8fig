const tl2 = gsap.timeline({
  scrollTrigger: {
    fastScrollEnd: true,
    trigger: ".pinned-section",
    start: "top top ",
    end: "+=350%",
    scrub: 1,
    pin: true,
    pinSpacing: true,
    markers:true
  },
});
 gsap.set(".pin_scroll",{height:"100vh"})
if (window.innerWidth >=1300 ) {tl2
  .to(
    ".card-img-1",
    {
      opacity: 1,
    },
    "-0.1"
  )

  .fromTo(
    [".card-img-2", ".dot-1"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    [".card-img-3", ".dot-2"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    [".card_green_1", ".dot-3"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    [".card-img-5"],
    {
      opacity: 0,
      x: -150,
    },
    {
      opacity: 1,

      x: 0,
    }
  )
  .fromTo(
    [".animate_garident svg"],
    {
      height: 15, y:-7,width:0
    },
    {
      width: 300,
      opacity: 1,y:-7,width:200,x:-2
    },
    "-=.5"
)
  .fromTo(
    [".card-img-6"],
    {
     
      opacity: 0,x:30
    },
    {
    
      opacity: 1,x:10
    },
    "-=.5"
)
  
  .fromTo(
    [".dot-4"],
    {
      opacity: 0,
      x: 21,
      scale: 0,
    },
    {
      opacity: 1,
      x: 21,
      scale: 1,
    }
  )
  .fromTo(
    [".animate_garident_second"],
    {
            height: 15,width:0,

      opacity: 1,y:-1
    },
    {
      opacity: 1,      height: 15,width:400,y:-1

    }
  )

  .fromTo(
    [".animate_garident"],
    {
      opacity: 1,
    },
    {
      opacity: 0,
    },"-=.3"
  )
  .fromTo(
    [".card-img-5"],
    {
      x: 0,
    },
    {
      x: 250,
    },
    "-=.5"
  )

  .fromTo(
    [".card_green_2", ".dot-6"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    [".animate_garident_third"],
    {
      width:0,
      opacity: 0,y:-1
    },
    {width:150,
      opacity: 1,y:-1
    }
  )
  .fromTo(
    [".card-img-7"],
    {
      opacity: 0,
      x: 150,
    },
    {
      opacity: 1,
      x: 250,
    }
  )
  .fromTo(
    [".card-img-8", ".dot-8"],
    {
      opacity: 0,
      x: 150,
    },
    {
      opacity: 1,
      x: 100,
    }
  )

  .fromTo(
    [".scroll_element"],
    {
      x: 0,
      duration: 2,
    },
    {
      x: -670,

      duration: 2,
    },
    "-=2"
  );

    
}
else if (window.innerWidth >=1100 && window.innerWidth < 1299) {tl2
  .to(
    ".card-img-1",
    {
      opacity: 1,
    },
    "-0.1"
  )

  .fromTo(
    [".card-img-2", ".dot-1"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    [".card-img-3", ".dot-2"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    [".card_green_1", ".dot-3"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    [".card-img-5"],
    {
      opacity: 0,
      x: -150,
    },
    {
      opacity: 1,

      x: 0,
    }
  )
  .fromTo(
    [".animate_garident svg"],
    {
      height: 15, y:-7,width:0
    },
    {
      width: 300,
      opacity: 1,y:-7,width:200,x:-2
    },
    "-=.5"
)
  .fromTo(
    [".card-img-6"],
    {
     
      opacity: 0,x:30
    },
    {
    
      opacity: 1,x:10
    },
    "-=.5"
)
  
  .fromTo(
    [".dot-4"],
    {
      opacity: 0,
      x: 21,
      scale: 0,
    },
    {
      opacity: 1,
      x: 21,
      scale: 1,
    }
  )
  .fromTo(
    [".animate_garident_second"],
    {
            height: 15,width:0,

      opacity: 1,y:-1
    },
    {
      opacity: 1,      height: 15,width:400,y:-1

    }
  )

  .fromTo(
    [".animate_garident"],
    {
      opacity: 1,
    },
    {
      opacity: 0,
    },"-=.3"
  )
  .fromTo(
    [".card-img-5"],
    {
      x: 0,
    },
    {
      x: 250,
    },
    "-=.5"
  )

  .fromTo(
    [".card_green_2", ".dot-6"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    [".animate_garident_third"],
    {
      width:0,
      opacity: 0,y:-1
    },
    {width:150,
      opacity: 1,y:-1
    }
  )
  .fromTo(
    [".card-img-7"],
    {
      opacity: 0,
      x: 150,
    },
    {
      opacity: 1,
      x: 250,
    }
  )
  .fromTo(
    [".card-img-8", ".dot-8"],
    {
      opacity: 0,
      x: 150,
    },
    {
      opacity: 1,
      x: 100,
    }
  )

  .fromTo(
    [".scroll_element"],
    {
      x: 0,
      duration: 2,
    },
    {
      x: -750,

      duration: 2,
    },
    "-=2"
  );
}
else if (window.innerWidth >=1024 && window.innerWidth < 1199) {tl2
  .to(
    ".card-img-1",
    {
      opacity: 1,
    },
    "-0.1"
  )

  .fromTo(
    [".card-img-2", ".dot-1"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    [".card-img-3", ".dot-2"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    [".card_green_1", ".dot-3"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    [".card-img-5"],
    {
      opacity: 0,
      x: -150,
    },
    {
      opacity: 1,

      x: 0,
    }
  )
  .fromTo(
    [".animate_garident svg"],
    {
      height: 15, y:-7,width:0
    },
    {
      width: 300,
      opacity: 1,y:-7,width:200,x:-2
    },
    "-=.5"
)
  .fromTo(
    [".scroll_element"],
    {
      x: 0,
      duration: 2,
    },
    {
      x: -500,

      duration: 2,
    }
  )
  .fromTo(
    [".card-img-6"],
    {
     
      opacity: 0,x:30
    },
    {
    
      opacity: 1,x:10
    },
    "-=.5"
)
  
  .fromTo(
    [".dot-4"],
    {
      opacity: 0,
      x: 21,
      scale: 0,
    },
    {
      opacity: 1,
      x: 21,
      scale: 1,
    },"-=.5"
  )
  .fromTo(
    [".animate_garident_second"],
    {
            height: 15,width:0,

      opacity: 1,y:-1
    },
    {
      opacity: 1,      height: 15,width:400,y:-1

    }
    ,"-=.8"
  )

  .fromTo(
    [".animate_garident"],
    {
      opacity: 1,
    },
    {
      opacity: 0,
    },"-=.3"
  )
  .fromTo(
    [".card-img-5"],
    {
      x: 0,
    },
    {
      x: 250,
    },
    "-=.5"
  )

  .fromTo(
    [".card_green_2", ".dot-6"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    [".animate_garident_third"],
    {
      width:0,
      opacity: 0,y:-1
    },
    {width:150,
      opacity: 1,y:-1
    }
  )
  .fromTo(
    [".card-img-7"],
    {
      opacity: 0,
      x: 150,
    },
    {
      opacity: 1,
      x: 250,
    }
  )
  .fromTo(
    [".card-img-8", ".dot-8"],
    {
      opacity: 0,
      x: 150,
    },
    {
      opacity: 1,
      x: 100,
    }
  )

    .fromTo(
    [".scroll_element"],
    {
      x: -500,
      duration: 2,
    },
    {
      x: -1000,

      duration: 2,
      }
    ,"-=2"
)
  
}
else if (window.innerWidth >=768 && window.innerWidth < 1023) {tl2
  .to(
    ".card-img-1",
    {
      opacity: 1,
    },
    "-0.1"
  )

  .fromTo(
    [".card-img-2", ".dot-1"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    [".card-img-3", ".dot-2"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    [".card_green_1", ".dot-3"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    [".card-img-5"],
    {
      opacity: 0,
      x: -150,
    },
    {
      opacity: 1,

      x: 0,
    }
  )  .fromTo(
    [".scroll_element"],
    {
      x: 0,
      duration: 2,
    },
    {
      x: -500,

      duration: 2,
    },"-=1"
  )
  .fromTo(
    [".animate_garident svg"],
    {
      height: 15, y:-7,width:0
    },
    {
      width: 300,
      opacity: 1,y:-7,width:200,x:-2
    },
  "-=1.7"
)

  .fromTo(
    [".card-img-6"],
    {
     
      opacity: 0,x:30
    },
    {
    
      opacity: 1,x:10
    },
    
)
  
  .fromTo(
    [".dot-4"],
    {
      opacity: 0,
      x: 21,
      scale: 0,
    },
    {
      opacity: 1,
      x: 21,
      scale: 1,
    },
  )
  .fromTo(
    [".animate_garident_second"],
    {
            height: 15,width:0,

      opacity: 1,y:-1
    },
    {
      opacity: 1,      height: 15,width:400,y:-1

    }
    ,"-=.8"
  )

  .fromTo(
    [".animate_garident"],
    {
      opacity: 1,
    },
    {
      opacity: 0,
    },
)

  .fromTo(
    [".card-img-5"],
    {
      x: 0,
    },
    {
      x: 250,
    },
    
  )

  .fromTo(
    [".card_green_2", ".dot-6"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    [".animate_garident_third"],
    {
      width:0,
      opacity: 0,y:-1
    },
    {width:150,
      opacity: 1,y:-1
    }
  )
  .fromTo(
    [".card-img-7"],
    {
      opacity: 0,
      x: 150,
    },
    {
      opacity: 1,
      x: 250,
    }
  )
  .fromTo(
    [".card-img-8", ".dot-8"],
    {
      opacity: 0,
      x: 150,
    },
    {
      opacity: 1,
      x: 100,
    }
  )

    .fromTo(
    [".scroll_element"],
    {
      x: -500,
      duration: 2,
    },
    {
      x: -1250,

      duration: 2,
      }
    ,"-=2.8"
)
}
else if (window.innerWidth >=576 && window.innerWidth < 767) {tl2
   .to(
    ".card-img-1",
     {
      scale:.8,
      opacity: 1,
    },
    "-0.1"
  )

  .fromTo(
    [".card-img-2", ".dot-1"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: -50,
    }
  )
  .fromTo(
    [".card-img-3", ".dot-2"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: -50,
    }
  )
  .fromTo(
    [".card_green_1", ".dot-3"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    [".card-img-5"],
    {
      opacity: 0,
      x: -150,
    },
    {
      opacity: 1,

      x: 0,
    }
  )  .fromTo(
    [".scroll_element"],
    {
      x: 0,
      duration: 2,
    },
    {
      x: -600,

      duration: 2,
    },"-=1.2"
  )
  .fromTo(
    [".animate_garident svg"],
    {
      height: 15, y:-7,width:0
    },
    {
      width: 300,
      opacity: 1,y:-7,width:200,x:-2
    },
  "-=1.4"
)

  .fromTo(
    [".card-img-6"],
    {
     
      opacity: 0,x:30
    },
    {
    
      opacity: 1,x:10
    },
    
)
  
  .fromTo(
    [".dot-4"],
    {
      opacity: 0,
      x: 21,
      scale: 0,
    },
    {
      opacity: 1,
      x: 21,
      scale: 1,
    },
  )
  .fromTo(
    [".animate_garident_second"],
    {
            height: 15,width:0,

      opacity: 1,y:-1
    },
    {
      opacity: 1,      height: 15,width:400,y:-1

    }
    ,"-=.8"
  )

  .fromTo(
    [".animate_garident"],
    {
      opacity: 1,
    },
    {
      opacity: 0,
    },
)

  .fromTo(
    [".card-img-5"],
    {
      x: 0,
    },
    {
      x: 250,
    },
    
  )

  .fromTo(
    [".card_green_2", ".dot-6"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    [".animate_garident_third"],
    {
      width:0,
      opacity: 0,y:-1
    },
    {width:150,
      opacity: 1,y:-1
    }
  )
  .fromTo(
    [".card-img-7"],
    {
      opacity: 0,
      x: 150,
    },
    {
      opacity: 1,
      x: 250,
    }
  )
  .fromTo(
    [".card-img-8", ".dot-8"],
    {
      opacity: 0,
      x: 150,
    },
    {
      opacity: 1,
      x: 100,
    }
  )

    .fromTo(
    [".scroll_element"],
    {
      x: -600,
      duration: 2,
    },
    {
      x: -1430,

      duration: 2,
      }
    ,"-=2.8"
)
}
else if (window.innerWidth >=0 && window.innerWidth < 576) {tl2
    .to(
    ".card-img-1",
     {
      scale:.8,
      opacity: 1,
    },
    "-0.1"
  )

  .fromTo(
    [".card-img-2", ".dot-1"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: -50,
    }
  )
  .fromTo(
    [".card-img-3", ".dot-2"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: -50,
    }
  )
  .fromTo(
    [".card_green_1", ".dot-3"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    [".card-img-5"],
    {
      opacity: 0,
      x: -150,
    },
    {
      opacity: 1,

      x: 0,
    }
  )  .fromTo(
    [".scroll_element"],
    {
      x: 0,
      duration: 2,
    },
    {
      x: -800,

      duration: 2,
    },"-=1.6"
  )
  .fromTo(
    [".animate_garident svg"],
    {
      height: 15, y:-7,width:0
    },
    {
      width: 300,
      opacity: 1,y:-7,width:200,x:-2
    },
  "-=1.4"
)

  .fromTo(
    [".card-img-6"],
    {
     
      opacity: 0,x:30
    },
    {
    
      opacity: 1,x:10
    },
    
)
  
  .fromTo(
    [".dot-4"],
    {
      opacity: 0,
      x: 21,
      scale: 0,
    },
    {
      opacity: 1,
      x: 21,
      scale: 1,
    },
  )
  .fromTo(
    [".animate_garident_second"],
    {
            height: 15,width:0,

      opacity: 1,y:-1
    },
    {
      opacity: 1,      height: 15,width:400,y:-1

    }
    ,"-=.8"
  )

  .fromTo(
    [".animate_garident"],
    {
      opacity: 1,
    },
    {
      opacity: 0,
    },
)

  .fromTo(
    [".card-img-5"],
    {
      x: 0,
    },
    {
      x: 250,
    },
    
  )

  .fromTo(
    [".card_green_2", ".dot-6"],
    {
      opacity: 0,
      x: 20,
    },
    {
      opacity: 1,
      x: 0,
    }
  )
  .fromTo(
    [".animate_garident_third"],
    {
      width:0,
      opacity: 0,y:-1
    },
    {width:150,
      opacity: 1,y:-1
    }
  )
  .fromTo(
    [".card-img-7"],
    {
      opacity: 0,
      x: 150,
    },
    {
      opacity: 1,
      x: 250,
    }
  )
  .fromTo(
    [".card-img-8", ".dot-8"],
    {
      opacity: 0,
      x: 150,
    },
    {
      opacity: 1,
      x: 100,
    }
  )

    .fromTo(
    [".scroll_element"],
    {
      x: -800,
      duration: 2,
    },
    {
      x: -1630,

      duration: 2,
      }
    ,"-=1.9"
)
}