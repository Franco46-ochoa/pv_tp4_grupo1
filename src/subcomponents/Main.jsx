import React from "react";

function Main({ children }) {
  return (
    <main
      style={{
        padding: "30px",
        maxWidth: "800px",
        margin: "0 auto",
        flexGrow: 1,
      }}
    >
      {children}
    </main>
  );
}

export default Main;