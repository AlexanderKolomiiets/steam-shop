export interface ProductsDetails {
  imgUrl: string;
  title: string;
  developer: {
    link: string;
    name: string;
  };
  publisher: {
    link: string;
    name: string;
  };
  released: string;
  description: string;
  price: string;
}
