import './BannerTab.css';

const BannerTab = () => {
  return (
    <section className='bannerTab'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 py-5 text-white px-3'>
            <h3 className='text-center'>
              Welcome to Europe’s largest call center database
            </h3>

            <div className='d-flex justify-content-between'>
              <div className='col-lg-3'>
                <h4>500+</h4>
                <h5>Tenders</h5>
              </div>

              <div className='col-lg-3'>
                <h4>200+</h4>
                <h5>Callcenter</h5>
              </div>

              <div className='col-lg-3'>
                <h4>375.000</h4>
                <h5>Agents available</h5>
              </div>

              <div className='col-lg-3'>
                <h4>85%</h4>
                <h5>Faster sourcing</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTab;
