export const deliveryOptions = [
  {
    id: '1',
    deliveryDays: 7,
    princeCents: 0
  },
  {
    id: '2',
    deliveryDays: 3,
    princeCents: 499
  },
  {
    id: '3',
    deliveryDays: 1,
    princeCents: 999
  }
];

export function getDeliveryOption(deliveryOptionId) {
  let matchingDeliveryOption;
  deliveryOptions.forEach(deliveryOption => {
    if (deliveryOption.id === deliveryOptionId) {
      matchingDeliveryOption = deliveryOption;
    }
  });
  return matchingDeliveryOption || deliveryOptions[0];
}