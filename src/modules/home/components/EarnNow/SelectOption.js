import React from "react";

const SelectOption = ({ onClickOption }) =>{
    return <div class="option-menu">
        <button type="button" onClick={()=>onClickOption(25)}>
            25%
        </button>
        <button type="button" onClick={()=>onClickOption(50)}>
            50%
        </button>
        <button type="button" onClick={()=>onClickOption(75)}>
            75%
        </button>
        <button type="button" onClick={()=>onClickOption(100)}>
            100%
        </button>
    </div>
}

export default SelectOption;