import React from "react";

const Login = () => {
  return (
    <div>
      <table>
        <tr>
          <td colSpan="2">Login</td>
        </tr>
        <tr>
          <td>User Name</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>Password</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <button>Submit</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Login;
