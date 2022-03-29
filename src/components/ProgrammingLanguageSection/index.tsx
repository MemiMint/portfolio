import React, { FC } from "react";
import { TechSection } from "../TechSection";
import { techStack } from "./stack"

export const ProgrammingLanguageSection: FC = (): JSX.Element => {
    return (
        <TechSection id="programming-skills" backgroundColor="white" header={{ color: "black", text: "Programming Languages" }} data={techStack} />
    )
}