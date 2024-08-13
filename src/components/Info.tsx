import font from '../css/Font.module.css';
import '../css/Info.css';

interface InfoProps {
    name: string;
    role: string;
}
const Info = ({ name, role }: InfoProps) => {
    return (
    <>
        <h1 className={`${font['pacifico-regular']} title`}>{name}</h1>
        <p className={`${font['pacifico-regular']} subtitle`}>{role}</p>
    </>);
}
export default Info;