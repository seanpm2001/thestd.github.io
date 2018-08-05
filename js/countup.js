$(document).ready(function(){

	var show = true;
	var countbox = "#counts";
	$(window).on("scroll load resize", function(){

		if(!show) return false;

		var w_top = $(window).scrollTop();
		var e_top = $(countbox).offset().top;

		var w_height = $(window).height();
		var d_height = $(document).height();

		var e_height = $(countbox).outerHeight();

		if(w_top + 400 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
			$(".spin-hour").spincrement({
				thousandSeparator: "",
				duration: 3000,
                from: 0,                // Стартовое число
                to: 33,
			});
            $(".spin-users").spincrement({
				thousandSeparator: "",
				duration: 3000,
                from: 0,                // Стартовое число
                to: 50,
			});
            $(".spin-team").spincrement({
				thousandSeparator: "",
				duration: 3000,
                from: 0,                // Стартовое число
                to: 10,
			});
            $(".spin-mentors").spincrement({
				thousandSeparator: "",
				duration: 3000,
                from: 0,                // Стартовое число
                to: 10,
			});

			show = false;
		}
	});
});