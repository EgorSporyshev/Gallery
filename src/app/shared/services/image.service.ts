import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Imagee} from '../model/image.model';
import {map} from 'rxjs/operators';


@Injectable()
export class ImageService {
  constructor(private http:HttpClient){}

    getImages():Observable <Imagee[]> {
        return this.http.get<Imagee[]>(`http://localhost:3000/images`,)
    }

    getImage(id: number){
        return this.http.get<Imagee[]>(`http://localhost:3000/images?id=${id}`)
        .pipe(map((image:Imagee[])=>image[0] ? image[0]:undefined));
    }
    createImage(image:Imagee){
      return this.http.post('http://localhost:3000/images',image);
    }
    getImagesUser(un:string):Observable <Imagee[]> {
      return this.http.get<Imagee[]>(`http://localhost:3000/images?username=${un}`,)
  }
}
