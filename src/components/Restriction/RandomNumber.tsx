// type RandomNumberProps = {
//   value: number;
//   isPositive?: boolean;
//   isNegative?: boolean;
//   isZero?: boolean;
// };

type RandomNumberProps = {
  value: number;
};

type isNegativeProps = RandomNumberProps & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type isPositiveProps = RandomNumberProps & {
  isNegative?: never;
  isPositive: boolean;
  isZero?: never;
};

type isZeroProps = RandomNumberProps & {
  isNegative?: never;
  isPositive?: never;
  isZero: boolean;
};

type numberProps = isZeroProps | isPositiveProps | isNegativeProps;

const RandomNumber = ({
  value,
  isNegative,
  isPositive,
  isZero,
}: numberProps) => {
  return (
    <div>
      <h1>RandomNumber</h1>
      value -{value} <br />
      isPositive -{isPositive && '==  Positive'} <br />
      isNegative -{isNegative && '== isNegative'} <br />
      isZero -{isZero && '== isZero'} <br />
    </div>
  );
};

export default RandomNumber;
