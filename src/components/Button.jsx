const Button = ({ backgroundColor, textColor, borderColor, label, iconURL, fullWidth}) => {
  return (
    <div>
      <button
        className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
          bg-red-500 border-red-500 text-white rounded-full w-full"
      >
        {label}

        {iconURL && (
          <img
            src={iconURL}
            alt="arrow right icon"
            className="ml-2 rounded-full w-5 h-5"
          />
        )}
      </button>

      
    </div>
  );
};

export default Button;
