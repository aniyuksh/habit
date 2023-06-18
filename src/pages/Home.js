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
  //   console.log(editObj);

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
      <Link to="/archive">
        <button>Go to Archvies:</button>
      </Link>
      <div>
        <h1>Habit Tracker:</h1>
      </div>
      <div>
        <button onClick={() => setShowModal(true)}>create</button>
      </div>
      <div className="flex gap-2">
        {habits.map((habit) => {
          return habit.isArchive === true ? null : (
            <div
              key={habit.id}
              className="border border-black"
              onClick={() => [setEditObj(habit), setEditModal(true)]}
            >
              <p>{habit.name}</p>
              <p>{habit.start}</p>
              <button onClick={(e) => archiveHandler(e, habit.id)}>
                Archive
              </button>
              <button onClick={(e) => deleteHandler(e, habit.id)}>
                Delete
              </button>
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
