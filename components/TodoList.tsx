import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { InterfaceTask } from "@/types/tasks"
import React from "react"
import TaskRow from "./TaskRow"
  
  interface TodoListProps {
    tasks: InterfaceTask[]
  }

const TodoList: React.FC<TodoListProps> = ({tasks}) => {
  return (
<Table>
  <TableCaption>A list of your recent invoices. Time (17:00)</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">#</TableHead>
      <TableHead>Task</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {
      tasks.map((task) => <TaskRow key={task.id} task={task}></TaskRow> )
    }
  
  </TableBody>
</Table>
  )
}

export default TodoList