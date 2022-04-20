import Form from './Form';
import Test from './Test';

const New = () => {
  const [nextPage, setNextPage] = useState(false);

  return <div>{localStorage.getItem('isSubmitted') ? <Test /> : <Form />}</div>;
};

export default New;
