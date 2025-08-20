import { priceFilter } from '../../interface/hotel';

// Flight Filter
export class GetFlights {
  static readonly type = '[flight] Get';
  constructor(
    public filter: string[],
    public price: priceFilter,
  ) {}
}
