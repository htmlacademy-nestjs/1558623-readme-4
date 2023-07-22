export interface ICRUDRepository<E, I, R> {
  findById(id: I): Promise<R | null>;

  create(item: E): Promise<R | void>;

  update(id: I, item: E): Promise<R | void>;

  destroy(id: I): Promise<void>;
}
