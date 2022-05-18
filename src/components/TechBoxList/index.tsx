import React, { FC } from "react";
import { HStack, Container, Center, Wrap, WrapItem } from "@chakra-ui/react";
import { TechBox } from "../TechBox";
import { TechPopOver } from "../TechPopOver";
import { IProps } from "./IProps";

export const TechBoxList: FC<IProps> = (props): JSX.Element => {
<<<<<<< HEAD
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

=======
    return (
        <Center maxW="full" >
            <Wrap align={"center"} justifyContent="center" mt={10} spacing={{ base: 4, sm: 4, md: 8, lg: 10 }} >
                {
                    props.data.map((tech, index): JSX.Element => {
                        return (
                            <WrapItem>
                                <TechPopOver header={tech.text} data={tech.skills} >
                                    <TechBox
                                        key={index}
                                        backgroundColor={tech.backgroundColor}
                                        color={tech.color}
                                        icon={tech.icon}
                                        text={tech.text}
                                        skills={tech.skills}
                                    />
                                </TechPopOver>
                            </WrapItem>
                        )
                    })
                }
            </Wrap>
        </Center>
    )
}
>>>>>>> 1c2ab9ce3aeb44c313338773cea1bdd60f431439
