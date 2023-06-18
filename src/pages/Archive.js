import React, { useContext } from "react";
import { Context } from "../context/HabitContextFile";

const Archive = () => {
  const { habits, setHabit } = useContext(Context);
  return (
    <div>
      <div>
        <h1>Archives:</h1>
      </div>
      <div>
        {habits.map((habit) =>
          habit.isArchive === true ? (
            <div>
              <div>
                <h2>{habit.name}</h2>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Archive;
