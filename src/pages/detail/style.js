import styled from 'styled-components';

export const DetailWrapper = styled.div`
  overflow: hidden;
  width: 620px;
  margin: 0 auto;
  padding-bottom: 100px;
`

export const Header = styled.h1`
  margin: 50px 0 20px 0;
  font-size: 30px;
  line-height: 44px;
  color: #333;
  font-weight: 700;
`

export const Content = styled.div`
  color: #2f2f2f;
  .content-pic {
    max-width: 100%;
  }
  .article {
    margin: 30px 0;
  }
  .title {
    margin: 20px 0;
    font-size: 24px;
    font-weight: 600;
    font-style: italic;
  }
  .content {
    margin: 20px 0;
    font-size: 16px;
    line-height: 28px;
  }
`