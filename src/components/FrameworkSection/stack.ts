import { IProps as TechBoxProps } from "../TechBox/IProps";
import {SiReact, SiVuedotjs, SiAngular,SiGraphql, SiFirebase, SiDotnet, SiNextdotjs, SiRedux, SiExpress, SiChakraui, SiTailwindcss } from "react-icons/si"
import { DiNodejs, } from "react-icons/di";

export const techStack: Array<TechBoxProps> = [
    {
        backgroundColor: "#20232a",
        color: "#61DBFB",
        icon: SiReact,
        text: "ReactJS",
        skills: ["How React DOM works", "Function components", "State management", "React Context", "Built-in hooks", "Custom hooks", "Lifecycle Component", "Composition", "Navigation", "Conditional Rendering", "Handling Events"]
    },
    {
        backgroundColor: "#dd1b16",
        color: "white",
        icon: SiAngular,
        text: "Angular",
        skills: ["Angular 11", "Angular CLI", "Angular Directives", "HTTP Client", "RxJS", "Routing and Navigation", "Forms", "State Management", "Event Emitter"]
    },
    {
        backgroundColor: "#41B883",
        color: "#34495E",
        icon: SiVuedotjs,
        text: "Vue",
        skills: ["vue-cli","State Management", "Routing", "State and Props", "Built-in Directives", "Template Syntax"]
    },
    {
        backgroundColor: "#66cc33",
        color: "#333333",
        icon: DiNodejs,
        text: "NodeJS",
        skills: ["REPL", "Handling files", "OS manipulation", "Basics of threads", "Multithreading", "NPM", "Making Endpoints", "Working with templates"]
    },
    {
        backgroundColor: "#E10098",
        color: "white",
        icon: SiGraphql,
        text: "GraphQL",
        skills: ["Mutations", "Resolvers", "Queries", "GraphQL Context", "Apollo GraqhQL", "TypeGraphQL"]
    },
    {
        backgroundColor: "#039BE5",
        color: "#FFCA28",
        icon: SiFirebase,
        text: "Firebase",
        skills: ["Firestore", "Realtime Database", "Cloud Functions", "Bucket Storage", "OAuth"]
    },
    {
        backgroundColor: "#512bd4",
        color: "white",
        icon: SiDotnet,
        text: "ASP .NET",
        skills: ["MVC", "Blazor", "Routing Endpoints", "C# in HTML"]
    },
    {
        backgroundColor: "white",
        color: "#000000",
        icon: SiNextdotjs,
        text: "NextJS",
        skills: ["Routing", "SSR", "Static Generation", "Styled Components", "SEO Optimization", "Deployment"]
    },
    {
        backgroundColor: "#764abc",
        color: "white",
        icon: SiRedux,
        text: "Redux",
        skills: ["Store", "Reducers", "Redux with ReactJS"]
    },
    {
        backgroundColor: "gray.300",
        color: "black",
        icon: SiExpress,
        text: "Express",
        skills: ["Middlewares", "CORS", "HTTP Status Code", "Endpoints", "HTTP Methods", "JWT Auth"]
    },
    {
        backgroundColor: "#29BEB0",
        color: "white",
        icon: SiChakraui,
        text: "ChakraUI",
        skills: ["Layout", "Custom Theme", "Extend default components", "Fonts"]
    },
    {
        backgroundColor: "#0ea5e9",
        color: "white",
        icon: SiTailwindcss,
        text: "TailwindCSS",
        skills: ["Responsive Design", "Transitions", "Animations"]
    },
]