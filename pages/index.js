"use client";

import { useEffect } from "react";

function Home() {
  useEffect(() => {
    // fundo do body
    document.body.style.margin = "0";
    document.body.style.backgroundColor = "#410041";

    // adiciona fonte no <head>
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Chocolate+Classical+Sans&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // limpeza opcional
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#9b007e",
      }}
    >
      <img
        src="https://i.ibb.co/G4y8r2f2/logo.png"
        alt="Rodabeda"
        style={{
          width: "100%",
          maxWidth: "300px",
          height: "auto",
        }}
      />
      <h1
        style={{
          marginTop: "30px",
          fontFamily: '"Chocolate Classical Sans", sans-serif',
        }}
      >
        Rodabeda
      </h1>
      <p
        style={{
          marginTop: "30px",
          fontFamily: '"Chocolate Classical Sans", sans-serif',
        }}
      >
        Sabor vegano de verdade, sem crueldade ♥🌱
      </p>
    </div>
  );
}

export default Home;
