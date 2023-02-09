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
    display: inline-block;
    margin: 10px;
    font-size: 20px;
    color: orange;
  }
`;

export default StyledDeviceItem;
