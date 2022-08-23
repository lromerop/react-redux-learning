import { configureStore } from "@reduxjs/toolkit";
import peoplesReducer from './slice/peoples';

const store = configureStore({
    reducer: {
        peoples: peoplesReducer
    }
});

export default store;