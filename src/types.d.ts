export type ChangeDateValue = (Date | null) | [Date | null, Date | null];

export interface Booking {
  id: number;
  date: string;
  time: string;
  ci: string;
  name: string;
  username: string;
  phone: string;
  service: string;
  description: string;
  state: string;
}
