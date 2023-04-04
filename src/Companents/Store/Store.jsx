import {configureStore} from '@reduxjs/toolkit'
import { useObuvCard } from '../Reducer/Obuv/Obuvi'

const store = configureStore({
  reducer: {
    obuvCard : useObuvCard
  }
})

export {store}