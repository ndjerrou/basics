import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import UserListPage from './UserListPage';
import UserDetailPage from './UserDetailPage';

const router = createBrowserRouter([
  { path: '', element: <HomePage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/users', element: <UserListPage /> },
  { path: '/users/:id', element: <UserDetailPage /> },
]);

export default router;

// Ex :

// 1 - Add a new dynamic route (:) so that a click on a particular user ==> the url in the browser changes and display the id of the user

// 2 - Create a component named UserDetailPage and display something

// 3 - add a new item inside the menu so we can be redirected to the users' page
