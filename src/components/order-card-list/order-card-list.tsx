import React, { FC } from 'react';
import { OrderCard } from './order-card';
import styles from './order-card-list.module.css';
import { TOrder } from '../../services/types/data/index';

interface IOrderCardList {
  orders: TOrder[] | [];
  statusBar: boolean;
}

export const OrderCardList: FC<IOrderCardList> = ({ orders, statusBar }) => {
  return (
    <ul className={styles.list}>
      {orders.map((order, index) => (
        <OrderCard orderData={order} key={index} statusBar={statusBar} />
      ))}
    </ul>
  );
};
