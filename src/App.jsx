import React, {useState} from "react";
import Header from "./components/Header";
import styled from 'styled-components';
import { columnIt } from "./globalStyle";
import Card from "./UI/Card";
import AddList from "./components/AddList";
import TaskList from "./components/TaskList";

const MainContainer = styled.div`
width: 100vw;
height: 100vh;
${columnIt};
align-items: center;
background-color: black;
`;


const App = () => {
  const [openForm, setOpenForm] = useState(false)
  const [showList, setShowList] = useState([])

  const openFormToggle = () => {
    setOpenForm(!openForm)
  }

  

  const showAddedList = (newTasks) => {
    setShowList(prevList => {
      return [newTasks, ...prevList]
    })
  }

  const deleteList = (id) => {
    setShowList(showList.filter(list => list.id !== id))
  }

  return (
  <MainContainer>
    <Card>
      {!openForm && (
        <Header onOpenForm={openFormToggle} />
      )}
      {openForm && (
      <AddList onCloseTheForm={openFormToggle}
      onNewTasks={showAddedList}
      />
      )}
      <TaskList datas={showList} ondeleteThis={deleteList}/>
    </Card>
  </MainContainer>

  )};

export default App;