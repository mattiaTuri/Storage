export interface BooksProps {
    id: string;
    title: string;
    author: string;
    rating:number | null;
    genre: string;
    isRead:boolean;
  }