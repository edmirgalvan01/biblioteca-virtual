import { CommentType } from "../../types/Comments";
import { BiLike, BiPencil, BiTrash } from "react-icons/bi";
import { useDateFromString } from "../../hooks/useDateFromString";
import { useGetSession } from "../../hooks/useGetSession";
import { useComment } from "../../hooks/useComment";
import "./Comment.css";

interface Props {
  comment: CommentType;
}

export const Comment = ({ comment }: Props) => {
  const { month, year } = useDateFromString(comment.created_at!);
  const { session } = useGetSession();
  const { removeComment } = useComment();

  const date = `${month} ${year}`;
  const isOwner = session?.data.session?.user.id === comment.user_id;

  const handleClickDelete = () => {
    removeComment(comment.id!);
  };

  return (
    <article className="comment">
      <header>
        <div className="comment--user-profile">
          <p>{comment.user_name[0]}</p>
        </div>
        <div className="comment--header--info">
          <div className="comment--user-info">
            <p className="comment--user-name">{comment.user_name}</p>
            <p className="comment--date">{date}</p>
          </div>
          <div className="comment--buttons">
            <BiLike size={25} color="#A9A9A9" />
            {isOwner ? (
              <>
                <BiPencil
                  size={25}
                  color="#A9A9A9"
                  onClick={handleClickDelete}
                />
                <BiTrash size={25} color="#A9A9A9" />
              </>
            ) : null}
          </div>
        </div>
      </header>
      <p className="comment--content">{comment.content}</p>
    </article>
  );
};
