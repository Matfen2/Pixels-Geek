import { Component } from '@angular/core';

interface Fallout {
  id: number;
  pictGame: string;
  title: string;
  typeOne: string;
  typeTwo: string;
  typeThree: string;
  info: string;
  price: number;
}

interface Doom {
  id: number;
  pictGame: string;
  title: string;
  typeOne: string;
  typeTwo: string;
  typeThree: string;
  info: string;
  price: number;
}

interface GodOfWar {
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
  selector: 'app-sagas-modals-first',
  templateUrl: './sagas-modals-first.component.html',
  styleUrls: ['./sagas-modals-first.component.css'],
})
export class SagasModalsFirstComponent {
  // FALLOUT
  sagasFirst: Fallout[] = [
    {
      id: 1,
      pictGame: '/assets/picts/modals/fallout/fallout.jpg',
      title: 'Fallout (1997) par Interplay Entertainment',
      typeOne: 'RPG',
      typeTwo: 'CRPG',
      typeThree: 'Tour par Tour',
      info: "Fallout est un jeu de rôle sur PC vous projetant dans un univers post-nucléaire. Après la Grande Guerre du XXIe siècle qui fut dévastatrice pour l'humanité, des hommes tentent de survivre dans les ruines de grandes villes. Vous incarnez un réfugié de l'Abri 13, l'un de ceux construits pour protéger quelques privilégiés. Le dirigeant de l'Abri 13 vous envoie chercher une puce de rechange pour la filtration de l'eau. Né dans l'abri, vous vous apprêtez à découvrir ce qu'il reste du monde extérieur.",
      price: 9.99,
    },
    {
      id: 2,
      pictGame: '/assets/picts/modals/fallout/fallout2.jpg',
      title: 'Fallout 2 (1998) par Black Isles Studios',
      typeOne: 'RPG',
      typeTwo: 'CRPG',
      typeThree: 'Tour par Tour',
      info: "Fallout 2 est un jeu de rôle sur PC vous projetant dans un univers post-nucléaire. Après la Grande Guerre du XXIe siècle qui fut dévastatrice pour l'humanité, des hommes tentent de survivre dans les ruines de grandes villes. Votre mission principale sera de retrouver le G.E.C.K, une sorte de jardin d'eden en kit. Ce nouvel opus prend place environ 80 ans après le premier épisode.",
      price: 9.99,
    },
    {
      id: 3,
      pictGame: '/assets/picts/modals/fallout/fallout3.jpg',
      title: 'Fallout 3 (2008) par Bethesda Games Studios',
      typeOne: 'RPG',
      typeTwo: 'Action-RPG',
      typeThree: 'FPS',
      info: "Fallout 3 est un jeu de rôle en 3D se déroulant dans un monde post-apocalyptique. Le joueur y fait évoluer son personnage comme il le souhaite et choisit la façon dont il va communiquer et interagir avec les autres personnages. Il peut débloquer jusqu'à 200 fins différentes.",
      price: 9.99,
    },
    {
      id: 4,
      pictGame: '/assets/picts/modals/fallout/falloutNewVegas.jpg',
      title: 'Fallout New Vegas (2010) par Obsidian Entertainment',
      typeOne: 'RPG',
      typeTwo: 'Action-RPG',
      typeThree: 'FPS',
      info: "Fallout New Vegas est un jeu de rôle sur PC se déroulant dans un univers post-apocalyptique. Le jeu propose une grande liberté d'évolution et d'interactions avec l'univers allant de la persuasion d'autrui (dans tous les sens du terme) jusqu'à la destruction massive de ses ennemis par satellite.",
      price: 9.99,
    },
    {
      id: 5,
      pictGame: '/assets/picts/modals/fallout/fallout4.jpg',
      title: 'Fallout 4 (2015) par Bethesda Games Studios',
      typeOne: 'RPG',
      typeTwo: 'Action-RPG',
      typeThree: 'FPS',
      info: "Fallout 4 est un RPG à la première personne se déroulant dans un univers post-apocalyptique. Dans un monde dévasté par les bombes, vous incarnez un personnage solitaire sortant d'un abri anti-atomique qui doit se faire sa place dans la ville de Boston et de ses environs.",
      price: 9.99,
    },
    {
      id: 6,
      pictGame: '/assets/picts/modals/fallout/fallout76.jpg',
      title: 'Fallout 76 (2018) par Bethesda Games Studios',
      typeOne: 'RPG',
      typeTwo: 'Action-RPG',
      typeThree: 'Multijoueur',
      info: "Nouvelle entrée dans la série Fallout, ce Fallout 76 se présente comme un jeu multijoueur de survie. On y incarnera un habitant de l'abris 76 a peine 25 ans après l'holocauste nucléaire, qui a pour tâche de rebâtir le monde pour la population des autres abris.",
      price: 9.99,
    },
    // Ajoutez les autres sagas avec leurs informations
  ];

  // DOOM
  sagasSecond: Doom[] = [
    {
      id: 1,
      pictGame: '/assets/picts/modals/doom/doom1.jpg',
      title: 'Doom (1993) par Id Software',
      typeOne: 'FPS',
      typeTwo: 'Action',
      typeThree: 'Fun',
      info: "Doom sur PC est un jeu de tir à la première personne. La planète Mars est envahie par des créatures de l'enfer à la suite de plusieurs expériences scientifiques. Vous incarnez un Space Marine qui a été condamné à des travaux forcés sur la planète rouge. Se retrouvant seul dans la base humaine, il tente de survivre en éliminant tous les monstres autour de lui.",
      price: 9.99,
    },
    {
      id: 2,
      pictGame: '/assets/picts/modals/doom/doom2.jpg',
      title: 'Doom 2 (1994) par Id Software',
      typeOne: 'FPS',
      typeTwo: 'Action',
      typeThree: 'Fun',
      info: "Doom II est un jeu de tir à la première personne sur PC. Vous incarnez un space marine qui arrive sur Terre pour s'apercevoir que les démons ont envahi la planète. Le jeu propose de nouvelles armes telles que le super shotgun ainsi que de nouveaux ennemis plus dangereux.",
      price: 9.99,
    },
    {
      id: 3,
      pictGame: '/assets/picts/modals/doom/doom3.jpg',
      title: 'Doom 3 (2004) par Id Software',
      typeOne: 'FPS',
      typeTwo: 'Action',
      typeThree: 'Fun',
      info: "Doom 3 sur PC est un shoot horrifique à la première personne dans lequel vous allez lutter contre des monstres à bord d'un appareil spatial. Equipé d'un arsenal des plus dévastateurs, évoluez dans l'obscurité totale ou les créatures attendent, tapies dans l'ombre. Luttez contre des choses venues des enfers et tentez de rester en vie, la crise cardiaque n'est pas loin.",
      price: 9.99,
    },
    {
      id: 4,
      pictGame: '/assets/picts/modals/doom/doom2016.jpg',
      title: 'Doom (2016) par Id Software',
      typeOne: 'FPS',
      typeTwo: 'Action',
      typeThree: 'Fun',
      info: "Doom est un reboot de la licence culte d'id Software allant puiser dans le style des deux premiers opus. Vous y incarnez ainsi un Marine obligé de repousser une invasion de démons sur Mars, à l'aide d'un arsenal allant du fusil à pompe au lance-roquette.",
      price: 9.99,
    },
    {
      id: 5,
      pictGame: '/assets/picts/modals/doom/doomEternal.jpg',
      title: 'Doom Eternal (2020) par Id Software',
      typeOne: 'FPS',
      typeTwo: 'Action',
      typeThree: 'Fun',
      info: "Doom Eternal est la suite du reboot de Doom sorti en 2016 et développé par id Software. Il nous emmène une nouvelle fois au cœur de l'enfer pour y affronter des armées de démons toujours plus énervés. La Terre est aussi une de nos destination de voyage infernale.",
      price: 9.99,
    },
  ];

  // GOD OF WAR
  sagasThird: GodOfWar[] = [
    {
      id: 1,
      pictGame: '/assets/picts/modals/godOfWar/godOfWar1.jpg',
      title: 'God Of War (2005) par Santa Monica Studio',
      typeOne: 'Action-Aventure',
      typeTwo: 'Beat Them All',
      typeThree: 'Fun',
      info: "God of War est un jeu d'action mythologique sur PS2. Incarnez Kratos, un anti-héros à la fois banni et honni par les dieux de la Grèce antique. Afin de sauver votre âme, obéissez aux ordres divins et partez combattre des créatures et monstres légendaires dans des combats d'une violence inouïe mais toujours magnifiquement orchestrés.",
      price: 9.99,
    },
    {
      id: 2,
      pictGame: '/assets/picts/modals/godOfWar/godOfWar2.jpg',
      title: 'God Of War 2 (2007) par Santa Monica Studio',
      typeOne: 'Action-Aventure',
      typeTwo: 'Beat Them All',
      typeThree: 'Fun',
      info: "God of War II : Divine Retribution est un beat'em all Playstation 2. Deuxième volet de la série de la série, vous incarnez à nouveau Kratos, déchu de son statut de Dieu, et qui a pour seul but d'aller défier le Roi des plus hautes instances de l'Olympe, Zeus en personne. Aidez-le à mener à bien sa quête sanglante, en combattant la horde d'ennemis et de héros légendaires qui se dressent devant vous.",
      price: 9.99,
    },
    {
      id: 3,
      pictGame: '/assets/picts/modals/godOfWar/godOfWar3.jpg',
      title: 'God Of War 3 (2010) par Santa Monica Studio',
      typeOne: 'Action-Aventure',
      typeTwo: 'Beat Them All',
      typeThree: 'Fun',
      info: "God of War III est un beat'em all prenant place dans un univers mythologique, vous permettant d'incarner Kratos. A l'aide des Titans, vivez l'apothéose de la vengeance sanglante et brutale de Kratos, envers les dieux de l'Olympe.",
      price: 9.99,
    },
    {
      id: 4,
      pictGame: '/assets/picts/modals/godOfWar/godOfWarAscension.jpg',
      title: 'God Of War Ascension (2013) par Santa Monica Studio',
      typeOne: 'Action-Aventure',
      typeTwo: 'Beat Them All',
      typeThree: 'Fun',
      info: "God of War : Ascension est un jeu d'action (beat'em all) mythologique sur PS3. On y retrouve Kratos, le héros sanguinaire de la série, avant qu'il ne devienne le Fantôme de Sparte. Disposant des Lames du Chaos et ayant vendu son âme au dieu de la Guerre, Ares, un Kratos plus humain que jamais cherche à se venger de la mort de sa famille.",
      price: 9.99,
    },
    {
      id: 5,
      pictGame: '/assets/picts/modals/godOfWar/godOfWar.jpg',
      title: 'God Of War (2018) par Santa Monica Studio',
      typeOne: 'Action-Aventure',
      typeTwo: 'Riche ne Récits',
      typeThree: 'Fun',
      info: "Dans ce nouvel épisode de God Of War, le héros évoluera dans un monde aux inspirations nordiques, très forestier et montagneux. Dans ce beat-them-all, un enfant accompagnera le héros principal, pouvant apprendre des actions du joueur, et même gagner de l'expérience.",
      price: 9.99,
    },
    {
      id: 6,
      pictGame: '/assets/picts/modals/godOfWar/godOfWarRagnarok.jpg',
      title: 'God Of War Ragnarok (2022) par Santa Monica Studio',
      typeOne: 'Action-Aventure',
      typeTwo: 'Riche ne Récits',
      typeThree: 'Fun',
      info: "God of War : Ragnarok est un jeu d'action sur PS5 développé par Santa Monica, qui fait suite au soft reboot de la série God of War sur PS4. Le Ragnarök, célèbre événement de la mythologie nordique est ici la toile de fond scénaristique du jeu.",
      price: 9.99,
    },
  ];

  // Propriétés pour stocker les jeux sélectionnés par défaut
  selectedFallout: Fallout | null = null;
  selectedDoom: Doom | null = null;
  selectedGodOfWar: GodOfWar | null = null;

  // Fonction pour afficher les informations d'un jeu dans .showGame (pour chaque saga)
  showFalloutInfo(game: Fallout) {
    this.selectedFallout = game;
  }

  showDoomInfo(game: Doom) {
    this.selectedDoom = game;
  }

  showGodOfWarInfo(game: GodOfWar) {
    this.selectedGodOfWar = game;
  }

  // Réinitialiser les jeux sélectionnés lorsque le modal est ouvert (pour chaque saga)
  resetSelectedGames() {
    this.selectedFallout = this.sagasFirst[0]; // Affiche le premier jeu Fallout par défaut
    this.selectedDoom = this.sagasSecond[0]; // Affiche le premier jeu Doom par défaut
    this.selectedGodOfWar = this.sagasThird[0]; // Affiche le premier jeu God of War par défaut
  }
}
