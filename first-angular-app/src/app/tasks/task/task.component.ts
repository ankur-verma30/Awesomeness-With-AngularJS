import { Component,Input } from '@angular/core';

interface Task{
  id:string;
  userId:string;
  title:string;
  summary:string;
  dueDate:string;
}

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required:true}) task!:Task // (!) we should use exclamation sign because we know we will always get a task
}
