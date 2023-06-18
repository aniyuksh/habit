import React, { useContext, useState } from "react";
import { Context } from "../context/HabitContextFile";

const EditModal = ({ editObj, setEditObj, setEditModal }) => {
  const { habits, setHabit } = useContext(Context);

  const [data, setData] = useState({
    id: editObj.id,
    name: editObj.name,
    repeat: editObj.repeat,
    goal: editObj.goal,
    time: editObj.time,
    start: editObj.start,
    isArchive: editObj.isArchive,
  });

  function changeHandler(e) {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }

  function onSubmit(e) {
    e.preventDefault();
    setHabit(habits.map((habit) => (habit.id === editObj.id ? data : habit)));
    setEditModal(false);
  }

  return (
    <div className="">
      <div className="absolute top-[20vh] left-[40%] text-white z-50 bg-slate-800">
        {/* main modal absolute */}
        <div className="">
          {/* content */}
          <div>
            <h1 className="text-white">Edit Habit</h1>
          </div>
          <div>
            <div className="text-black">
              <input
                name="name"
                placeholder="Enter Habit Name"
                defaultValue={editObj.name}
                onChange={changeHandler}
              />
            </div>
            <div className="">
              <p>REPEAT</p>
              <select
                className="text-black"
                onChange={changeHandler}
                name="repeat"
              >
                <option value="daily" selected={editObj.repeat === "daily"}>
                  Daily
                </option>
                <option value="week" selected={editObj.repeat === "week"}>
                  Once A Week
                </option>
                <option value="month" selected={editObj.repeat === "month"}>
                  Once A Month
                </option>
              </select>
            </div>
            <div>
              <p>GOAL</p>
              <select
                className="text-black"
                onChange={changeHandler}
                name="goal"
              >
                <option value="one" selected={editObj.goal === "one"}>
                  1 Times
                </option>
                <option value="two" selected={editObj.goal === "two"}>
                  2 Times
                </option>
                <option value="three" selected={editObj.goal === "three"}>
                  3 Times
                </option>
              </select>
            </div>
            <div>
              <p>Time Of Day</p>
              <select
                className="text-black"
                onChange={changeHandler}
                name="time"
              >
                <option value="any" selected={editObj.time === "any"}>
                  Any
                </option>
                <option value="noon" selected={editObj.time === "noon"}>
                  Noon
                </option>
                <option value="night" selected={editObj.time === "night"}>
                  Night
                </option>
              </select>
            </div>
            <div>
              <p>Start Date</p>
              <select
                className="text-black"
                onChange={changeHandler}
                name="start"
              >
                <option value="today" selected={editObj.start === "today"}>
                  Today
                </option>
                <option
                  value="tomorrow"
                  selected={editObj.start === "tomorrow"}
                >
                  Tomorrow
                </option>
                <option
                  value="dayafter"
                  selected={editObj.start === "dayafter"}
                >
                  Day after Tomorrow
                </option>
              </select>
            </div>
          </div>
          <div>
            <button onClick={onSubmit}>Edit</button>
            <button onClick={() => [setEditObj({}), setEditModal(false)]}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.8)]">
        {/* overlay fixed*/}
      </div>
    </div>
  );
};

export default EditModal;
