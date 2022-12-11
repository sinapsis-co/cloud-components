import { OrderItem } from 'services/order/entities/order-item';
import { Order } from '../entities';
import { OrderGraph } from '../entities/order-graph';

const getDates = (startDate: Date, endDate: Date, interval: number): string[] => {
  const duration = endDate.getTime() - startDate.getTime();
  const steps = duration / interval;
  return Array.from({ length: steps + 1 }, (_v, i) =>
    new Date(startDate.valueOf() + interval * i).toLocaleDateString('en-US')
  );
};

const graphTransaction = (items: Order[], from: string): OrderGraph => {
  const dayInterval = 1000 * 60 * 60 * 24; // 1 Days
  const days = getDates(new Date(from), new Date(), dayInterval);
  const skills: Record<string, Record<string, number>> = days.reduce((a, v) => ({ ...a, [v]: {} }), {});

  items.forEach((item) => {
    const dateBuy = new Date(item.createdAt).toLocaleDateString('en-US');
    if (item.orderType === 'INCOME') {
      ((item.orderItem as OrderItem[]) || []).forEach((orderItem) => {
        if (!orderItem?.identifier?.skillId) return;
        skills[dateBuy] = {
          ...skills[dateBuy],
          [orderItem.name]: (skills?.[dateBuy]?.[orderItem.name] || 0) + (item.partOfSeller || 0),
        };
      });
    }

    if (item.orderType === 'WITHDRAWAL' && item?.orderAmount) {
      skills[dateBuy] = {
        ...skills[dateBuy],
        total: (skills?.[dateBuy]?.total || 0) + Math.abs(item.orderAmount || 0),
      };
    }
  });

  return days
    .map((day) => ({
      date: day,
      ...skills[day],
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export { graphTransaction };
