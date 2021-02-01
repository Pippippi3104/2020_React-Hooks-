import React, { useEffect, useState } from "react";

const DataFeatch: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchData: () => Promise<void> = async () => {
    const response: Response = await fetch("https://api.randomuser.me/");
    const data: any = await response.json();
    const [item] = data.results;

    setUser(item);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <h1>
          {user.name.first} {user.name.last}
        </h1>
      )}
    </div>
  );
};

export default DataFeatch;
