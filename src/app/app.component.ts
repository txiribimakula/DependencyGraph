import { Component, OnInit } from '@angular/core';
import { ClusterNode, Node, Edge } from '@swimlane/ngx-graph';
import * as shape from 'd3-shape';
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

  subSolution: Solution = {
    id: 'solution-id-2',
    name: 'SolutionName2',
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
      }
    ]
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

    let subSolutionChildrenIds = [];
    this.subSolution.projects.forEach(project => {
      subSolutionChildrenIds.push(project.id);
      if(!this.nodes.some(node => node.id == project.id)) {
        this.nodes.push({ id: project.id, label: project.name });
        project.dependencies.forEach(dependency => {
          this.links.push({ source: dependency, target: project.id });
        });
      }
    });

    solutionChildrenIds.push(this.subSolution.id); 

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
