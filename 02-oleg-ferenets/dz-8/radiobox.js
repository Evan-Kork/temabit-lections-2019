       $(function() {

           $('.color1').click(function() {
               // $('.products__color').toggleClass('active', true);
               $('.cc1').addClass('active');
               $('.cc2').removeClass('active');
               $('.cc3').removeClass('active');
           });
           $('.color2').click(function() {
               // $('.products__color').toggleClass('active', true);
               $('.cc2').addClass('active');
               $('.cc1').removeClass('active');
               $('.cc3').removeClass('active');
           });
           $('.color3').click(function() {
               // $('.products__color').toggleClass('active', true);
               $('.cc3').addClass('active');
               $('.cc2').removeClass('active');
               $('.cc1').removeClass('active');
           });

           $('.color11').click(function() {
               // $('.products__color').toggleClass('active', true);
               $('.cc11').addClass('active');
               $('.cc12').removeClass('active');
               $('.cc13').removeClass('active');
           });
           $('.color12').click(function() {
               // $('.products__color').toggleClass('active', true);
               $('.cc12').addClass('active');
               $('.cc11').removeClass('active');
               $('.cc13').removeClass('active');
           });
           $('.color13').click(function() {
               // $('.products__color').toggleClass('active', true);
               $('.cc13').addClass('active');
               $('.cc12').removeClass('active');
               $('.cc11').removeClass('active');
           });



           $('.color22').click(function() {
               // $('.products__color').toggleClass('active', true);
               $('.cc22').addClass('active');
               $('.cc23').removeClass('active');
           });
           $('.color23').click(function() {
               // $('.products__color').toggleClass('active', true);
               $('.cc23').addClass('active');
               $('.cc22').removeClass('active');

           });
       });