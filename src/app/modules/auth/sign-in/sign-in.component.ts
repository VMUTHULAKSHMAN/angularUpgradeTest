import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { LoginService } from './login.service';

@Component({
  selector: 'auth-sign-in',
  templateUrl: './sign-in.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class AuthSignInComponent implements OnInit {
  @ViewChild('signInNgForm') signInNgForm: NgForm;

  alert: { type: FuseAlertType; message: string } = {
    type: 'success',
    message: ''
  };
  signInForm: FormGroup;
  showAlert: boolean = false;

  /**
   * Constructor
   */
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private http: HttpClient,
    private loginService: LoginService,
    private localStorageService: LocalStorageService,
    private sessionStorageService: SessionStorageService
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Create the form
    this.signInForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      rememberMe: ['']
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  login(): void {
    // Return if the form is invalid
    if (this.signInForm.invalid) {
      return;
    }

    // Disable the form
    this.signInForm.disable();

    // Hide the alert
    this.showAlert = false;
    this.loginService
      .login({
        username: this.signInForm.get('email')?.value,
        password: this.signInForm.get('password')?.value,
        rememberMe: this.signInForm.get('rememberMe')?.value
      })
      .subscribe({
        next: () => {
          // TODO - See if this is required
          // this.authenticationError = false;
          // this._authService.accessToken = this.localStorageService.retrieve('authenticationToken') || this.sessionStorageService.retrieve('authenticationToken');

          // if (!this._router.getCurrentNavigation()) {
          // There were no routing during login (eg from navigationToStoredUrl)
          this._router.navigate(['/signed-in-redirect']);
          // }
        },
        error: () => {
          // Re-enable the form
          this.signInForm.enable();

          // Reset the form
          this.signInNgForm.resetForm();

          // Set the alert
          this.alert = {
            type: 'error',
            message: 'Wrong email or password'
          };

          // Show the alert
          this.showAlert = true;
          // TODO - See if this is required
          // this.authenticationError = true
        }
      });
  }
}
