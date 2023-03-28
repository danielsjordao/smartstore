export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Phone 13 Pro Max',
      price: 999,
      description: 'A large phone with one of the best screens'
    },
    {
      id: 2,
      name: 'Phone 12',
      price: 699,
      description: 'A great phone with one of the best cameras'
    },
    {
      id: 3,
      name: 'Samsung Galaxy',
      price: 399,
      description: 'A great phone with one of the best cameras'
    }
  ];