export default function Button({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
  [x: string]: any
}) {
  return (
    <button className={`bg-blue-500 text-white px-4 py-2 rounded-full  ${className}`} {...props}>
      {children}
    </button>
  )
}
