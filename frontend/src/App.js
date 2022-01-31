import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { configureStore, combineReducers } from "@reduxjs/toolkit"

import Main from "./components/Main"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import NotFound from "./components/NotFound"
import ProfilePage from "./components/ProfilePage"
import Thoughts from "./screens/Thoughts"
import Grouping from "./screens/Grouping"
import GroupThoughts from "./components/GroupThoughts"

import user from "./reducers/user"
import retro from "./reducers/retro"

const reducer = combineReducers({
  user: user.reducer,
  retro: retro.reducer,
})

const store = configureStore({ reducer })

// // -- add local storage

// const persistedStateJSON = localStorage.getItem("reduxState")
// let persistedState = {}

// if (persistedStateJSON) {
//   persistedState = JSON.parse(persistedStateJSON)
// }

// const store = createStore(
//   reducer,
//   persistedState,
//   // -- to make the redux devtools work
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// store.subscribe(() => {
//   localStorage.setItem("reduxState", JSON.stringify(store.getState()))
// })

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Main />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/thoughts" element={<Thoughts />} />
          <Route path="/grouping" element={<GroupThoughts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
