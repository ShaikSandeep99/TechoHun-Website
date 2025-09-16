import React, { useState } from "react";
import "./whatsapp-chat.css"; 

const WhatsAppChatbot = () => {
  const [open, setOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState("");

 const questions = [
  "Present courses offering",
  "Course price details",
  "Counseling or guidance for course information",
  "Information about upcoming workshops",
  "Career guidance or mentorship",
  "Contact details or office location",
  "Other queries"
];
  const phoneNumber = "9849175588"; 
  const handleQuestionClick = (q) => {
    setSelectedQuestion(q);
  };

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    selectedQuestion || "Hello, I want to chat!"
  )}`;

  return (
    <div className="whatsapp-widget">
      {!open && (
        <button
          className="whatsapp-button"
          onClick={() => setOpen(true)}
        >
          Chat on WhatsApp
        </button>
      )}

      {open && (
        <div className="chatbot-box">
          <div className="chat-header">
            <h4>Hi! How can I help you?</h4>
            <button onClick={() => setOpen(false)}>X</button>
          </div>

          {!selectedQuestion ? (
            <div className="questions-list">
              {questions.map((q, i) => (
                <button
                  key={i}
                  className="question-btn"
                  onClick={() => handleQuestionClick(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          ) : (
            <div className="whatsapp-link-container">
              <p>You selected: "{selectedQuestion}"</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-chat-link"
              >
                Continue on WhatsApp
              </a>
              <button onClick={() => setSelectedQuestion("")}>
                Back
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WhatsAppChatbot;
