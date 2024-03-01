// PlasmoPopup.tsx

import React from "react";

interface PlasmoPopupProps {
  handleClosePopup: (e: React.MouseEvent) => void;
  chatMessages: string[];
  inputValue: string;
  isGenerate: boolean;
  handleGenerate: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleInsert: () => void;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const PlasmoPopup: React.FC<PlasmoPopupProps> = ({
  handleClosePopup,
  chatMessages,
  inputValue,
  isGenerate,
  handleGenerate,
  handleInsert,
  setInputValue,
}) => {
  return (
    <>
      <div
        onClick={handleClosePopup}
        className="fixed inset-0 bg-black opacity-50 z-40"
      ></div>

      <div
        id="modal"
        className="fixed bottom-0 left-0 w-full h-full flex items-center justify-center p-4 z-50"
      >
        <div
          id="myDiv"
          className="bg-white p-4 border rounded shadow max-w-xl w-full overflow-y-auto max-h-96 z-50"
        >
          <div id="myDiv2" className="flex justify-end">
            <button
              onClick={handleClosePopup}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          {chatMessages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 flex ${message.startsWith(":") ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`p-2 ${message.startsWith(":") ? "bg-blue-500 text-white mb-2  rounded-md" : "bg-gray-300 text-black mb-2  rounded-md"}`}
              >
                {message}
              </div>
            </div>
          ))}

          <div className="mt-2">
            <div className="flex items-center justify-between">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="p-2 border w-full"
                placeholder="Type a command..."
              />
            </div>
            <div className="flex items-center justify-end mt-2">
              {isGenerate ? (
                <button
                  onClick={handleGenerate}
                  className="bg-blue-500 text-white p-2 rounded-md ml-2"
                >
                  Generate
                </button>
              ) : (
                <>
                  <button
                    onClick={handleInsert}
                    className="bg-blue-500 text-white p-2 rounded-md ml-2"
                  >
                    Insert
                  </button>
                  <button
                    disabled
                    className="bg-gray-300 text-white p-2 rounded-md ml-2 cursor-not-allowed"
                  >
                    Regenerate
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlasmoPopup;
