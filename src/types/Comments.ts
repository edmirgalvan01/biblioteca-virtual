export interface CommentType {
  id?: number;
  book_id: number;
  user_id: string;
  content: string;
}

export interface LikeType {
  id?: number;
  user_id: string;
  comment_id: number;
}
