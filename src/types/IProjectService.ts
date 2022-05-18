import { IProject } from "./IProject";

export interface IProjectService {
    GetProjects: () => Promise<IProject[]>;
    GetProject: (id: string) => Promise<IProject>
}