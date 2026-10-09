import List from "./List";

function Header({lists}){

    return (
    <>
    <header>
        <div className="title">
            <h1>Prima pagina in react</h1>
        </div>
        <div>
            <List lists={lists} />
        </div>
    </header>
    </>
    )
}

export default Header
