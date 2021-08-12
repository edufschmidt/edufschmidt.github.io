import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, typography, border, space, layout } from 'styled-system'

import { Link } from '@reach/router'

const StyledLink = styled(Link)`
  display: inline;

  :link {
    text-decoration: none;
    cursor: pointer;
  }

  :visited {
    text-decoration: inherit;
    cursor: auto;
  }

  color: ${(props) => props.theme.colors.accent1};
  
  :hover {
    ${(props) => props.hoverStyle}
  }

  &[aria-current] {
    ${(props) => props.activeStyle}
  }

  ${color}
  ${space}
  ${layout}
  ${border}
  ${typography}

`

StyledLink.propTypes = {
  href: PropTypes.string,
  to: PropTypes.string.isRequired,
}

export default StyledLink
