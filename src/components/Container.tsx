type containerProps = {
  styles: React.CSSProperties;
};

const Container = ({ styles }: containerProps) => {
  return (
    <div style={{ border: '1px solid red', padding: '2rem' }}>
      <h1 style={styles}>text goes here</h1>
    </div>
  );
};

export default Container;
