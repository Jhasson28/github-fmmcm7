
import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contentArray: Content[];
  titleFound?: boolean;
    


  constructor() {
    this.contentArray = [{
      id: 0,
      title: 'Pokemon Red',
      description: 'Pokémon Red Version and Pokémon Blue Version are 1996 role-playing video games developed by Game Freak and published by Nintendo for the Game Boy',
      creator: 'Game Freak',
      imgURL: 'https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png',
      type: 'Console',
      tags:['Has-Image']

    },
    {
      id: 1,
      title: 'Banjo-Kazooie',
      description: 'The games feature a male bear named Banjo and his friend, a large female red bird called Kazooie, who are both controlled by the player',
      creator: 'Rare',
      imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Banjo_%26_Kazooie.png/220px-Banjo_%26_Kazooie.png',
      type: 'Console',
      tags:['No-Image']
    },
    {
      id: 2,
      title: 'Rust',
      description: 'Rust is a multiplayer-only survival video game developed by Facepunch Studios',
      creator: 'Facepunch Studios',
      imgURL: 'https://cdn.akamai.steamstatic.com/steam/apps/252490/header.jpg?t=1645133322',
      type: 'PC',
      tags:['Has-Image']
    },
    {
      id: 3,
      title: 'Pokemon Legends Arceus',
      description: 'Pokémon Legends: Arceus is an action role-playing game developed by Game Freak and published by Nintendo and The Pokémon Company for the Nintendo Switch',
      creator: 'Game Freak',
      imgURL: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto,c_pad,dpr_1.0,f_auto,q_auto,w_700/b_rgb:ffffff/v1/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/hero',
      type: 'Console',
      tags:['No-Image']
    },
    {
      id: 4,
      title: 'Minecraft',
      description: 'Minecraft is a sandbox video game developed by the Swedish video game developer Mojang Studios. The game was created by Markus "Notch" Persson in the Java programming language',
      creator: 'Mojang Studios',
      imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Minecraft_cover.png/220px-Minecraft_cover.png',
      type: 'PC',
      tags:['Has-Image']
    },
    {
      id: 5,
      title: 'Madden 22',
      description: 'Madden NFL 22 is an American football video game based on the National Football League, developed by EA Tiburon and published by Electronic Arts',
      creator: 'EA',
      imgURL: 'https://static-cdn.jtvnw.net/ttv-boxart/966064811_IGDB-144x192.jpg',
      type: 'Console',
      tags:['No-Image']
  },
  {
    id: 6,
    title: 'Pikmin 2',
    description: 'Like its predecessor, Pikmin 2 focuses on exploring the surface of an unknown planet from a microscopic perspective, where the player directs and delegates tasks to a horde of tiny plant-like creatures called Pikmin. The Pikmin can be directed to destroy obstacles, defeat enemies and retrieve objects.',
    creator: 'Nintendo',
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/38/Pikmin_2_Case.jpg/220px-Pikmin_2_Case.jpg',
    tags:['No-Image']
  },
  {
    id: 7,
    title: 'Terraria',
    description: 'Terraria is an action-adventure sandbox game developed by Re-Logic. ... The game features exploration, crafting, building, painting, and combat with a variety of creatures in a procedurally generated 2D world',
    creator:'Re-Logic',
    imgURL: "",
    tags:['Survival']

    

  }];
}
    

  

  ngOnInit(): void {
  }
  checkForTitle(title: string): void{
    if (this.contentArray.some(d => d.title === title))
    {
      this.titleFound = true;
    }
    else {
      this.titleFound = false;
    }
    if (this.contentArray.filter(d => d.title === title).length)
    {
      this.titleFound = true;
    }
    else {
      this.titleFound = false;
    }
  }
}
