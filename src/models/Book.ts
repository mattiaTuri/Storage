export interface BooksProps {
    id: string;
    title: string;
    author: string;
    // editor: string;
    rating:number | null;
    genre: string;
    // pages: number;
    isRead:boolean;
  }