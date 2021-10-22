interface TodoList {
  id?: string;
  title?: string;
  completed?: boolean;
}

export interface TodoInfo {
  newTodo: string;
  todos: TodoList[];
}
