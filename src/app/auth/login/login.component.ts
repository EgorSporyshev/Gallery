import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/model/user.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { Massage } from '../../shared/model/massage.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  // @ts-ignore
  massage: Massage;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.massage = new Massage('danger', '');
    this.route.queryParams.subscribe((params: Params) => {
      if (params['canLogin']) {
        this.showMassage({
          text: 'Регистрация успешно завершена',
          type: 'success',
        });
      }
    });

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  private showMassage(massage: Massage) {
    this.massage = massage;

    window.setTimeout(() => {
      this.massage.text = '';
    }, 5000);
  }

  onSubmit() {
    console.log(this.form.get('email'));
    const formData = this.form.value;
    this.userService
      .getUsers(formData.email)
      .subscribe((user: User | undefined) => {
        if (user) {
          if (user.password === formData.password) {
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            console.log('Вы успешно авторизованы');
            this.router.navigate(['system', 'project']);
          } else {
            this.showMassage({
              text: 'Пароль введён неверно',
              type: 'danger',
            });
          }
        } else {
          this.showMassage({
            text: 'Такого пользователя не существует',
            type: 'danger',
          });
        }
      });
  }
}
