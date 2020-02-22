import React from "react";

interface LoginProps {
  handleLoginSubmit: (e: any) => void;
}

const Login: React.FC<LoginProps> = ({ handleLoginSubmit }) => {
  return (
    <div className="bg-gray-300 flex ">
      <div
        className="h-screen w-2/5 bg-gray-100"
        style={{
          backgroundImage: `url(/assets/images/backgrounds/DE_Background_Summer.gif)`
        }}
      >
        test
      </div>
    </div>
  );
};

export default Login;
