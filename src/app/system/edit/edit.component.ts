import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/model/user.model';
import { Massage } from 'src/app/shared/model/massage.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';
import { EditService } from 'src/app/shared/services/edit.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  //@ts-ignore
  currentUser: User;
  //@ts-ignore
  massage:Massage;
  //@ts-ignore
  user: User;

  @Output() onRecordEdit = new EventEmitter<User>();

  constructor(private authServise: AuthService, private editService: EditService, private router: Router) {
   }

  ngOnInit(): void {
    this.user = JSON.parse(window.localStorage.getItem('user') || '{}');
    this.currentUser  = this.user;
    this.massage = new Massage('success', '')
  }

  delete():void
  {
    this.editService.deleteUser(this.user.id).subscribe();
    this.router.navigate(['/login']);
  }

  onSubmit(form: NgForm) {
    const {email, password} = form.value;
    const newUser = new User(email, password, this.user.fio, this.user.datebirth, this.user.id);

    this.editService.updateUser(newUser)
      .subscribe((data: User) => {
        this.onRecordEdit.emit(data);
        this.massage.text = 'Аккаунт успешно обновлен!';
        window.setTimeout(() => this.massage.text = '', 5000)
      });
  }
}
