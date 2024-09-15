import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/services/image.service';
import { Imagee } from 'src/app/shared/model/image.model';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/model/user.model';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  user: User;
  
  constructor() {
    
    this.user = JSON.parse(window.localStorage.getItem('user')||'{}');

    
  }
  ngOnInit(): void {
  }
  
    
}
