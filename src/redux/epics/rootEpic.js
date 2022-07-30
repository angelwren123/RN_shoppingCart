import { combineEpics } from "redux-observable";
import { cartEpic,addToCartEpic, deleteItemCartEpic,increaseItemCartEpic, decreaseItemCartEpic } from "./cartEpic";
const rootEpic = combineEpics (
    // cartEpic,
    // addToCartEpic,
    // deleteItemCartEpic,
    // increaseItemCartEpic,
    // decreaseItemCartEpic
);
export default rootEpic

