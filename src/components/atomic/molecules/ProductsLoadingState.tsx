import React from 'react';

type ProductsLoadingStateProps = {
  loading: boolean;
  error: string | null;
};

const ProductsLoadingState: React.FC<ProductsLoadingStateProps> = ({ loading, error }) => {
  if (loading) {
    return (
      <>
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-lg border p-4 shadow-sm">
              {/* Image skeleton */}
              <div className="h-48 w-full animate-pulse rounded-md bg-gray-200" />

              {/* Title skeleton */}
              <div className="h-5 w-3/4 animate-pulse rounded-md bg-gray-200" />

              {/* Price skeleton */}
              <div className="mt-2 h-6 w-1/3 animate-pulse rounded-md bg-gray-200" />

              {/* Button skeleton */}
              <div className="mt-auto h-10 w-full animate-pulse rounded-md bg-gray-200" />
            </div>
          ))}
      </>
    );
  }

  if (error) {
    return <div className="text-lg font-semibold text-red-500">{error}</div>;
  }

  return null;
};

export { ProductsLoadingState };
