import Info  from './components/Info.tsx';
import ProfileImage  from './components/ProfileImage.tsx';
import MyButton from './components/MyButton.tsx';

const App = () => {
  const socialMedias = [
      { key: "Github", value: "https://github.com/kagankuscu" },
      { key: "LinkedIn", value: "https://www.linkedin.com/in/kagan-kuscu/" },
      { key: "Instagram", value: "https://www.instagram.com/kagan_kuscu/" },
  ];
  return (
    <div className='container'> 
      <ProfileImage />
      <Info name="Kagan Kuscu" role=".Net Developer" />
      { socialMedias.map((item) => <MyButton key={item.key} title={item.key} href={item.value}>{item.key}</MyButton> )}
    </div>
  );
}
export default App;