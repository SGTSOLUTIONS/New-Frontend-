function Home() {
  return (
    <div className="container py-5">
      <div className="text-center">
        <h1 className="display-4">Welcome to SGT Solutions</h1>
        <p className="lead mt-3">
          GIS | Drone Survey | Property Tax Mapping | Web GIS
        </p>

        <button className="btn btn-primary mt-3">
          Get Started
        </button>
      </div>

      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h4>GIS Mapping</h4>
            <p>Enterprise GIS solutions for government and private sectors.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h4>Drone Survey</h4>
            <p>High-resolution drone survey and orthophoto generation.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h4>Property Tax</h4>
            <p>GIS-based property tax mapping and revenue enhancement.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;