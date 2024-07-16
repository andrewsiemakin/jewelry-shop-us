import s from "./Button.module.scss"

const Button = ({onClick}) => {
    return (
        <button className={s.button} onClick={onClick}>Request a Quote</button>
    )
}

export default Button