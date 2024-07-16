import s from "./Container.module.scss"

const Container = ({newRef, className, section = false, id, children}) => {
    if(section) {
        return <section ref={newRef} className={[s.container, className].join(" ")} id={id}>{children}</section>
    }

    return <div ref={ref} className={[s.container, className].join(" ")} id={id}>{children}</div>
}

export default Container