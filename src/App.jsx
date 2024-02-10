import "./App.css";

import Lottery from "./Lottery.jsx";
import Ticket from "./Ticket.jsx";

function App() {
  return (
    <>
      <Lottery n={4} winningSum={24} />
    </>
  );
}
export default App;
