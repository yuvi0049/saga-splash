import { combineReducers } from 'redux';

import imageReducer from './imagesReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imageReducer,
    error: errorReducer
});

export default rootReducer;