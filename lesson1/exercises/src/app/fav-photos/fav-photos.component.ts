import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'MOMO: Museum of Modern Octocats';
  image1 = 'https://octodex.github.com/images/murakamicat.png';
  image2 = 'https://octodex.github.com/images/andycat.jpg';
  image3 = 'https://octodex.github.com/images/notocat.jpg';

  constructor() { }

  ngOnInit() {
  }

}