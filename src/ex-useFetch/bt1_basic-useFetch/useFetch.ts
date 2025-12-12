import { useState, useEffect } from "react";

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T>(url: string): UseFetchResult<T>  => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error("Network error");
        const json = await res.json();
        setData(json);
        setError(null);
      } catch (err : unknown) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message || "Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort(); // cleanup khi component unmount
  }, [url]);

  return { data, loading, error };
}
export default useFetch;