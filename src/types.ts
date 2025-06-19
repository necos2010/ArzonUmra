export type Tour = {
  id: number;
  airlineLogos: string[];
  overlayImage: string;
  classType: string;
  additionalInfo?: string[];
  price: number; 
  hotelDistance?: string;
};