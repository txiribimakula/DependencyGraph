import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import { Solution } from './models/solution';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  solution: Solution = {
    id: 'solution-id',
    name: 'SolutionName',
    projects: [
      {
        id: 'project-id-1',
        name: 'ProjectName1',
        dependencies: []
      },
      {
        id: 'project-id-2',
        name: 'ProjectName2',
        dependencies: []
      },
      {
        id: 'project-id-3',
        name: 'ProjectName3',
        dependencies: ['project-id-1', 'project-id-2']
      }
    ]
  }

  ngOnInit(): void {
    
  }

  layoutSettings = {
    orientation: 'TB'
  };
  curve = shape.curveBundle.beta(1);
  nodes = [
    {
      id: 'solution',
      label: 'SOLUTION'
    }, {
      id: '1',
      label: 'Project#1'
    }, {
      id: '2',
      label: 'Project#2'
    }, {
      id: '3',
      label: 'Project#3'
    }, {
      id: '4',
      label: 'Project#4'
    }, {
      id: '5',
      label: 'Project#5'
    }, {
      id: '6',
      label: 'Project#6'
    }
  ];

  links = [
    {
      source: 'solution',
      target: '1'
    }, {
      source: 'solution',
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
