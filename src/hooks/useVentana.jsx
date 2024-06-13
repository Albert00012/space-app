import { useState, useEffect } from "react";

const useVentana = () => {
    const [dimensiones, setDimensiones] = useState({
        ancho: window.innerWidth,
        alto: window.innerHeight,
    });

    useEffect(() => {
        const manejarRedimension = () => {
            setDimensiones({
                ancho: window.innerWidth,
                alto: window.innerHeight,
            });
        };

        window.addEventListener("resize", manejarRedimension);

        return () => {
            window.removeEventListener("resize", manejarRedimension);
        };
    }, []);

    return dimensiones;
};

export default useVentana;
