import { IProject, IProjectService } from "../../types";

export class ProjectService implements IProjectService {

    public GetProjects = async (): Promise<IProject[]> => {
        const response: Response = await fetch("https://yeferson-portfolio-api.herokuapp.com/projects", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const projects: IProject[] = await response.json();

        return projects;
    }

    public GetProject = async (id: string): Promise<IProject> => {
        const response: Response = await fetch(`https://yeferson-portfolio-api.herokuapp.com/project/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const project: IProject = await response.json();

        return project;
    }
}