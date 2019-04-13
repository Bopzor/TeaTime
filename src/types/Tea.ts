export type Tea = {
  id: string;
  name: string;
  brand: string;
  temperature: number;
  time: {
    minutes: number;
    seconds: number;
  };
  count: number;
}