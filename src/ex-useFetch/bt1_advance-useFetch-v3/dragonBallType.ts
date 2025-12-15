/**
 * Interface đại diện cho một nhân vật (item) trong mảng.
 */
export interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: 'Saiyan' | 'Human' | 'Namekian' | 'Frieza Race' | 'Android' | string;
  gender: 'Male' | 'Female' | string;
  description: string;
  image: string;
  affiliation: 'Z Fighter' | 'Army of Frieza' | 'Freelancer' | string;
  deletedAt: string | null;
}

/**
 * Interface đại diện cho thông tin metadata của phân trang.
 */
export interface Metadata {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

/**
 * Interface đại diện cho các đường dẫn phân trang.
 */
export interface Links {
  first: string;
  previous: string | ''; // Hoặc có thể là string | null, tùy thuộc vào API
  next: string | '';    // Hoặc có thể là string | null
  last: string;
}

/**
 * Interface bao trùm toàn bộ Response từ API.
 */
export interface ApiResponse {
  items: Character[];
  meta: Metadata;
  links: Links;
}

// Ví dụ sử dụng:
// const data: ApiResponse = responseData;