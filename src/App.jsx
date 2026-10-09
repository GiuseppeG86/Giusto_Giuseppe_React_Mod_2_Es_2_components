import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

function App() {
    
  const lists = ['elemento 1', 'elemento 2', 'elemento 3', 'elemento 4', 'elemento 5'];

  return (
    <>
    <Navbar />
    <Header lists={lists} />
    </>
  )
}

export default App
