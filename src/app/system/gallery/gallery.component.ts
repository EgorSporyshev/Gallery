import { Component, OnInit, Input} from '@angular/core';
import { ImageService } from 'src/app/shared/services/image.service';
import { Imagee } from 'src/app/shared/model/image.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public visibleImages: Imagee[];

  // Create an input
  @Input() filterBy: string = 'all';

  constructor(private imageService: ImageService) {
    this.visibleImages=[];
    this.imageService.getImages().subscribe(res => {
      this.visibleImages=res;
    })

  }

  ngOnChanges() {
      //this.visibleImages = this.imageService.getImages();
      this.imageService.getImages().subscribe(res => {
        this.visibleImages=res;
      })
  }

  ngOnInit(): void {
    //this.imageService.getImages().subscribe(res=>
      //{this.visibleImages=res;})
  }
  concatUrl(url:string){
    return `http://localhost:3002/${url}`
  }
  currentFilter = { title: 'Все', value: 'all' };
  filters = [
    { title: 'Все', value: 'all' },
    { title: 'Животное', value: 'animal' },
    { title: 'Человек', value: 'human' },
    { title: 'Природа', value: 'nature' },
    { title: 'Автомобили', value: 'car' },
    { title: 'Интерьер', value: 'interior' }
  ];
}
