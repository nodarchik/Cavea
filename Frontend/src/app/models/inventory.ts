// Define the Inventory interface
export interface Inventory  {
  id?: number; // Optional property id of type number
  name: string; // Property name of type string
  location: string; // Property location of type string
  price: number | null; // Property price of type number or null
}
