import React, { useContext, useState } from "react";
import { Context } from "../context/HabitContextFile";
import { Link } from "react-router-dom";
import Modal from "../utility/Modal";
import EditModal from "../utility/EditModal";

const Home = () => {
  const { habits, setHabit } = useContext(Context);
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editObj, setEditObj] = useState({});

  function deleteHandler(e, id) {
    e.stopPropagation();
    e.preventDefault();
    setHabit(habits.filter((habit) => habit.id !== id));
  }

  function archiveHandler(e, id) {
    e.stopPropagation();
    e.preventDefault();
    setHabit(
      habits.map((habit) =>
        habit.id === id ? { ...habit, isArchive: true } : habit
      )
    );
  }
  return (
    <div>
      <div className="flex justify-between items-center py-10 px-4 bg-slate-400 h-[8vh] flex-row-reverse">
        <Link to="/archive">
          <button>Go to Archvies</button>
        </Link>
        <div>
          <h1 className="text-3xl font-semibold">Habit Tracker</h1>
        </div>
      </div>

      <div className="h-16 w-16 flex items-center justify-center rounded-full bg-slate-600 text-4xl absolute bottom-10 right-10">
        <button onClick={() => setShowModal(true)}>+</button>
      </div>
      <div className="flex gap-10 p-10 flex-wrap">
        {habits.map((habit) => {
          return habit.isArchive === true ? null : (
            <div
              key={habit.id}
              className="h-[200px] w-[200px] cursor-pointer flex flex-col justify-center items-center rounded-md bg-slate-200 "
              onClick={() => [setEditObj(habit), setEditModal(true)]}
            >
              <p className="text-4xl mb-8">{habit.name}</p>
              {/* <p>{habit.start}</p> */}
              <div className="flex justify-center gap-10">
                <button
                  onClick={(e) => archiveHandler(e, habit.id)}
                  className="justify-self-end rounded-md bg-slate-600 p-2"
                >
                  Archive
                </button>
                <button
                  onClick={(e) => deleteHandler(e, habit.id)}
                  className="justify-self-end rounded-md bg-rose-400 p-2"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
      {editModal && (
        <EditModal
          editObj={editObj}
          setEditObj={setEditObj}
          setEditModal={setEditModal}
        />
      )}
    </div>
  );
};

export default Home;
