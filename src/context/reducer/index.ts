import { IState } from "../IState";
import { Action } from "./IAction";

export const appReducer = (state: IState, action: Action): IState => {
    switch (action.type) {
        case "REQUEST": {
            return {
                ...state,
                isLoading: true
            }
        }

        case "GET_PROJECTS": {
            return {
                projects: action.payload,
                isLoading: false
            }
        }
    }
}