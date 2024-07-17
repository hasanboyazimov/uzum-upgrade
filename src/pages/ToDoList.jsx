// custom hooks
import { useCollection } from "../hooks/useCollection";

// form
import { Form, useActionData } from "react-router-dom";

// components
import { FormInput } from "../components";
import { useEffect } from "react";

// firebase
import {
  collection,
  addDoc,
  serverTimestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";
import { useGlobalContext } from "../hooks/useGlobalContext";

// action
export const action = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");

  if (!title) {
    return { error: "Title is required." };
  }

  return { title };
};

function ToDoList() {
  const { user } = useGlobalContext();
  const { data } = useCollection("todos", ["createdAt", "desc"]);
  const dataTodo = useActionData();

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "todos", id));
      toast.success("Deleted");
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (dataTodo && !dataTodo.error) {
      const newTodo = {
        ...dataTodo,
        completed: false,
        createdAt: serverTimestamp(),
        uid: user.uid, // Adding user.uid to associate todo with the user
      };

      addDoc(collection(db, "todos"), newTodo)
        .then(() => {
          toast.success("New Todo Added");
        })
        .catch((error) => {
          toast.error("Failed to add new Todo: " + error.message);
        });
    } else if (dataTodo && dataTodo.error) {
      toast.error(dataTodo.error);
    }
  }, [dataTodo, user.uid]);

  return (
    <div className="container max-w-[1280px] mx-auto p-4">
      <div className="flex flex-col items-center gap-5">
        {data && data.length > 0 ? (
          data.map((todo) => (
            <div
              key={todo.id}
              className="flex border w-[500px] p-2 rounded items-center justify-between"
            >
              <h3 className="text-2xl truncate">{todo.title}</h3>
              <button
                onClick={() => handleDelete(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No todos found.</p>
        )}
      </div>
      <div>
        <Form method="post" className="flex flex-col gap-5">
          <FormInput name="title" label="Title" type="text" />
          <button type="submit" className="btn btn-secondary">
            ADD TODO
          </button>
        </Form>
      </div>
    </div>
  );
}

export default ToDoList;
