
export const WrapperSlider = ({children, ...props}) => {
  return (
    <div className={props.className}>
      {children}
    </div>
  )
}
