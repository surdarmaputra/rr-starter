import React from 'react';

const COLOR_STATE_CLASSES = {
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
};

const COLOR_ORNAMENT_CLASSES = {
  divider: 'bg-divider',
  accent: 'bg-accent text-letter-body',
  backdrop: 'bg-backdrop text-letter-inverted',
};

const TEXT_COLOR_CLASSES = {
  'letter-title': 'text-letter-title border-letter-title',
  'letter-body': 'text-letter-body border-letter-body',
  'letter-caption': 'text-letter-caption border-letter-caption',
  'letter-disabled': 'text-letter-disabled border-letter-disabled',
  'letter-inverted': 'text-letter-inverted bg-backdrop border-backdrop',
};

export function ColorTokens() {
  return (
    <section className="rounded p-6 dark:bg-slate-900">
      <h2 className="mb-2 text-2xl font-extrabold text-letter-title">
        Basic Colors
      </h2>
      <h3 className="mb-2 text-lg font-semibold text-letter-title">
        State Colors
      </h3>
      <div className="mb-6 grid grid-cols-6 gap-2">
        {Object.entries(COLOR_STATE_CLASSES).map(([key, className]) => (
          <div
            className={`flex h-16 items-center justify-center rounded text-sm text-black ${className} `}
            key={key}
          >
            {key}
          </div>
        ))}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-letter-title">
        Ornament Colors
      </h3>
      <div className="grid grid-cols-6 gap-2">
        {Object.entries(COLOR_ORNAMENT_CLASSES).map(([key, className]) => (
          <div
            className={`flex h-16 items-center justify-center rounded text-sm text-black ${className} `}
            key={key}
          >
            {key}
          </div>
        ))}
      </div>

      <h2 className="mb-2 mt-10 text-2xl font-extrabold text-letter-title">
        Letter Colors
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
