import { useState } from "react";
import "./App.css";
import NameModal from "./NameModal";

const phrases = [
  "NO(dont)",
  "NO(but why???)",
  "NO(STOP ITTT)",
  "NO(why are you doing this to me?)",
  "NO(cmon just say yes)",
  "NO(now you really are breaking my heart)",
  "NO(any more and you will kill my soul)",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState(""); // State to manage the message text

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  const handleNameSave = (name) => {
    setUserName(name);
  };

  return (
    <div>
      <div>
        <h1 className="header">Welcome{userName ? `, ${userName}` : ""}!</h1>
        <NameModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          onSave={handleNameSave}
        />
      </div>
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img
              alt="bear with hearts"
              src="https://gifdb.com/images/high/success-celebration-djtwshw329q808jo.gif"
            />
            {/* Display the text input for the message under the GIF */}
            <div>
              <p>everyone deserves a valentine</p>
            </div>
          </>
        ) : (
          <>
            <div className="question">Will you be my Valentine this year?</div>
            <div>
              <button
                className="yesButton"
                style={{ fontSize: `${yesButtonSize}px` }}
                onClick={() => setYesPressed(true)}
              >
                YES :)
              </button>
              <button onClick={handleNoClick} className="noButton">
                {getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
