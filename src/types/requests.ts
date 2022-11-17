export interface IRequest {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  type: RequestTypes;
}

export enum RequestTypes {
  NEW = "новая",
  ACCEPT = "принята",
  REJECT = "отклонена",
}
