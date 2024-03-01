import { Routes, Route, Navigate } from 'react-router-native'

import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import SignIn from './SingIn';

const Main = () => {
  return (
    <main style={{width: '100%'}}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/singin' element={<SignIn />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </main>
  );
};

export default Main;