import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInDown, fadeInUp, pulse } from 'ng-animate';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [
    trigger('fadeInDown', [transition('void => *', useAnimation(fadeInDown))]),
    trigger('fadeInUp', [transition('void => *', useAnimation(fadeInUp))]),
    trigger('pulse0', [transition('* => *', useAnimation(pulse))]),
    trigger('pulse1', [transition('* => *', useAnimation(pulse))]),
    trigger('pulse2', [transition('* => *', useAnimation(pulse))]),
    trigger('pulse3', [transition('* => *', useAnimation(pulse))]),
    trigger('pulse4', [transition('* => *', useAnimation(pulse))]),
    trigger('pulse5', [transition('* => *', useAnimation(pulse))]),
    trigger('pulse6', [transition('* => *', useAnimation(pulse))]),
    trigger('pulse7', [transition('* => *', useAnimation(pulse))]),
    trigger('pulse8', [transition('* => *', useAnimation(pulse))]),
    trigger('pulse9', [transition('* => *', useAnimation(pulse))]),
    trigger('pulse10', [transition('* => *', useAnimation(pulse))]),
    trigger('pulse11', [transition('* => *', useAnimation(pulse))]),
    trigger('pulse12', [transition('* => *', useAnimation(pulse))])
  ]
})
export class IndexComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  animate(name) {
    this[name] = !this[name];
  }

}
