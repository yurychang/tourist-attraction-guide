export const enum TourismType {
  attraction,
  hotel,
  food,
  activity,
}

export const TourismTypeEnLabel = {
  [TourismType.attraction]: 'attraction',
  [TourismType.hotel]: 'hotel',
  [TourismType.food]: 'food',
  [TourismType.activity]: 'activity',
};

export const TourismTypeCnLabel = {
  [TourismType.attraction]: '景點',
  [TourismType.hotel]: '旅宿',
  [TourismType.food]: '美食',
  [TourismType.activity]: '活動',
};
