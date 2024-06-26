// import React from 'react'
import "../styles/home.css";
import pattern from "../assets/pattern-divider-desktop.svg";
import patternMobile from "../assets/pattern-divider-mobile.svg";
import dice from "../assets/icon-dice.svg";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleClick = () => {
    window.location.reload();
  };

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network is bad");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <section className="container">
        <main id="body">
          <div id="advise">
            <h2 className="advise">ADVISE #117</h2>
            <p>{JSON.stringify(data)}</p>
            <img src={pattern} alt="" width={390} id="pattern" />
            <img src={patternMobile} alt="" id="patternMobile" />
            <button id="dice" onClick={handleClick}>
              <img src={dice} alt="" />
            </button>
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;
