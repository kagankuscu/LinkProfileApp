import { Pacifico } from "next/font/google";

interface InfoProps {
    name: string;
    role: string;
}

const pacifico = Pacifico({
    weight: "400",
    subsets: ["latin", "cyrillic"],
});

export default function Info({ name, role }: InfoProps) {
    return (<>
        <h1 className={pacifico.className} style={{
            fontSize: "2vw",
            color: "black",
            marginBottom: "3px",
        }}>{name}</h1>
        <p className={pacifico.className} style={{
            color: "black",
            fontSize: "20px",
        }}>{role}</p>
    </>)
}