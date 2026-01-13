import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.backgroundColor = "#410041";
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column", // coloca um em cima do outro
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center", // centraliza texto
        color: "purple", // cor do texto (opcional)
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Rodabeda ♥</h1>

      <img
        src="https://i.ibb.co/G4y8r2f2/logo.png"
        alt="Rodabeda"
        style={{
          width: "100%",
          maxWidth: "500px",
          height: "auto",
        }}
      />
    </div>
  );
}

export default Home;
