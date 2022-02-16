import React, { useEffect, useState } from "react";
import "./style.css";

const UseEffect = () => {
  const [data, setData] = useState([]);

  const getUser = async () => {
    const response = await fetch("https://api.github.com/users");
    setData(await response.json());
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="card">
        {data.map((curData) => {
          const { login, avatar_url, id, url } = curData;
          return (
            <div key={id}>
              <img src={avatar_url} alt="avatar" />
              <h1>{login}</h1>
              <a href={url}>UserLink</a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UseEffect;
