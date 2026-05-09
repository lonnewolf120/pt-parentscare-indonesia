export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`card ${className}`}>{children}</div>
)

export const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <header className="card-header">{children}</header>
)

export const CardTitle = ({ children }: { children: React.ReactNode }) => <h2 className="card-title">{children}</h2>

export const CardDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="card-description">{children}</p>
)

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="card-content">{children}</div>
)

export const Label = ({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) => (
  <label htmlFor={htmlFor}>{children}</label>
)

export const Input = ({ type = "text", ...props }: { type?: string } & React.HTMLAttributes<HTMLInputElement>) => (
  <input type={type} {...props} />
)

export const Textarea = ({ ...props }: React.HTMLAttributes<HTMLTextAreaElement>) => <textarea {...props} />

export const Button = ({
  children,
  variant = "default",
  size = "md",
  ...props
}: {
  children: React.ReactNode
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
} & React.HTMLAttributes<HTMLButtonElement>) => {
  const classNames = `button button-${variant} button-${size} ${props.className}`
  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}
