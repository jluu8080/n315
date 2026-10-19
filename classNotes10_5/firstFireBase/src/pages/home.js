export default function home() {
    return `
    <div class= "home">
        <h1>Welcome to the Home Page</h1>
        
        <div class="form-container">
            <label for="username">Email:</label>
            <input type=email id="email" name="email" required>

            <label for="password">Password:</label>
            <input type=password id="password" name="password" required>

            <button id="login">Sign Up</button>
        </div>
    </div>`
}