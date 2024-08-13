import '../css/mybutton.css';
import '../css/font.css';

interface MyButtonProps {
    title: string,
    href: string,
}

const MyButton = ({ title, href } : MyButtonProps) => {
    return <div className='button button-container'>
        <a target="_blank" className='roboto-regular button button-body' href={href}>{title}</a>
    </div>;
};
export default MyButton;