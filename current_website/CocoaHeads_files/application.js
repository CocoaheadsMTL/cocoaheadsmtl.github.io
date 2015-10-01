$(document).ready(function(){

    $('#q').bind("click keyup", function() {
        var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
        email = $(this).val()
        console.log(email)

        if(email && pattern.test(email)) {
            $('#signup-button').removeClass('disabled');
            $('#signup-button').attr('disabled', false);
        } else {
            $('#signup-button').addClass('disabled');
            $('#signup-button').attr('disabled', true);
        }
    })


    $('form').submit(function() {

    	$.ajax({
    		type: "POST",
    		url: "/subscribe",
    		data: "q="+$("#q").val(),
    		beforeSend: function() {	
    			$('#subscribe .email input').disabled = true;
    			$('#signup-button').val("Subscribing..."); 
    		},
    		error: function() {
    			$('#subscribe .email input').disabled = false;
    			$('#signup-button').val("Subscribe"); 
    		},
    		success: function(msg){
    			$('#subscribe .email').html("Subscribed to the newsletter."); 
    		}
    	 });
    	 
    	 return false;
    })
})