import { memo } from 'react';

type Props = {
  onClick: () => void;
};

// Sử dụng memo để tránh Render lại không cần thiết
export const Reset = memo(({ onClick }: Props) => {
  console.log('render Reset');
  return <button onClick={onClick}>Reset</button>;
});

// Giúp React DevTools hiển thị tên Component rõ ràng thay vì "Anonymous"
Reset.displayName = 'Reset';
