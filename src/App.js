import logo from './logo.svg';
import './App.css';
import Header from "./Mycomponents/header";
import { Todos } from './Mycomponents/Todos';
import { Todo } from './Mycomponents/Todo';
import { Footer } from './Mycomponents/Footer';

function App() {
    let myVariable = 345;
  return (
    <>
    <Header/>
    <Todos/>
    <Todo/>
    <Footer/>
    </>
  );
}

export default App;
