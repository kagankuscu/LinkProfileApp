import Info from "./components/Info";
import MyButton from "./components/MyButton";
import ProfileImage from "./components/ProfileImage";

export default function Home() {
    const socialMedias = [
        { key: "Github", value: "https://github.com/kagankuscu" },
        { key: "LinkedIn", value: "https://www.linkedin.com/in/kagan-kuscu/" },
        { key: "Instagram", value: "https://www.instagram.com/kagan_kuscu/" },
    ];

    return (
            <div style={{
                borderStyle: "solid",
                borderColor: "black",
                borderWidth: "3px",
                borderRadius: "15px",
                backgroundColor: "rgba(255, 255, 255, 0.65)",
                width: "550px",
                padding: "50px 0"
            }}>
                <ProfileImage />
                <Info name="Kağan Kuşcu" role=".Net Developer" />
                { socialMedias.map((item, index) => <MyButton key={index} title={item.key} href={item.value} />) }
            </div>
    );
}
