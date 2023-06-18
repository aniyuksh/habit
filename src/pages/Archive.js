import React, { useContext } from "react";
import { Context } from "../context/HabitContextFile";
import { Link } from "react-router-dom";

const Archive = () => {
  const { habits, setHabit } = useContext(Context);

  function archiveHandler(e, id) {
    e.stopPropagation();
    e.preventDefault();
    setHabit(
      habits.map((habit) =>
        habit.id === id ? { ...habit, isArchive: false } : habit
      )
    );
  }
  return (
    <div>
      <div className="flex justify-between items-center py-10 px-4 bg-slate-400 h-[8vh] flex-row-reverse">
        <Link to="/">
          <button>Go to Home</button>
        </Link>
        <div>
          <h1 className="text-3xl font-semibold">Habit Tracker</h1>
        </div>
      </div>
      <div className="flex gap-10 p-10 flex-wrap">
        {habits.map((habit) => {
          return habit.isArchive === false ? null : (
            <div
              key={habit.id}
              className="h-[200px] w-[200px] cursor-pointer flex flex-col justify-center items-center rounded-md bg-slate-200 "
              //   onClick={() => [setEditObj(habit), setEditModal(true)]}
            >
              <p className="text-4xl mb-8">{habit.name}</p>
              {/* <p>{habit.start}</p> */}
              <div className="flex justify-center gap-10">
                <button
                  onClick={(e) => archiveHandler(e, habit.id)}
                  className="justify-self-end rounded-md bg-slate-600 p-2"
                >
                  UnArchive
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Archive;
