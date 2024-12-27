import {useContext, useState} from 'react';
import { FilterContext } from '../FilterContext';

export default function DblClickField(props){

    const [onEdit, setEdit] = useState(false);

    const handleVal = (e) => {
        if(props.onChange){
            props.onChange(e.target.value);
        }
    }
    const handleEdit = (isOn) => (e) => {
        if(!onEdit && props.readOnly === true){
            return;
        }
        setEdit(isOn)
    }
    const handleEnter = (e) => {
        if(e.keyCode == 13){
            e.preventDefault();
            e.target.blur()
        }
    }

    return (
        <input 
            placeholder={props.placeholder ? props.placeholder : ''}
            readOnly={props.readOnly === true ? true : !onEdit} 
            onChange={handleVal} 
            value={props.value}
            onBlur={handleEdit(false)} 
            onKeyUp={handleEnter}
            onDoubleClick={handleEdit(true)}
        />
    )
}