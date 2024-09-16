import { User } from '../../types/usersTypes.ts';

interface Props {
  user: User;
}

export const UsersExcerpt = ({user}: Props) => {

  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
    </tr>
  );
};