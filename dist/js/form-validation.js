$(function () {
    jQuery("#contactForm").validate({
        rules: {
            firstname:{
                required:true,
                minlength: 2,
            },
            lastname:{
                required:true,
                minlength: 2,
            },
        
            email: {
                required: true,
                email: true
            },
            number:{
                required:true,
                minlength:10,
              },
    
        },
        messages: {
            firstname:{
                required:"Please enter your fastname",
                name:"Please enter at least two degits",
              },

            lastname:{
                required:"Please enter your lastname",
                name:"Please enter at least two degits",
            },
            
            email:{
                required:"Please enter email",
                email:"Please enter valid email",
            },
            password1:{
                required:"Please enter your password",
                minlength:"Password must be 5 char long"
              },
    
        },
        submitHandler:function(form){
            form.submit();
        }
    });

});
       
  


$(function () {
    jQuery('#loginForm').validate({
      rules:{
        name:"required",
        email:{
          required:true,
          email:true
        },
        password:{
          required:true,
          minlength:5
        },
      },messages:{
        name:"Please enter your name",
        email:{
          required:"Please enter email",
          email:"Please enter valid email",
        },
        password:{
          required:"Please enter your password",
          minlength:"Password must be 5 char long"
        },
      },
      submitHandler:function(form){
        form.submit();
    }
    });
  
  })
  
  
$(function () {
    jQuery('#signUpForm').validate({
      rules:{
        name:{
          required:true,
          minlength: 2,
      },
        number:{
          required:true,
          minlength:10,
        },
        password1:{
          required:true,
          minlength:5
        },
        confirm_password:{
          required:true,
          minlength:5,
          equalTo : "#password1"
        },
        email:{
          required:true,
          email:true
        },
        displayName:{
          required:true,
          minlength: 2,
        },
      },messages:{
        name:{
          required:"Please enter your name",
          name:"Please enter at least two degits",
        },
        number:{
          required:"Please enter your number",
          number:"Please enter valid number",
        },
        password1:{
          required:"Please enter your password",
          minlength:"Password must be 5 char long"
        },
        confirm_password:{
          required:"Please repeat your password",
          minlength:"Password must be 5 char long"
        },
        email:{
          required:"Please enter email",
          email:"Please enter valid email",
        },
        displayName:{
          required:"Please enter your display name",
          displayName:"Please enter at least two degits",
  
        },
      },
      submitHandler:function(form){
        form.submit();
      }
    });
  
  })
  
  
  
  $(function () {
    jQuery('#forgotPassword').validate({
      rules:{
   
        email:{
          required:true,
          email:true
        },
     
      },messages:{
     
        email:{
          required:"Please enter email",
          email:"Please enter valid email",
        },
      },
      submitHandler:function(form){
        form.submit();
    }
    });
  
  })
  

  
  
$(function () {
  jQuery('#editForm').validate({
    rules:{
      password_current:{
        required:true,
        minlength:5
      },
      password_new:{
        required:true,
        minlength:5
      },

      password_confirm:{
        required:true,
        minlength:5,
        equalTo : "#password_new"
      },
   
     
    },messages:{
    
      password_current:{
        required:"Please enter your current password",
        minlength:"Password must be 5 char long"
      },

      password_new:{
        required:"Please enter your new password",
        minlength:"Password must be 5 char long"
      },
      password_confirm:{
        required:"Please repeat your password",
        minlength:"Password must be 5 char long"
      },
     
    },
    submitHandler:function(form){
      form.submit();
    }
  }); 

})

