import { useReducer } from "react"

type CounterState = {
  count: number;
}
type CounterAction = {
  type: string;
  payload: number;
}

const initialState: CounterState = { count: 0 }

function reducer(state: CounterState, action: CounterAction) { // 状態管理
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - action.payload }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const Counter = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      カウント: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>インクリメント10</button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>デクリメント10</button>
    </div>
  )
}