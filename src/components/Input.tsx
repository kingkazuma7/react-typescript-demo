type InputProps = {
  value: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ value, handleChange}: InputProps) => {
  
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  }

  return (
    // onChange プロパティとして渡すか or コンポーネント内で定義するか
    <input type="text" value={value} onChange={handleInputChange} />
  )
}
