import React, { FC } from "react";
import { TechSection } from "../TechSection";
import { techStack } from "./stack"

export const DatabaseSection: FC = (): JSX.Element => {
    return (
        <TechSection id="database-skill" backgroundColor="white" header={{ color: "black", text: "Databases" }} data={techStack} />
    )
}