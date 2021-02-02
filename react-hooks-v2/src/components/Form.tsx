import React, { useState } from "react";

type NameState = {
  firstName: string;
  lastName: string;
};

const Form: React.FC = () => {
  const [name, setName] = useState<NameState>({ firstName: "", lastName: "" });

  return (
    <div>
      <div>
        <p>First Name: - {name.firstName}</p>
        <p>Last Name: - {name.lastName}</p>
      </div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName({ ...name, firstName: e.target.value })
          }
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName({ ...name, lastName: e.target.value })
          }
        />
        <div></div>
      </form>
    </div>
  );
};

export default Form;
