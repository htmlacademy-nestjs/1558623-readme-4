export interface ICommentCreate {
  id?: number;
  commentText: string;
  authorId: string;
  postId: number;
}
