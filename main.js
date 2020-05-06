//setto timeout per comparsa div privacy
setTimeout(function () {
    $('.privacy').slideDown(500);
}, 2000);

//intercetto click sui due bottoni per chiudere div privacy
$('.privacy button').click(function(){
    $('.privacy').slideUp(500);
})
