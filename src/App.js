import './App.css';
import { useState } from "react";

function App() {
  const [isPageDark, setIsPageDark] = useState(false);
  return (
    <div className={ isPageDark ? "BodyDark" : "BodyLight" }>
        <img alt="Profile Pic" className="ProfileImage" src="https://media-exp1.licdn.com/dms/image/C4D03AQHMmkp3U8vQdA/profile-displayphoto-shrink_800_800/0/1646000571951?e=1658361600&v=beta&t=_DPW_lHvwdHVNzlcJCfdrL3d74OqEHlbBS4PE6t-vRM" />
        <h1>
            Joshua D'Souza :) Thank you!
        </h1>
        <h3>
            Hey everyone, I'm Josh!
        </h3>
        <p>
            This is an example of an HTML page. Thanks for doing this tutorial!
        </p>
        <a className={ isPageDark ? "LightText" : "DarkText" } id="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joshua-d-souza-758b74132/">
            My LinkedIn
        </a>

        <button id="button-mode" onClick={() => setIsPageDark(!isPageDark)}>
            Change to { isPageDark ? "Light" : "Dark" } Mode
        </button>    
    </div>
  );
}

export default App;
