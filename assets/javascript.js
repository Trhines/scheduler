
var today = moment();
$("#current").text(today.format("MMM Do, YYYY"));
current_hour = moment().hour()


$('.block').each( function(){
    
    blockTime = $(this).attr('time')
    console.log(this)

    //populates text field from local
    $(this).val(localStorage.getItem(blockTime))

    //sets colors
    if(blockTime < current_hour){
        console.log('past')
        $(this).addClass('past')
        $(this).removeClass('present')
        $(this).removeClass('future')
    }

    if(blockTime > current_hour){
        console.log('future')
        $(this).addClass('future')
        $(this).removeClass('present')
        $(this).removeClass('past')
    }

    if(blockTime == current_hour){
        console.log('present')
        $(this).addClass('present')
        $(this).removeClass('past')
        $(this).removeClass('future')
    }
})

//saves to local on click
$('.saveBtn').on('click', function(){
    txt = $(this).parent().children().eq(1)
    localStorage.setItem(txt.attr('time'), txt.val())
})