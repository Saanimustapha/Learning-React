import newStyle from './Button.module.css'

export const Button = () => {

    const name = "Saani"

    const handleClick = (e) => {
        alert(`${name} clicked the button`)
    }

    return (
        <>
        <button className={`${newStyle.but}`} onClick={handleClick}>Click me</button>
        </>
    )
}

