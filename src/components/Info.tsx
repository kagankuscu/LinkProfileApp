import font from '../css/Font.module.css';

interface InfoProps {
    name: string;
    role: string;
}
const Info = ({ name, role }: InfoProps) => {
    return (
    <>
        <h1 className={font['pacifico-regular']} style={{
            fontSize: "2vw",
            color: "black",
            marginBottom: "3px",
        }}>{name}</h1>
        <p className={font['pacifico-regular']} style={{
            color: "black",
            fontSize: "20px",
        }}>{role}</p>
    </>);
}
export default Info;