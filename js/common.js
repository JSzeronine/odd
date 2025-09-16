

( function(){
    const common = function () {
        const Init = () => {
            createTopMenus();
        }

        function createTopMenus() {
            let oldY = 0;
            window.addEventListener("scroll", () => {
                // const sT = window.scrollY;
                // if (sT > oldY) {
                //     if (sT > 48) {
                //         $(".top-menus").addClass("on");
                //         $( ".tutorial-progress" ).removeClass( "on" );


                //         $( ".tutorial-step-bx" ).find( "dl" ).removeClass( "on" );
                //     }
                // } else {
                //     $(".top-menus").removeClass("on");
                //     $( ".tutorial-progress" ).addClass( "on" );
                //     $( ".tutorial-step-bx" ).find( "dl" ).addClass( "on" );
                // }

                // oldY = sT;
            });
        }


        return{
            Init
        }
    }

    $( document ).ready( function(){
        App.common = common();
        App.common.Init();
    });

})();