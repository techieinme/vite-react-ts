type statusProps = {
  // status: String;
  status: 'success' | 'loading' | 'error';
};

const Status = ({ status }: statusProps) => {
  let message;

  if (status === 'loading') {
    message = 'loading message';
  } else if (status === 'success') {
    message = 'data fetch Successfully';
  } else if (status === 'error') {
    message = 'there is an error occurred ';
  }

  return (
    <div>
      <h1>message -{message}</h1>
    </div>
  );
};

export default Status;
