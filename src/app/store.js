import { configureStore } from '@reduxjs/toolkit';
import infoReducer from '../features/Info/infoSlice';

const rootReducer = {
	info: infoReducer,
};

const store = configureStore({
	reducer: rootReducer,
});

export default store;
