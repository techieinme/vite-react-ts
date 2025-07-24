type inputProps = {
  value?: string;
  // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({ value }: inputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return <input onChange={handleInputChange} value={value} />;
  // return <input onChange={(e) => handleChange(e)} value={value} />;
};

export default Input;
