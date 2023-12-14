import React, { useState, useEffect } from "react";
import { Typography, Container } from "@mui/material";

export default function Reloj({ seconds }) {
  const [count, setCount] = useState(seconds);
  const limit = new Date("2023-12-23T21:30:00");
  const today = new Date();
  const ajus = new Date(75600000);
  const result = new Date(limit - ajus - today);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // El array vacío asegura que useEffect se ejecute solo una vez (equivalente a componentDidMount)

  useEffect(() => {
    if (count === 0) {
      // Puedes agregar lógica adicional cuando la cuenta regresiva llega a cero.
      clearInterval();
    }
  }, [count]);

  return (
    <Container>
      <Typography variant="h2" align="center" sx={{textShadow: '1px 1px 2px black'}}>
        {result.getDate() <= 9 ? "0" + result.getDate() : result.getDate()}{" "}
        {result.getDate() <= 1 ? "day " : "days "}
        {result.getHours() <= 9 ? "0" + result.getHours() : result.getHours()}:
        {result.getMinutes() <= 9
          ? "0" + result.getMinutes()
          : result.getMinutes()}
        :
        {result.getSeconds() <= 9
          ? "0" + result.getSeconds()
          : result.getSeconds()}
      </Typography>
    </Container>
  );
}
