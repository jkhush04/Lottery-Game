import { useState } from "react";
import "./Lottery.css";
import { getRandomNumber, sum } from "./helper.js";
import Ticket from "./Ticket.jsx";
export default function Lottery({ n = 3, winningSum = 15 }) {
  let [ticket, setTicket] = useState(getRandomNumber(n));
  let isWinning = sum(ticket) === winningSum;

  
  function getnewTicket() {
    setTicket(getRandomNumber(n));
  }

  return (
    <div>
      <h4> Ticket Number</h4>
      <Ticket ticket={ticket} />

      <button onClick={getnewTicket}>Try again</button>
      <br />
      <h3>{isWinning && "Congratulations, You won the lottery"}</h3>
    </div>
  );
}
