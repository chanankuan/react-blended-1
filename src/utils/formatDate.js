import { formatDistanceToNow, format } from 'date-fns';

export const formatDateToNow = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const formateDate = date => {
  return format(new Date(date), 'Pp');
};
