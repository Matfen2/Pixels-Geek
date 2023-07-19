import { Component } from '@angular/core';

interface Saga {
  id: number;
  ref: string;
  logo: string;
  wallpaper: string;
}

@Component({
  selector: 'app-show-univers',
  templateUrl: './show-univers.component.html',
  styleUrls: ['./show-univers.component.css'],
})
export class ShowUniversComponent {
  sagasOne: Saga[] = [
    {
      id: 1,
      ref: '#fallout',
      logo: '/assets/picts/saga/falloutLogo.png',
      wallpaper: '/assets/picts/saga/falloutWallpaper.jpg',
    },
    {
      id: 2,
      ref: '#godOfWar',
      logo: '/assets/picts/saga/godOfWarLogo.png',
      wallpaper: '/assets/picts/saga/godOfWarWallpaper.jpg',
    },
    {
      id: 3,
      ref: '#doom',
      logo: '/assets/picts/saga/doomLogo.png',
      wallpaper: '/assets/picts/saga/doomWallpaper.jpg',
    },
  ];

  sagasTwo: Saga[] = [
    {
      id: 4,
      ref: '#theLastOfUs',
      logo: '/assets/picts/saga/theLastOfUsLogo.png',
      wallpaper: '/assets/picts/saga/theLastOfUsWallpaper.jpg',
    },
    {
      id: 5,
      ref: '#theWitcher',
      logo: '/assets/picts/saga/theWitcherLogo.png',
      wallpaper: '/assets/picts/saga/theWitcherWallpaper.jpg',
    },
    {
      id: 6,
      ref: '#massEffect',
      logo: '/assets/picts/saga/massEffectLogo.png',
      wallpaper: '/assets/picts/saga/massEffectWallpaper.jpg',
    },
  ];

  sagasThree: Saga[] = [
    {
      id: 7,
      ref: '#bioshock',
      logo: '/assets/picts/saga/bioshockLogo.png',
      wallpaper: '/assets/picts/saga/bioshockWallpaper.jpg',
    },
    {
      id: 8,
      ref: '#cyberpunk2077',
      logo: '/assets/picts/saga/cyberpunk2077Logo.png',
      wallpaper: '/assets/picts/saga/cyberpunk2077Wallpaper.jpg',
    },
    {
      id: 9,
      ref: '#assassinsCreed',
      logo: '/assets/picts/saga/acLogo.png',
      wallpaper: '/assets/picts/saga/acWallpaper.jpg',
    },
  ];

  currentWallpaper: string = '';

  showSaga(wallpaper: string) {
    this.currentWallpaper = wallpaper;
  }
}
