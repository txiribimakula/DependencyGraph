import { Project } from 'src/app/models/project';

const projectGeo: Project = {
    id: 'geoLib',
    name: 'GeoLib',
    dependencies: []
}

const projectMachining1: Project = {
    id: 'machining1Lib',
    name: 'Machining1Lib',
    dependencies: [projectGeo.id]
}

const projectMachining2: Project = {
    id: 'machining2Lib',
    name: 'Machining2Lib',
    dependencies: [projectGeo.id]
}

const projectDatabase: Project = {
    id: 'databaseLib',
    name: 'DatabaseLib',
    dependencies: [projectGeo.id, projectMachining1.id, projectMachining2.id]
}

const projectNesting: Project = {
    id: 'nestingLib',
    name: 'NestingLib',
    dependencies: [projectGeo.id, projectMachining1.id]
}

const projectDrawNest: Project = {
    id: 'drawNestLib',
    name: 'DrawNestLib',
    dependencies: [projectGeo.id, projectMachining1.id, projectMachining2.id, projectDatabase.id]
}

export const MainProjectsMock: Project[] = [
    projectGeo,
    projectDatabase,
    projectDrawNest,
    projectMachining1,
    projectMachining2,
    projectNesting
]

export const PartialProjectsMock: Project[] = [
    projectGeo,
    projectMachining1,
    projectMachining2,
    projectDatabase
]