var menuToggle = document.querySelector(".menuToggle");
        var top_bar = document.querySelector(".top_bar");
        var mid_bar = document.querySelector(".mid_bar");
        var bottom_bar = document.querySelector(".bottom_bar");
        var mob_nav = document.querySelector(".mob_nav");
        var mob_nav_li = document.querySelectorAll(".mob_nav_li");

        function menuToggle_actived() {
            top_bar.classList.toggle("top_bar_actived");
            mid_bar.classList.toggle("mid_bar_actived");
            bottom_bar.classList.toggle("bottom_bar_actived");
            mob_nav.classList.toggle("mob_nav_actived");
            mob_nav_li[0].classList.toggle("mob_nav_li_actived");
            mob_nav_li[1].classList.toggle("mob_nav_li_actived");
            mob_nav_li[2].classList.toggle("mob_nav_li_actived");
            mob_nav_li[3].classList.toggle("mob_nav_li_actived");
        }
        menuToggle.addEventListener("click", menuToggle_actived);