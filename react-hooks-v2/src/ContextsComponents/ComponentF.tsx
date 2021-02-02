import React, { useContext } from "react";
import { LanguageContext, UserContext } from "../App";
import { User } from "./Type";

const ComponentF: React.FC = () => {
  const user: User = useContext(UserContext);
  const language: string = useContext(LanguageContext);

  return (
    <div>
      <div>
        {user.name}: {language}
      </div>
      {/* <UserContext.Consumer>
        {(user: User): JSX.Element => {
          return (
            <LanguageContext.Consumer>
              {(language): JSX.Element => {
                return (
                  <div>
                    {user.name}: {language}
                  </div>
                );
              }}
            </LanguageContext.Consumer>
          );
        }}
      </UserContext.Consumer> */}
    </div>
  );
};

export default ComponentF;
