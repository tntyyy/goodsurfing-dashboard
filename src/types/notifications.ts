export enum NotificationTypes {
  NEWS = "Новость",
  REVIEW = "Отзыв",
}

export interface INews {
  title: string;
  date: string;
  description: string;
}

export interface IReview {
  name: string;
  sex: string;
  date: string;
}

export interface INotification {
  id: string;
  type: NotificationTypes;
  content: INews | IReview;
}
