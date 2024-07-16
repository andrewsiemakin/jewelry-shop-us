import s from "./Container.module.scss"

const Container = ({className, section = false, id, children}) => {
    if(section) {
        return <section className={[s.container, className].join(" ")} id={id}>{children}</section>
    }

    return <div className={[s.container, className].join(" ")} id={id}>{children}</div>
}

export default Container