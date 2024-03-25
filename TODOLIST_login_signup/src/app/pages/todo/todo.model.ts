

export interface Todo {
    id?: number; 
    name: string;
    description: string;
    startTime: string; 
    endTime: string;
    priority: 'low' | 'medium' | 'high'; 
  }
  