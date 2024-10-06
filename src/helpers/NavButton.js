import React from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const NavButton = ({
  icon,
  text,
  loading = false,
  buttonTitle,
  aLabel,
  ...rest
}) => {
  const content = (
    <button
      {...rest}
      className="flex flex-col items-center h-full py-3"
      disabled={loading}
      aria-label={aLabel}
      title={buttonTitle}
    >
      {loading ? (
        <LoadingSpinner className="text-black w-5 grow pt-3" />
      ) : (
        <img className="w-5 grow" src={icon} alt='weather Icon'></img>
      )}
      <p className="text-xs">{text}</p>
    </button>
  );

  return content;
};

export default NavButton;
