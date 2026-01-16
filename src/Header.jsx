import { NavBar } from "./NavBar"

export const Header = ({name}) => {

    return (
        <header>
            <h1>HeaderComponent</h1>
            <NavBar name={name}/>
        </header>
    )
}