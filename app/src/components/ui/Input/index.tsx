const Input = ({ className, ...props }: { className?: string; [x: string]: any }) => {
  return <input className={`w-full py-2 pl-4 pr-12 rounded-full border border-gray-300 ${className}`} {...props} />
}

export default Input
