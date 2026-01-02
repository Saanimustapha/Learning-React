export const CardWrapper = ({title, children}) => {
    return (
        <>
        <div className="card">
            <h1>{title}</h1>
            <div className="card-component">{children}</div>
        </div>
        </>
    )
}