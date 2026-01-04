//conditional rendering using if statements

//Improving conditional rendering using ternary operator

export const UserDetails = ({name, isOnline,isPremium}) => {

    return (
        <>
        <h3>{name}</h3>
        <span>Status: {isOnline? "Is Available" : "Not Available"}</span>
        <p>{isPremium && <span>Access all features!!</span>}</p>
        </>
    )
}