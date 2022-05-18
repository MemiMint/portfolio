import React, { FC } from "react";
import { HStack, Center } from "@chakra-ui/react";
import { TechBox } from "../TechBox";
import { TechPopOver } from "../TechPopOver";
import { IProps } from "./IProps";

export const TechBoxList: FC<IProps> = (props): JSX.Element => {
  return (
    <Center overflowX="scroll">
      <HStack spacing={{ base: 6, lg: 10 }}>
        {props.data.map((tech, index): JSX.Element => {
          return (
            <TechPopOver header={tech.text} data={tech.skills}>
              <TechBox
                key={index}
                backgroundColor={tech.backgroundColor}
                color={tech.color}
                icon={tech.icon}
                text={tech.text}
                skills={tech.skills}
              />
            </TechPopOver>
          );
        })}
      </HStack>
    </Center>
  );
};

