import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Massage } from 'src/app/shared/model/massage.model';
import { NgForm } from '@angular/forms';
import { ImageService } from 'src/app/shared/services/image.service';
import { Imagee } from 'src/app/shared/model/image.model';
import { User } from 'src/app/shared/model/user.model';
import axios from 'axios';
import { UnloadService } from 'src/app/shared/services/unload.service';
@Component({
  selector: 'app-addpicture',
  templateUrl: './addpicture.component.html',
  styleUrls: ['./addpicture.component.scss']
})
export class AddpictureComponent implements OnInit {
  //@ts-ignore
  user:User;
  image:any;
  //@ts-ignore
  massage: Massage;
  @Output() onPictureAdd = new EventEmitter <Imagee>();

  constructor(private addpictureService: ImageService, private unloadService: UnloadService) { }

  ngOnInit(): void {
    this.user = JSON.parse(window.localStorage.getItem('user') || '{}');
    this.massage = new Massage('success', '');
  }
  private showMassage(massage: Massage){
    this.massage = massage;
    window.setTimeout(()=>{
      this.massage.text = '';
    }, 5000);
  }
  onOpenFileDialog() {
    document.getElementById('file-input')?.click();
  }

  fileChange(event: any) {
    console.log(event);
    let fileList: FileList = event.target.files;
    if (!fileList.length) {
      return;
    }

    this.image= fileList[0];

    
  }

  async onSubmit(form: NgForm)
  {
    try{
      const { data } = await this.unloadService.unload(this.image);
      const {category, caption} = form.value;
      const picture = new Imagee(data,this.user.fio,category,caption);
      this.addpictureService.createImage(picture)
        .subscribe(()=>{
          this.showMassage({
            text:'Картинка успешно добавлена!',
            type: 'success'
          });
          form.reset();
        });
    }
    catch(error){
      console.log(error);
    }
    
  }
  
}