import React from "react";
import Logo from "../../components/common/logo/Logo";

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-[100vh] flex-col">
      <Logo />
      <div className="mt-5 text-center">
        <h1 className="font-bold text-3xl">Oops! Something went wrong.</h1>
        <p className="text-sm mt-2">
          Don't worry, setbacks are just setups for comebacks. We're working
          hard to fix the issue and make Todojo even better.
        </p>
        <p className="text-sm">
          In the meantime, take a deep breath, stay positive, and tackle your
          day with renewed energy!
        </p>
      </div>
    </div>
  );
};

export default Error;
