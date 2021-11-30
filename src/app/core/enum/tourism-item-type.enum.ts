export const enum TourismType {
  food,
  attraction,
  activity,
  hotel,
}

export const TourismTypeEnLabel = {
  [TourismType.food]: 'food',
  [TourismType.attraction]: 'attraction',
  [TourismType.hotel]: 'hotel',
  [TourismType.activity]: 'activity',
};

export const TourismTypeCnLabel = {
  [TourismType.food]: '美食',
  [TourismType.attraction]: '景點',
  [TourismType.hotel]: '旅宿',
  [TourismType.activity]: '活動',
};
