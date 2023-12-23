import { useEffect, useState } from "react";
import Main from "./components/Main.js";
import Nav from "./components/Nav.js";

function App() {
  const [tickets, setTickets] = useState([]);
  const [group, setGroup] = useState("priority");
  const [order, setOrder] = useState("title");
  const [result, setresult] = useState({});
  const [visit, setvisit] = useState(0);
  const handleresult=()=>{
    var final = {};
    if(group==="priority")
    {
      tickets.forEach((ticket) => {

        if (final[ticket.priority]) {
          final[ticket.priority].push(ticket);
        } else {
          final[ticket.priority] = [ticket];
        }
      });
    }
    else if(group==="status")
    {
      tickets.forEach((ticket) => {

        if (final[ticket.status]) {
          final[ticket.status].push(ticket);
        } else {
          final[ticket.status] = [ticket];
        }
      });
    }
    else if(group==="user")
    {
      tickets.forEach((ticket) => {

        if (final[ticket.userId]) {
          final[ticket.userId].push(ticket);
        } else {
          final[ticket.userId] = [ticket];
        }
      });
    }
  
  setresult(final);
  }

  useEffect(() => {
    fetch('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers')
      .then((result) => result.json())
      .then((data) => {
        setTickets(data.tickets);
      })
      .catch((err) => {
        console.log(err);
      });

    const displayState = localStorage.getItem("displayState");
    if (displayState) {
        const displayStateObj = JSON.parse(displayState);
        setGroup(displayStateObj.group);
        setOrder(displayStateObj.order);
        handleresult();
      } else {
        const newDisplayState = JSON.stringify({"group": "priority", "order": "title"});
        localStorage.setItem("displayState", newDisplayState);
    }

  }, []);

  useEffect(()=>{
    if(visit>=1)
    {
      handleresult()
    }
    else
    {
      setvisit(1);
    }
  }, [group]);

  return (
    <>
      <Nav setGroup={setGroup} setOrder = {setOrder} group={group} order ={order}></Nav>
      <Main result={result}></Main>
    </> 
  );
}

export default App;
