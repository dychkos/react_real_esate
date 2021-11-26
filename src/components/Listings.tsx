import React from "react";
import DropdownGroup from "./dropdown/DropdownGroup";
import Dropdown from "./dropdown/Dropdown";
import HousesList from "./HousesList";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {HousesListActionCreators} from "../store/reducers/houses-list/action-creator";
import {HouseListFilters} from "../store/reducers/houses-list/types";


const Listings:React.FC = () =>{

    let dispatch = useDispatch();

    let houses = useTypedSelector(state => state.housesListReducer.houses);
    let isHousesLoading = useTypedSelector(state => state.housesListReducer.isLoading);

    let filterAction = {
        sortByPrice:(reverse:boolean)=>{
            dispatch(HousesListActionCreators.sortHousesList({reverse, option: HouseListFilters.PRICE}));
        },
        sortByAge:(reverse:boolean)=>{
            dispatch(HousesListActionCreators.sortHousesList({reverse, option: HouseListFilters.AGE}));
        }
    }

    React.useEffect(()=>{
        dispatch(HousesListActionCreators.fetchHousesList());
    },[])

    return(
        <section className="listings">
            <div className="container">
                <div className="listings__title marked-title">
                    <div className="mark"/>
                    <h2>
                        Find your next place to live
                    </h2>
                </div>
               <DropdownGroup>
                   <Dropdown action={filterAction.sortByPrice} options={[{id:1,value:false,title:"Expensive first"},{id:2,value:true,title:"Cheap first"}]} placeholder={"Price"}/>
                   <Dropdown action={filterAction.sortByAge} options={[{id:1,value:true,title:"Oldest first"},{id:2,value:false,title:"Younger first"}]} placeholder={"Age"}/>
                   <Dropdown action={filterAction.sortByPrice} options={[{id:1,value:false,title:"Expensive first"},{id:2,value:false,title:"Cheap first"}]} placeholder={"Price"}/>
                   <Dropdown action={filterAction.sortByPrice} options={[{id:1,value:false,title:"Expensive first"},{id:2,value:false,title:"Cheap first"}]} placeholder={"Price"}/>
               </DropdownGroup>
               <HousesList isLoading={isHousesLoading} houses={houses}/>
            </div>
        </section>
    )
}

export default Listings;