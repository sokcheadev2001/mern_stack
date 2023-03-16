import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { AppDispatch, RootState } from "../app/store";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  const { user } = useAppSelector((state) => state.auth);
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Goal</Link>
      </div>
      <ul>
        {user === null ? (
          <li>
            <Link to='/login'>
              <FaSignInAlt /> Login
            </Link>
          </li>
        ) : (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        )}

        <li>
          <Link to='/register'>
            <FaUser /> Register
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
