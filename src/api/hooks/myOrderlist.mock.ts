export interface Order {
  userId: number;
  optionId: number;
  quantity: number;
}

export const mockOrders: Order[] = Array.from({ length: 13 }, (_, index) => ({
  userId: index + 1,
  optionId: (index % 5) + 1,
  quantity: Math.floor(Math.random() * 5) + 1,
}));

export interface OrderListResponse {
  resultData: Order[];
  size: number;
  page: number;
  pages: number;
  hasNext: boolean;
  total: number;
}

export const getMockOrderList = (page: number, size: number): OrderListResponse => {
  const paginatedOrders = mockOrders.slice(page * size, (page + 1) * size);
  const totalPages = Math.ceil(mockOrders.length / size);

  return {
    resultData: paginatedOrders,
    size,
    page,
    pages: totalPages,
    hasNext: page < totalPages - 1,
    total: mockOrders.length,
  };
};
