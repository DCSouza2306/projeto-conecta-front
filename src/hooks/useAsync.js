import { useState, useEffect } from "react";

export default function useAsync(handler, loadNow = true) {
 const [data, setData] = useState(null);
 const [error, setError] = useState(null);
 const [loading, setLoading] = useState(loadNow);
 async function task(...args) {
  setLoading(true);
  setData(null);
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
 }

 useEffect(() => {

  if (loadNow) {
   task();
  }
 }, []);

 return { data, error, loading, task };
}
