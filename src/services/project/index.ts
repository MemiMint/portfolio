import { IProject, IProjectService } from "../../types";

export class ProjectService implements IProjectService {

    public GetProjects = async (): Promise<IProject[]> => {
        const response: Response = await fetch("http://localhost:4000/projects", {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        });

        const projects: IProject[] = await response.json();

        return projects;
    }

    public GetProject = async (id: string): Promise<IProject> => {
        const response: Response = await fetch(`http://localhost:4000/project/${id}`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        });

        const project: IProject = await response.json();

        return project;
    }
}