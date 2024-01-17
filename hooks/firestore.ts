import { useEffect, useState } from "react";

import { WorkItemType } from "../components/Timer";
import { addDoc, collection, getDocs, onSnapshot } from "@firebase/firestore";
import { auth, db } from "../config/firebase";

export const useCreateCollection = () => {
  const createCollection = async (name: string) => {
    try {
      const response = await addDoc(collection(db, name), {});
      console.log("🚀 *** createCollection *** response:", response);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    createCollection,
  };
};

export const useGetUserData = (uid: string | undefined) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!uid) return;

    const unsubscribe = onSnapshot(collection(db, uid), (snapshot) => {
      const result = snapshot.docChanges().map((change) => {
        return {
          ...change.doc.data(),
        };
      });

      setData(result);
    });

    return function () {
      console.log(unsubscribe);
    };
  }, [uid]);

  return {
    data,
  };
};

export const useGetData = () => {
  const [data, setData] = useState<{ id: string }[] | null>(null);

  useEffect(() => {
    // Check if the user is logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(
        "🚀 *** file: firestore.ts:11 *** unsubscribe *** user:",
        user
      );
      if (user) {
        // User is logged in, fetch data
        load(user.uid);
      } else {
        // User is not logged in, handle accordingly
        console.log("User not logged in");
      }
    });

    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe();
    };

    async function load(id: string) {
      try {
        const response = await getDocs(collection(db, id));
        const data = response?.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log("RESPONSE", response);
        console.log("*** DOCS", response.docs);
        if (data) {
          setData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }, []);

  return { data };
};

export const useAddData = () => {
  //   const [data, setData] = useState();

  const addDbDoc = async (data: WorkItemType) => {
    const user = auth.currentUser;
    if (user) {
      await addDoc(collection(db, user.uid), data);
    }
  };

  return {
    addDbDoc,
  };
};
