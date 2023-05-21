const TextDropdown = (props) => {
  const { text, classname } = props;
  return <span className={classname}>{text}</span>;
};

export default TextDropdown;
