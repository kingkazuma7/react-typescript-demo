type StatusProps = {
  status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
  console.log(props);
  
  let message;
  if (props.status === 'loading') {
    message = 'ローディング'
  } else if (props.status === 'success') {
    message = '読み込み完了'
  } else if (props.status === 'error') {
    message = 'エラー'
  }

  return (
    <div>
      <h2>Status - {message}</h2>
      {/* <h3>ローディング..</h3>
      <h3>読み込み完了</h3>
      <h3>エラー</h3> */}
    </div>
  )
}
