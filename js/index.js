(function () {

    const index = function () {

        const Init = () => {
            createPeakTime();
            createBehavior();
            createProgress();
        }

        function createProgress() {
            const process = $(".process");
            const oddProcess = process.find(".process-view--list-odd").find(".progress-gage-on");
            const defaultProcess = process.find(".process-view--list-default").find(".progress-gage-on");
            const w = [50, 137, 224, 312];

            const oddProcessFinishList = process.find(".process-view--list-odd").find(".progress-gage-finish").find("img");
            const defaultProcessFinishList = process.find(".process-view--list-default").find(".progress-gage-finish").find("img");

            const oddProcessTxtList = process.find(".process-view--list-odd").find( ".process-view--list-odd-txt li" );
            const defaultProcessTxtList = process.find(".process-view--list-default").find( ".process-view--list-odd-txt li" );

            function showEffect1(){
                const effect1 = process.find( ".process-effect-1" );
                gsap.to( effect1, {
                    duration: 1,
                    scale: 1,
                    ease: Cubic.easeInOut,
                });

                setTimeout(() => {
                    effect1.addClass( "on" );
                }, 500 );
            }

            function showEffectShadow(){
                const effectLineBx = process.find( ".process-effect-lines" );
                const effectLine = effectLineBx.find( "img" );

                gsap.to( effectLineBx, {
                    duration: 1,
                    scale: 1,
                    ease: Cubic.easeOut,
                });

                gsap.to( effectLine, {
                    duration: 1,
                    scale: 1.2,
                    ease: Cubic.easeOut,
                });

                gsap.to( effectLine, {
                    transformOrigin: "center top",
                    duration: 1, scale: 0,
                    delay: 0.5,
                    ease: Cubic.easeOut,
                });
            }

            function showEffect2(){
                const effect2 = process.find( ".process-effect-2" );
                gsap.to( effect2, {
                    duration: 1,
                    scale: 1,
                    ease: Cubic.easeInOut,
                });

                setTimeout(() => {
                    effect2.addClass( "on" );
                }, 500 );
            }

            function showEffect(){
                showEffect1();
                setTimeout(() => {
                    showEffectShadow();
                }, 650 );
                setTimeout(() => {
                    showEffect2();
                }, 800 );
            }

            function showProcess(idx, mTime = 1) {
                gsap.to(oddProcess, { duration: mTime, width: w[idx], ease: Power0.easeInOut });
                gsap.to(defaultProcess, {
                    duration: mTime, width: w[idx], ease: Power0.easeInOut, onComplete: function () {
                        const o = $(oddProcessFinishList[idx]);
                        const d = $(defaultProcessFinishList[idx]);

                        o.css("opacity", 1);
                        d.css("opacity", 1);

                        gsap.to(o, { duration: 0.2, scale: 1.1, ease: Power0.easeInOut, yoyo: true, repeat: 1 });
                        gsap.to(d, { duration: 0.2, scale: 1.1, ease: Power0.easeInOut, yoyo: true, repeat: 1 });

                        const oTxt = $(oddProcessTxtList[idx]);
                        const dTxt = $(defaultProcessTxtList[idx]);

                        console.log( oTxt[0], oddProcessTxtList );

                        oTxt.addClass("on");
                        dTxt.addClass("on");
                    }
                });

                if( idx === 1 ){
                    setTimeout(() => {
                        showEffect();
                    }, 1500);
                }
            }

            function isElementHalfVisible(el) {
                if (!el.length) return false;
                const rect = el[0].getBoundingClientRect();
                const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
                const elementHeight = rect.height;
                const visibleTop = Math.max(rect.top, 0);
                const visibleBottom = Math.min(rect.bottom, windowHeight);
                const visibleHeight = visibleBottom - visibleTop;
                return visibleHeight >= elementHeight / 2 && rect.bottom > 0 && rect.top < windowHeight;
            }

            function scrollListener() {
                const $progress = process.find(".process-view");
                if (!progressTriggered && isElementHalfVisible($progress)) {
                    showProcess(0);

                    setTimeout(() => {
                        showProcess(1, 2);
                    }, 2000);

                    setTimeout(() => {
                        showProcess(2, 2);
                    }, 5000);

                    setTimeout(() => {
                        showProcess(3, 2);
                    }, 8000);

                    progressTriggered = true;
                    window.removeEventListener("scroll", scrollListener);
                }
            }

            let progressTriggered = false;
            window.addEventListener("scroll", scrollListener);

            scrollListener();
        }

        function createPeakTime() {
            const peakTime = $(".peak-time");
            const menus = peakTime.find(".peak-time__menus ul li");
            const peakContents = peakTime.find(".peak-time__contents ul li");

            menus.on("click", function () {
                const idx = $(this).index();
                menus.removeClass("on");
                $(this).addClass("on");

                gsap.killTweensOf(peakContents);
                gsap.to(peakContents, { duration: 0, opacity: 0, ease: Cubic.easeOut });

                const target = $(peakContents[idx]);
                const targetImg = target.find("img");
                const targetP = target.find("p");

                gsap.to(target, { duration: 0, opacity: 1, ease: Cubic.easeOut });
                gsap.fromTo(targetImg,
                    { y: 0, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.75, ease: Cubic.easeOut });
                gsap.fromTo(targetP,
                    { opacity: 0, y: 15 },
                    { opacity: 1, y: 0, duration: 0.75, ease: Cubic.easeOut, delay: 0.1 });
            });
        }

        function createBehavior() {
            const behavior = $(".behavior");
            const behaviorList = behavior.find(".behavior-list ul li");

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

            behaviorList.on("click", function () {
                const idx = $(this).index();
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

        return {
            Init
        }
    }

    $(document).ready(function () {
        App.index = index();
        App.index.Init();
    });
})();