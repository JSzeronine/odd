

( function(){


    const sub = function(){

        function Init(){
            createVisual();
            createTutorial();
            createQuiz();
        }

        function createQuiz(){
            const quiz = $( ".quiz" );
            const quizBtn = quiz.find(".quiz-item-list input");

            const popup = $(".popup");
            const popupBx = popup.find(".popup-content-list");
            const popupContents = popup.find(".popup-content-list .popup-content");
            const popupCloseBtn = popup.find(".popup-close");

            const dimmed = popup.find(".popup-dimmed");

            const closePopup = () => {
                popup.removeClass("on");
                console.log("Click Handler");
            }

            popupCloseBtn.on("click", closePopup);
            dimmed.on("click", closePopup);
            $(".popup-close-btn").on("click", closePopup);

            quizBtn.on( "change", (e) => {
                const parent = $( e.currentTarget ).parents(".quiz-item");
                const idx = $(parent).index();
                popup.addClass("on");

                gsap.killTweensOf(popupContents);
                popupContents.removeClass("on");

                const popupContent = $(popupContents[idx]);
                popupContent.addClass("on");
                gsap.fromTo(popupBx,
                    { y: 10, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.35, ease: Cubic.easeInOut });

                gsap.fromTo(popupCloseBtn,
                    { y: -10, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.35, ease: Cubic.easeInOut });

            });
        }

        function createTutorial(){
            const tutorial = $(".tutorial-list");
            const tutorialContents = tutorial.find(".tutorial-contents");
            const tutorialContent = tutorialContents.find(".tutorial-content");

            tutorialContent.each(function(i){
                const tutorialItem = $(this);

                const tutorialDescription = tutorialItem.find( ".swiper-bx" );
                const stepBx = tutorialItem.find( ".tutorial-step-bx" );
                const tutorialBg = tutorialItem.find( ".tutorial-bg" ).find( "img" );

                let descTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: tutorialDescription,
                        start: "top center",
                        end: "top 20%",
                        scrub: true,
                    }
                });

                descTl.to(stepBx, { opacity: 0, y: -30, ease: Linear.easeInOut });
                // descTl.to(tutorialBg, { filter: "blur(1px)", opacity: 0.8, ease: Linear.easeInOut });

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


            const tutorialSwiper = $( ".tutorial-desc-swiper" );
            tutorialSwiper.each((idx, el) => {
                const item = $( el );
                new Swiper( item[0], {
                    slidesPerView: "auto",
                    centeredSlides: true,
                    spaceBetween: 15,
                    pagination: {
                        el: '.tutorial-desc-swiper .swiper-pagination',
                        clickable: true,
                    },
                    on: {
                        slideChange: (e) => {
                            const index = e.activeIndex;
                            const swiperDiv = $( e.el );

                            const activeSwiper = swiperDiv.find( ".swiper-slide" );
                            activeSwiper.removeClass( "on" );
                            $( activeSwiper[index]).addClass( "on" );

                            console.log( $( activeSwiper[index] )[0]);
                        }
                    }
                });
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
