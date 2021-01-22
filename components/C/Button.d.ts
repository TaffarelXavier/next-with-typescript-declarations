// This namespace is merged with the API class and allows for consumers, and this file
// to have types which are nested away in their own sections.
declare namespace API {
  /**
   *
   */
  export interface InfoRequest {
    id: string;
  }

  /**
   *
   */
  export interface InfoResponse {
    width: number;
    height: number;
  }

  /**
   *
   */
  export interface Product {
    id: number;
    name: string;
    price: number;
  }

  /**
   *
   */
  export interface Cart {
    products?: Product[];
    shipping_value?: number;
  }
}
