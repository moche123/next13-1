export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-green-800 py-2 pl-2">
      {children}
    </div>
  )
}
