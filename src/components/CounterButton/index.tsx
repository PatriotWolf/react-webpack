export interface CounterButtonProps {
  count: number;
  setCount: () => void;
}

const CounterButton = ({ count, setCount }: CounterButtonProps) => {
  return (
    <button role="button" onClick={() => setCount()}>
      Count - {count}
    </button>
  );
};

export default CounterButton;
