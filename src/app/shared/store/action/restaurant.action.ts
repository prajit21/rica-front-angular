import { priceFilter } from '../../interface/hotel';

// Restaurant Filter
export class GetRestaurant {
  static readonly type = '[restaurant] Get';
  constructor(
    public filter: string[],
    public price: priceFilter,
  ) {}
}
