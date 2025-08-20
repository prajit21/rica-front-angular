import { Component, input } from '@angular/core';

import { CabDetails } from './cab-details/cab-details';
import { CabListDetails } from './cab-list-details/cab-list-details';
import { FlightListDetails } from './flight-list-details/flight-list-details';
import { GoogleMap } from './google-map/google-map';
import { HotelDetails } from './hotel-details/hotel-details';
import { HotelListDetails } from './hotel-list-details/hotel-list-details';
import { LeafletMap } from './leaflet-map/leaflet-map';
import { RestaurantDetail } from './restaurant-detail/restaurant-detail';
import { TourDetails } from './tour-details/tour-details';
import { TourListDetails } from './tour-list-details/tour-list-details';

@Component({
  selector: 'app-details',
  templateUrl: './details.html',
  styleUrls: ['./details.scss'],
  imports: [
    HotelDetails,
    HotelListDetails,
    GoogleMap,
    LeafletMap,
    TourDetails,
    TourListDetails,
    FlightListDetails,
    CabListDetails,
    CabDetails,
    RestaurantDetail,
  ],
})
export class Details {
  readonly type = input<string>();
  readonly selectedTabValue = input<string>();
  readonly gridType = input<string>();
  readonly responsiveLatestFilter = input<boolean>();
  readonly mapFilter = input<boolean>();
  readonly imageSlider = input<boolean>(false);
  readonly thumbnailImages = input<boolean>(false);
  readonly description = input<boolean>(false);
  readonly thumbnailVideo = input<boolean>(false);
  readonly includeText = input<boolean>(true);
  readonly calender = input<boolean>(true);
  readonly flightClass = input<boolean>(false);
  readonly roundTrip = input<boolean>(false);
  readonly marginClass = input<boolean>(false);
  readonly noSidebar = input<boolean>(false);
}
