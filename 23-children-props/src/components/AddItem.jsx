import { useState } from 'react'
import css from './AddItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const AddItem = ({addItem})=>{

    const [inputValue,setInputValue] = useState("");

    return (
        <div className={css['outer-div']}>
            <input type="text" className='' value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}
            onKeyDown={(e)=>{
                if(e.key==='Enter'){
                    addItem(inputValue)
                    setInputValue("")
                }
            }}/>
            <button onClick={()=>{
                setInputValue("")
                addItem(inputValue)
            }}><FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    )
}

export default AddItem;