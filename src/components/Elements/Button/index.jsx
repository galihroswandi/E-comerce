const Button = (props) => {
  const { children = "no text...", classname } = props;
  return <button className={`${classname}`}>{children}</button>;
};

export default Button;
