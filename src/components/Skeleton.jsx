const SkeletonCard = () => (
  <div className="flex w-52 flex-col gap-4">
    <div className="skeleton h-32 w-full"></div>
    <div className="skeleton h-4 w-28"></div>
    <div className="skeleton h-4 w-full"></div>
    <div className="skeleton h-4 w-full"></div>
  </div>
);

const SkeletonList = () => {
  const skeletons = Array.from({ length: 30 }, (_, index) => (
    <SkeletonCard key={index} />
  ));

  return <div className="flex flex-wrap gap-4">{skeletons}</div>;
};

export default SkeletonList;
