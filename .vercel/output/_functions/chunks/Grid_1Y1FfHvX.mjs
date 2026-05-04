import { ah as useTheme, P as PropTypes, e as extendSxProp, W as isMuiElement, s as styled, u as useThemeProps, a as composeClasses, g as generateUtilityClass, b as createTheme, D as useTheme$1, j as useDefaultProps, l as styled$1 } from './ThemeRegistry_D8eYcNmV.mjs';
import * as React from 'react';
import { C as clsx } from './sequence_C_bNAUSZ.mjs';
import { jsx } from 'react/jsx-runtime';

const filterBreakpointKeys = (breakpointsKeys, responsiveKeys) => breakpointsKeys.filter(key => responsiveKeys.includes(key));
const traverseBreakpoints = (breakpoints, responsive, iterator) => {
  const smallestBreakpoint = breakpoints.keys[0]; // the keys is sorted from smallest to largest by `createBreakpoints`.

  if (Array.isArray(responsive)) {
    responsive.forEach((breakpointValue, index) => {
      iterator((responsiveStyles, style) => {
        if (index <= breakpoints.keys.length - 1) {
          if (index === 0) {
            Object.assign(responsiveStyles, style);
          } else {
            responsiveStyles[breakpoints.up(breakpoints.keys[index])] = style;
          }
        }
      }, breakpointValue);
    });
  } else if (responsive && typeof responsive === 'object') {
    // prevent null
    // responsive could be a very big object, pick the smallest responsive values

    const keys = Object.keys(responsive).length > breakpoints.keys.length ? breakpoints.keys : filterBreakpointKeys(breakpoints.keys, Object.keys(responsive));
    keys.forEach(key => {
      if (breakpoints.keys.includes(key)) {
        // @ts-ignore already checked that responsive is an object
        const breakpointValue = responsive[key];
        if (breakpointValue !== undefined) {
          iterator((responsiveStyles, style) => {
            if (smallestBreakpoint === key) {
              Object.assign(responsiveStyles, style);
            } else {
              responsiveStyles[breakpoints.up(key)] = style;
            }
          }, breakpointValue);
        }
      }
    });
  } else if (typeof responsive === 'number' || typeof responsive === 'string') {
    iterator((responsiveStyles, style) => {
      Object.assign(responsiveStyles, style);
    }, responsive);
  }
};

function getSelfSpacingVar(axis) {
  return `--Grid-${axis}Spacing`;
}
function getParentSpacingVar(axis) {
  return `--Grid-parent-${axis}Spacing`;
}
const selfColumnsVar = '--Grid-columns';
const parentColumnsVar = '--Grid-parent-columns';
const generateGridSizeStyles = ({
  theme,
  ownerState
}) => {
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.size, (appendStyle, value) => {
    let style = {};
    if (value === 'grow') {
      style = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
    }
    if (value === 'auto') {
      style = {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: 'none',
        width: 'auto'
      };
    }
    if (typeof value === 'number') {
      style = {
        flexGrow: 0,
        flexBasis: 'auto',
        width: `calc(100% * ${value} / var(${parentColumnsVar}) - (var(${parentColumnsVar}) - ${value}) * (var(${getParentSpacingVar('column')}) / var(${parentColumnsVar})))`
      };
    }
    appendStyle(styles, style);
  });
  return styles;
};
const generateGridOffsetStyles = ({
  theme,
  ownerState
}) => {
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.offset, (appendStyle, value) => {
    let style = {};
    if (value === 'auto') {
      style = {
        marginLeft: 'auto'
      };
    }
    if (typeof value === 'number') {
      style = {
        marginLeft: value === 0 ? '0px' : `calc(100% * ${value} / var(${parentColumnsVar}) + var(${getParentSpacingVar('column')}) * ${value} / var(${parentColumnsVar}))`
      };
    }
    appendStyle(styles, style);
  });
  return styles;
};
const generateGridColumnsStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {
    [selfColumnsVar]: 12
  };
  traverseBreakpoints(theme.breakpoints, ownerState.columns, (appendStyle, value) => {
    const columns = value ?? 12;
    appendStyle(styles, {
      [selfColumnsVar]: columns,
      '> *': {
        [parentColumnsVar]: columns
      }
    });
  });
  return styles;
};
const generateGridRowSpacingStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.rowSpacing, (appendStyle, value) => {
    const spacing = typeof value === 'string' ? value : theme.spacing?.(value);
    appendStyle(styles, {
      [getSelfSpacingVar('row')]: spacing,
      '> *': {
        [getParentSpacingVar('row')]: spacing
      }
    });
  });
  return styles;
};
const generateGridColumnSpacingStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.columnSpacing, (appendStyle, value) => {
    const spacing = typeof value === 'string' ? value : theme.spacing?.(value);
    appendStyle(styles, {
      [getSelfSpacingVar('column')]: spacing,
      '> *': {
        [getParentSpacingVar('column')]: spacing
      }
    });
  });
  return styles;
};
const generateGridDirectionStyles = ({
  theme,
  ownerState
}) => {
  if (!ownerState.container) {
    return {};
  }
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.direction, (appendStyle, value) => {
    appendStyle(styles, {
      flexDirection: value
    });
  });
  return styles;
};
const generateGridStyles = ({
  ownerState
}) => {
  return {
    minWidth: 0,
    boxSizing: 'border-box',
    ...(ownerState.container && {
      display: 'flex',
      flexWrap: 'wrap',
      ...(ownerState.wrap && ownerState.wrap !== 'wrap' && {
        flexWrap: ownerState.wrap
      }),
      gap: `var(${getSelfSpacingVar('row')}) var(${getSelfSpacingVar('column')})`
    })
  };
};
const generateSizeClassNames = size => {
  const classNames = [];
  Object.entries(size).forEach(([key, value]) => {
    if (value !== false && value !== undefined) {
      classNames.push(`grid-${key}-${String(value)}`);
    }
  });
  return classNames;
};
const generateSpacingClassNames = (spacing, smallestBreakpoint = 'xs') => {
  function isValidSpacing(val) {
    if (val === undefined) {
      return false;
    }
    return typeof val === 'string' && !Number.isNaN(Number(val)) || typeof val === 'number' && val > 0;
  }
  if (isValidSpacing(spacing)) {
    return [`spacing-${smallestBreakpoint}-${String(spacing)}`];
  }
  if (typeof spacing === 'object' && !Array.isArray(spacing)) {
    const classNames = [];
    Object.entries(spacing).forEach(([key, value]) => {
      if (isValidSpacing(value)) {
        classNames.push(`spacing-${key}-${String(value)}`);
      }
    });
    return classNames;
  }
  return [];
};
const generateDirectionClasses = direction => {
  if (direction === undefined) {
    return [];
  }
  if (typeof direction === 'object') {
    return Object.entries(direction).map(([key, value]) => `direction-${key}-${value}`);
  }
  return [`direction-xs-${String(direction)}`];
};

const getLegacyGridWarning = propName => {
  if (['item', 'zeroMinWidth'].includes(propName)) {
    return `The \`${propName}\` prop has been removed and is no longer necessary. You can safely remove it.`;
  }

  // #host-reference
  return `The \`${propName}\` prop has been removed. See https://mui.com/material-ui/migration/upgrade-to-grid-v2/ for migration instructions.`;
};
const warnedAboutProps = [];

/**
 * Deletes the legacy Grid component props from the `props` object and warns once about them if found.
 *
 * @param {object} props The props object to remove the legacy Grid props from.
 * @param {Breakpoints} breakpoints The breakpoints object.
 */
function deleteLegacyGridProps(props, breakpoints) {
  const propsToWarn = [];
  if (props.item !== undefined) {
    delete props.item;
    propsToWarn.push('item');
  }
  if (props.zeroMinWidth !== undefined) {
    delete props.zeroMinWidth;
    propsToWarn.push('zeroMinWidth');
  }
  breakpoints.keys.forEach(breakpoint => {
    if (props[breakpoint] !== undefined) {
      propsToWarn.push(breakpoint);
      delete props[breakpoint];
    }
  });
  if (process.env.NODE_ENV !== 'production') {
    propsToWarn.forEach(prop => {
      if (!warnedAboutProps.includes(prop)) {
        warnedAboutProps.push(prop);
        console.warn(`MUI Grid: ${getLegacyGridWarning(prop)}\n`);
      }
    });
  }
}

const defaultTheme = createTheme();

// widening Theme to any so that the consumer can own the theme structure.
const defaultCreateStyledComponent = styled('div', {
  name: 'MuiGrid',
  slot: 'Root'
});
function useThemePropsDefault(props) {
  return useThemeProps({
    props,
    name: 'MuiGrid',
    defaultTheme
  });
}
function createGrid(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps = useThemePropsDefault,
    useTheme: useTheme$1 = useTheme,
    componentName = 'MuiGrid'
  } = options;
  const useUtilityClasses = (ownerState, theme) => {
    const {
      container,
      direction,
      spacing,
      wrap,
      size
    } = ownerState;
    const slots = {
      root: ['root', container && 'container', wrap !== 'wrap' && `wrap-xs-${String(wrap)}`, ...generateDirectionClasses(direction), ...generateSizeClassNames(size), ...(container ? generateSpacingClassNames(spacing, theme.breakpoints.keys[0]) : [])]
    };
    return composeClasses(slots, slot => generateUtilityClass(componentName, slot), {});
  };
  function parseResponsiveProp(propValue, breakpoints, shouldUseValue = () => true) {
    const parsedProp = {};
    if (propValue === null) {
      return parsedProp;
    }
    if (Array.isArray(propValue)) {
      propValue.forEach((value, index) => {
        if (value !== null && shouldUseValue(value) && breakpoints.keys[index]) {
          parsedProp[breakpoints.keys[index]] = value;
        }
      });
    } else if (typeof propValue === 'object') {
      Object.keys(propValue).forEach(key => {
        const value = propValue[key];
        if (value !== null && value !== undefined && shouldUseValue(value)) {
          parsedProp[key] = value;
        }
      });
    } else {
      parsedProp[breakpoints.keys[0]] = propValue;
    }
    return parsedProp;
  }
  const GridRoot = createStyledComponent(generateGridColumnsStyles, generateGridColumnSpacingStyles, generateGridRowSpacingStyles, generateGridSizeStyles, generateGridDirectionStyles, generateGridStyles, generateGridOffsetStyles);
  const Grid = /*#__PURE__*/React.forwardRef(function Grid(inProps, ref) {
    const theme = useTheme$1();
    const themeProps = useThemeProps(inProps);
    const props = extendSxProp(themeProps); // `color` type conflicts with html color attribute.

    // TODO v8: Remove when removing the legacy Grid component
    deleteLegacyGridProps(props, theme.breakpoints);
    const {
      className,
      children,
      columns: columnsProp = 12,
      container = false,
      component = 'div',
      direction = 'row',
      wrap = 'wrap',
      size: sizeProp = {},
      offset: offsetProp = {},
      spacing: spacingProp = 0,
      rowSpacing: rowSpacingProp = spacingProp,
      columnSpacing: columnSpacingProp = spacingProp,
      unstable_level: level = 0,
      ...other
    } = props;
    const size = parseResponsiveProp(sizeProp, theme.breakpoints, val => val !== false);
    const offset = parseResponsiveProp(offsetProp, theme.breakpoints);
    const columns = inProps.columns ?? (level ? undefined : columnsProp);
    const spacing = inProps.spacing ?? (level ? undefined : spacingProp);
    const rowSpacing = inProps.rowSpacing ?? inProps.spacing ?? (level ? undefined : rowSpacingProp);
    const columnSpacing = inProps.columnSpacing ?? inProps.spacing ?? (level ? undefined : columnSpacingProp);
    const ownerState = {
      ...props,
      level,
      columns,
      container,
      direction,
      wrap,
      spacing,
      rowSpacing,
      columnSpacing,
      size,
      offset
    };
    const classes = useUtilityClasses(ownerState, theme);
    return /*#__PURE__*/jsx(GridRoot, {
      ref: ref,
      as: component,
      ownerState: ownerState,
      className: clsx(classes.root, className),
      ...other,
      children: React.Children.map(children, child => {
        if (/*#__PURE__*/React.isValidElement(child) && isMuiElement(child, ['Grid']) && container && child.props.container) {
          return /*#__PURE__*/React.cloneElement(child, {
            unstable_level: child.props?.unstable_level ?? level + 1
          });
        }
        return child;
      })
    });
  });
  process.env.NODE_ENV !== "production" ? Grid.propTypes /* remove-proptypes */ = {
    children: PropTypes.node,
    className: PropTypes.string,
    columns: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number, PropTypes.object]),
    columnSpacing: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),
    component: PropTypes.elementType,
    container: PropTypes.bool,
    direction: PropTypes.oneOfType([PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row']), PropTypes.arrayOf(PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row'])), PropTypes.object]),
    offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])), PropTypes.object]),
    rowSpacing: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number])), PropTypes.object]),
    spacing: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),
    sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
    wrap: PropTypes.oneOf(['nowrap', 'wrap-reverse', 'wrap'])
  } : void 0;

  // @ts-ignore internal logic for nested grid
  Grid.muiName = 'Grid';
  return Grid;
}

function requirePropFactory(componentNameInError, Component) {
  if (process.env.NODE_ENV === 'production') {
    return () => () => null;
  }

  // eslint-disable-next-line react/forbid-foreign-prop-types
  const prevPropTypes = Component ? {
    ...Component.propTypes
  } : null;
  const requireProp = requiredProp => (props, propName, componentName, location, propFullName, ...args) => {
    const propFullNameSafe = propFullName || propName;
    const defaultTypeChecker = prevPropTypes?.[propFullNameSafe];
    if (defaultTypeChecker) {
      const typeCheckerResult = defaultTypeChecker(props, propName, componentName, location, propFullName, ...args);
      if (typeCheckerResult) {
        return typeCheckerResult;
      }
    }
    if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
      return new Error(`The prop \`${propFullNameSafe}\` of ` + `\`${componentNameInError}\` can only be used together with the \`${requiredProp}\` prop.`);
    }
    return null;
  };
  return requireProp;
}

/**
 *
 * Demos:
 *
 * - [Grid](https://mui.com/material-ui/react-grid/)
 *
 * API:
 *
 * - [Grid API](https://mui.com/material-ui/api/grid/)
 */
const Grid = createGrid({
  createStyledComponent: styled$1('div', {
    name: 'MuiGrid',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.container && styles.container];
    }
  }),
  componentName: 'MuiGrid',
  useThemeProps: inProps => useDefaultProps({
    props: inProps,
    name: 'MuiGrid'
  }),
  useTheme: useTheme$1
});
process.env.NODE_ENV !== "production" ? Grid.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * The number of columns.
   * @default 12
   */
  columns: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.number, PropTypes.object]),
  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: PropTypes.bool,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row']), PropTypes.arrayOf(PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row'])), PropTypes.object]),
  /**
   * Defines the offset value for the type `item` components.
   */
  offset: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])), PropTypes.object]),
  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),
  /**
   * Defines the size of the the type `item` components.
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number])), PropTypes.object]),
  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),
  /**
   * @ignore
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * @internal
   * The level of the grid starts from `0` and increases when the grid nests
   * inside another grid. Nesting is defined as a container Grid being a direct
   * child of a container Grid.
   *
   * ```js
   * <Grid container> // level 0
   *   <Grid container> // level 1
   *     <Grid container> // level 2
   * ```
   *
   * Only consecutive grid is considered nesting. A grid container will start at
   * `0` if there are non-Grid container element above it.
   *
   * ```js
   * <Grid container> // level 0
   *   <div>
   *     <Grid container> // level 0
   * ```
   *
   * ```js
   * <Grid container> // level 0
   *   <Grid>
   *     <Grid container> // level 0
   * ```
   */
  unstable_level: PropTypes.number,
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: PropTypes.oneOf(['nowrap', 'wrap-reverse', 'wrap'])
} : void 0;
if (process.env.NODE_ENV !== 'production') {
  const Component = Grid;
  const requireProp = requirePropFactory('Grid', Component);
  // eslint-disable-next-line no-useless-concat
  Component['propTypes' + ''] = {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    ...Component.propTypes,
    direction: requireProp('container'),
    spacing: requireProp('container'),
    wrap: requireProp('container')
  };
}

export { Grid as G };
