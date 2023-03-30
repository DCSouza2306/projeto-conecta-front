import { useState, useEffect } from "react";

export default function useAsync(handler, isLoading = true) {
 const [data, setData] = useState(null);
 const [error, setError] = useState(null);
 const [loading, setLoading] = useState(isLoading);

 const task = async (...args) => {
  setLoading(true);
  try {
   const data = await handler(...args);
   setData(data);
   setLoading(false);
   return data;
  } catch (err) {
   setError(err);
   setLoading(false);
   throw err;
  }
 };

 useEffect(() => {
  if (isLoading) {
   task();
  }
 }, []);

 return { data, error, loading, task };
}
