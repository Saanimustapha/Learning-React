//Inline styling of react components

export const Alert = ({children, type="success"}) => {
    return (
        <div style={{
            backgroundColor: type === "success" ? "#10b981" : "#ef4444",
            color: "black",
            padding: "20px",
            marginBottom: "25px",
            borderRadius: "5px"
        }}>{children}</div>
    )
}