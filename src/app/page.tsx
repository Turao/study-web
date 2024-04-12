// 'use client'

import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

function CommandMenu() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  function registerUser() {
    console.log('registering user')
  }

  function deleteUser() {
    console.log('deleting user')
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Users">
          <CommandItem onSelect={registerUser}>Register User</CommandItem>
          <CommandItem onSelect={deleteUser}>Delete User</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}

function Users() {
  type User = {
    id: string,
    name: string,
    email: string,
    tenancy: string,
  }

  const users: User[] = [
    {
      id: 'id-0000',
      name: 'user-0000',
      email: 'example-0000@domain.com',
      tenancy: 'tenancy/production'
    },
    {
      id: 'id-0001',
      name: 'user-0002',
      email: 'example-0003@domain.com',
      tenancy: 'tenancy/production'
    },
    {
      id: 'id-0004',
      name: 'user-0005',
      email: 'example-0006@domain.com',
      tenancy: 'tenancy/production'
    },
  ]

  function UserCard(user: User) {
    return (
      <Card key={user.id}>
        <CardHeader> {user.email} </CardHeader>
        <CardContent> {user.name} </CardContent>
        <CardFooter> {user.tenancy} </CardFooter>
      </Card>
    )
  }

  return users.map(UserCard)
}

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div>
        <CommandMenu />
      </div> */}
      app
    </div>
  );
}
