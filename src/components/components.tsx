"use client";
import React, { useState } from "react";

const Componente = () => {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [firstClick, setFirstClick] = useState(false);
  const [showGif, setShowGif] = useState(false);

  // Manejar el clic en el botón "No"
  function handleNoButtonClick() {
    setFirstClick(true);
    // Generar números aleatorios dentro de los límites de la ventana
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    // Actualizar la posición del botón "No" solo después del primer clic
    setButtonPosition({ x: randomX, y: randomY });
  }

  // Manejar el clic en el botón "Sí" para mostrar el GIF
  function handleYesButtonClick() {
    setShowGif(true);
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-24 bg-white">
      {showGif ? (
        <>
          <p>Yupiii</p>
          <img src="BullyMaguire.gif" alt="GIF" className=" mt-3" />
        </>
      ) : (
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">Hola te extraño...</p>
          <p className="text-2xl font-bold mb-4">¿Vos me extrañas?</p>
          <div className="flex justify-center">
            <button
              id="yesButton"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-4"
              onClick={handleYesButtonClick}
            >
              Sí
            </button>

            {/* Mostrar el botón "No" inicialmente al lado del botón "Sí" */}
            {!firstClick && (
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleNoButtonClick}
              >
                No
              </button>
            )}

            {/* Mostrar el botón "No" después del primer clic */}
            {firstClick && (
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleNoButtonClick}
                style={{
                  position: "absolute",
                  top: buttonPosition.y,
                  left: buttonPosition.x,
                }}
              >
                No
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Componente;
