function phoneNumberValidation(phoneNumber)  
{  
    var phoneno = /^\d{10}$/;  
    if(phoneNumber.match(phoneno))  
    {  
        return true;  
    }  
    else 
    {  
        $('#phone_error').html("* Enter valid 10 digit number like this 9876543210.");
        return false;
    }  
} 
 
function validate(){
    var valid = true;
    var f_name = $('#f_name').val();
    var l_name = $('#l_name').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var retype_password = $('#re_password').val();
    var gender = $('#gender').val();
     
    var checkedData=[];
    $('.language').each(function(i){
        if($(this).is(':checked'))
        {
            checkedData.push($(this).val());
        }
    });
 
    var country = $('#country').val();;
    var phone = $('#phone').val();;
     
    if(f_name=='' || f_name==null)
    {
        valid=false;
        $('#f_name_error').html("* Please enter firstname."); 
    }
    else
    {
        $('#f_name_error').html("");
    }
 
    if(l_name=='' || l_name==null)
    {
        valid=false;
        $('#l_name_error').html("* Please enter lastname.");
    }
    else
    {
        $('#l_name_error').html("");
    }
 
    if(email=='' || email==null)
    {
        valid=false;
        $('#email_error').html("* Please enter email.");
    }
    else
    {
        $('#email_error').html(""); 
    }
 
    if(password=='' || password==null)
    {
        valid=false;
        $('#password_error').html("* Please enter password.");
    }
    else
    {
        $('#password_error').html("");
    }
 
    if(retype_password=='' || retype_password==null)
    {
        valid=false;
        $('#re_password_error').html("* Please enter retype password.");
    }
    else
    {
        $('#re_password_error').html("");
    }
 
    if(checkedData=='' || checkedData==null)
    {
        valid=false;
        $('#language_error').html("* Please choose any language.");
    }
    else
    {
        $('#language_error').html("");
    }
 
    if(country=='' || country==null)
    {
        valid=false;
        $('#country_error').html("* Please choose your country.");
    }
    else
    {
        $('#country_error').html("");
    }
 
    if(phone=='' || phone==null)
    {
        valid=false;
        $('#phone_error').html("* Please enter your phone number.");
    }
    else
    {
        $('#phone_error').html("");
    }
 
    if(phone!='')
    {
        valid = phoneNumberValidation(phone);
    }
 
    if(password != retype_password)
    {
        valid=false;
        $('#re_password_error').html("* Please retype password same as password.");
    }
 
    if(password == retype_password)
    {
        $('#re_password_error').html("");
    }   
 
    if(valid==false)
    {
        return false;
    }
    else
    {
        alert("You form is ready to submit.");
        return true;
    }   
}