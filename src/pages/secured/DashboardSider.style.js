import styled from 'styled-components'

const SidebarWrapper = styled.div`
  .isomorphicSidebar {

    ${'' /* @media only screen and (max-width: 767px) {
      width: 240px !important;
      flex: 0 0 240px !important;
    } */}

    ${'' /* &.ant-layout-sider-collapsed {
      @media only screen and (max-width: 767px) {
        width: 0;
        min-width: 0 !important;
        max-width: 0 !important;
        flex: 0 0 0 !important;
      }
    } */}

    ${'' /* .isoLogoWrapper {
      height: 70px;
      background: rgba(0, 0, 0, 0.3);
      margin: 0;
      padding: 0 10px;
      text-align: center;
      overflow: hidden;
      h3 {
        a {
          font-size: 21px;
          font-weight: 300;
          line-height: 70px;
          letter-spacing: 3px;
          text-transform: uppercase;
          display: block;
          text-decoration: none;
        }
      } */}
    }
  }
`

export default SidebarWrapper
