import "./Comment.css";
import { BiLike, BiPencil, BiTrash } from "react-icons/bi";

export const Comment = () => {
  return (
    <article className="comment">
      <header>
        <div className="comment--user-profile">
          <p>R</p>
        </div>
        <div className="comment--header--info">
          <div className="comment--user-info">
            <p className="comment--user-name">Ralph Edwards</p>
            <p className="comment--date">Mayo 2023</p>
          </div>
          <div className="comment--buttons">
            <BiLike size={25} color="#A9A9A9" />
            <BiPencil size={25} color="#A9A9A9" />
            <BiTrash size={25} color="#A9A9A9" />
          </div>
        </div>
      </header>
      <p className="comment--content">
        Lorem ipsum dolor sit amet consectetur. Adipiscing consectetur non
        elementum risus orci eu sagittis mauris lacinia. Bibendum adipiscing
        urna quis.
      </p>
    </article>
  );
};
