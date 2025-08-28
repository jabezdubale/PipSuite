const ButtonsSubmit = ({
  variant,
  styles,
  label,
  LeftIcon,
  RightIcon,
  type,
}) => {
  if (variant === "mainVariant") {
    return (
      <button
        type={`${type}`}
        className={`flex justify-center items-center bg-brand-green text-center gap-2 rounded-xl cursor-pointer ${styles}`}
      >
        {LeftIcon && (
          <div className="text-main-Background text-lg">{LeftIcon}</div>
        )}
        {label && <div className="text-main-Background text-lg">{label}</div>}
        {RightIcon && (
          <div className="text-main-Background text-lg">{RightIcon}</div>
        )}
      </button>
    );
  } else if (variant === "secondaryVariant") {
    return (
      <button
        type={`${type}`}
        className={`flex justify-center items-center border-1 border-solid border-main-border text-center rounded-xl ${styles}`}
      >
        {LeftIcon && (
          <div className="text-primary-headings text-lg">{LeftIcon}</div>
        )}
        {label && <div className="text-primary-headings text-lg">{label}</div>}
        {RightIcon && (
          <div className="text-primary-headings text-lg">{RightIcon}</div>
        )}
      </button>
    );
  }
};

export default ButtonsSubmit;
{
  /* <Buttons variant="mainVariant/secondaryVariant" styles="" label="" LeftIcon={} RightIcon={} link="" /> */
}
