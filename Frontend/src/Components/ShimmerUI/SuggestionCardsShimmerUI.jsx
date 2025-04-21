const Card = () => {
  return (
    <div className="bg-white flex flex-col gap-3 border-b-4 border-slate-100 pb-2">
      <div className="bg-slate-100 w-[70px] h-3" />
      <div className="bg-slate-100 w-[200px] h-3" />
      <div className="bg-slate-100 w-[100px] h-3" />
    </div>
  );
};

const SuggestionCardsShimmerUI = () => {
  return (
    <div className="border-4 border-slate-100 mt-8">
      <div className="my-3">
        <div className="flex gap-4 px-2">
          <button className="bg-slate-100 w-32 h-9 rounded-xl" />
          <button className="border-2 border-slate-100 w-32 h-9 rounded-xl" />
        </div>
        <div className="bg-slate-100 w-full h-10 mt-5" />
      </div>

      <div className="flex flex-col gap-10">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default SuggestionCardsShimmerUI;
