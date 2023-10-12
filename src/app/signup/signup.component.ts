import { Component } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }
  constructor(private authService: SocialAuthService) {}
  signIn(){}
  loginWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user: SocialUser) => {
        // Handle user data from Google Sign-In
        alert("logein bbvmnb")
      });
  // loginWithGoogle(): void {
  //   // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  loginWithFacebook(){

  }
}
