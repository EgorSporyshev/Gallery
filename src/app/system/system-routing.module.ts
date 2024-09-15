import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SystemComponent} from "./system.component";
import {ProjectComponent} from "./project/project.component";
import { GalleryComponent } from './gallery/gallery.component';
import { MygalleryComponent } from './mygallery/mygallery.component';
import { AddpictureComponent } from './addpicture/addpicture.component';
import { EditComponent } from './edit/edit.component';
import { PersonalComponent } from './personal/personal.component';
import { ImageComponent } from './shared/components/image/image.component';

const routes: Routes = [
  { path: 'system', component: SystemComponent, children: [
    {path:'project', component: ProjectComponent},
    {path:'gallery', component: GalleryComponent},
    {path:'mygallery',component:MygalleryComponent},
    {path:'addpicture',component:AddpictureComponent},
    {path:'personal',component:PersonalComponent},
    {path:'edit',component:EditComponent}
  ]},
  {path: 'image/:id', component: ImageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
