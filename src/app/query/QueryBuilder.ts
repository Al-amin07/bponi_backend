import { Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;
  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }
  search(searchTerm: string[]) {
    let search = '';
    if (this.query?.search && this?.query?.search !== 'All') {
      search = this?.query?.search as string;
    } else {
      search = '';
    }
    this.modelQuery = this.modelQuery.find({
      $or: searchTerm.map((el) => ({
        [el]: { $regex: search, $options: 'i' },
      })),
    });

    return this;
  }
  limit() {
    let limit = 60;
    if (this?.query?.limit) {
      limit = parseInt(this?.query?.limit as string);
    }
    this.modelQuery = this.modelQuery.limit(limit);
    return this;
  }
}

export default QueryBuilder;
