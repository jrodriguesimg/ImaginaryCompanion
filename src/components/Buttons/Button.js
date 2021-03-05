import './Button.css';

const Button = (props) => {
  const className = props.className ? `Button ${props.className}` : 'Button'


  return(
    <button className={className}>{props.text}</button>
  )
}

export default Button;