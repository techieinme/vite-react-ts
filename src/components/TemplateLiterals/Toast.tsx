type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type positionProps = {
  position: Exclude<
    `${HorizontalPosition}-${VerticalPosition}`,
    'center-center'
  >;
};

const Toast = ({ position }: positionProps) => {
  return <div>Toast={position}</div>;
};

export default Toast;
