type GreetProps = { // string, number, boolean
  name: string,
  age?: number,
  isLoggedIn: boolean,
}


export const Greet = (props: GreetProps) => {
  const { age = 0 } = props

  return (
    <div>
      {
        props.isLoggedIn ? 
        `Hello! ${props.name}, age ${props.age}` : 
        'Welcome, Guest'
      }
    </div>
  )
}