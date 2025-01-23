const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
    });
 
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
    });


    function logFormData(formId) {
        const form = document.getElementById(formId);
        form.addEventListener('submit', (event) => {
          event.preventDefault(); // Prevent form submission
  
          // Get all input elements in the form
          const formData = new FormData(form);
          const entries = Array.from(formData.entries());
  
          // Log each input field and its value
          console.log(`${formId} Data:`);
          entries.forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
          });
  
          console.log('---');
        });
      }
  
      // Attach listeners to both forms
      logFormData('loginForm');
      logFormData('registerForm');