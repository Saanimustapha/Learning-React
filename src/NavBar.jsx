import { NewMenu } from "./NewMenu"

export const NavBar = ({name}) => {

    return (
        <nav>
            <h2>NavBar Component</h2>
            <NewMenu name={name}/>
        </nav>
    )
}