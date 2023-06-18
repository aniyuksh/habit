import { createContext, useState } from "react";

export const Context = createContext();

export function HabitContext({ children }) {
  const [habits, setHabit] = useState([
    {
      id: 1,
      name: "Sleep",
      repeat: "daily",
      goal: "one",
      time: "noon",
      start: "today",
      isArchive: false,
    },
    {
      id: 2,
      name: "Eat",
      repeat: "daily",
      goal: "three",
      time: "any",
      start: "today",
      isArchive: false,
    },
  ]);

  return (
    <Context.Provider value={{ habits, setHabit }}>{children}</Context.Provider>
  );
}
