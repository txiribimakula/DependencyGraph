import { Component } from '@angular/core';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  layoutSettings = {
    orientation: 'TB'
  };
  curve: any = shape.curveLinear;
  nodes = [
    {
      id: 'start',
      label: 'scan'
    }, {
      id: '1',
      label: 'Event#a'
    }, {
      id: '2',
      label: 'Event#x'
    }, {
      id: '3',
      label: 'Event#b'
    }, {
      id: '4',
      label: 'Event#c'
    }, {
      id: '5',
      label: 'Event#y'
    }, {
      id: '6',
      label: 'Event#z'
    }
  ];

  links = [
    {
      source: 'start',
      target: '1'
    }, {
      source: 'start',
      target: '2'
    }, {
      source: '1',
      target: '3'
    }, {
      source: '2',
      target: '4'
    }, {
      source: '2',
      target: '6'
    }, {
      source: '6',
      target: '5'
    }
  ];
}
