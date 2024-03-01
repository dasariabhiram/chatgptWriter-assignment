// PlasmoOverlay.tsx

import cssText from "data-text:~style.css";
import type { PlasmoCSConfig } from "plasmo";
import React, { useEffect, useState } from "react";
import { CountButton } from "~features/count-button";
import vector from "./features/Vector.png";
import PlasmoPopup from "./PlasmoPopup";



export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
};

export const getStyle = () => {
  const style = document.createElement("style");
  style.textContent = cssText;
  return style;
};

const PlasmoOverlay: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [isGenerate, setIsGenerate] = useState(true);

  useEffect(() => {
    //logic to add an icon when we focused on message box
    const handleFocus = (event: Event) => {
      let activeElement = event.target as HTMLElement;
      let isMessageBox = activeElement.matches('div.msg-form__contenteditable');
      let shouldAppendEmoji = isMessageBox && !activeElement.textContent?.trim();
  
      if (shouldAppendEmoji) {
        if (isMessageBox) {
          if (!activeElement.textContent?.trim()) {
            activeElement.appendChild(emojiElement);
          }
        }
      } else {
        // Remove emojiElement if it exists
        if (emojiElement.parentNode) {
          emojiElement.parentNode.removeChild(emojiElement);
        }
      }
    };
  
    document.addEventListener('focus', handleFocus, true);
  
    if (isPopupOpen) {
      // logic to close the popupbox when we click outside of it
      const dialogElement = document.querySelector("html > plasmo-csui").shadowRoot.querySelector("#modal")
      dialogElement.addEventListener('click', (event) => {
        const targetElement = event.target as HTMLElement;
        if (targetElement.id == "modal") {
          setIsPopupOpen(false);
        }
      });
    }
  

    //cleanup UseEffect function
    return () => {
      document.removeEventListener('focus', handleFocus);
      if (emojiElement.parentNode) {
        emojiElement.parentNode.removeChild(emojiElement);
      }
    };
  }, [isPopupOpen]);


  // when click on icon
  const handleEmojiClick = () => {
    
    console.log("emoji clicked");
    setIsPopupOpen(true);
    setInputValue("");
    setChatMessages([]);
  };

 // logic to generate the response
  const handleGenerate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    setChatMessages([
      ...chatMessages,
      `${inputValue}`,
      ":Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.",
    ]);

    setInputValue("");
    setIsGenerate(false);
  };

  //logic to insert the response in the message box
  const handleInsert = () => {
    setIsPopupOpen(false);


    const messageBox = document.querySelector('div.msg-form__contenteditable');
    const messageBoxFill = messageBox?.querySelector('p');
    
    const inputFieldMessage = document.querySelector("#msg-form-ember131 > div.msg-form__msg-content-container.msg-form__message-texteditor.relative.flex-grow-1.display-flex > div > div.flex-grow-1.relative > div.msg-form__placeholder.t-14.t-black--light.t-normal");
    console.log("inputFieldMessage", inputFieldMessage);
    if (inputFieldMessage) {
      inputFieldMessage.setAttribute('data-placeholder', '');
    }

    if (messageBoxFill) {
      messageBoxFill.innerText = "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.";
      messageBox.appendChild(emojiElement);
    }

    setInputValue("");
    setIsGenerate(true);
  };

  //added functionality to close the popup box
  const handleClosePopup = (e) => {
    e.stopPropagation();
    console.log("clicked on black screen");
    setIsPopupOpen(false);
  };

  const emojiElement = document.createElement('img');
  emojiElement.src = vector;  
  emojiElement.alt = 'Vector Emoji';  
  emojiElement.style.position = 'absolute';
  emojiElement.style.bottom = '5px';
  emojiElement.style.right = '60px';
  emojiElement.style.cursor = 'pointer';
  emojiElement.addEventListener('click', handleEmojiClick);
  emojiElement.style.backgroundColor = 'white';
  emojiElement.style.borderRadius = '50%'; 


  return (
    <div id="main">
      <div className="z-50 flex fixed top-32 right-8">
        <CountButton />
      </div>

      {isPopupOpen && (
        <PlasmoPopup
          handleClosePopup={handleClosePopup}
          chatMessages={chatMessages}
          inputValue={inputValue}
          isGenerate={isGenerate}
          handleGenerate={handleGenerate}
          handleInsert={handleInsert}
          setInputValue={setInputValue}
        />
      )}
    </div>
  );
};

export default PlasmoOverlay;
