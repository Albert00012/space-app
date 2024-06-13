import React from "react";
import useVentana from "./useVentana";

const DimensionesVentana = () => {
    const { ancho, alto } = useVentana();

    return (
        <div>
            <h1>Dimensiones de la Ventana</h1>
            <p>Ancho: {ancho}px</p>
            <p>Alto: {alto}px</p>
        </div>
    );
};

export default DimensionesVentana;
