import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className='shadow-sm p-4 '>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex space-x-4 items-center'>
          <div className='logo'>Logo</div>
          <Link to='/blogs/add' className='text-blue-600'>
            Add blog
          </Link>
          <Link to='/blogs/contactform' className='text-blue-600'>
          Contact Us
          </Link>
        </div>
        <nav className='flex space-x-2'>
          {user ? (
            <button
              className='border rounded-md border-blue-600 bg-blue-600 text-white p-2 px-4'
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to='login'
                className='border rounded-md border-blue-600 bg-blue-600 text-white p-2 px-4'
              >
                Login
              </Link>
              <Link
                to='signup'
                className='border rounded-md border-blue-600 bg-white text-blue-600 p-2 px-4'
              >
                Signup
              </Link>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
