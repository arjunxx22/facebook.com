document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        // Simulate form submission
        document.querySelector('.login-box').innerHTML = '<h2>Loading...</h2>';
        
        setTimeout(() => {
            // Simulate a response from server
            alert('Login successful!');
            document.querySelector('.login-box').innerHTML = `
                <h1>Facebook</h1>
                <p>Login successful!</p>
                <a href="#" class="signup-link">Go to Facebook</a>
            `;
        }, 1000);  // Simulates a network delay
    } else {
        alert('Please enter both email and password.');
    }
});
