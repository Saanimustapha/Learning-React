//conditional rendering using if statements

export const UserDetails = ({name, isOnline}) => {

    if (isOnline) {
        return (
            <>
            <h3>{name}</h3>
            <span>Status: Online</span>
            </>
        )
    }

    return (
        <>
        <h3>{name}</h3>
        <span>Status: Offline</span>
        </>
    )
}