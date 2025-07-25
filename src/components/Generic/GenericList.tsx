// type listProps = {
//   items: string[];
//   onClick: (id: string) => void;
// };
type listProps<T> = {
  items: T[];
  onClick: (id: T) => void;
};
// // const GenericList = <T extends {}>({ items, onClick }: listProps<T>) => {
// const GenericList = <T extends string | number>({
//   items,
//   onClick,
// }: listProps<T>) => {
const GenericList = <T extends { id: number }>({
  items,
  onClick,
}: listProps<T>) => {
  return (
    <div>
      <h1>List Items</h1>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index} onClick={() => onClick(item)}>
              {' '}
              {item?.id}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GenericList;
