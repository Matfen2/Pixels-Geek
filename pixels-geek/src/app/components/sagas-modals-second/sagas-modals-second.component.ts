import { Component } from '@angular/core';

interface TheLastOfUs {
  id: number;
  pictGame: string;
  title: string;
  typeOne: string;
  typeTwo: string;
  typeThree: string;
  info: string;
  price: number;
}

interface TheWitcher {
  id: number;
  pictGame: string;
  title: string;
  typeOne: string;
  typeTwo: string;
  typeThree: string;
  info: string;
  price: number;
}

interface MassEffect {
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
  selector: 'app-sagas-modals-second',
  templateUrl: './sagas-modals-second.component.html',
  styleUrls: ['./sagas-modals-second.component.css'],
})
export class SagasModalsSecondComponent {
  // THE LAST OF US
  sagasFour: TheLastOfUs[] = [
    {
      id: 1,
      pictGame: '/assets/picts/modals/theLastOfUs/theLastOfUs.jpg',
      title: 'The Last Of Us (2013) par Naughty Dogs',
      typeOne: 'TPS',
      typeTwo: 'Action/Aventure',
      typeThree: 'Narratifs',
      info: "Le survival action The Last of Us sur PS3 suit Joel et d'Ellie à travers les Etats-Unis. Les deux devront s'entraider pour survivre à une mystérieuse peste. La nature commence à s'approprier les villes abandonnées et les quelques survivants s'entretuent pour récupérer le peu de nourriture et d'armes encore présentes.",
      price: 14.99,
    },
    {
      id: 2,
      pictGame: '/assets/picts/modals/theLastOfUs/theLastOfUsRemastered.jpg',
      title: 'The Last Of Us Remastered (2014) par Naughty Dogs',
      typeOne: 'TPS',
      typeTwo: 'Action/Aventure',
      typeThree: 'Narratifs',
      info: "The Last of Us Remastered est un survival action sur PS4 qui raconte l'histoire de Joel et d'Ellie qui vont devoir s'entraider pour survivre face à une mystérieuse peste qui a décimé les Etats-Unis. La nature commence à s'approprier les villes abandonnées et les quelques survivants s'entre-tuent pour récupérer le peu de nourriture et d'armes encore présentes. Cette version améliorée du jeu propose l'aventure de base et le DLC Left Behind.",
      price: 14.99,
    },
    {
      id: 3,
      pictGame: '/assets/picts/modals/theLastOfUs/theLastOfUsPart2.jpg',
      title: 'The Last Of Us Part II (2020) par Naughty Dogs',
      typeOne: 'TPS',
      typeTwo: 'Action/Aventure',
      typeThree: 'Narratifs',
      info: "Au centre de l'intrigue du premier volet, nous retrouvons à nouveau Joel et Ellie plus déterminés que jamais à éradiquer les infectés jusqu'au dernier. Se déroulant à nouveau dans un monde post apocalyptique, le duo toujours aussi soudé devra prendre les décisions qui s'imposent afin de survivre un seul jour de plus à cette pandémie.",
      price: 24.99,
    },
    {
      id: 4,
      pictGame: '/assets/picts/modals/theLastOfUs/theLastOfUsPart1.jpg',
      title: 'The Last Of Us Part I (2022) par Naughty Dogs',
      typeOne: 'TPS',
      typeTwo: 'Action/Aventure',
      typeThree: 'Narratifs',
      info: "The Last of Us Part I est un remake du jeu The Last of Us, sorti en 2013. Développé par Naughty Dog, le jeu propose une aventure technique refaite à partir de zéro et sublimée grâce aux nouvelles technologies de la PlayStation 5. L'intelligence a aussi été totalement refaite, tandis que l'expérience comprend une compatibilité avec l'audio 3D, les retours haptiques ou les gâchettes adaptatives. Les effets, l'exploration et les combats ont aussi été améliorés.",
      price: 54.99,
    },
  ];

  // THE WITCHER
  sagasFive: TheWitcher[] = [
    {
      id: 1,
      pictGame: '/assets/picts/modals/theWitcher/theWitcher.jpg',
      title: 'The Witcher (2007) par CD Projekt RED',
      typeOne: 'RPG',
      typeTwo: 'Action/Aventure',
      typeThree: 'Narratifs',
      info: "The Witcher est un jeu de rôle sur PC, permettant de parcourir l'univers fantastique et féerique à travers le royaume de Temeria. Outre sa quête principale, le titre offre de nombreuses missions et quêtes annexes, ainsi que quelques mini-jeux. Il est également très important de tout inspecter pour découvrir les nombreuses subtilités du jeu.",
      price: 4.99,
    },
    {
      id: 2,
      pictGame: '/assets/picts/modals/theWitcher/theWitcher2.jpg',
      title: 'The Witcher 2 : Assassins Of Kings (2011) par CD Projekt RED',
      typeOne: 'RPG',
      typeTwo: 'Action/Aventure',
      typeThree: 'Narratifs',
      info: "Action-RPG inspiré des livres d'Andrzej Sapkowski, The Witcher 2 : Assassins of Kings se déroule dans un monde médiéval et fantastique. Le joueur y incarne Geralt, un chasseur de monstres mêlé à une intrigue politique dans le royaume de Téméria. Il devra mettre un terme à la rébellion de l'Ordre de la Rose Ardente.",
      price: 4.99,
    },
    {
      id: 3,
      pictGame: '/assets/picts/modals/theWitcher/theWitcher3.jpg',
      title: 'The Witcher 3 : Wild Hunt (2015) par CD Projekt RED',
      typeOne: 'RPG',
      typeTwo: 'Action/Aventure',
      typeThree: 'Narratifs',
      info: "The Witcher 3 : Wild Hunt est un Action-RPG se déroulant dans un monde ouvert. Troisième épisode de la série du même nom, inspirée des livres du polonais Andrzej Sapkowski, cet opus relate la fin de l'histoire de Geralt de Riv.",
      price: 14.99,
    },
    {
      id: 4,
      pictGame: '/assets/picts/modals/theWitcher/theWitcherGwent.jpg',
      title: 'Gwent : The Witcher Card Game (2017) par CD Projekt RED',
      typeOne: 'Jeux de Cartes',
      typeTwo: 'Stratégie',
      typeThree: 'Narratifs',
      info: "Gwent : The Witcher Card Game est un spin-off reprenant le célèbre jeu du Gwynt de The Witcher 3. Il propose de collectionner de nombreuses cartes, de former son deck et d'affronter ses adversaires en solo comme en compétitif. Outre les règles propres au Gwynt, ce titre renouvelle le genre avec un arc narratif d'une dizaine d'heures où le joueur effectue des choix dans les dialogues.",
      price: 14.99,
    },
    {
      id: 5,
      pictGame: '/assets/picts/modals/theWitcher/theWitcherThroneBreaker.jpg',
      title: 'Thronebreaker: The Witcher Tales (2018) par CD Projekt RED',
      typeOne: 'Jeux de Cartes',
      typeTwo: 'Stratégie',
      typeThree: 'Narratifs',
      info: "Thronebreaker : The Witcher Tales est un jeu de cartes se déroulant sous la forme d'une campagne solo scénarisée. On suivra l'histoire de Meve, la reine des Royaumes Nordiques, dans son combat pour bouter hors de ses terres une invasion barbare. Explorez des endroits inédits du monde de The Witcher, avec une carte interactive dessinée main, et des cartes de jeu spécialement conçues pour chacune des situations que devrez affronter.",
      price: 19.99,
    },
  ];

  // Mass Effect
  sagasSix: MassEffect[] = [
    {
      id: 1,
      pictGame: '/assets/picts/modals/massEffect/massEffect1.jpg',
      title: 'Mass Effect (2007) par Bioware',
      typeOne: 'RPG',
      typeTwo: 'Action-RPG',
      typeThree: 'Narratifs',
      info: "Mass Effect est un Action-RPG futuriste se déroulant dans l'espace. Le joueur y crée son personnage avant de partir à l'aventure dans l'espace et de découvrir toutes sortes de peuples et de quêtes, ainsi qu'un scénario complexe aux multiples ramifications.",
      price: 5.99,
    },
    {
      id: 2,
      pictGame: '/assets/picts/modals/massEffect/massEffect2.jpg',
      title: 'Mass Effect 2 (2010) par Bioware',
      typeOne: 'RPG',
      typeTwo: 'Action-RPG',
      typeThree: 'Narratifs',
      info: 'Jeu de rôle spatial dans lequel on incarne le commandant Shepard, Mass Effect 2 est la suite du premier opus du même nom. Le joueur peut y retrouver son ancienne sauvegarde de jeu et ainsi jouer en continuité. Pour ceux ne connaissant pas encore la série, un résumé des événements précédents est fourni via un comics interactif.',
      price: 6.99,
    },
    {
      id: 3,
      pictGame: '/assets/picts/modals/massEffect/massEffect3.jpg',
      title: 'Mass Effect 3 (2012) par Bioware',
      typeOne: 'RPG',
      typeTwo: 'Action-RPG',
      typeThree: 'Narratifs',
      info: "Mass Effect 3 est un RPG de style futuriste se déroulant dans l'espace. Le joueur doit y combattre les Cerberus, des pro-humain ainsi que les Moissonneurs. Les choix du joueur sont pris en compte dans son aventure et influencent l'issue de l'histoire ainsi que de la guerre.",
      price: 6.99,
    },
    {
      id: 4,
      pictGame: '/assets/picts/modals/massEffect/massEffectAndromeda.jpg',
      title: 'Mass Effect Andromeda (2017) par Bioware',
      typeOne: 'RPG',
      typeTwo: 'Action-RPG',
      typeThree: 'Narratifs',
      info: "Mass Effect Andromeda est un jeu de type Action-RPG, jouable en solo ou en multi. Le jeu vous place à la tête d'une colonie avec pour but d'explorer la galaxie d'Andromeda afin de savoir s'il est possible d'y établir des avant-postes.",
      price: 12.99,
    },
    {
      id: 5,
      pictGame:
        '/assets/picts/modals/massEffect/massEffectLegendaryEdition.jpg',
      title: 'Mass Effect Legendary Edition (2021) par Bioware',
      typeOne: 'RPG',
      typeTwo: 'Action-RPG',
      typeThree: 'Narratifs',
      info: 'Mass Effect : Legendary Edition est une compilation des trois jeux Mass Effect par Bioware remastérisés avec de nouvelles options graphiques, techniques et tout le contenu aditionnel disponible. Cette compilation offre une version modernisée de la trilogie composé par Mass Effect 1, 2 et 3.',
      price: 43.99,
    },
  ];

  // Propriétés pour stocker les jeux sélectionnés par défaut
  selectedTheLastOfUs: TheLastOfUs | null = null;
  selectedTheWitcher: TheWitcher | null = null;
  selectedMassEffect: MassEffect | null = null;

  // Fonction pour afficher les informations d'un jeu dans .showGame (pour chaque saga)
  showTheLastOfUsInfo(game: TheLastOfUs) {
    this.selectedTheLastOfUs = game;
  }

  showTheWitcherInfo(game: TheWitcher) {
    this.selectedTheWitcher = game;
  }

  showMassEffectInfo(game: MassEffect) {
    this.selectedMassEffect = game;
  }

  // Réinitialiser les jeux sélectionnés lorsque le modal est ouvert (pour chaque saga)
  resetSelectedGames() {
    this.selectedTheLastOfUs = this.sagasFour[0]; // Affiche le premier jeu The Last Of Us par défaut
    this.selectedTheWitcher = this.sagasFive[0]; // Affiche le premier jeu The Witcher par défaut
    this.selectedMassEffect = this.sagasSix[0]; // Affiche le premier jeu Mass Effect par défaut
  }
}
