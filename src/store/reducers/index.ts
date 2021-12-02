import modalReducer from './modal/modalReducer';
import housesListReducer from './houses-list/housesListReducer';
import houseReducer from './house/houseReducer';
import commentsReducer from './comments/commentsReducer';
import ordersReducer from './orders/ordersReducer';
import userReducer from "./user/userReducer";
import appReducer from "./app/appReducer";
import featuresReducer from "./features/featuresReducer";

const reducers = {
    modalReducer,
    housesListReducer,
    houseReducer,
    commentsReducer,
    userReducer,
    appReducer,
    featuresReducer,
    ordersReducer
}

export default reducers;