export interface BookType {
  id?: number;
  img: string;
  title: string;
  author: string;
  area: string;
  description: string;
  link: string;
}

export interface BookAsFavorite {
  id?: number;
  created_at?: string;
  user_id?: string;
  book_id?: number;
}
