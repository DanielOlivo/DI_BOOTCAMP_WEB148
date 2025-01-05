import { ReactNode, useState } from "react";
import { Todo } from "./Todo";
import List from "./List";
import AddField from "./AddField";

const init: Todo[] = [
  { id: 1, text: "Buy groceries" },
  { id: 2, text: "Complete project report" },
  { id: 3, text: "Call the dentist for an appointment" },
  { id: 4, text: "Schedule a team meeting" },
  { id: 5, text: "Fix the broken chair" },
  { id: 6, text: "Read a chapter of the new book" },
  { id: 7, text: "Go for a morning run" },
  { id: 8, text: "Water the plants" },
  { id: 9, text: "Reply to pending emails" },
  { id: 10, text: "Organize the workspace" },
  { id: 11, text: "Plan a weekend trip" },
  { id: 12, text: "Prepare a presentation for Monday" },
  { id: 13, text: "Learn a new recipe" },
  { id: 14, text: "Clean the kitchen" },
  { id: 15, text: "Watch a documentary" },
  { id: 16, text: "Backup important files" },
  { id: 17, text: "Check the car's oil level" },
  { id: 18, text: "Practice coding challenges" },
  { id: 19, text: "Pay electricity bill" },
  { id: 20, text: "Write a blog post" },
];

const TodoApp = (): ReactNode => {

    const [todos, setTodos] = useState<Todo[]>(init)

    const itemComponent = ({id, text}: Todo): ReactNode => (
        <div key={id}>
            <p>{text}</p>
        </div>
    )

    const addFn = (todo: Todo): void => {
        setTodos([...todos, todo]);
    }

    return (
        <div>
            <AddField addFn={(todo: Todo) => addFn(todo)} />
            <List items={todos} renderItem={itemComponent} />
        </div>
    )
}

export default TodoApp;