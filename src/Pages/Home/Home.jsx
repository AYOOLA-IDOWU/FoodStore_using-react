import { useEffect, useReducer } from "react";

const initialState={foods: []};

const reducer=(state, action)=>{
    switch(action.type){
        case 'FOODS_LOADED':
        return{...state, foods: action.payload};
        default:
            return state
    }
}



const Home = () => {
    const [state, dispatch]= useReducer(reducer, initialState);
    const {foods}= state;


    useEffect(()=>{
        getAll().then(foods=> dispatch({type: 'FOODS_LOADED', payload}));
    }, []);




  return (
    <div>Home</div>
  )
}  

export default Home