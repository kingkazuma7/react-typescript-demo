type ContainerProps = {
  styles: React.CSSProperties
}

export const Container = (props: ContainerProps) => {
  // console.log(props);
  
  return (
    <div style={props.styles}>Container</div>
  )
}
