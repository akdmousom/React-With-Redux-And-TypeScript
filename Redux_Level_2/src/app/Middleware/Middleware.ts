import { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (store) => (next) => (action) => {

    const currentState:object = store.getState() 

    next(action)    

    console.log("Previous State ► ", currentState);
    console.log("Current Action ► ", action);
    console.log("Current State ► ", store.getState());
    
}

export default logger