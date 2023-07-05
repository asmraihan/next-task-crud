import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';

const AddTask = () => {
  return (
    <div className="my-4">
    
      <Button size='default' variant='default' className="w-full">Add New Task <Plus className="ml-2" color="white" size={24} /></Button>
    
    </div>
  )
}

export default AddTask