import React, { FC, useState } from "react";

export const useProjectImage = () => {
    const [show, setShow] = useState<boolean>(false);

    const toggleShow = () => {
        setShow(!show);
    }

    return {
        show,
        toggleShow
    }
}