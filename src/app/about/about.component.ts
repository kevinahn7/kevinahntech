import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInDown, fadeIn } from 'ng-animate';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeInDown', [transition('void => *', useAnimation(fadeInDown))]),
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ]
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
