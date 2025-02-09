import React from 'react';

const COLOR_CLASSES = {
  primary: 'bg-primary',
  'primary-disabled': 'bg-primary-disabled',
  secondary: 'bg-secondary',
  'secondary-disabled': 'bg-secondary-disabled',
  success: 'bg-success',
  'success-disabled': 'bg-success-disabled',
  warning: 'bg-warning',
  'warning-disabled': 'bg-warning-disabled',
  danger: 'bg-danger',
  'danger-disabled': 'bg-danger-disabled',
  divider: 'bg-divider',
};

const TEXT_COLOR_CLASSES = {
  'text-title': 'text-text-title border-text-title',
  'text-body': 'text-text-body border-text-body',
  'text-caption': 'text-text-caption border-text-caption',
  'text-disabled': 'text-text-disabled border-text-disabled',
};

export function ColorTokens() {
  return (
    <section className="rounded p-6 dark:bg-slate-900">
      <h2 className="mb-2 text-2xl font-extrabold text-text-title">
        Basic Colors
      </h2>
      <div className="grid grid-cols-6 gap-2">
        {Object.entries(COLOR_CLASSES).map(([key, className]) => (
          <div
            className={`flex h-16 items-center justify-center rounded text-sm text-black ${className} `}
            key={key}
          >
            {key}
          </div>
        ))}
      </div>

      <h2 className="mb-2 mt-10 text-2xl font-extrabold text-text-title">
        Text Colors
      </h2>
      <div className="grid grid-cols-6 gap-2">
        {Object.entries(TEXT_COLOR_CLASSES).map(([key, className]) => (
          <div
            className={`flex h-16 items-center justify-center rounded border-2 text-sm font-bold ${className} `}
            key={key}
          >
            {key}
          </div>
        ))}
      </div>
    </section>
  );
}
