import React from 'react';

const COLOR_CLASSES = {
  primary: 'bg-primary text-white',
  primaryDisabled: 'bg-primaryDisabled text-white',
  secondary: 'bg-secondary text-white',
  secondaryDisabled: 'bg-secondaryDisabled text-white',
  success: 'bg-success text-white',
  successDisabled: 'bg-successDisabled text-white',
  warning: 'bg-warning text-white',
  warningDisabled: 'bg-warningDisabled text-white',
  danger: 'bg-danger text-white',
  dangerDisabled: 'bg-dangerDisabled text-white',
  divider: 'bg-divider text-white',
};

const TEXT_COLOR_CLASSES = {
  textTitle: 'text-textTitle border-textTitle',
  textBody: 'text-textBody border-textBody',
  textCaption: 'text-textCaption border-textCaption',
  textDisabled: 'text-textDisabled border-textDisabled',
};

export function ColorTokens() {
  return (
    <section className="rounded p-6 dark:bg-slate-900">
      <h2 className="mb-2 text-2xl font-extrabold text-textTitle">
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

      <h2 className="mb-2 mt-10 text-2xl font-extrabold text-textTitle">
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
