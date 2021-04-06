   $(document).ready(function() {
   // owl carousel......
   $(".teacher_slider").owlCarousel({           
          autoPlay: 3000, //Set AutoPlay to 3 seconds
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3],

          pagination : false,
          responsive :true,
          stopOnHover : true,
          autoWidth: true
           
          });
           $(".student_slider").owlCarousel({
           
          autoPlay: 4000, //Set AutoPlay to 3 seconds
           
          items : 3,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3],
          pagination : false,
          stopOnHover : true,
          autoWidth: true,
          responsiveClass : true
           
          });   
          $('.marquee').marquee({
            pauseOnHover: true,
             //speed in milliseconds of the marquee
            duration: 9000,
            //gap in pixels between the tickers
            gap: 50,
            //time in milliseconds before the marquee will start animating
            delayBeforeStart: 0,
            //'left' or 'right'
            direction: 'left',
            //true or false - should the marquee be duplicated to show an effect of continues flow
            duplicated: true
          });
          // slicknav....
	      $(function(){
	        $('.main_menu').slicknav();
	      });
		      // scroll-up...
		 $(function(){
	      $.scrollUp({
	        scrollText: '<i class="fa fa-chevron-up"></i>'
	      });
    });





        });








// time and date java script
var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();

document.getElementById('time').innerHTML = n + ' ' + time;
