export interface CommentType {
  id?: number;
  created_at?: string;
  book_id: number;
  user_id: string;
  content: string;
}

export interface LikeType {
  id?: number;
  user_id: string;
  comment_id: number;
}
