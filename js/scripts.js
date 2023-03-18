(function() {
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#contact-email');
    let telephoneInput = document.querySelector('#contact-telephone');
    let messageInput = document.querySelector('#contact-message');
  
    function showErrorMessage(input, message) {
      let container = input.parentElement;  // The .input-wrapper
  
      // Check and REmove any existing errors
      let error = container.querySelector('.error-message');
      if (error) {
        container.removeChild(error);
      }
  
      // Now add the error if the message isn't empty
      if (message) {
        let error = document.createElement('div');
        error.classList.add('error-message');
        error.innerText = message;
        container.appendChild(error);
      }
    }
    
    function validateEmail() {
      let value = emailInput.value;
  
      if (!value) {
        showErrorMessage(emailInput, 'Email is a required field.');
        return false;
      }
      if (value.indexOf('@') === -1 || 
          value.indexOf('.') === -1 ||
          value.indexOf('.') === value.length - 1) {
        showErrorMessage(emailInput, 'You must enter a valid email address.');
        return false;
      }
  
      showErrorMessage(emailInput, null);
      console.log(value.indexOf('.'), value.length - 1);
      return true;
    }
    
    function validateTelephone() {
      let value = telephoneInput.value;
      
      if (!value) {
        showErrorMessage(telephoneInput, 'Telephone is a required field.');
        return false;
      }
      
      if (value.length < 12) {
        showErrorMessage(telephoneInput, 'The telephone needs to be area code, prefix, and suffix.');
        return false;
      }
      
      showErrorMessage(telephoneInput, null);
      return true;
    }
    
    function validateMessage() {
        let value = messageInput.value;
        
        if (!value) {
          showErrorMessage(messageInput, 'Message is a required field.');
          return false;
        }
        
        if (value.length < 0) {
          showErrorMessage(messageInput, 'The message needs to have some content.');
          return false;
        }
        
        showErrorMessage(messageInput, null);
        return true;
    }
    
    function validateForm() {
      let isValidEmail = validateEmail();
      let isValidTelephone = validateTelephone();
      let isValidMessage = validateMessage();
      
      return isValidEmail && isValidTelephone && isValidMessage;
    }
    
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Do not submit to the server
      if (validateForm()) {
        alert('Success!');
      }
    });
  
    emailInput.addEventListener('input', validateEmail);
    telephoneInput.addEventListener('input', validateTelephone);
    messageInput.addEventListener('input', validateMessage);
  
    // THE RETURN STATEMENT HERE
  })();