import { useReducer } from "react"

type CounterState = {
  count: number;
}
// 更新アクション 以下のように分けるリデューサーで推奨される
type UpdateAction = {
  type: 'increment' | 'decrement';
  payload: number;
}
type ResetAction = {
  type: 'reset';
}
type CounterAction = UpdateAction | ResetAction;

const initialState: CounterState = { count: 0 }

function reducer(state: CounterState, action: CounterAction) { // 状態管理
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - action.payload }
    case 'reset':
      return initialState
    default:
      return state
  }
}

export const Counter = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      カウント: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>インクリメント10</button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>デクリメント10</button>
      <button onClick={() => dispatch({ type: 'reset' })}>リセット</button>
    </div>
  )
}