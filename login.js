function validateLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');
  
    // Clear previous messages
    errorMessage.textContent = '';
  
    // Check if username or password is empty
    if (!username || !password) {
      errorMessage.textContent = 'Please fill in all fields.';
      return false;
    }
  
    // Username validation (minimum 4 characters)
    if (username.length < 4) {
      errorMessage.textContent = 'Username must be at least 4 characters long.';
      return false;
    }
  
    // Password validation (minimum 6 characters, must include a number)
    if (password.length < 6 || !/\d/.test(password)) {
      errorMessage.textContent = 'Password must be at least 6 characters long and include a number.';
      return false;
    }
  
    // Simulate a successful login message
    alert('Login Successful!');
    return true; // Allow form submission
  }
  