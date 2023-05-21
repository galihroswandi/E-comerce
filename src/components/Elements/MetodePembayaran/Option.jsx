const Option = (props) => {
  const { text, value } = props;
  return <option value={value}>{text}</option>;
};

export default Option;
