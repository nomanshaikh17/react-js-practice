import css from './Container.module.css'
const Conatiner = (props)=>{
    return (
        <div className={css['container']}>
            {props.children}
        </div>
    )
}
export default Conatiner;