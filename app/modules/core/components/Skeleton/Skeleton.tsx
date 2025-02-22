import { cn } from '~/libs/shadcn/utils';

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-slate-100 dark:bg-slate-800',
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
