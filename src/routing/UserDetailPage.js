// hooks
import { useParams } from 'react-router-dom';

const UserDetailPage = () => {
  const { id } = useParams();
  return <>id user = {id}</>;
};

export default UserDetailPage;
