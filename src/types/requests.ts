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

export const mockRequests: IRequest[] = [
  {
    id: "1",
    name: "Станислав Старовойтов",
    location: "Санкт-Петербург, Россия",
    description: "Опушкинская археологическая экспедиция в Крыму: сезон-2020",
    image:
      "https://sun9-62.userapi.com/impg/RJPvSg283U266g37LYdgtXokM0ulnSk9qqkNlQ/4BdAutdP3Ds.jpg?size=640x640&quality=95&sign=22ba78bcf8018712d1bf5bc08b2852dc&type=album",
    type: RequestTypes.ACCEPT,
  },
  {
    id: "2",
    name: "Станислав Старовойтов",
    location: "Санкт-Петербург, Россия",
    description: "Опушкинская археологическая экспедиция в Крыму: сезон-2020",
    image:
      "https://sun9-62.userapi.com/impg/RJPvSg283U266g37LYdgtXokM0ulnSk9qqkNlQ/4BdAutdP3Ds.jpg?size=640x640&quality=95&sign=22ba78bcf8018712d1bf5bc08b2852dc&type=album",
    type: RequestTypes.NEW,
  },
  {
    id: "3",
    name: "Станислав Старовойтов",
    location: "Санкт-Петербург, Россия",
    description: "Опушкинская археологическая экспедиция в Крыму: сезон-2020",
    image:
      "https://sun9-62.userapi.com/impg/RJPvSg283U266g37LYdgtXokM0ulnSk9qqkNlQ/4BdAutdP3Ds.jpg?size=640x640&quality=95&sign=22ba78bcf8018712d1bf5bc08b2852dc&type=album",
    type: RequestTypes.REJECT,
  },
];
