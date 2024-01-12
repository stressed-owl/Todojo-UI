import { useEffect, useRef } from "react";
import Logo from "../../components/common/logo/Logo";
import Typed from "typed.js";

const Error = () => {
  const errorText = useRef(null);

  useEffect(() => {
    const typed = new Typed(errorText.current, {
      strings: ["Oops! Something went wrong."],
      typeSpeed: 200,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[100vh] flex-col">
      <Logo />
      <div className="mt-5 text-center">
        <span className="font-bold text-3xl" ref={errorText}></span>
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
