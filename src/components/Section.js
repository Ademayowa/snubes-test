const Section = ({ title, info }) => {
  return (
    <>
      <h5 className='mt-5 mb-3'>{title}</h5>
      <p>{info}</p>
    </>
  );
};

export default Section;
