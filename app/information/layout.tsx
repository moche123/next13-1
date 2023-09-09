export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="py-2 pl-2">
      {children}
    </div>
  )
}
