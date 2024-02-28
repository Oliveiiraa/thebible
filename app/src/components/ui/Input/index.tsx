const Input = ({ className, ...props }: { className?: string; [x: string]: any }) => {
  return <input className={`w-full py-2 pl-4 pr-12 rounded-full ${className}`} {...props} />
}

export default Input
