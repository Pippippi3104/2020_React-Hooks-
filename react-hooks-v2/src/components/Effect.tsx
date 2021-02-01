import React, { useEffect, useState } from "react";

const Effect: React.FC = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `クリック数: ${count} 回`;
    console.log("render");
  }, [count]);

  return (
    <div>
      <p>クリック数：{count}</p>
      <p>名前：{name}</p>
      <input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <button onClick={() => setCount(count + 1)}>カウント +1</button>
    </div>
  );
};

export default Effect;
