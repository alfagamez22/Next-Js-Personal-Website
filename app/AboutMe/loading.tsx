export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse space-y-8">
        <div className="h-64 bg-default rounded-xl" />
        <div className="h-6 w-1/3 bg-default rounded" />
        <div className="h-4 w-2/3 bg-default rounded" />
        <div className="h-4 w-1/2 bg-default rounded" />
        <div className="h-10 bg-default rounded" />
      </div>
    </div>
  );
}
