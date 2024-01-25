import { useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import LoadingScreen from './components/loading-screen';
import { auth } from './routes/firebase';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './components/protected-route';
import Layout from './routes/create-account';
import Home from './routes/home';
import Profile from './routes/profile';
import Login from './routes/login';
import CreateAccount from './routes/create-account';
import reset from 'styled-reset';


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><Layout/></ProtectedRoute>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "profile",
        element: <Profile />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/create-account",
    element: <CreateAccount/>
  }
]);

const GlobalStyled = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: white;
    color: black;
  }
`

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
`

function App() {
  const [isLoading, setLoading] = useState(true);
  const init = async() => {
    await auth.authStateReady();
    setLoading(false);
  }

  useEffect(() => {
    init()
  },[]);

  return (
    <Wrapper>
      <LoadingScreen/>
      {isLoading ? <LoadingScreen/> : <RouterProvider router={router}/>}
    </Wrapper>
  )
}

export default App;
