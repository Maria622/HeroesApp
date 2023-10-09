import { types } from '../types/types';

//no debe de llamar funciones externas del reducer
//funciones puras que no llaman funciones externas

export const authReducer =(state= {},action)=>{

    switch (action.type) {

        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };
            
        case types.logout:
            return {
                logged: false,
            };

        default:
            return state;
    }


}