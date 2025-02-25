import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent =     {
    _id: new Date().getTime(),
    title: "Cumpleaños del jefe",
    notes: "Comprar el regalo",
    start: new Date(2025,1,20,8),
    end: addHours(new Date(2025,1,20,8), 2),
    bgcolor: "#fafafa",
    user: {
        _id: "123",
        name: "Jonatan",
    },
}

export const calendarSlice = createSlice({
    name: "calendar",
    initialState: {
        events: [
            tempEvent,
        ],
        activeEvent: null,
    },
    reducers: {
        onSetActiveEvent: (state, {payload}) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, {payload}) => {
            state.events.push(payload);
            state.activeEvent = null;        
        },
        onUpdateEvent: (state, {payload}) => {
            state.events = state.events.map(event => event._id === payload._id ? payload : event);
        },
        onDeleteEvent: (state) => {
            if(state.activeEvent){
                state.events = state.events.filter(event => event._id !== state.activeEvent._id);
                state.activeEvent = null;
            }
            
        }
    }
})

export const {onSetActiveEvent,onAddNewEvent,onUpdateEvent,onDeleteEvent} = calendarSlice.actions;