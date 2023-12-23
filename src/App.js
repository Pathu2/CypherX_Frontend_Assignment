import { useEffect, useState } from "react";
import Main from "./components/Main.js";
import Nav from "./components/Nav.js";

function App() {
  const [tickets, setTickets] = useState([]);
  const [group, setGroup] = useState("priority");
  const [order, setOrder] = useState("title");

  useEffect(() => {
    fetch('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers')
      .then((result) => result.json()) // assuming result is JSON
      .then((data) => {
        setTickets(data); // assuming data is the array you want to set
      })
      .catch((err) => {
        console.log(err);
      });

    const displayState = localStorage.getItem("displayState");
    if (displayState) {
        const displayStateObj = JSON.parse(displayState);
        setGroup(displayStateObj.group);
        setOrder(displayStateObj.order)
      } else {
        const newDisplayState = JSON.stringify({"group": "priority", "order": "title"});
        localStorage.setItem("displayState", newDisplayState);
    }

  }, []);


  return (
    <>
      <Nav setGroup={setGroup} setOrder = {setOrder} group={group} order ={order}></Nav>
      <Main></Main>
    </> 
  );
}

export default App;
