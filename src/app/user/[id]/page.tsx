"use client"

import dynamic from 'next/dynamic'


type PageParams = {
  params: {
    id: string
  }
}

export default function Page({ params }: PageParams) {
  const UserInfo = dynamic(() => import('../../../components/user/user-info'), { ssr: false })
  return <UserInfo userId={params.id} />;
}
