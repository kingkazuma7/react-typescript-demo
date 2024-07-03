type ButtonProps = {
  handleClick: (evnet: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = (props: ButtonProps) => {
  
  return (
    <div>
      <button onClick={event => props.handleClick(event, 1)}>ボタン</button>
    </div>
  )
}
