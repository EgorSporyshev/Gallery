import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import { SystemRoutingModule } from './system-routing.module';
import { ProjectComponent } from './project/project.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { EditComponent } from './edit/edit.component';
import { AddpictureComponent } from './addpicture/addpicture.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MygalleryComponent } from './mygallery/mygallery.component';
import { PersonalComponent } from './personal/personal.component';
import { DropdownDirective } from './shared/directive/dropdown.directive';
import { EditService } from '../shared/services/edit.service';
import { ImageComponent } from './shared/components/image/image.component';
import { ImageService } from '../shared/services/image.service';
import { ImageFilterPipe } from '../shared/services/filter.pipe';


@NgModule({
  declarations: [
    ProjectComponent,
    FooterComponent,
    HeaderComponent,
    EditComponent,
    AddpictureComponent,
    GalleryComponent,
    MygalleryComponent,
    PersonalComponent,
    DropdownDirective,
    ImageComponent,
    ImageFilterPipe
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
],
providers:[EditService,ImageService, ImageFilterPipe],
})
export class SystemModule { }
