
export const Button = ({text, className, ...props}) => {
  return (
    <button className={className} {...props}>
        {text}
    </button>
  )
}
