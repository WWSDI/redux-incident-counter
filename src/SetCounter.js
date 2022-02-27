import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { set } from './actions';

export const SetCounter = () => {
  const [value, setValue] = useState(999);
  const dispatch = useDispatch();

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(value));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
