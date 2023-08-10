export interface IEntity<E, D> {
  toObject(): E;

  fillEntity(dto: D): void;
}
