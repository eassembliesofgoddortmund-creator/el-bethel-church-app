import {Component, OnInit} from '@angular/core';
import {GalleryItem, GalleryModule, ImageItem} from 'ng-gallery';

@Component({
  selector: 'app-gallery',
  standalone:true,
  imports: [GalleryModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit{

  images: GalleryItem[] =[];

  ngOnInit() {
    // Set items array
    const imagePaths = [
      'bethel_4.jpg',
      'bethel_1.jpg',
      'bethel_5.jpg',
      'bethel_3.jpg',
      'bethel_6.jpg',
      'bethel_7.jpg',
      'bethel_8.jpg',
      'bethel_9.jpg'

    ];

    this.images = imagePaths.map(path => new ImageItem({ src: path, thumb: path }));

  }

}
