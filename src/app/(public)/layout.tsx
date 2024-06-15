import Navbar from '@/components/Navbar/Navbar'
import PublicSection from '@/ui/PublicSection'
import React from 'react'

export default function layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <Navbar />
      <PublicSection>{children}</PublicSection>
    </main>
  )
}
