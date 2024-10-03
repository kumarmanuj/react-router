import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = '404 - Not Found';
  }, []);

  const handleSubmit = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>404 - Not Found</h1>
      <br />
      <p>The page you are looking for does not exist.</p>
      <br />
      <button onClick={handleSubmit}>Back to React Router</button>
    </div>
  );
};

export default NotFound;
