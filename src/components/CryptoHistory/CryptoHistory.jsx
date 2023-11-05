import { formateDate } from 'utils/formatDate';
import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';

export const CryptoHistory = ({ cryptohistory }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {cryptohistory.map((item, index) => {
          return (
            <Tr key={item.id}>
              <Td>{index + 1}</Td>
              <Td>{item.price}</Td>
              <Td>{item.amount}</Td>
              <Td>{formateDate(item.date)}</Td>
            </Tr>
          );
        })}
      </tbody>
    </BaseTable>
  );
};
