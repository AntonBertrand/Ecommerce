export interface Iproduct {
    _id: string,
    title: string,
    desc: string,
    features: string,
    image: string,
    image3: string,
    image4: string,
    price: number,
    rating: number,
    amount: number,
  };

  export interface Istate {
    products: Iproduct[],
    cartProducts: Iproduct[],
    cartTotal: number,
    cartQuantity: number,
    status: string,
    isLoading: boolean
  }

  export interface Iorder {
    _id: string,
    paymentStatus: string,
    itemCount: number,
    value: number
  }