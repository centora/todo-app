import './updateUser.scss';
import { UserForm } from 'components/userForm';

export const UpdateUser = ({ user }) => (
  <>
    <h1>Update User</h1>
    <UserForm data={user} />
  </>
);
