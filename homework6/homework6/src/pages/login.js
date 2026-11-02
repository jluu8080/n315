export default function Login()
{
    return `
      <section class="loginPage">

        <!-- Login -->
        <div class="loginFields">
          <p class="loginHeader">Login Here!</p>

          <div class="email">
            <p>Email Address</p>
            <input type="email" id="emailInput">
          </div>

          <div class="password">
            <p>Password</p>
            <input type="password">
          </div>

          <!-- <div class="signUpBtn">
          </div> -->
          <input type="button" value="Login" onclick="" id="loginBtn">
        </div>

        <!-- Sign Up -->
        <div class="signUpField">
          <p class="subTitle">don't have an account?</p>
          <p class="signUpHeader">Sign Up!</p>
        
          <div class="firstName">
            <p>First Name</p>
            <input type="text">
          </div>

          <div class="lastName">
            <p>Last Name</p>
            <input type="text">
          </div>
          
          <div class="email">
            <p>Email</p>
            <input type="email">
          </div>

          <div class="password">
            <p>Password</p>
            <input type="password">
          </div>

          <input type="button" value="Sign Up" onclick="" id="signUpBtn">
        </div>
      </section>`;
}