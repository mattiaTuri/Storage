export interface BoardProps {
  id: string;
  title: string;
  author: string;
  genre: string;
  column: Column;
  row: number;
  reading_year: string;
  rating: number;
}

export type Column = "new" | "active" | "complete";
