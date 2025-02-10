import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './slices/messagesSlice';
import channelsReducer from './slices/channelsSlice';
import modalsReducer from './slices/modalsSlice';
import userReducer from './slices/userSlice';
import { api } from './api';

export default configureStore({
  reducer: {
    messagesReducer,
    channelsReducer,
    modalsReducer,
    userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
