$(document).ready(function(){
   

$('.myDropdown').change(function() {
    // console.log($(this).val());

    myFunction();
});

$('.myDropdown_2').change(function() {
    
        myFunction();
});





function myFunction () {

    if (($(".myDropdown").val() !== "Select") &&  ($(".myDropdown_2").val() !== "Select") )
    {
        $('.myRadiobtnContainer').show();
        $(".step_one").css("width", "100%");
        $('.step_two_disabled').removeClass('disabled');

        // $(".progress-bar").html('25% Complete (success)');

        $('input:radio[name=radio_btn]').on('change', function() { 

            $(".step_two").css("width", "100%");
            $('.step_three_disabled').removeClass('disabled');

            // $(".progress-bar").html('50% Complete (success)');

            $('.submitBtnContainer').show();
            $('.myCheckboxContainer').show();
            
            $(".submitBtn").attr('disabled', false);

            if($(this).val() == 'Op1')
            {
                $(".op_dp_2").attr('disabled', true);
                $(".op_dp_1").attr('disabled', false);
            }
            else if($(this).val() == 'Op2')
            {
                $(".op_dp_1").attr('disabled', true);
                $(".op_dp_2").attr('disabled', false);
            }

        $('input:checkbox[name=myCheck]').on('change',function () {
            
            // if(this.checked)
            // {
            //  $(".submitBtn").attr('disabled', false);
            //  $(".progress-bar").css("width", "75%");
            //  $(".progress-bar").html('75% Complete (success)');
            // }
            // else {

            //  // $(".submitBtn").attr('disabled', true);
            //  $(".progress-bar").css("width", "50%");
            //  $(".progress-bar").html('50% Complete (success)');
            // }

        
             $(".step_three").css("width", "100%");
             $('.step_four_disabled').removeClass('disabled');
            
            // $(".progress-bar").html('75% Complete (success)');
        });
    });

    }
}

});