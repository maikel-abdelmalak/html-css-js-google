$(document).ready(function(){
    //setto timeout per comparsa div privacy
    setTimeout(function () {
        $('.privacy').slideDown(500);
    }, 2000);

    //intercetto click sui due bottoni per chiudere div privacy
    $('.privacy button').click(function(){
        $('.privacy').slideUp(500);
    });


    $('.grill').click(function(){
        if($("#dropdown").hasClass("hidden")){
            $('#dropdown').removeClass('hidden');
        }else{
            $('#dropdown').addClass('hidden');
        }
    });

//     $(document).click(function(event){
//             var target = $(event.target);
//             if(target.hasClass('grill')){
//                 if($("#dropdown").hasClass("hidden")){
//                     $('#dropdown').removeClass('hidden');
//                 }else{
//                     $('#dropdown').addClass('hidden');
//                 }
//             }else{
//                 $('#dropdown').addClass('hidden');
//             }
//
//     });
});
