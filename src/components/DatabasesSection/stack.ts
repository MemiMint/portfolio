import { IProps as TechBoxProps } from "../TechBox/IProps";
import { SiMicrosoftsqlserver, SiSqlite, SiMysql, SiMongodb } from "react-icons/si"

export const techStack: Array<TechBoxProps> = [
    {
        backgroundColor: "red.500",
        color: "white",
        icon: SiMicrosoftsqlserver,
        text: "MSSQL",
        skills: ["Queries", "Store procedures", "Triggers", "Rollbacks", "Normalization"]
    },
    {
        backgroundColor: "blue.400",
        color: "blue.700",
        icon: SiSqlite,
        text: "SQLite",
        skills: ["Queries"]
    },
    {
        backgroundColor: "#00758F",
        color: "#F29111",
        icon: SiMysql,
        text: "MySQL",
        skills: ["Queries", "Store procedures", "Triggers", "Rollbacks", "Normalization"]
    },
    {
        backgroundColor: "#3F3E42",
        color: "#3FA037",
        icon: SiMongodb,
        text: "MongoDB",
        skills: ["Mongoose", "Data Modeling", "Atlas"]
    },
]