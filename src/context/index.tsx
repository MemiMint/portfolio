import { useEffect, createContext, useContext, FC, useReducer } from "react";
import { appReducer } from "./reducer"
import { ProjectService } from "../services"
import { IContext } from "./IContext";
import { IState } from "./IState";

const initialState: IState = {
    isLoading: false,
    projects: []
};

const AppContext = createContext<IContext>({ state: initialState });

export const AppProvider: FC = ({ children }): JSX.Element => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    const service: ProjectService = new ProjectService();

    const fetchProjects = async (): Promise<void> => {
        dispatch({ type: "REQUEST" });

        await service.GetProjects().then((projects) => {
            dispatch({ type: "GET_PROJECTS", payload: projects });
        });
    }

    useEffect(() => {
        fetchProjects();
    }, [])

    return (
        <AppContext.Provider value={{state, dispatch}} >
            { children } 
        </AppContext.Provider>
    )
}

export const useAppContext = (): IContext =>{
    return useContext(AppContext);
}

