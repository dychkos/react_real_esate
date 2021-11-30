import modalReducer from './modal/modalReducer'
import housesListReducer from './houses-list/housesListReducer'
import houseReducer from './house/houseReducer'
import commentsReducer from './comments/commentsReducer'
import userReducer from "./user/userReducer";
import appReducer from "./app/appReducer";

const reducers = {
    modalReducer,
    housesListReducer,
    houseReducer,
    commentsReducer,
    userReducer,
    appReducer
}

export default reducers;