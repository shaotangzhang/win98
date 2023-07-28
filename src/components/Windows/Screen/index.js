import config from "./index.config";
import "./index.css";

import backgroundImage from "../../../assets/img/win98-startup.jpg";
import { useState } from "react";
import Desktop from "../Desktop";

const Screen = () => {

    const [width] = useState('100%');
    const [height] = useState('100%');
    const [bgImage, setBgImage] = useState(backgroundImage);

    const image = new Image();
    image.onload = function () {
        setBgImage(image.src);
    };
    image.src = config.get('background.image');

    return <div className="Screen" style={{
        color: 'white',
        backgroundColor: 'black',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width,
        height,
    }}>
        <Desktop>Hello</Desktop>
    </div>;
};

export default Screen;