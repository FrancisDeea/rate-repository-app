import { Routes, Route, Navigate } from 'react-router-native'
import { View } from 'react-native';

import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import SignIn from './SingIn';
import theme from '../../theme.js';

const Main = () => {
  return (
    <View style={{ width: '100%', fontFamily: theme.fonts }}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/singin' element={<SignIn />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  );
};

export default Main;