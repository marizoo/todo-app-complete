import React, {useState} from "react";
import Header from "./components/Header";
import styled from 'styled-components';
import { columnIt } from "./globalStyle";
import Card from "./UI/Card";
import AddList from "./components/AddList";

const MainContainer = styled.div`
width: 100vw;
height: 100vh;
${columnIt};
align-items: center;
background-color: black;
`;


const App = () => {
  const [openForm, setOpenForm] = useState(false)

  const openFormToggle = () => {
    setOpenForm(!openForm)
  }

  return (
  <MainContainer>
    <Card>
      {!openForm && (
        <Header onOpenForm={openFormToggle} />
      )}
      {openForm && (
      <AddList onCloseTheForm={openFormToggle}/>
      )}
    </Card>
  </MainContainer>

  )};

export default App;