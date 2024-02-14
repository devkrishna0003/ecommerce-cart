import { configureStore } from "@reduxjs/toolkit";
import mainSlicer from '../features/Features'

const Store = configureStore({
  reducer: {
    cart:mainSlicer
  }
})
export default Store;