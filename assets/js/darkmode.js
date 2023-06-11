$('.change').on('click', function(){
    if( $('body').hasClass('dark')){
        $('body').removeClass('dark');
        $('.change').text('off');
    } else {
        $('body').addClass('dark');
        $('.change').text('on');
    }
})

//this code is targeting the 'change class' upon clicking a button
// allowing the user to be
//able to switch between dark and light mode for better viewing
// using and if {}else {} statement to define the parameters