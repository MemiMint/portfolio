import React, { useCallback, useState } from "react";
import { IState } from "./IState";

export const useContactForm = () => {
    const [state, setState] = useState<IState>({
        name: "",
        email: "",
        message: "",
        error: false
    });

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;

        setState({
            ...state,
            [name]: value
        })
    }, [state.name, state.email, state.message]);

    const onFocus = useCallback(() => {
        setState({
            ...state,
            error: false
        })
    }, [state]);

    const onClick = useCallback(() => {
        setState({
            ...state,
            error: !state.error
        });
    }, [state])

    return { state, onFocus, onChange, onClick };
}