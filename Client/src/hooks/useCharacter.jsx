import { useParams} from "react-router-dom";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterDetail, cleanCharacterDetail } from "./../redux/actions";

const useCharacter = ()=>{

const {id} = useParams();
const dispatch = useDispatch();
const character = useSelector(state => state.characterDetail);

    useEffect(() => {
    dispatch(getCharacterDetail(id));

    return ()=>{
        dispatch(cleanCharacterDetail())
    }
    }, [dispatch, id]);
    return character
};


export default useCharacter;