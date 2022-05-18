import { IProject } from "../../types";

export type Action = 
| { type: "GET_PROJECTS", payload: IProject[] }
| { type: "REQUEST" }
