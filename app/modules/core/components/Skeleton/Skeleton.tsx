import { cn } from '~/modules/core/libs/shadcn/utils';

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-lg bg-accent duration-1000',
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
