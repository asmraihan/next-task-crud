'use client'

import React from 'react'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { InterfaceTask } from '@/types/tasks'

import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Edit } from "lucide-react"

import { editTodo } from "@/api/api"



interface EditDialogProps {
    task: InterfaceTask
}

const EditDialog: React.FC<EditDialogProps> = ({ task }) => {

    const router = useRouter()
    const [editTaskValue, setEditTaskValue] = useState<string>(task.text)
    const [open, setOpen] = useState(false)

    const handleSubmitEditTodo = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await editTodo({
            id: task.id,
            text: editTaskValue,
        })
        router.refresh()
        setOpen(false)
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className='flex justify-center items-center w-full'>
                <Edit className="text-blue-600 cursor-pointer" size={20}></Edit> {/* FIX HYDRATION */}
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmitEditTodo}>
                    <DialogHeader>
                        <DialogTitle>Edit Task</DialogTitle>
                        <DialogDescription>
                            Make changes
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Task
                            </Label>
                            <Input id="name" value={editTaskValue} autoComplete="off" onChange={e => setEditTaskValue(e.target.value)} className="col-span-3" />
                        </div>
                        {/* <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div> */}
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save task</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default EditDialog