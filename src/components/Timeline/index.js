import styled from 'styled-components/macro'
import { mediaQueries } from '@commonground/design-system'

const Timeline = styled.div`
  width: 100%;
  position: relative;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  :after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #f5f5f6;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }

  ${mediaQueries.smDown`
    :after {
      left: 31px;
    }
  `}
`

Timeline.Container = styled.div`
  position: relative;
  padding: 10px 45px;
  width: 50%;

  ${(p) => p.align === "right" ? `
    left: 50%;
  `: `
    left: 0;
  `}

  :before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;

    border: medium solid black;

    ${(p) => p.align === "right" ? `
      left: 35px;
      border-width: 10px 10px 10px 0;
      border-color: transparent #f5f5f6 transparent transparent;
    `: `
      right: 35px;
      border-width: 10px 0 10px 10px;
      border-color: transparent transparent transparent #f5f5f6;
    `}
  }

  :after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;

    ${(p) => p.align === "right" ? `
      left: -13px;
    ` : `
      right: -13px;
    `}

    background-color: #F76C6C;
    border: 4px solid #F76C6C;
    top: 19px;
    border-radius: 50%;
    z-index: 1;
  }

  ${mediaQueries.smDown`
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;

    :before {
      left: 60px;
      border: medium solid white;
      border-width: 10px 10px 10px 0;
      border-color: transparent #f5f5f6 transparent transparent;
    }

    :after {
      left: 15px;
    }
  `}
`

Timeline.Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color #fff;
  border-radius: 10px;
  box-shadow: 0 1px 10px 0 rgba(47,28,80,.2);
  padding: ${(p) => p.theme.tokens.spacing06};

  h3 {
    word-break: break-all;
  }

  img {
    margin-top: ${(p) => p.theme.tokens.spacing06};
    width: 50%;
    margin: 0 auto;
  }
`

export default Timeline
