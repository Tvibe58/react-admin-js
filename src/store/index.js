import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer/counterSlice';
import userReducer from './reducer/userSlice';
import appReducer from './reducer/appSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    counter: counterReducer
  }
});
