export interface ShippingAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  shippingAddress: ShippingAddress;
}

export interface OrderItemInput {
  productId: string;
  quantity: number;
  priceAtPurchase: number;
}

export interface CreateOrderPayload {
  userId?: string | null; // Optional for Guest checkout
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  shippingAddress: ShippingAddress;
  totalAmount: number;
  currency: string;
  items: OrderItemInput[];
}