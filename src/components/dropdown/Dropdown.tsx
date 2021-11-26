import React from "react";
import ArrowDown from "../../assets/img/arrow_down.svg";
import classNames from "classnames";


type DropdownProp = {
    options:Option[],
    placeholder:string,
    action:(Filter : boolean) => void
}

interface Option {
    id:number,
    value:string | boolean,
    title:string

}

const Dropdown:React.FC<DropdownProp> = ({options,placeholder,action}) =>{

    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const [dropdownTitle, setDropdownTitle] = React.useState<string>(placeholder);

    let openDropdown = () =>{
        setDropdownOpen(dropdownOpen=>!dropdownOpen);
    }

    let closeDropdown = () =>{
        setDropdownOpen(dropdownOpen=>false);
    }


    let optionClickHandler = (event : React.MouseEvent<HTMLDivElement>) =>{
        let element = (event.target as Element);
        let value = element.attributes.getNamedItem("data-value")?.value === "true";
        let title = String(element.textContent);
        action(value);
        setDropdownTitle(title);
        setDropdownOpen(false);
    }


    return(
        <div className="col">
            <div className="listings__dropdown">
                <div className={classNames("dropdown",{open:dropdownOpen})}>
                    <div className="dropdown__backdrop" onClick={closeDropdown}/>
                    <div className="dropdown__header" onClick={openDropdown}>
                        <div className="dropdown__title">{dropdownTitle}</div>
                        <div className="dropdown__arrow">
                            <img src={ArrowDown} alt="Arrow down"/>
                        </div>
                    </div>
                    <div className="dropdown__body">
                        {options.map(option => <div onClick={optionClickHandler} className="dropdown__item" key={option.id} data-value={option.value}>{option.title}</div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;