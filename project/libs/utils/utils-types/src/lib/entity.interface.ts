export interface IEntity<E, I> {
  toObject(): E;
  fillEntity(entity: I): void;
}
