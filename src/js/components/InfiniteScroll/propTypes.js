import PropTypes from 'prop-types';

let PropType = {};
if (process.env.NODE_ENV !== 'production') {
  PropType = {
    children: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.any),
    onMore: PropTypes.func,
    renderMarker: PropTypes.func,
    replace: PropTypes.bool,
    scrollableAncestor: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.oneOf(['window']),
    ]),
    show: PropTypes.number,
    step: PropTypes.number,
  };
}
export const InfiniteScrollPropTypes = PropType;
