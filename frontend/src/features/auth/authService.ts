import { FormFields } from "../../types/type";
//  Register User
const register = async (userData: FormFields) => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  return data;
};

const AuthService = {
  register,
};

export default AuthService;
