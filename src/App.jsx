import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";

function App() {
    
  const lists = ['elemento 1', 'elemento 2', 'elemento 3', 'elemento 4', 'elemento 5'];

  return (
    <>
    <Navbar />
    <Header lists={lists} />
    <Section />
    </>
  )
}

export default App
