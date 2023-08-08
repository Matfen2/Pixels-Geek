import { Component } from '@angular/core';

interface Bioshock {
  id: number;
  pictGame: string;
  title: string;
  typeOne: string;
  typeTwo: string;
  typeThree: string;
  info: string;
  price: number;
}

interface Cyberpunk2077 {
  id: number;
  pictGame: string;
  title: string;
  typeOne: string;
  typeTwo: string;
  typeThree: string;
  info: string;
  price: number;
}

interface AssassinsCreed {
  id: number;
  pictGame: string;
  title: string;
  typeOne: string;
  typeTwo: string;
  typeThree: string;
  info: string;
  price: number;
}

@Component({
  selector: 'app-sagas-modals-third',
  templateUrl: './sagas-modals-third.component.html',
  styleUrls: ['./sagas-modals-third.component.css'],
})
export class SagasModalsThirdComponent {
  // Bioshock
  sagasSeven: Bioshock[] = [
    {
      id: 1,
      pictGame: '/assets/picts/modals/bioshock/bioshock.jpg',
      title: 'Bioshock (2007) par Irrational Games',
      typeOne: 'FPS',
      typeTwo: 'Immersive Sim',
      typeThree: 'Narratifs',
      info: "Jeu de tir à la première personne (FPS), Bioshock vous entraîne dans les profondeurs de l'océan atlantique pour explorer les ruines d'une gigantesque cité sous-marine ravagée par la folie de ses créateurs. Perdu au cœur de cette dystopie mâtinée d'abomination scientifique, le joueur devra lutter à l'aide de plasmides (sortes de modules qui modifient l'ADN afin d'acquérir de puissants pouvoirs) contre des habitants qui ont depuis longtemps renié leur humanité.",
      price: 14.99,
    },
    {
      id: 2,
      pictGame: '/assets/picts/modals/bioshock/bioshock2.jpg',
      title: 'Bioshock 2 (2010) par 2K Marin',
      typeOne: 'FPS',
      typeTwo: 'Immersive Sim',
      typeThree: 'Narratifs',
      info: "Jeu de tir à la première personne (FPS), BioShock 2 se déroule 10 ans après le premier opus. Ici vous incarnez un Protecteur qui doit traverser les rues de Rapture, la cité engloutie, et tenter d'obtenir enfin votre liberté. Pour y parvenir, vous devrez affronter de nombreux ennemis et prendre des décisions qui affecteront le sort de la ville toute entière.",
      price: 14.99,
    },
    {
      id: 3,
      pictGame: '/assets/picts/modals/bioshock/bioshockInfinite.jpg',
      title: 'Bioshock Infinite (2013) par Irrational Games',
      typeOne: 'FPS',
      typeTwo: 'Immersive Sim',
      typeThree: 'Narratifs',
      info: "Troisième épisode de la série Bioshock, Bioshock Infinite est un jeu d'aventure dont l'action se passe en 1912, dans la cité flottante de Colombia. Le joueur accompagne Booker DeWitt, un détective chargé de retrouver une jeune femme disparue, prisonnière de la ville.",
      price: 14.99,
    },
    {
      id: 4,
      pictGame: '/assets/picts/modals/bioshock/bioshockCollection.jpg',
      title: 'Bioshock : The Collection (2016) par Blind Squirrel Games',
      typeOne: 'FPS',
      typeTwo: 'Immersive Sim',
      typeThree: 'Narratifs',
      info: 'Bioshock : The Collection est une compilation HD des trois premiers épisodes de la série de 2K Games. Retrouvez Rapture et son ambiance atypique dans ces remasters des épisodes Bioshock (2007), Bioshock 2 (2010) et Bioshock Infinite (2013). Profitez également de l’ensemble du contenu additionnel solo et également «Imagining BioShock» les commentaires des concepteurs avec Ken Levine et Shawn Robertson.',
      price: 24.99,
    },
  ];

  // CYBERPUNK 2077
  sagasEigth: Cyberpunk2077[] = [
    {
      id: 1,
      pictGame: '/assets/picts/modals/cyberpunk2077/cyberpunk2077.jpg',
      title: 'Cyberpunk 2077 (2020) par CD Projekt RED',
      typeOne: 'RPG',
      typeTwo: 'FPS',
      typeThree: 'Monde Ouvert',
      info: "Cyberpunk 2077 est un JDR d'action-aventure en monde ouvert, qui se déroule à Night City, une mégalopole futuriste et sombre, obsédée par le pouvoir, la séduction et les modifications corporelles.",
      price: 24.99,
    },
  ];

  // Assassin's Creed
  sagasNine: AssassinsCreed[] = [
    {
      id: 1,
      pictGame: '/assets/picts/modals/asssassinsCreed/ac1.jpg',
      title: "Assassin's Creed (2007) par Ubisoft",
      typeOne: 'Action/Aventure',
      typeTwo: 'Infiltration',
      typeThree: 'Monde Ouvert',
      info: "Jeu d'action-aventure en monde ouvert, Assassin's Creed prend place en 1191 alors que la troisième croisade secoue la Terre sainte. Le joueur se retrouve plongé dans le Moyen Orient de l'époque aux côtés d'Altaïr, un assassin d'élite ayant pour mission de mettre un terme aux hostilités en s'attaquant à la fois aux Croisés et aux Sarrasins.",
      price: 4.99,
    },
    {
      id: 2,
      pictGame: '/assets/picts/modals/asssassinsCreed/ac2.jpg',
      title: "Assassin's Creed II (2009) par Ubisoft",
      typeOne: 'Action/Aventure',
      typeTwo: 'Infiltration',
      typeThree: 'Monde Ouvert',
      info: "Assassin’s Creed 2 est l'épopée d'une famille, d'une vengeance et d'une conspiration dans les temps radieux et cruels de la Renaissance italienne. Ezio se lie d'amitié avec Leonardo da Vinci, affronte les plus puissantes familles de Florence et s'aventure jusque dans les canaux de Venise, où il deviendra un Maître Assassin.",
      price: 4.99,
    },
    {
      id: 3,
      pictGame: '/assets/picts/modals/asssassinsCreed/acBrotherhood.jpg',
      title: "Assassin's Creed Brotherhood (2010) par Ubisoft",
      typeOne: 'Action/Aventure',
      typeTwo: 'Infiltration',
      typeThree: 'Monde Ouvert',
      info: "Incarnez Ezio, un légendaire Maître Assassin, dans son combat acharné contre le puissant Ordre des Templiers. Pour porter un coup fatal à l'ennemi, Ezio doit se rendre dans la plus grande ville d'Italie : Rome. Un lieu de pouvoir, d'avidité et de corruption.",
      price: 4.99,
    },
    {
      id: 4,
      pictGame: '/assets/picts/modals/asssassinsCreed/acRevelation.jpg',
      title: "Assassin's Creed Revelation (2011) par Ubisoft",
      typeOne: 'Action/Aventure',
      typeTwo: 'Infiltration',
      typeThree: 'Monde Ouvert',
      info: 'Le maître assassin Ezio Auditore marche sur les traces de son légendaire ancêtre Altair et plonge au plus profond d’une quête remplie de découvertes et de révélations. Son périple le conduira à Constantinople, centre de l’empire Ottoman, où une armée de Templiers menace de déstabiliser la région.',
      price: 4.99,
    },
    {
      id: 5,
      pictGame: '/assets/picts/modals/asssassinsCreed/ac3.jpg',
      title: "Assassin's Creed III (2012) par Ubisoft",
      typeOne: 'Action/Aventure',
      typeTwo: 'Infiltration',
      typeThree: 'Monde Ouvert',
      info: '1775. Les Colonies Américaines sont sur le point de se révolter. Vous incarnez Connor, et vous battez pour la liberté de votre peuple et de votre nation. Choisissez vos armes parmi une vaste sélection, et assassinez vos ennemis de multiples façons.',
      price: 4.99,
    },
    {
      id: 6,
      pictGame: '/assets/picts/modals/asssassinsCreed/ac4BlackFlag.jpg',
      title: "Assassin's Creed IV Back Flag (2013) par Ubisoft",
      typeOne: 'Action/Aventure',
      typeTwo: 'Infiltration',
      typeThree: 'Monde Ouvert',
      info: 'Parmi ces hors-la-loi, un jeune capitaine impétueux du nom d’Edward Kenway commence à se forger une flatteuse réputation. Mais si son combat pour la gloire et la fortune lui fait gagner le respect de pirates légendaires tels que Barbe Noire, il se retrouve aussi plongé au cœur de la guerre millénaire que se livrent Assassins et Templiers, une guerre qui pourrait détruire tout ce que les pirates ont construit…',
      price: 4.99,
    },
    {
      id: 7,
      pictGame: '/assets/picts/modals/asssassinsCreed/acRogue.jpg',
      title: "Assassin's Creed Rogue (2014) par Ubisoft",
      typeOne: 'Action/Aventure',
      typeTwo: 'Infiltration',
      typeThree: 'Monde Ouvert',
      info: 'Amérique du Nord. 18ème siècle. Alors que la Guerre de la Conquête fait rage, Shay Patrick Cormac, un jeune membre de la Confrérie des Assassins va sombrer dans les ténèbres et changer le destin des colonies Américaines.',
      price: 6.99,
    },
    {
      id: 8,
      pictGame: '/assets/picts/modals/asssassinsCreed/acUnity.jpg',
      title: "Assassin's Creed Unity (2014) par Ubisoft",
      typeOne: 'Action/Aventure',
      typeTwo: 'Infiltration',
      typeThree: 'Monde Ouvert',
      info: "Assassin's Creed Unity vous place dans la peau d'Arno Victor Dorian à l'époque de la Révolution française. Jeune Assassin évoluant dans le Paris de 1789, le joueur doit faire face à la corruption qui s'est répandue en France",
      price: 7.99,
    },
    {
      id: 9,
      pictGame: '/assets/picts/modals/asssassinsCreed/acSyndicate.jpg',
      title: "Assassin's Creed Syndicate (2015) par Ubisoft",
      typeOne: 'Action/Aventure',
      typeTwo: 'Infiltration',
      typeThree: 'Monde Ouvert',
      info: "Prenant place dans le Londres de l'époque victorienne, Assassin's Creed Syndicate est un jeu d'action-aventure en monde ouvert. Parmi les nouveautés, on peut notamment citer la possibilité de se déplacer sur des éléments en mouvement (calèche par exemple).",
      price: 6.99,
    },
    {
      id: 10,
      pictGame: '/assets/picts/modals/asssassinsCreed/acOrigins.jpg',
      title: "Assassin's Creed Origins (2017) par Ubisoft",
      typeOne: 'Action/Aventure',
      typeTwo: 'Infiltration',
      typeThree: 'Monde Ouvert',
      info: "Assassin's Creed Origins est un action RPG en monde ouvert incluant des mécaniques d'infiltration. Le titre vous fait visiter les terres mystérieuses de l'Egypte antique dans la peau de Bayek, nouveau héros d'un épisode nous dévoilant les origines de la création de la confrérie des assassins chère à la série phare d'Ubisoft.",
      price: 16.99,
    },
    {
      id: 11,
      pictGame: '/assets/picts/modals/asssassinsCreed/acOdyssey.jpg',
      title: "Assassin's Creed Odyssey (2018) par Ubisoft",
      typeOne: 'Action/Aventure',
      typeTwo: 'Infiltration',
      typeThree: 'Monde Ouvert',
      info: "Forgez votre destin dans Assassin's Creed® Odyssey. Passez du statut de paria à celui de légende vivante au cours d'une véritable odyssée durant laquelle vous lèverez les secrets sur votre passé et changerez le destin de la Grèce antique.",
      price: 17.99,
    },
    {
      id: 12,
      pictGame: '/assets/picts/modals/asssassinsCreed/acValhalla.jpg',
      title: "Assassin's Creed Valhalla (2020) par Ubisoft",
      typeOne: 'Action/Aventure',
      typeTwo: 'Infiltration',
      typeThree: 'Monde Ouvert',
      info: "Assassin's Creed Valhalla est un RPG en monde ouvert se déroulant pendant l'âge des vikings. Vous incarnez Eivor, un viking du sexe de votre choix qui a quitté la Norvège pour trouver la fortune et la gloire en Angleterre. Raids, construction et croissance de votre colonie, mais aussi personnalisation du héros ou de l'héroïne sont au programme de cet épisode.",
      price: 24.99,
    },
  ];

  // Propriétés pour stocker les jeux sélectionnés par défaut
  selectedBioshock: Bioshock | null = null;
  selectedCyberpunk2077: Cyberpunk2077 | null = null;
  selectedAssassinsCreed: AssassinsCreed | null = null;

  // Fonction pour afficher les informations d'un jeu dans .showGame (pour chaque saga)
  showBioshockInfo(game: Bioshock) {
    this.selectedBioshock = game;
  }

  showCyberpunk2077Info(game: Cyberpunk2077) {
    this.selectedCyberpunk2077 = game;
  }

  showAssassinsCreedInfo(game: AssassinsCreed) {
    this.selectedAssassinsCreed = game;
  }

  // Réinitialiser les jeux sélectionnés lorsque le modal est ouvert (pour chaque saga)
  resetSelectedGames() {
    this.selectedBioshock = this.sagasSeven[0]; // Affiche le premier jeu Bioshock par défaut
    this.selectedCyberpunk2077 = this.sagasEigth[0]; // Affiche le premier jeu Cyberpunk 2077 par défaut
    this.selectedAssassinsCreed = this.sagasNine[0]; // Affiche le premier jeu Assassin's Creed par défaut
  }
}
