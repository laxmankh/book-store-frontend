import React from "react";

const Profile = () => {
  const userData = localStorage.getItem("users");
  //   const userProfile = JSON.parse(userData);
  //   console.log("name:", userProfile);
  return (
    <div className=" dark:bg-slate-900 dark:text-white">
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      ></button> */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Here {userData}</p>
        </div>
      </dialog>
    </div>
  );
};

export default Profile;
