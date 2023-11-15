import React, { useState, useEffect } from 'react';
import 'normalize.css';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import AddPostForm from './components/AddPostForm';
import EditPostForm from './components/EditPostForm';
import CommentList from './components/CommentList';
import AddCommentForm from './components/AddCommentForm';
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import Login from './components/Login';
import Register from './components/Register';
import "./services/firebase";
import { useLocalStorage } from '@uidotdev/usehooks';

export const UserContext = React.createContext();

function ProvidedApp() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [defaultTab, setDefaultTab] = useLocalStorage("defaultTabIndex", 0);

  useEffect(() => {
    // TODO: Fetch data from Firebase and set the current user and login status
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn }}>
      <Header />
      <Tabs defaultIndex={defaultTab} onSelect={(index) => setDefaultTab(index)}>
        <TabList>
          <Tab>Blog</Tab>
          <Tab>Comments</Tab>
          <Tab>Users</Tab>
          <Tab>Login</Tab>
          <Tab>Register</Tab>
        </TabList>

        <TabPanel>
          <BlogList />
          {isLoggedIn && <AddPostForm />}
          {isLoggedIn && <EditPostForm />}
        </TabPanel>
        <TabPanel>
          <CommentList />
          {isLoggedIn && <AddCommentForm />}
        </TabPanel>
        <TabPanel>
          <UserList />
          {isLoggedIn && <AddUserForm />}
          {isLoggedIn && <EditUserForm />}
        </TabPanel>
        <TabPanel>
          <Login />
        </TabPanel>
        <TabPanel>
          <Register />
        </TabPanel>
      </Tabs>
      <Footer />
    </UserContext.Provider>
  );
}

function App() {
  return <ProvidedApp />;
}

export default App;