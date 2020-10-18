import { Component, OnInit } from '@angular/core';
import { ClusterNode, Node, Edge } from '@swimlane/ngx-graph';
import * as shape from 'd3-shape';
import { MainProjectsMock, PartialProjectsMock } from 'src/mock/projects';
import { Solution } from './models/solution';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  layout = 'dagreCluster';
  layoutSettings = {
    orientation: 'TB'
  };
  curve = shape.curveBundle.beta(1);
  clusters: ClusterNode[] = []
  nodes: Node[] = [];
  links: Edge[] = [];

  solution: Solution = {
    id: 'solution-id-1',
    name: 'SolutionName1',
    projects: MainProjectsMock
  }

  subSolution: Solution = {
    id: 'solution-id-2',
    name: 'SolutionName2',
    projects: PartialProjectsMock
  }

  ngOnInit(): void {
    let solutionChildrenIds = [];
    this.solution.projects.forEach(project => {
      solutionChildrenIds.push(project.id);
      this.nodes.push({ id: project.id, label: project.name });
      project.dependencies.forEach(dependency => {
        this.links.push({ source: dependency, target: project.id });
      });
    });

    solutionChildrenIds.push(this.subSolution.id); 
    let subSolutionChildrenIds = [];
    this.subSolution.projects.forEach(project => {
      subSolutionChildrenIds.push(project.id);
    });

    this.clusters.push(
      {
        id: this.solution.id,
        label: this.solution.name,
        childNodeIds: solutionChildrenIds
      },
      {
        id: this.subSolution.id,
        label: this.subSolution.name,
        childNodeIds: subSolutionChildrenIds
      }
    );
  }
}
