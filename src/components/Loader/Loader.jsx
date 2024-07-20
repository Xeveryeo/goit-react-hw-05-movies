import { Circles } from 'react-loader-spinner';
import { LoadDiv } from './Loader.styled';
export const Loader = () => (
  <LoadDiv>
    <Circles
      height="80"
      width="80"
      color="#000000"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </LoadDiv>
);
