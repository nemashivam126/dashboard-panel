import "./Card.css";
function Card() {
  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card p-3">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="icon-wrapper green-bg">
                  <img
                    src="dollar.svg"
                    className="img-fluid rounded-start"
                    alt="dollar icon"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                    <p className="toptext">Earning</p>
                    <h4 className="midtext">$198k</h4>
                    <p className="bottomtext"><span className = "spangreen">↑37.8% </span>this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3">
          <div className="card p-3">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="icon-wrapper purple-bg">
                  <img
                    src="doc-icon.svg"
                    className="img-fluid rounded-start"
                    alt="doc icon"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                    <p className="toptext">Orders</p>
                    <h4 className="midtext">$2.4k</h4>
                    <p className="bottomtext"><span className = "spanred">↓2% </span>this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3">
          <div className="card p-3">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="icon-wrapper blue-bg">
                  <img
                    src="wallet.svg"
                    className="img-fluid rounded-start"
                    alt="wallet"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                    <p className="toptext">Balance</p>
                    <h4 className="midtext">$2.4k</h4>
                    <p className="bottomtext"><span className = "spanred">↓2% </span>this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card p-3">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="icon-wrapper pink-bg">
                  <img
                    src="bag.svg"
                    className="img-fluid rounded-start"
                    alt="bag"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                    <p className="toptext">Total Sales</p>
                    <h4 className="midtext">$89k</h4>
                    <p className="bottomtext"><span className = "spangreen">↑11% </span>this week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
