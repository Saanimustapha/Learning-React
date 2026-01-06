//External styling of react components
import './Alert.css'

export const Alert = ({children, type}) => {
    return (
        <div className={`alert ${type}`}>{children}</div>
    )
}