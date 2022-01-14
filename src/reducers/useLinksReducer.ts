import { useReducer } from "react";

interface LinkI {
    id:string,
    text: string,
    imgSrc: string,
    address:string
}

interface LinksState{
    links: LinkI[];
}

const initialState: LinksState = {
    links:[]
}
const useLinksReducer = () => {
    const [state, dispatch] = useReducer(linksReducer, initialState);
    return [state,dispatch]
}

enum actionTypes {
    ADD_LINK = "ADD_LINK",
    DELETE_LINK = "DELETE_LINK",
    UPDATE_LINK = "UPDATE_LINK"
}

const linksReducer = (state:LinksState = initialState, action:{type:actionTypes, payload:any}) => {
    switch (action.type) {
        case actionTypes.ADD_LINK:
            return {
                ...state,
                links: [...state.links, action.payload]
            };
        case actionTypes.DELETE_LINK:
            return {
                ...state,
                links: state.links.filter(link => link.id !== action.payload)
            };
        case actionTypes.UPDATE_LINK:
            return {
                ...state,
                links: state.links.map(link => link.id === action.payload.id ? action.payload : link)
            };
        default:
            return state;
    }    
}

export default useLinksReducer