interface Props {
  visible?: boolean;
  onChange?: (pageSize: number) => void;
}

const selectOption = [5, 10, 20, 30, 50, 100];

const SizeChanger = ({ visible, onChange }: Props) => {
  return (
    <div className="flex gap-4items-center" hidden={!visible}>
      <select
        onChange={(e) => onChange && onChange(+e.target.value)}
        className="flex items-center justify-center appearance-none px-2 py-2 border border-gray-300 rounded-lg overflow-hidden"
      >
        {selectOption.map((item) => (
          <option
            key={`option-${item}`}
            className="flex flex-col gap-2"
            value={item}
          >
            {item} / page
          </option>
        ))}
      </select>
    </div>
  );
};

export default SizeChanger;
