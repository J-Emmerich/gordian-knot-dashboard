import axios from "axios";

const baseUrl =
  process.env.API_PUBLIC_ENDPOINT || "/public";
const path = "auth";
const registerNewUser = async (username, password, email) => {
  const user = await axios.post(`${baseUrl}/${path}/register`, {
    username,
    password,
    email
  });
  console.log(user);
  return user.data.data;
};

const loginNewUser = async (email, password) => {
  try {
    console.log(`${baseUrl}/${path}/login`)
    const user = await axios.post(`${baseUrl}/${path}/login`, {
      email,
      password
    });
    console.log(user);
    return user.data.data;
  } catch (err) {
    console.log(err);
  }
};

export default { loginNewUser, registerNewUser };
