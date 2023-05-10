export interface CommentType {
  id?: number;
  book_id: number;
  user_id: string;
  content: string;
  likes: number;
  unlikes: number;
}
