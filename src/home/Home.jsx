import React, { useEffect, useState } from "react";
import "../styles/home.css";
import pattern from "../assets/pattern-divider-desktop.svg";
import patternMobile from "../assets/pattern-divider-mobile.svg";
import dice from "../assets/icon-dice.svg";

const Home = () => {
  const [advice, setAdvice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleClick = () => {
    window.location.reload();
  };

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((advice) => {
        setAdvice(advice.slip);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="container">
      <main id="body">
        <div id="advise">
          {isLoading ? (
            <h2 className="advise">Loading...</h2>
          ) : error ? (
            <h2 className="advise">Error: {error.message}</h2>
          ) : (
            <>
              <h2 className="advise">ADVICE #{advice.id}</h2>
              <p>{advice.advice}</p>
              <img src={pattern} alt="" width={390} id="pattern" />
              <img src={patternMobile} alt="" id="patternMobile" />
              <button id="dice" onClick={handleClick}>
                <img src={dice} alt="" />
              </button>
            </>
          )}
        </div>
      </main>
    </section>
  );
};

export default Home;
