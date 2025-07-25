type inputProps = {
  value?: string;
  // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;
const Input = ({ value, ...rest }: inputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return <input {...rest} onChange={handleInputChange} value={value} />;
  // return <input onChange={(e) => handleChange(e)} value={value} />;
};

export default Input;
