import React, { useState, useEffect } from "react";
import Service from "../Utils/Service";

const GithubREST = () => {
  const [userList, setUserList] = useState([]);
  const getAllUsers = async () => {
    let result = await Service("GET", "https://api.github.com/users");
    setUserList(result);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <p> Total Users Fetched: {userList.length}</p>
      <ul>
        {userList.map((user) => {
          return <li>{user.login}</li>;
        })}
      </ul>
    </div>
  );
};

export default GithubREST;
