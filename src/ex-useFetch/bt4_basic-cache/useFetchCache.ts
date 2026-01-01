import { useEffect, useState } from "react";

const cache = new Map<string, unknown>();
const listeners = new Set<() => void>();

export function invalidateCache(key: string, nextData?: unknown) {
  if (nextData !== undefined) {
    cache.set(key, nextData);
  } else {
    cache.delete(key);
  }
  
}

export function useFetchCache<T>(url: string) {
   const [data, setData] = useState<T>(() => {
    return cache.has(url) ? (cache.get(url) as T) : ([] as T);
  });
  useEffect(() => {
    function refetch() {
      if (cache.has(url)) return;

      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          cache.set(url, json);
          setData(json);
        });
    }

    listeners.add(refetch);
    refetch(); // fetch lần đầu nếu chưa có cache

    return () => {
      listeners.delete(refetch);
    };
  }, [url]);

  return { data };
}
