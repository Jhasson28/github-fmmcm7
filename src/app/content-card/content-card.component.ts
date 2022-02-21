import { Component, Input, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() gaming?: Content;
  textDecoration: string = "underline"

  constructor() { 

  }

  ngOnInit(): void {
  }

  logId(): void{
    console.log("id: ", this.gaming?.id, " | title is: ", this.gaming?.title);
  }

}
