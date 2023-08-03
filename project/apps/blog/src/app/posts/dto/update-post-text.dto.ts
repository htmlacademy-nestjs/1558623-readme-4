export class UpdatePostTextDto {
  postId!: string;
  title?: string;
  preview?: string;
  textContent?: string;
  tagsList?: string[];
}
