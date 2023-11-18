import React from 'react';
import { Notif } from './Notification.styled';


export const Notification = ({ message }) => {
  return <Notif>{message}</Notif>;
};