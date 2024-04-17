const tl2 = gsap.timeline({
  scrollTrigger: {
    fastScrollEnd: true,
    trigger: ".pin_scroll",
    start: "top top ",
    end: "+=300%",
    scrub: 1,
    pin: true,
  },
});
 
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
    [".animate_garident"],
    {
      width: 0,
      opacity: 0,
      height: 15,
    },
    {
      width: 300,
      height: 15,
      opacity: 1,
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
      opacity: 0,
    },
    {
      opacity: 1,
    }
  )

  .fromTo(
    [".animate_garident"],
    {
      opacity: 1,
    },
    {
      opacity: 0,
    }
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
      opacity: 0,
    },
    {
      opacity: 1,
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
      x: 300,
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
    [".animate_garident"],
    {
      width: 0,
      opacity: 0,
      height: 15,
    },
    {
      width: 300,
      height: 15,
      opacity: 1,
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
      opacity: 0,
    },
    {
      opacity: 1,
    }
  )

  .fromTo(
    [".animate_garident"],
    {
      opacity: 1,
    },
    {
      opacity: 0,
    }
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
      opacity: 0,
    },
    {
      opacity: 1,
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
      x: 300,
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
      x: -800,
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
    [".animate_garident"],
    {
      width: 0,
      opacity: 0,
      height: 15,
    },
    {
      width: 300,
      height: 15,
      opacity: 1,
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
      opacity: 0,
    },
    {
      opacity: 1,
    }
  )

  .fromTo(
    [".animate_garident"],
    {
      opacity: 1,
    },
    {
      opacity: 0,
    }
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
      opacity: 0,
    },
    {
      opacity: 1,
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
      x: 300,
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
      x: -970,
      duration: 2,
    },
    "-=2.6"
  );


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
  )
  .fromTo(
    [".animate_garident"],
    {
      width: 0,
      opacity: 0,
      height: 15,
    },
    {
      width: 300,
      height: 15,
      opacity: 1,
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
      opacity: 0,
    },
    {
      opacity: 1,
    }
)

  .fromTo(
    [".animate_garident"],
    {
      opacity: 1,
    },
    {
      opacity: 0,
    }
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
      opacity: 0,
    },
    {
      opacity: 1,
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
      x: 300,
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
      x: -1250,
      duration: 2,
    },
    "-=3.2"
  );
}
else if (window.innerWidth >=576 && window.innerWidth < 767) {tl2
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
  )   .fromTo(
    [".scroll_element"],
    {
      x: 0,
      duration: 2,
    },
    {
      x: -500,
      duration: 2,
    },
    
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
    [".animate_garident"],
    {
      width: 0,
      opacity: 0,
      height: 15,
    },
    {
      width: 300,
      height: 15,
      opacity: 1,
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
      opacity: 0,
    },
    {
      opacity: 1,
    }
)
   .fromTo(
    [".scroll_element"],
    {
      x: -500,
      duration: 2,
    },
    {
      x: -800,
      duration: 2,
    },
    
  )
  .fromTo(
    [".animate_garident"],
    {
      opacity: 1,
    },
    {
      opacity: 0,
    }
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
      opacity: 0,
    },
    {
      opacity: 1,
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
      x: 300,
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
      x: -1400,
      duration: 2,
    },
    "-=1.4"
  );
}
else if (window.innerWidth >=0 && window.innerWidth < 576) {tl2
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
    [".scroll_element"],
    {
      x: 0,
      duration: 2,
    },
    {
      x: -250,
      duration: 2,
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
    [".scroll_element"],
    {
      x: -250,
      duration: 2,
    },
    {
      x: -300,
      duration: 2,
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
    [".scroll_element"],
    {
      x: -300,
      duration: 2,
    },
    {
      x: -650,
      duration: 2,
    }
  )
  .fromTo(
    [".animate_garident"],
    {
      width: 0,
      opacity: 0,
      height: 15,
    },
    {
      width: 300,
      height: 15,
      opacity: 1,
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
    [".scroll_element"],
    {
      x: -650,
      duration: 2,
    },
    {
      x: -850,
      duration: 2,
    }
  )
  .fromTo(
    [".animate_garident_second"],
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
)

  .fromTo(
    [".animate_garident"],
    {
      opacity: 1,
    },
    {
      opacity: 0,
    }
)
         .fromTo(
    [".scroll_element"],
    {
      x: -850,
      duration: 2,
    },
    {
      x: -1250,
      duration: 2,
    }
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
      opacity: 0,
    },
    {
      opacity: 1,
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
      x: 300,
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
      x: -1250,
      duration: 2,
    },
    {
      x: -1600,
      duration: 2,
    },"-=1.5"
  )
 
}