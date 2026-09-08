const FacilityCard = ({ facility }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={facility.image}
          alt={facility.title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900">
          {facility.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {facility.description}
        </p>
      </div>
    </article>
  );
};

export default FacilityCard;
