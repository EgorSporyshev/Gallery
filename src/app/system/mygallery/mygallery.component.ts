import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from 'src/app/shared/services/image.service';
import { Imagee } from 'src/app/shared/model/image.model';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/model/user.model';

@Component({
  selector: 'app-mygallery',
  templateUrl: './mygallery.component.html',
  styleUrls: ['./mygallery.component.scss'],
})
export class MygalleryComponent implements OnInit {
  user: User;
  public visibleImages: Imagee[];
  // Create an input
  @Input() filterBy: string = 'all';

  constructor(private imageService: ImageService) {
    this.visibleImages=[];
    this.user = JSON.parse(window.localStorage.getItem('user') || '{}');
    this.imageService.getImagesUser(this.user.fio).subscribe((res) => {
      this.visibleImages = res;
    });
  }

  ngOnChanges() {
    this.imageService.getImagesUser(this.user.fio).subscribe((res) => {
      this.visibleImages = res;
    });
  }

  ngOnInit(): void {

  }
  concatUrl(url: string) {
    return `http://localhost:3002/${url}`;
  }
  currentFilter = { title: 'Все', value: 'all' };
  filters = [
    { title: 'Все', value: 'all' },
    { title: 'Животное', value: 'animal' },
    { title: 'Люди', value: 'human' },
    { title: 'Природа', value: 'nature' },
    { title: 'Автомобили', value: 'car' },
    { title: 'Интерьер', value: 'interior' }
  ];
}
