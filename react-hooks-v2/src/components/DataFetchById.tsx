import React, { useEffect, useState } from "react";

export const DataFetchById = () => {
  const [post, setPost] = useState<any>(null);
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchData: () => Promise<void> = async () => {
    setLoading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const item = await response.json();
    setPost(item);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setId(Number(e.target.value))
        }
      />
      {loading ? <h1>loading...</h1> : <h1>{post.title}</h1>}
    </div>
  );
};
