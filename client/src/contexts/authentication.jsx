// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import jwtDecode from "jwt-decode";

// // const AuthContext = React.createContext();

// // function AuthProvider(props) {
// //   const [state, setState] = useState({
// //     loading: null,
// //     error: null,
// //     user: null,
// //   });
// //   const navigate = useNavigate();

// //   const login = async (data) => {
// //     try {
// //       const result = await axios.post("http://localhost:4001/auth/login", data);
// //       const token = result.data.token;
// //       localStorage.setItem("token", token);
// //       const user = jwtDecode(token);
// //       setState({ ...state, user });
// //       navigate("/");
// //     } catch (error) {
// //       setState({ ...state, error: error.response.data.message });
// //     }
// //   };

// //   const register = async (data) => {
// //     try {
// //       await axios.post("http://localhost:4001/auth/register", data);
// //       navigate("/login");
// //     } catch (error) {
// //       setState({ ...state, error: error.response.data.message });
// //     }
// //   };

// //   const logout = () => {
// //     localStorage.removeItem("token");
// //     setState({ ...state, user: null });
// //     navigate("/login");
// //   };

// //   const isAuthenticated = Boolean(localStorage.getItem("token"));

// //   return (
// //     <AuthContext.Provider
// //       value={{ state, login, logout, register, isAuthenticated }}
// //     >
// //       {props.children}
// //     </AuthContext.Provider>
// //   );
// // }

// // const useAuth = () => React.useContext(AuthContext);

// // export { AuthProvider, useAuth };

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import jwtDecode from "jwt-decode";
// import PropTypes from "prop-types"; // Import PropTypes

// const AuthContext = React.createContext();

// function AuthProvider(props) {
//   const [state, setState] = useState({
//     loading: null,
//     error: null,
//     user: null,
//   });
//   const navigate = useNavigate();

//   const login = async (data) => {
//     try {
//       const result = await axios.post("http://localhost:4001/auth/login", data);
//       const token = result.data.token;
//       localStorage.setItem("token", token);
//       const user = jwtDecode(token);
//       setState({ ...state, user });
//       navigate("/");
//     } catch (error) {
//       setState({ ...state, error: error.response.data.message });
//     }
//   };

//   const register = async (data) => {
//     try {
//       await axios.post("http://localhost:4001/auth/register", data);
//       navigate("/login");
//     } catch (error) {
//       setState({ ...state, error: error.response.data.message });
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setState({ ...state, user: null });
//     navigate("/login");
//   };

//   const isAuthenticated = Boolean(localStorage.getItem("token"));

//   return (
//     <AuthContext.Provider
//       value={{ state, login, logout, register, isAuthenticated }}
//     >
//       {props.children}
//     </AuthContext.Provider>
//   );
// }

// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired, // Validate that children is required and must be a node
// };

// const useAuth = () => React.useContext(AuthContext);

// export { AuthProvider, useAuth };

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { decodeToken, isAuthenticated } from "./authUtils";
import PropTypes from "prop-types";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [state, setState] = useState({
    loading: null,
    error: null,
    user: null,
  });
  const navigate = useNavigate();

  const login = async (data) => {
    try {
      const result = await axios.post("http://localhost:4001/auth/login", data);
      const token = result.data.token;
      localStorage.setItem("token", token);
      const user = decodeToken(token);
      setState({ ...state, user });
      navigate("/");
    } catch (error) {
      setState({ ...state, error: error.response.data.message });
    }
  };

  const register = async (data) => {
    try {
      await axios.post("http://localhost:4001/auth/register", data);
      navigate("/login");
    } catch (error) {
      setState({ ...state, error: error.response.data.message });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setState({ ...state, user: null });
    navigate("/login");
  };

  const authenticated = isAuthenticated();

  return (
    <AuthContext.Provider
      value={{ state, login, logout, register, isAuthenticated: authenticated }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
