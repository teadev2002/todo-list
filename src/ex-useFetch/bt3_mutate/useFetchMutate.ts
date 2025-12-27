import { useState } from "react";
export function useFetchMutate<T>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const request = async (
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
    body?: unknown
  ): Promise<T | null> => {
    try {
      setLoading(true);
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: body ? JSON.stringify(body) : null,
      });
      if (!res.ok) throw new Error("Failed");
      return await res.json();
    } catch (err: unknown) {
      setError((err as Error).message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
}