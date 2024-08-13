import '../css/font.css';
import '../css/info.css';

interface InfoProps {
    name: string;
    role: string;
}
const Info = ({ name, role }: InfoProps) => {
    return (
    <>
        <h1 className='pacifico-regular title'>{name}</h1>
        <p className='pacifico-regular subtitle'>{role}</p>
    </>);
}
export default Info;