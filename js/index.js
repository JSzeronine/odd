(function () {

    const index = function () {

        const Init = () => {
            createTopMenus();
            // createBestEat();
            createHarim();
            createPeakTime();
            createBehavior();
            createProgress();

            scrollActionVisual();
            scrollActionTaste();
            scrollIntroduce();
            scrollActionProcess();
            scrollActionCommonTitle();
            scrollBehavior();
            scrollActionReal();
            scrollActionPeakTime();
        }

        function scrollActionPeakTime() {
            const peakTime = $(".peak-time");
            const peakTimeTitleBx = peakTime.find(".peak-time-list__bx");
            const peakTimeTitle = peakTimeTitleBx.find("h3");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: peakTimeTitleBx[0],
                    start: "top 80%",
                    once: true,
                }
            });

            tl.fromTo(
                peakTimeTitle,
                { y: 10, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: Cubic.easeInOut }
            );
        }

        function scrollActionVisual() {
            const visual = $(".visual");
            const visualLogo = visual.find(".visual-logo");
            const visualIntroduce = visual.find(".visual-introduce");
            const visualSign = visual.find(".visual-sign");
            const visualSignEgg = visual.find(".visual-sign-egg");
            const visualBg = visual.find(".visual-bg").find( "img")

            gsap.fromTo(
                visualLogo,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.6, ease: Cubic.easeInOut }
            )
            gsap.fromTo(
                visualIntroduce,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.6, ease: Cubic.easeInOut, delay: 0.3 },
            )
            gsap.fromTo(
                visualSign,
                { opacity: 0, x: 15 },
                { opacity: 1, x: 0, duration: 0.4, ease: Cubic.easeInOut, delay: 1 },
            );
            gsap.fromTo(
                visualSignEgg,
                { opacity: 0, y: 0 },
                { opacity: 1, y: 0, duration: 0.6, ease: Cubic.easeInOut, delay: 0.3 },
            );

            gsap.to(visualBg, {
                y: 100,
                ease: "none",
                scrollTrigger: {
                    trigger: visual[0],
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                }
            });
        }

        function scrollActionTaste() {
            const taste = $(".taste");
            const tasteTitle = taste.find(".taste-title");
            const tasteDescription = taste.find(".taste-description");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: taste[0],
                    start: "top 70%",
                    once: true,
                }
            });

            tl.fromTo(
                tasteTitle,
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5, ease: Cubic.easeInOut })
            .fromTo(
                tasteDescription,
                { x: 30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5, ease: Cubic.easeInOut },
                "<"
            );
        }

        function scrollActionProcess() {
            const process = $(".process");
            const processCut = process.find(".process-cut");
            const processConsume = process.find(".process-consume");
            const processArrow = process.find(".process-arrow");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: process[0],
                    start: "top 70%",
                    once: true,
                }
            });

            tl.fromTo(
                processCut,
                { y: -10, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: Cubic.easeInOut }
            )

            tl.fromTo(
                processArrow,
                { y: -10, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: Cubic.easeInOut },
                "-=0.3"
            );

            tl.fromTo(
                processConsume,
                { y: 10, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: Cubic.easeInOut },
                "-=0.3"
            );

            const processView = process.find(".process-view");
            const processDescription = process.find(".process-description");

            const tlDesc = gsap.timeline({
                scrollTrigger: {
                    trigger: processView[0],
                    start: "top 80%",
                    once: true,
                }
            });

            tlDesc.fromTo(
                processDescription,
                { y: 10, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: Cubic.easeInOut }
            );
        }

        function scrollActionCommonTitle() {
            const commonTitle = $(".common-odd-grocer__title");

            commonTitle.each(function (i, el) {
                const $el = $(el);
                const commonTitleTitle = $el.find("dt");
                const commonTitleDescription = $el.find("dd");

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: "top 70%",
                        once: true,
                    }
                });

                tl.fromTo(
                    commonTitleTitle,
                    { x: -30, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.5, ease: Cubic.easeInOut }
                );

                tl.fromTo(
                    commonTitleDescription,
                    { x: 30, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.5, ease: Cubic.easeInOut },
                    "<"
                );
            });
        }


        function scrollBehavior() {
            const behaviorBx = $(".behavior-list");
            const behaviorList = behaviorBx.find("ul li");

            gsap.timeline({
                scrollTrigger: {
                    trigger: behaviorBx,
                    start: "top 80%",
                    once: true,
                    onEnter: function () {
                        behaviorList.each(function (i, el) {
                            gsap.fromTo(
                                el,
                                { y: 20, opacity: 0 },
                                { y: 0, opacity: 1, duration: 0.5, ease: Cubic.easeInOut, delay: 0.1 * i }
                            );
                        });
                    }
                }
            });
        }

        function scrollActionReal() {
            const real = $(".be-odd-eat-real");
            const realTitle = real.find("dt");
            const realDescription = real.find("dd");
            const realBg = real.find(".be-odd-eat-real-bg").find( "img" );

            const realBgTl = gsap.timeline({
                scrollTrigger: {
                    trigger: real[0],
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true,
                }
            });

            realBgTl.to(realBg, {
                y: 80,
                ease: "none"
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: real,
                    start: "top 80%",
                    once: true,
                    onEnter: function () {
                        gsap.fromTo(
                            realTitle,
                            { scale: 1.05, opacity: 0, filter: "blur(8px)" },
                            { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.5, ease: Cubic.easeInOut }
                        );
                    }
                }
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: real,
                    start: "top 30%",
                    once: true,
                    onEnter: function () {
                        gsap.fromTo(
                            realDescription,
                            { opacity: 0, y: 10 },
                            { opacity: 1, y:0, duration: 1, ease: Cubic.easeInOut }
                        );
                    }
                }
            });
        }

        function createTopMenus() {
            let oldY = 0;
            window.addEventListener("scroll", () => {
                const sT = window.scrollY;
                if (sT > oldY) {
                    if (sT > 48) {
                        $(".top-menus").addClass("on");
                    }
                } else {
                    $(".top-menus").removeClass("on");
                }

                oldY = sT;
            });
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

        function createHarim(){
            const harim = $(".harim");
            const harimList = harim.find(".harim-list-bx li");
            const harimListText = harim.find(".harim-text");

            let currentIndex = 0;
            const total = harimList.length;

            setInterval(() => {
                const prevIndex = currentIndex;
                currentIndex = (currentIndex + 1) % total;

                gsap.to(harimList.eq(prevIndex), { opacity: 0, duration: 0.3, ease: Cubic.easeOut });
                gsap.to(harimList.eq(currentIndex), { opacity: 1, duration: 0.3, ease: Cubic.easeOut });
            }, 2000);
        }

        function createBestEat() {
            const bestEat = $(".best-eat");
            const bestEatEffectText = bestEat.find(".best-eat-text");
            const bestEatEffect0 = bestEat.find(".best-eat-effect-00");
            const bestEatEffect1 = bestEat.find(".best-eat-effect-01");

            function show() {
                bestEatEffectText.each(function (index) {
                    gsap.fromTo($(this),
                        { y: 10, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.5, ease: Cubic.easeInOut, delay: 0.25 * index });
                });
            }

            function show2() {
                gsap.to(bestEatEffect0, { duration: 0.5, opacity: 1, ease: Cubic.easeInOut });
                gsap.to(bestEatEffectText, { duration: 0.5, opacity: 0, ease: Cubic.easeInOut });

                bestEatEffect0.find("span").each(function () {
                    gsap.to($(this), { duration: 1, y: 74, ease: Cubic.easeInOut, delay: 0.5 });
                });

                gsap.fromTo(bestEatEffect1,
                    { x: 10, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.5, ease: Cubic.easeOut, delay: 1.5 });
            }

            function scrollListener() {
                if (!progressTriggered && isElementHalfVisible(bestEat)) {
                    show();
                    setTimeout(() => {
                        show2();
                    }, 1500);

                    progressTriggered = true;
                    window.removeEventListener("scroll", scrollListener);
                }
            }

            let progressTriggered = false;
            window.addEventListener("scroll", scrollListener);
            scrollListener();
        }

        function scrollIntroduce() {
            const introduce = $(".introduce");

            if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
                const introduceDescriptionOff = introduce.find(".introduce-description-off");
                const introduceDescriptionOn = introduce.find(".introduce-description-on");
                const introduceDescriptionTexts = introduceDescriptionOn.find(".introduce-description-text");

                gsap.set(introduceDescriptionOn, { opacity: 1, pointerEvents: "auto" });
                gsap.set(introduceDescriptionTexts, { opacity: 0 });

                const introduceTitleSpans = introduce.find(".introduce-title-bx .introduce-title span");
                const introduceSub = introduce.find(".introduce-sub");
                const introduceSubSpans = introduceSub.find("span");

                gsap.set(introduceTitleSpans, { opacity: 0 });
                gsap.set(introduceSubSpans, { opacity: 0 });

                if (typeof ScrollTrigger !== "undefined") {
                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: introduce,
                            start: "top 80%",
                            end: "bottom 100%",
                            scrub: true,
                            onLeave: function (self) {
                                if (tl.scrollTrigger) {
                                    tl.scrollTrigger.kill();
                                }

                                tl.kill();

                                gsap.set(introduceTitleSpans, { opacity: 1 });
                                gsap.set(introduceSubSpans, { opacity: 1 });
                                gsap.set(introduceDescriptionTexts, { opacity: 1 });
                            }
                        }
                    });

                    introduceTitleSpans.each(function (i, el) {
                        tl.to(el, {
                            opacity: 1,
                            duration: 0.01,
                            ease: "none"
                        }, "+=0");
                    });

                    introduceSubSpans.each(function (i, el) {
                        tl.to(el, {
                            opacity: 1,
                            duration: 0.01,
                            ease: "none"
                        }, "<");
                    });

                    introduceDescriptionTexts.each(function (i, el) {
                        tl.to(el, {
                            opacity: 1,
                            duration: 0.01,
                            ease: "none"
                        }, "+=0");
                    });
                }

                const introduceVideo = introduce.find(".introduce-video-bx").find("video");
                gsap.to(introduceVideo, {
                    y: 160,
                    ease: "none",
                    scrollTrigger: {
                        trigger: introduce[0],
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    }
                });
    
            }
        }

        function createProgress() {
            const process = $(".process");
            const oddProcess = process.find(".process-view--list-odd").find(".progress-gage-on");
            const defaultProcess = process.find(".process-view--list-default").find(".progress-gage-on");
            const w = [50, 137, 224, 312];

            const oddProcessFinishList = process.find(".process-view--list-odd").find(".progress-gage-finish").find("img");
            const defaultProcessFinishList = process.find(".process-view--list-default").find(".progress-gage-finish").find("img");

            const oddProcessTxtList = process.find(".process-view--list-odd").find(".process-view--list-odd-txt li");
            const defaultProcessTxtList = process.find(".process-view--list-default").find(".process-view--list-odd-txt li");

            function showEffect1() {
                const effect1 = process.find(".process-effect-1");

                effect1.removeClass("on");
                gsap.set(effect1, { scale: 0 });

                gsap.to(effect1, {
                    duration: 1,
                    scale: 1,
                    ease: Cubic.easeInOut,
                });

                setTimeout(() => {
                    effect1.addClass("on");
                }, 500);
            }

            function showEffectShadow() {
                const effectLineBx = process.find(".process-effect-lines");
                const effectLine = effectLineBx.find("img");

                gsap.set( effectLineBx, { scale: 0 });
                gsap.set( effectLine, { scale: 0 });

                gsap.to(effectLineBx, {
                    duration: 0.5,
                    scale: 1.05,
                    ease: Cubic.easeOut,
                });

                gsap.to(effectLine, {
                    duration: 0.5,
                    scale: 1.2,
                    ease: Cubic.easeOut,
                });

                gsap.to(effectLine, {
                    transformOrigin: "center top",
                    duration: 1, scale: 0,
                    delay: 0.5,
                    ease: Cubic.easeOut,
                });
            }

            function showEffect2() {
                const effect2 = process.find(".process-effect-2");
                effect2.removeClass("on");
                gsap.set(effect2, { scale: 0 });

                gsap.to(effect2, {
                    duration: 1,
                    scale: 1,
                    ease: Cubic.easeInOut,
                });

                setTimeout(() => {
                    effect2.addClass("on");
                }, 500);
            }

            function showEffect() {
                showEffect1();
                setTimeout(() => {
                    showEffectShadow();
                }, 650);
                setTimeout(() => {
                    showEffect2();
                }, 800);
            }

            function showProcess(idx, mTime = 1) {
                gsap.to(oddProcess, { duration: mTime, width: w[idx], ease: Cubic.easeOut });
                gsap.to(defaultProcess, {
                    duration: mTime, width: w[idx], ease: Cubic.easeOut, onComplete: function () {
                        const o = $(oddProcessFinishList[idx]);
                        const d = $(defaultProcessFinishList[idx]);

                        o.css("opacity", 1);
                        d.css("opacity", 1);


                        if( idx === 1 ){
                            gsap.to(o, { duration: 0.2, scale: 1.1, ease: Power0.easeInOut, yoyo: true, repeat: 1 });
                        }

                        if( idx === 3 ){
                            gsap.to(d, { duration: 0.2, scale: 1.1, ease: Power0.easeInOut, yoyo: true, repeat: 1 });
                        }

                        const oTxt = $(oddProcessTxtList[idx]);
                        const dTxt = $(defaultProcessTxtList[idx]);

                        console.log(oTxt[0], oddProcessTxtList);

                        oTxt.addClass("on");
                        dTxt.addClass("on");
                    }
                });

                if (idx === 1) {
                    setTimeout(() => {
                        setInterval(() => {
                            showEffect();
                        }, 3000 );
                        showEffect();
                    }, 500);
                }
            }

            function scrollListener() {
                const $progress = process.find(".process-view");
                if (!progressTriggered && isElementHalfVisible($progress)) {
                    showProcess(0);

                    setTimeout(() => {
                        showProcess(1, 1);
                    }, 1000);

                    setTimeout(() => {
                        showProcess(2, 1);
                    }, 2000);

                    setTimeout(() => {
                        showProcess(3, 1);
                    }, 3000);

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