import AllCards from "./AllCards";
import { useState } from "react";

export default function Sprint1() {
  const [currentCard, setCurrentCard] = useState(1);
  const cardsQuantity = 8;
  return (
    <>
      <AllCards currentCard={currentCard} />
      <button disabled={currentCard === 1} onClick={() => setCurrentCard(prev => prev - 1)}>Anterior</button>
      <button disabled={currentCard === cardsQuantity} onClick={() => setCurrentCard(prev => prev + 1)}>Siguiente</button>
    </>
  );
}