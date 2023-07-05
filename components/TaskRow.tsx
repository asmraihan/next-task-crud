import {
    TableCell,
    TableRow,
  } from "@/components/ui/table"
import { InterfaceTask } from "@/types/tasks"
import React from "react"

interface TaskRowProps {
    task: InterfaceTask
}
const TaskRow: React.FC<TaskRowProps> = ({task}) => {
  return (
    <TableRow key={task.id}>
        <TableCell className="font-medium">{task.id}</TableCell>
        <TableCell>{task.text}</TableCell>
        <TableCell>Credit Card</TableCell>
        <TableCell className="text-right">$250.00</TableCell>
      </TableRow>
  )
}

export default TaskRow