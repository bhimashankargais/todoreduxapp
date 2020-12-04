const initialstate= 'ALL'
const SET_FILTER = 'SET_FILTER';
export default function  filterreducer(state=initialstate,action){
    switch(action.type){
            case SET_FILTER:{
                const {filtertype } = action.payload;
                return filtertype;
            } 
            default: {
                return state;
            }

    }
} 