import { mergeClassNames } from '~/modules/core/libs/utils/ui';

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={mergeClassNames(
        'animate-pulse rounded-lg bg-accent duration-1000',
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
