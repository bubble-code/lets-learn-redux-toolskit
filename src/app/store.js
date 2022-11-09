import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter-slice';
import { apiSliceCreate } from "../features/dogs/dogs-api-slice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        [apiSliceCreate.reducerPath]: apiSliceCreate.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSliceCreate.middleware)
    }
});

export default store;

