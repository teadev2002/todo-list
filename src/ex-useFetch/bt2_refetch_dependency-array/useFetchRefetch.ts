import axios from "axios";
import { useState, useEffect } from "react";
interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetchV2<T>(
    url: string,
    dependencies: unknown[] = []
): UseFetchResult<T> & { refetch: () => void } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refetchIndex, setRefetchIndex] = useState(0);
    const refetch = () => setRefetchIndex((prev) => prev + 1);
    useEffect(() => {
    const controller = new AbortController();   
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get<T>(url, { signal: controller.signal });
        setData(res.data);
        setError(null);
        } catch (err: unknown) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message || "Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => controller.abort();
  }, [url, ...dependencies, refetchIndex]);
    return { data, loading, error, refetch };
}