/* eslint-disable react/jsx-key */

// React imports
import React from "react";

// sass imports
import "bulma/css/bulma.css";
import alexaImage from "./images/alexa.png";
import siriImage from "./images/siri.png";
import cortanaImage from "./images/cortana.png";

// Component imports
import ProfileCard from "./ProfileCard";

// Main App Component
function App() {
  const personalAssistants = [
    {
      image: {
        src: alexaImage,
        alt: "Alexa Image",
      },
      title: "Alexa",
      handle: "@alexa69",
      description: "Hi! This is Alexa. Your mobile girlfriend!",
    },
    {
      image: {
        src: siriImage,
        alt: "Siri Image",
      },
      title: "Siri",
      handle: "@siri69",
      description: "I'm Siri. Apple created me to be your friendly assistant!",
    },
    {
      image: {
        src: cortanaImage,
        alt: "Cortana Image",
      },
      title: "Cortana",
      handle: "@cortana69",
      description:
        "I'm Cortana. I was created by Microsoft to serve as your assistant!",
    },
  ];
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Assistants</p>
          <p className="subtitle">Find the perfect assistant for you!</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            {personalAssistants.map((personalAssistant) => {
              return (
                <div className="column is-4">
                  <ProfileCard
                    image={personalAssistant.image}
                    title={personalAssistant.title}
                    handle={personalAssistant.handle}
                    description={personalAssistant.description}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
