import { IProps as TechBoxProps } from "../TechBox/IProps";
import { SiTypescript, SiJavascript, SiCsharp, SiPython, SiCplusplus, SiC, SiGo } from "react-icons/si"

export const techStack: Array<TechBoxProps> = [
    {
        backgroundColor: "#3178c6",
        color: "white",
        icon: SiTypescript,
        text: "TypeScript",
        skills: ["General use of interfaces", "Classes and Abstraction", "Generics", "Modules", "TSX"]
    },
    {
        backgroundColor: "#F0DB4F",
        color: "#323330",
        icon: SiJavascript,
        text: "Javascript",
        skills: ["ES6", "Modules", "Async/Await", "Promises", "DOM Manipulation"]
    },
    {
        backgroundColor: "#280068",
        color: "#E4DCF0",
        icon: SiCsharp,
        text: "CSharp",
        skills: ["SOLID Fundamentals", "Interfaces and Structs", "Classes and Abstraction", "Polymorphism", "How C# works in depth", "ASP .NET Core"]
    },
    {
        backgroundColor: "#4B8BBE",
        color: "#FFD43B",
        icon: SiPython,
        text: "Python",
        skills: ["Fundamentals of the language", "OOP in python", "PiP", "Python as scripting language"]
    },
    {
        backgroundColor: "#7fd5ea",
        color: "white",
        icon: SiGo,
        text: "GO",
        skills: ["Packages in GO", "GO Mod", "GO imports", "SQL library", "Formatting strings", "Structs", "Interfaces", "HTTP library", "GIN Gonic Framework"]
    },
    {
        backgroundColor: "#044F88",
        color: "#D5E4F3",
        icon: SiCplusplus,
        text: "C++",
        skills: ["OOP in C++", "The use of headers files in C++", "C++99"]
    },
    {
        backgroundColor: "#5E97D0",
        color: "#D5E4F3",
        icon: SiC,
        text: "C",
        skills: ["Pointers", "Basic command line programs", "Handling Files"]
    },
]