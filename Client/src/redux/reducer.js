import swal from "sweetalert"
import { ADD_CARD, ADD_FAV, REMOVE_FAV, REMOVE_CARD, ADD_CARD_DETAIL, 
    CLEAN_CARD_DETAIL, FILTER, ORDER } from "./action-types";
import { toast } from "react-toastify";


    const initialState ={
        myFavorites: [],
        characterDetail: {},
        characters: [],
        allCharactersFav: [],
    }
    
    const reducer =(state=initialState, action)=>{
        switch(action.type){
            case ADD_FAV:
                return {
                    ...state,
                    //  [...state.allCharactersFav, action.payload]
                    myFavorites: action.payload,
                    // [...state.allCharactersFav, action.payload]
                    allCharactersFav: action.payload
                }
                case REMOVE_FAV:
                    return {
                        ...state,
                        // state.myFavorites.filter((char => char.id !== action.payload))
                        myFavorites: action.payload,
                        allCharactersFav:  action.payload
                    }
                    case REMOVE_CARD:
                        return {
                            ...state,
                            myFavorites: state.myFavorites.filter((char => char.id !== action.payload)),
                            allCharactersFav: state.myFavorites.filter((char => char.id !== action.payload)),
                            characters: state.characters.filter((char => char.id !== action.payload))
            }
            case ADD_CARD_DETAIL:
                return {
                    ...state,
                    characterDetail:  action.payload
                }
            case CLEAN_CARD_DETAIL:
                return {
                    ...state,
                    characterDetail: {}
                }
            case ADD_CARD:
                // if(action.payload.id >= 827) alert('¡No hay personajes con este ID!');
                const charactersFiltered = state.characters.filter(character =>
                    character.id === action.payload.id);
                    if(action.payload.name){
                        if(!charactersFiltered.length){
                            toast.success("La tarjeta ha sido agregada con éxito👏", {
                                position: toast.POSITION.TOP_LEFT,
                                className: "toast",
                                progress: false
                            })
                            return {
                                ...state,
                                characters: [...state.characters, action.payload]
                            }
                        }
                        else swal("¡WUBA LUBA DUB DUB!",'¡Ya hay un personaje con este ID!', "error");
                    }
                break;

            case FILTER:
                const charactersFilteres  = state.allCharactersFav.filter((char => char.gender === action.payload))
                const filterCheck =()=>{
                    if(action.payload === "All" && !charactersFilteres.length) return state.allCharactersFav
                    else return charactersFilteres
                }
                        
                return {
                    ...state,
                    myFavorites: filterCheck()
                }
            case ORDER:
                    const allCharatersFavCopy = [...state.myFavorites]
                    
                return {
                    ...state,
                    myFavorites: action.payload ==="A" 
                    ? allCharatersFavCopy.sort((a, b) => a.id - b.id)
                    : allCharatersFavCopy.sort((a, b) => b.id - a.id)
                }
            
            default:
                return {...state}
            }
}

export default reducer;