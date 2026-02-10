import { type ReactNode, useState } from 'react';

interface AlertProps {
  type?: 'info' | 'warning' | 'error';
  heading?: string;
  children?: ReactNode;
  closable?: boolean;
  onClose?: () => void;
}

export function Alert({ type = 'info', heading, children, closable = false, onClose }: AlertProps) {
  const [visible, setVisible] = useState(true);

  function closeHandler() {
    setVisible(false);
    if (typeof onClose === 'function') onClose();
  }

  if (!visible) return null;

  const icon = type === 'warning' ? '⚠️' : type === 'error' ? '❌' : 'ℹ️';

  return (
    <div role="alert" className={`alert alert-${type}`}>
      <div className="alert-header">
        <span className="alert-icon">{icon}</span>
        {heading && <strong className="alert-heading">{heading}</strong>}
        {closable && (
          <button aria-label="Close alert" className="alert-close" onClick={closeHandler}>
            ✖
          </button>
        )}
      </div>
      <div className="alert-body">{children}</div>
    </div>
  );
}
