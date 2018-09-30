import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInDown } from 'ng-animate';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fadeInDown', [transition('void => *', useAnimation(fadeInDown))])
  ]
})
export class ContactComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
