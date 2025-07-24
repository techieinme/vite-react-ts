type headingProps = {
  children: React.ReactNode;
};

const Heading = ({ children }: headingProps) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
};

export default Heading;
