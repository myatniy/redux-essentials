import { configureStore } from '@reduxjs/toolkit'

import notificationsReducer from '../features/notifications/notificationsSlice'
import { apiSlice } from '../api/apiSlice'

export default configureStore({
  reducer: {
    notifications: notificationsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
