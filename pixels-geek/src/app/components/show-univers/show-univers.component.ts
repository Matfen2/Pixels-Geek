import { Component } from '@angular/core';

interface Saga {
  id: number;
  logo: string;
  wallpaper: string;
}

@Component({
  selector: 'app-show-univers',
  templateUrl: './show-univers.component.html',
  styleUrls: ['./show-univers.component.css'],
})
export class ShowUniversComponent {
  sagas: Saga[] = [
    {
      id: 1,
      logo: '/assets/picts/saga/falloutLogo.png',
      wallpaper: '/assets/picts/saga/falloutWallpaper.jpg',
    },
    {
      id: 2,
      logo: '/assets/picts/saga/godOfWarLogo.png',
      wallpaper: '/assets/picts/saga/godOfWarWallpaper.jpg',
    },
    {
      id: 3,
      logo: '/assets/picts/saga/doomLogo.png',
      wallpaper: '/assets/picts/saga/doomWallpaper.jpg',
    },
    {
      id: 4,
      logo: '/assets/picts/saga/theLastOfUsLogo.png',
      wallpaper: '/assets/picts/saga/theLastOfUsWallpaper.jpg',
    },
    {
      id: 5,
      logo: '/assets/picts/saga/theWitcherLogo.png',
      wallpaper: '/assets/picts/saga/theWitcherWallpaper.jpg',
    },
    {
      id: 6,
      logo: '/assets/picts/saga/massEffectLogo.png',
      wallpaper: '/assets/picts/saga/massEffectWallpaper.jpg',
    },
    {
      id: 7,
      logo: '/assets/picts/saga/bioshockLogo.png',
      wallpaper: '/assets/picts/saga/bioshockWallpaper.jpg',
    },
    {
      id: 8,
      logo: '/assets/picts/saga/cyberpunk2077Logo.png',
      wallpaper: '/assets/picts/saga/cyberpunk2077Wallpaper.jpg',
    },
    {
      id: 9,
      logo: '/assets/picts/saga/acLogo.png',
      wallpaper: '/assets/picts/saga/acWallpaper.jpg',
    },
  ];

  currentWallpaper: string = '';

  showSagaUnivers(wallpaper: string) {
    this.currentWallpaper = wallpaper;
  }
}
