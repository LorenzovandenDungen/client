import React, { useState, useEffect } from "react";
import axios from "axios";

const Config = () => {
  const [config, setConfig] = useState({});

  useEffect(() => {
    axios.get("/api/config").then((res) => {
      setConfig(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Config</h1>
      <pre>{JSON.stringify(config, null, 2)}</pre>
    </div>
  );
};  

export default Config;