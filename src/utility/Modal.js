import React, { useContext, useState } from "react";
import { Context } from "../context/HabitContextFile";

const Modal = ({ setShowModal }) => {
  const { habits, setHabit } = useContext(Context);

  const [data, setData] = useState({
    id: habits.length + 1,
    name: "",
    repeat: "",
    goal: "",
    time: "",
    start: "",
    isArchive: "false",
  });

  function changeHandler(e) {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }

  function addData(e) {
    e.preventDefault();
    setHabit([...habits, data]);
    setShowModal(false);
  }

  return (
    <div className="">
      <div className="absolute top-[20vh] left-[40%] text-white z-50 bg-slate-800">
        {/* main modal absolute */}
        <div className="">
          {/* content */}
          <div>
            <h1 className="text-white">New Habit</h1>
          </div>
          <div>
            <div>
              <input
                placeholder="Enter Habit Name"
                name="name"
                onChange={changeHandler}
                className="text-black"
              />
            </div>
            <div className="">
              <p>REPEAT</p>
              <select
                className="text-black"
                name="repeat"
                onChange={changeHandler}
              >
                <option value="daily">Daily</option>
                <option value="week">Once A Week</option>
                <option value="month">Once A Month</option>
              </select>
            </div>
            <div>
              <p>GOAL</p>
              <select
                name="goal"
                onChange={changeHandler}
                className="text-black"
              >
                <option value="one">1 Times</option>
                <option value="two">2 Times</option>
                <option value="three">3 Times</option>
              </select>
            </div>
            <div>
              <p>Time Of Day</p>
              <select className="text-black" onChange={changeHandler}>
                <option value="any">Any</option>
                <option value="noon">Noon</option>
                <option value="night">Night</option>
              </select>
            </div>
            <div>
              <p>Start Date</p>
              <select className="text-black" onChange={changeHandler}>
                <option value="today">Today</option>
                <option value="tomorrow">Tomorrow</option>
                <option value="dayafter">Day after Tomorrow</option>
              </select>
            </div>
          </div>
          <div>
            <button onClick={addData}>Create</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.8)]">
        {/* overlay fixed*/}
      </div>
    </div>
  );
};

export default Modal;
