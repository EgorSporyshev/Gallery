import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/services/image.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  // selector: 'app-image-detail',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})

export class ImageComponent implements OnInit {
  image:any;

  constructor(private imageService: ImageService, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.imageService.getImage(params.id)
      .subscribe((image)=>(this.image=image))
    })
      //this.image = this.imageService.getImage(
          //+this.route.snapshot.params['id']);
  }
  concatUrl(url:string){
    return `http://localhost:3002/${url}`
  }
}
