$(document).ready(function() {

	// SLIDER
$(".owl-theme").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:["",""],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

$(".slide-two").owlCarousel({
	loop:true,
    margin:15,
    nav:false,
    autoplay:true, //Автозапуск слайдера
    smartSpeed:2000, //Время движения слайда
    autoplayTimeout:4000, //Время смены слайда

    responsive:{
        0:{
            items:2
        },

        600:{
            items:3
        },

        1000:{
            items:4
        },
        1200:{
        	items:5
        }
    }

   });

/*Modal=====================================================================================*/
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
     //Вызываем модальное окно
    modalCall.on("click",function(event) {
        
        event.preventDefault();
        
        let $this = $(this);
        let modalId = $this.data('modal');
        
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
        
        setTimeout(function(){
            $(modalId).find(".modal__dialog").css({
                //Эффекты модального окна "открытие"
            transform: "scale(1)"
        });
            
        },200);
        
        
            
    });
    //Закрытие
    modalClose.on("click",function(event) {
        
        event.preventDefault();
        
        let $this = $(this);
        let modalParent = $this.parents('.modal');
        
          modalParent.find(".modal__dialog").css({
              //Закрытие модального окна
            transform: "scale(0)"
        });
        
        setTimeout(function(){
             modalParent.removeClass('show');
             $("body").removeClass('no-scroll');   
        },200);   
    });
    
    
     $(".modal").on("click",function(event) {
         let $this = $(this);
         
         $this.find(".modal__dialog").css({
             //Закрытие модального окна
            transform: "scale(0)"
        });
        
        
        setTimeout(function(){
             $this.removeClass('show');
             $("body").removeClass('no-scroll');      
             $("body").removeClass('no-scroll');   
        },200); 
        
         
        
        
        
    });
    
     $(".modal__dialog").on("click",function(event) {
         event.stopPropagation();
        
           
    });
});




