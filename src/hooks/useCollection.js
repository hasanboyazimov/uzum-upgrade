//firebase
import { db } from "../firebase/firebaseConfig";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

//react imports
import { useEffect, useState } from "react";

export const useCollection = (collectionName, orderName) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const q = query(collection(db, collectionName), orderBy(...orderName));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todos = [];
      querySnapshot.docs.forEach((doc) => {
        todos.push({ id: doc.id, ...doc.data() });
      });
      setData(todos);
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, [collectionName, orderName]);

  return { data };
};
