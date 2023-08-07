export interface IEntity<T, E> {
  toObject(): T;
  fillEntity(entity: E): void;
}
