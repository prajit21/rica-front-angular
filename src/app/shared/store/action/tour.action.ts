import { priceFilter } from '../../interface/hotel';

// Tour Filter
export class GetTours {
  static readonly type = '[tour] Get';
  constructor(
    public filter: string[],
    public price: priceFilter,
  ) {}
}
