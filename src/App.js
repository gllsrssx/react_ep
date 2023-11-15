import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
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

export const UserContext = React.createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // TODO: Fetch data from Firebase and set the current user and login status
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn }}>
      <Header>
        <Tabs>
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
      </Header>
      <Footer />
    </UserContext.Provider>
  );
}

export default App;