import css from './List.module.css'
const List = ({ list ,purchase}) => {
    
    return (
        <div className={css['list']}>
            <ul className={css['ul-list']}>
                {list.map((item,key) => (
                    <li key={item.name} className={item.status == 0 ? `${css['strike-item']} ${css['list-item']} list-item-no-${key}` : `${css['remaining-item']} ${css['list-item']} list-item-no-${key}`} onClick={() => {
                        purchase(item.name,'list-item-no-'+key,css['strike-item'],key)
                    }}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default List;