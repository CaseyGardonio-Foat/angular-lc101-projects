import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinksTitle: string= 'Check out these links, too!'
  favLinks: string[]= ['https://octodex.github.com/', 'https://www.moma.org/', 'https://en.wikipedia.org/wiki/Takashi_Murakami', 'https://en.wikipedia.org/wiki/Andy_Warhol', 'https://en.wikipedia.org/wiki/Ren%C3%A9_Magritte']
  
  constructor() { }

  ngOnInit() {
  }

}
