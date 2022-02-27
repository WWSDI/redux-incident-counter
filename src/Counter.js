import { useSelector, useDispatch, bindActionCreators } from 'react-redux';
import { increment, decrement, set } from './actions';
import { SetCounter } from './SetCounter';

export const Counter = () => {
  const incident = 'Incident';
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const actions = bindActionCreators({ increment, decrement, set }, dispatch);

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => actions.decrement()}>Decrement</button>
        <button onClick={() => actions.set(0)}>Reset</button>
        <button onClick={() => actions.increment()}>Increment</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
