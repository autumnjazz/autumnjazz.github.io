
(function($) {

    'use strict';

    function initMetisMenu() {
        $("#side-menu").metisMenu();
    }

    function initLeftMenuCollapse() {
        $('.mobile-menu').on('click', function (event) {
            event.preventDefault();
            $("body").toggleClass("enlarged");
        });
    }

    function init() {
        initMetisMenu();
        initLeftMenuCollapse();
    }
    init();

})(jQuery)


