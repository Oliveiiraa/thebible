const Button = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
  [x: string]: any
}) => {
  return (
    <button className={`text-white px-4 py-2 rounded-full  ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
