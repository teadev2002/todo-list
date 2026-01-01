import { useState, useCallback} from "react";

export function useFetchMutate() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

const request = useCallback(async <T>(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
    body?: unknown
  ): Promise<T | null> => {
    try {
      setLoading(true);
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: body ? JSON.stringify(body) : undefined,
      });
      if (!res.ok) throw new Error("Failed");
      return (await res.json()) as T;
    } catch (err) {
      setError((err as Error).message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { request, loading, error };
}
