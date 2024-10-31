import css from './AddItem.module.css'
const AddItem = ()=>{
    return (
        <div className={css['outer-div']}>
            <input type="text" />
            <button>Add</button>
        </div>
    )
}

export default AddItem;