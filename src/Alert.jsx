//External styling of react components
import style from './Alert.module.css'

export const Alert = ({children, type}) => {
    return (
        <div className={`${style.alert} ${style[type]}`}>{children}</div>
    )
}