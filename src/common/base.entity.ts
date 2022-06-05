export abstract class BaseEntity {
  static of<T>(type: { new (): T }, params: Partial<T>): T {
    const obj = new type();

    Object.assign(obj, params);

    return obj;
  }
}
