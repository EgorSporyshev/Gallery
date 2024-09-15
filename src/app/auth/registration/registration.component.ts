import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from '../../shared/model/user.model';
import {UserService} from '../../shared/services/user.service';
import {Router} from '@angular/router';
import { AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  //@ts-ignore
  form: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], [this.forbiddenEmails.bind(this)]),
      'fio':new FormControl(null, [Validators.required]),
      'password':new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'agree': new FormControl(null, [Validators.requiredTrue]),
      'datebirth':new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });

  }
  onSubmit() {
    const {email, password, fio, datebirth } = this.form.value;
    const user = new User(email, password, fio, datebirth);

    this.userService.createUser(user)
      .subscribe(() => {
        this.router.navigate(['/login'],{
          queryParams: {
            canLogin: true
          }
        });
      });
  }
  forbiddenEmails(control: AbstractControl): Promise<any>
  {
    return new Promise((resolve, reject )=> {
      this.userService.getUsers(control.value)
        .subscribe((user:User | undefined) => {
          if(user) {
            resolve({forbiddenEmail: true});
          }
          else {
            resolve(null);
          }
        });
    });
  }
  back():void
  {
    this.router.navigate(['/login']);
  }
}
