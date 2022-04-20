import '../components/Hero/Hero.css';

const Banner = () => {
  return (
    <>
      <h3 className='text-white'>
        Welcome to Europe’s largest call center database
      </h3>

      <div className='d-flex'>
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
    </>
  );
};

export default Banner;
