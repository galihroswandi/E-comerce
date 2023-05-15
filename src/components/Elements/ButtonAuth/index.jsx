import ButtonChildAuth from "./Button";

const ButtonAuth = (props) => {
  const { classWrapper, classButton } = props;
  return (
    <div className={`${classWrapper}`}>
      <ButtonChildAuth
        classButton={`bg-transparent text-green-500 ${classButton}`}
        target="/signin"
      >
        Sign In
      </ButtonChildAuth>

      <ButtonChildAuth
        target="/signup"
        classButton={`bg-green-500 text-slate-50 ${classButton}`}
      >
        Sign Up
      </ButtonChildAuth>
    </div>
  );
};

export default ButtonAuth;
