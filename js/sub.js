

( function(){


    const sub = function(){

        function Init(){
            createVisual();
            createTutorial();
        }

        function createTutorial(){
            const tutorial = $(".tutorial-list");
            const tutorialContents = tutorial.find(".tutorial-contents");
            const tutorialContent = tutorialContents.find(".tutorial-content");

            tutorialContent.each(function(i){
                const tutorialItem = $(this);
                if( i === tutorialContent.length - 1){
                    return;
                }
                
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: tutorialItem,
                        start: "bottom bottom",
                        end: "bottom top",
                        scrub: true,
                    }
                });

                tl.to( tutorialItem, { y: 400, ease: Linear.easeInOut });
            });
        }

        function createVisual(){
            const visual = $(".visual");
            const visualKeyBx = visual.find(".visual-key-bx");  
            const visualKeyImg = visual.find(".visual-key-img");
            const visualKeyBgColor = visual.find(".visual-key-bg-color");
            const visualKeyBg = visual.find(".visual-key-bg");

            const visualLogo = visual.find( ".visual-logo-bx" ).find( "img" );
            const visualLogoText = visual.find( ".visual-logo-bx" ).find( "span" );

            gsap.fromTo( visualLogo, 
                { opacity: 0, y: -15 },
                { opacity: 1, y: 0, duration: 0.6, ease: Cubic.easeInOut }
            )
            gsap.fromTo( visualLogoText, 
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.6, ease: Cubic.easeInOut }
            )

            gsap.fromTo( visualKeyImg, 
                { opacity: 0, y: 25 },
                { opacity: 1, y: 0, duration: 0.6, ease: Cubic.easeInOut, onComplete: () => {
                    setTimeout(() => {
                        showHidden();
                    }, 1000 );
                }}
            )

            function showHidden(){
                gsap.to( visualLogo, { opacity: 0, y: -20, duration: 0.6, ease: Cubic.easeInOut });
                gsap.to( visualLogoText, { opacity: 0, y: 20, duration: 0.6, ease: Cubic.easeInOut });

                gsap.to( visualKeyBx, { scale: 15, duration: 2.5, ease: Cubic.easeInOut });
                gsap.to( visualKeyImg, { opacity: 0, duration: 1, ease: Cubic.easeOut });
                gsap.to( visualKeyBx, { opacity: 0, duration: 1, ease: Cubic.easeInOut, delay: 1.5});
                gsap.to( visualKeyBgColor, { opacity: 0, duration: 1, ease: Cubic.easeInOut, delay: 1.5 });
                gsap.to( visualKeyBg, { opacity: 0, duration: 2.5, ease: Cubic.easeInOut });
            }
        }

        return{
            Init
        }
    }

    $( document ).ready( function(){
        if( $( ".hands-on-tour")[0]){
            App.sub = sub();
            App.sub.Init();
        }
    });

})();
