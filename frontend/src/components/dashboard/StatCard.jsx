function StatCard({ title, value, color, icon }) {
  return (
    <div className="col-12 col-sm-6 col-xl-3 mb-4">
      <div
        className={`card border-0 shadow h-100 text-white bg-${color}`}
        style={{
          borderRadius: "18px",
        }}
      >
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <small className="opacity-75">{title}</small>

              <h2 className="fw-bold mt-2">{value}</h2>
            </div>

            <div
              style={{
                fontSize: "2.5rem",
              }}
            >
              {icon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
