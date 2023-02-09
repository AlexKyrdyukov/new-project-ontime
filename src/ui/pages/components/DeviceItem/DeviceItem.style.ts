import styled from 'styled-components';

const StyledDeviceItem = styled.div`
  color: black;
  max-width: 305px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 80px;

  .device-image {
    width: 300px;
    height: 400px;
  }

  & span {
    padding-right: 20px;
  }
`;

export default StyledDeviceItem;
