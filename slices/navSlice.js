import {createSlice} from "@reduxjs/toolkit"; 


const initialState = { 
    origin:null, 
    desitination:null,
    TravelTimeInformation:null
}


export const navSlice = createSlice({
    name:'nav',
    initialState,
    reducer: {
        setOrigin:(state,action) => {
            state.origin = action.payload;
        },
        setDestination:(state,action) => {
            state.desitination = action.payload; 
        },
        settravelTimeInformation:(state,action) => {
            state.TravelTimeInformation = action.payload;
        }

    }
})


export const {setOrigin,setDestination,settravelTimeInformation} = navSlice.actions; 
export const selectOrigin = (state) =>state.nav.origin; 
export const selectDestination = (state) => state.nav.desitination; 
export const selectTravelTimeInformation = (state) => state.nav.TravelTimeInformation;

export default navSlice.reducer;


