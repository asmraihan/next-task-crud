'use client'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button'
import { Plus } from 'lucide-react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { addTodo } from '@/api/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

interface ModalProps {
    children: React.ReactNode
}


const Modal: React.FC<ModalProps> = ({ children }) => {
    const router = useRouter()
    const [newTaskValue, setNewTaskValue] = useState<string>('')

    const handleSubmitNewTodo = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await addTodo({
            id: uuidv4(),
            text: newTaskValue,
        })
        setNewTaskValue('')
        router.refresh()
    }

    return (
        <Dialog>
            <DialogTrigger className='flex justify-center items-center w-full'>
                <Button size='default' variant='default' className='w-full'>Add New Task <Plus className="ml-2" color="white" size={24} /></Button> {/* FIX HYDRATION */}
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
               <form onSubmit={handleSubmitNewTodo}>
               <DialogHeader>
                    <DialogTitle>Add New Task</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Task
                        </Label>
                        <Input id="name" value={newTaskValue} onChange={e => setNewTaskValue(e.target.value)} className="col-span-3" />
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

export default Modal