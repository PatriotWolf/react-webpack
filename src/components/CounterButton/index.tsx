export interface CounterButtonProps {
  count: number;
  setCount: () => void;
}

const CounterButton = ({ count, setCount }: CounterButtonProps) => {
  return (
    <button role="button" onClick={() => setCount()}>
      Count - 9
    </button>
  );
};

export default CounterButton;
