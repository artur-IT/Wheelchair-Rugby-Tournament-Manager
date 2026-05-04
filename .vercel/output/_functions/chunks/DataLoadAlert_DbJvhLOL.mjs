import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Trophy, X, Menu, LayoutDashboard, Building2, Settings, UserCircle, LogOut } from 'lucide-react';
import { signOut } from 'supertokens-web-js/recipe/session/index.js';
import { e as ensureSuperTokensFrontendInitialized } from './initFrontend_DC7D9y16.mjs';
import { P as PropTypes, s as styled, x as capitalize, u as useThemeProps, a as composeClasses, b as createTheme, g as generateUtilityClass, i as generateUtilityClasses, j as useDefaultProps, l as styled$1, n as Paper, o as memoTheme, y as createSimplePaletteValueFilter, z as createSvgIcon, k as useSlot, D as useTheme, E as Transition, F as useForkRef, G as getReactElementRef, H as ownerWindow, I as debounce, J as reflow, K as getTransitionProps, L as elementAcceptingRef, p as chainPropTypes, M as HTMLElementType, N as useRtl, O as mergeSlotProps, Q as Modal, R as rootShouldForwardProp, S as integerPropType, U as ListContext, V as useEnhancedEffect, B as ButtonBase, W as isMuiElement, X as isHostComponent, Y as elementTypeAcceptingRef, T as Typography, Z as typographyClasses, t as Box, _ as IconButton, $ as List, A as Alert, v as Button } from './ThemeRegistry_D8eYcNmV.mjs';
import { C as clsx } from './sequence_C_bNAUSZ.mjs';

const defaultTheme = createTheme();
const defaultCreateStyledComponent = styled('div', {
  name: 'MuiContainer',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`maxWidth${capitalize(String(ownerState.maxWidth))}`], ownerState.fixed && styles.fixed, ownerState.disableGutters && styles.disableGutters];
  }
});
const useThemePropsDefault = inProps => useThemeProps({
  props: inProps,
  name: 'MuiContainer',
  defaultTheme
});
const useUtilityClasses$a = (ownerState, componentName) => {
  const getContainerUtilityClass = slot => {
    return generateUtilityClass(componentName, slot);
  };
  const {
    classes,
    fixed,
    disableGutters,
    maxWidth
  } = ownerState;
  const slots = {
    root: ['root', maxWidth && `maxWidth${capitalize(String(maxWidth))}`, fixed && 'fixed', disableGutters && 'disableGutters']
  };
  return composeClasses(slots, getContainerUtilityClass, classes);
};
function createContainer(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps = useThemePropsDefault,
    componentName = 'MuiContainer'
  } = options;
  const ContainerRoot = createStyledComponent(({
    theme,
    ownerState
  }) => ({
    width: '100%',
    marginLeft: 'auto',
    boxSizing: 'border-box',
    marginRight: 'auto',
    ...(!ownerState.disableGutters && {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
      }
    })
  }), ({
    theme,
    ownerState
  }) => ownerState.fixed && Object.keys(theme.breakpoints.values).reduce((acc, breakpointValueKey) => {
    const breakpoint = breakpointValueKey;
    const value = theme.breakpoints.values[breakpoint];
    if (value !== 0) {
      // @ts-ignore
      acc[theme.breakpoints.up(breakpoint)] = {
        maxWidth: `${value}${theme.breakpoints.unit}`
      };
    }
    return acc;
  }, {}), ({
    theme,
    ownerState
  }) => ({
    // @ts-ignore module augmentation fails if custom breakpoints are used
    ...(ownerState.maxWidth === 'xs' && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [theme.breakpoints.up('xs')]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: Math.max(theme.breakpoints.values.xs, 444)
      }
    }),
    ...(ownerState.maxWidth &&
    // @ts-ignore module augmentation fails if custom breakpoints are used
    ownerState.maxWidth !== 'xs' && {
      // @ts-ignore module augmentation fails if custom breakpoints are used
      [theme.breakpoints.up(ownerState.maxWidth)]: {
        // @ts-ignore module augmentation fails if custom breakpoints are used
        maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`
      }
    })
  }));
  const Container = /*#__PURE__*/React.forwardRef(function Container(inProps, ref) {
    const props = useThemeProps(inProps);
    const {
      className,
      component = 'div',
      disableGutters = false,
      fixed = false,
      maxWidth = 'lg',
      classes: classesProp,
      ...other
    } = props;
    const ownerState = {
      ...props,
      component,
      disableGutters,
      fixed,
      maxWidth
    };

    // @ts-ignore module augmentation fails if custom breakpoints are used
    const classes = useUtilityClasses$a(ownerState, componentName);
    return (
      /*#__PURE__*/
      // @ts-ignore theme is injected by the styled util
      jsx(ContainerRoot, {
        as: component
        // @ts-ignore module augmentation fails if custom breakpoints are used
        ,
        ownerState: ownerState,
        className: clsx(classes.root, className),
        ref: ref,
        ...other
      })
    );
  });
  process.env.NODE_ENV !== "production" ? Container.propTypes /* remove-proptypes */ = {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    component: PropTypes.elementType,
    disableGutters: PropTypes.bool,
    fixed: PropTypes.bool,
    maxWidth: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]), PropTypes.string]),
    sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
  } : void 0;
  return Container;
}

function getAppBarUtilityClass(slot) {
  return generateUtilityClass('MuiAppBar', slot);
}
generateUtilityClasses('MuiAppBar', ['root', 'positionFixed', 'positionAbsolute', 'positionSticky', 'positionStatic', 'positionRelative', 'colorDefault', 'colorPrimary', 'colorSecondary', 'colorInherit', 'colorTransparent', 'colorError', 'colorInfo', 'colorSuccess', 'colorWarning']);

const useUtilityClasses$9 = ownerState => {
  const {
    color,
    position,
    classes
  } = ownerState;
  const slots = {
    root: ['root', `color${capitalize(color)}`, `position${capitalize(position)}`]
  };
  return composeClasses(slots, getAppBarUtilityClass, classes);
};

// var2 is the fallback.
// Ex. var1: 'var(--a)', var2: 'var(--b)'; return: 'var(--a, var(--b))'
const joinVars = (var1, var2) => var1 ? `${var1.replace(')', '')}, ${var2})` : var2;
const AppBarRoot = styled$1(Paper, {
  name: 'MuiAppBar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`position${capitalize(ownerState.position)}`], styles[`color${capitalize(ownerState.color)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  boxSizing: 'border-box',
  // Prevent padding issue with the Modal and fixed positioned AppBar.
  flexShrink: 0,
  variants: [{
    props: {
      position: 'fixed'
    },
    style: {
      position: 'fixed',
      zIndex: (theme.vars || theme).zIndex.appBar,
      top: 0,
      left: 'auto',
      right: 0,
      '@media print': {
        // Prevent the app bar to be visible on each printed page.
        position: 'absolute'
      }
    }
  }, {
    props: {
      position: 'absolute'
    },
    style: {
      position: 'absolute',
      zIndex: (theme.vars || theme).zIndex.appBar,
      top: 0,
      left: 'auto',
      right: 0
    }
  }, {
    props: {
      position: 'sticky'
    },
    style: {
      position: 'sticky',
      zIndex: (theme.vars || theme).zIndex.appBar,
      top: 0,
      left: 'auto',
      right: 0
    }
  }, {
    props: {
      position: 'static'
    },
    style: {
      position: 'static'
    }
  }, {
    props: {
      position: 'relative'
    },
    style: {
      position: 'relative'
    }
  }, {
    props: {
      color: 'inherit'
    },
    style: {
      '--AppBar-color': 'inherit',
      color: 'var(--AppBar-color)'
    }
  }, {
    props: {
      color: 'default'
    },
    style: {
      '--AppBar-background': theme.vars ? theme.vars.palette.AppBar.defaultBg : theme.palette.grey[100],
      '--AppBar-color': theme.vars ? theme.vars.palette.text.primary : theme.palette.getContrastText(theme.palette.grey[100]),
      ...theme.applyStyles('dark', {
        '--AppBar-background': theme.vars ? theme.vars.palette.AppBar.defaultBg : theme.palette.grey[900],
        '--AppBar-color': theme.vars ? theme.vars.palette.text.primary : theme.palette.getContrastText(theme.palette.grey[900])
      })
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter(['contrastText'])).map(([color]) => ({
    props: {
      color
    },
    style: {
      '--AppBar-background': (theme.vars ?? theme).palette[color].main,
      '--AppBar-color': (theme.vars ?? theme).palette[color].contrastText
    }
  })), {
    props: props => props.enableColorOnDark === true && !['inherit', 'transparent'].includes(props.color),
    style: {
      backgroundColor: 'var(--AppBar-background)',
      color: 'var(--AppBar-color)'
    }
  }, {
    props: props => props.enableColorOnDark === false && !['inherit', 'transparent'].includes(props.color),
    style: {
      backgroundColor: 'var(--AppBar-background)',
      color: 'var(--AppBar-color)',
      ...theme.applyStyles('dark', {
        backgroundColor: theme.vars ? joinVars(theme.vars.palette.AppBar.darkBg, 'var(--AppBar-background)') : null,
        color: theme.vars ? joinVars(theme.vars.palette.AppBar.darkColor, 'var(--AppBar-color)') : null
      })
    }
  }, {
    props: {
      color: 'transparent'
    },
    style: {
      '--AppBar-background': 'transparent',
      '--AppBar-color': 'inherit',
      backgroundColor: 'var(--AppBar-background)',
      color: 'var(--AppBar-color)',
      ...theme.applyStyles('dark', {
        backgroundImage: 'none'
      })
    }
  }]
})));
const AppBar = /*#__PURE__*/React.forwardRef(function AppBar(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiAppBar'
  });
  const {
    className,
    color = 'primary',
    enableColorOnDark = false,
    position = 'fixed',
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    position,
    enableColorOnDark
  };
  const classes = useUtilityClasses$9(ownerState);
  return /*#__PURE__*/jsx(AppBarRoot, {
    square: true,
    component: "header",
    ownerState: ownerState,
    elevation: 4,
    className: clsx(classes.root, className, position === 'fixed' && 'mui-fixed'),
    ref: ref,
    ...other
  });
});
process.env.NODE_ENV !== "production" ? AppBar.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'transparent', 'error', 'info', 'success', 'warning']), PropTypes.string]),
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 4
   */
  elevation: PropTypes.number,
  /**
   * If true, the `color` prop is applied in dark mode.
   * @default false
   */
  enableColorOnDark: PropTypes.bool,
  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   * @default 'fixed'
   */
  position: PropTypes.oneOf(['absolute', 'fixed', 'relative', 'static', 'sticky']),
  /**
   * If `false`, rounded corners are enabled.
   * @default true
   */
  square: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;

const Person = createSvgIcon(/*#__PURE__*/jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), 'Person');

function getAvatarUtilityClass(slot) {
  return generateUtilityClass('MuiAvatar', slot);
}
generateUtilityClasses('MuiAvatar', ['root', 'colorDefault', 'circular', 'rounded', 'square', 'img', 'fallback']);

const useUtilityClasses$8 = ownerState => {
  const {
    classes,
    variant,
    colorDefault
  } = ownerState;
  const slots = {
    root: ['root', variant, colorDefault && 'colorDefault'],
    img: ['img'],
    fallback: ['fallback']
  };
  return composeClasses(slots, getAvatarUtilityClass, classes);
};
const AvatarRoot = styled$1('div', {
  name: 'MuiAvatar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], ownerState.colorDefault && styles.colorDefault];
  }
})(memoTheme(({
  theme
}) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: 40,
  height: 40,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.pxToRem(20),
  lineHeight: 1,
  borderRadius: '50%',
  overflow: 'hidden',
  userSelect: 'none',
  variants: [{
    props: {
      variant: 'rounded'
    },
    style: {
      borderRadius: (theme.vars || theme).shape.borderRadius
    }
  }, {
    props: {
      variant: 'square'
    },
    style: {
      borderRadius: 0
    }
  }, {
    props: {
      colorDefault: true
    },
    style: {
      color: (theme.vars || theme).palette.background.default,
      ...(theme.vars ? {
        backgroundColor: theme.vars.palette.Avatar.defaultBg
      } : {
        backgroundColor: theme.palette.grey[400],
        ...theme.applyStyles('dark', {
          backgroundColor: theme.palette.grey[600]
        })
      })
    }
  }]
})));
const AvatarImg = styled$1('img', {
  name: 'MuiAvatar',
  slot: 'Img'
})({
  width: '100%',
  height: '100%',
  textAlign: 'center',
  // Handle non-square image.
  objectFit: 'cover',
  // Hide alt text.
  color: 'transparent',
  // Hide the image broken icon, only works on Chrome.
  textIndent: 10000
});
const AvatarFallback = styled$1(Person, {
  name: 'MuiAvatar',
  slot: 'Fallback'
})({
  width: '75%',
  height: '75%'
});
function useLoaded({
  crossOrigin,
  referrerPolicy,
  src,
  srcSet
}) {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    if (!src && !srcSet) {
      return undefined;
    }
    setLoaded(false);
    let active = true;
    const image = new Image();
    image.onload = () => {
      if (!active) {
        return;
      }
      setLoaded('loaded');
    };
    image.onerror = () => {
      if (!active) {
        return;
      }
      setLoaded('error');
    };
    image.crossOrigin = crossOrigin;
    image.referrerPolicy = referrerPolicy;
    image.src = src;
    if (srcSet) {
      image.srcset = srcSet;
    }
    return () => {
      active = false;
    };
  }, [crossOrigin, referrerPolicy, src, srcSet]);
  return loaded;
}
const Avatar = /*#__PURE__*/React.forwardRef(function Avatar(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiAvatar'
  });
  const {
    alt,
    children: childrenProp,
    className,
    component = 'div',
    slots = {},
    slotProps = {},
    imgProps,
    sizes,
    src,
    srcSet,
    variant = 'circular',
    ...other
  } = props;
  let children = null;
  const ownerState = {
    ...props,
    component,
    variant
  };

  // Use a hook instead of onError on the img element to support server-side rendering.
  const loaded = useLoaded({
    ...imgProps,
    ...(typeof slotProps.img === 'function' ? slotProps.img(ownerState) : slotProps.img),
    src,
    srcSet
  });
  const hasImg = src || srcSet;
  const hasImgNotFailing = hasImg && loaded !== 'error';
  ownerState.colorDefault = !hasImgNotFailing;
  // This issue explains why this is required: https://github.com/mui/material-ui/issues/42184
  delete ownerState.ownerState;
  const classes = useUtilityClasses$8(ownerState);
  const [RootSlot, rootSlotProps] = useSlot('root', {
    ref,
    className: clsx(classes.root, className),
    elementType: AvatarRoot,
    externalForwardedProps: {
      slots,
      slotProps,
      component,
      ...other
    },
    ownerState
  });
  const [ImgSlot, imgSlotProps] = useSlot('img', {
    className: classes.img,
    elementType: AvatarImg,
    externalForwardedProps: {
      slots,
      slotProps: {
        img: {
          ...imgProps,
          ...slotProps.img
        }
      }
    },
    additionalProps: {
      alt,
      src,
      srcSet,
      sizes
    },
    ownerState
  });
  const [FallbackSlot, fallbackSlotProps] = useSlot('fallback', {
    className: classes.fallback,
    elementType: AvatarFallback,
    externalForwardedProps: {
      slots,
      slotProps
    },
    shouldForwardComponentProp: true,
    ownerState
  });
  if (hasImgNotFailing) {
    children = /*#__PURE__*/jsx(ImgSlot, {
      ...imgSlotProps
    });
    // We only render valid children, non valid children are rendered with a fallback
    // We consider that invalid children are all falsy values, except 0, which is valid.
  } else if (!!childrenProp || childrenProp === 0) {
    children = childrenProp;
  } else if (hasImg && alt) {
    children = alt[0];
  } else {
    children = /*#__PURE__*/jsx(FallbackSlot, {
      ...fallbackSlotProps
    });
  }
  return /*#__PURE__*/jsx(RootSlot, {
    ...rootSlotProps,
    children: children
  });
});
process.env.NODE_ENV !== "production" ? Avatar.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: PropTypes.string,
  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#attributes) applied to the `img` element if the component is used to display an image.
   * It can be used to listen for the loading error event.
   * @deprecated Use `slotProps.img` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  imgProps: PropTypes.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: PropTypes.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    fallback: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    img: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    fallback: PropTypes.elementType,
    img: PropTypes.elementType,
    root: PropTypes.elementType
  }),
  /**
   * The `src` attribute for the `img` element.
   */
  src: PropTypes.string,
  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet: PropTypes.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The shape of the avatar.
   * @default 'circular'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['circular', 'rounded', 'square']), PropTypes.string])
} : void 0;

const Container = createContainer({
  createStyledComponent: styled$1('div', {
    name: 'MuiContainer',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[`maxWidth${capitalize(String(ownerState.maxWidth))}`], ownerState.fixed && styles.fixed, ownerState.disableGutters && styles.disableGutters];
    }
  }),
  useThemeProps: inProps => useDefaultProps({
    props: inProps,
    name: 'MuiContainer'
  })
});
process.env.NODE_ENV !== "production" ? Container.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: PropTypes.bool,
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   * @default false
   */
  fixed: PropTypes.bool,
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */
  maxWidth: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]), PropTypes.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;

function getDividerUtilityClass(slot) {
  return generateUtilityClass('MuiDivider', slot);
}
const dividerClasses = generateUtilityClasses('MuiDivider', ['root', 'absolute', 'fullWidth', 'inset', 'middle', 'flexItem', 'light', 'vertical', 'withChildren', 'withChildrenVertical', 'textAlignRight', 'textAlignLeft', 'wrapper', 'wrapperVertical']);

const useUtilityClasses$7 = ownerState => {
  const {
    absolute,
    children,
    classes,
    flexItem,
    light,
    orientation,
    textAlign,
    variant
  } = ownerState;
  const slots = {
    root: ['root', absolute && 'absolute', variant, light && 'light', orientation === 'vertical' && 'vertical', flexItem && 'flexItem', children && 'withChildren', children && orientation === 'vertical' && 'withChildrenVertical', textAlign === 'right' && orientation !== 'vertical' && 'textAlignRight', textAlign === 'left' && orientation !== 'vertical' && 'textAlignLeft'],
    wrapper: ['wrapper', orientation === 'vertical' && 'wrapperVertical']
  };
  return composeClasses(slots, getDividerUtilityClass, classes);
};
const DividerRoot = styled$1('div', {
  name: 'MuiDivider',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.absolute && styles.absolute, styles[ownerState.variant], ownerState.light && styles.light, ownerState.orientation === 'vertical' && styles.vertical, ownerState.flexItem && styles.flexItem, ownerState.children && styles.withChildren, ownerState.children && ownerState.orientation === 'vertical' && styles.withChildrenVertical, ownerState.textAlign === 'right' && ownerState.orientation !== 'vertical' && styles.textAlignRight, ownerState.textAlign === 'left' && ownerState.orientation !== 'vertical' && styles.textAlignLeft];
  }
})(memoTheme(({
  theme
}) => ({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: 'solid',
  borderColor: (theme.vars || theme).palette.divider,
  borderBottomWidth: 'thin',
  variants: [{
    props: {
      absolute: true
    },
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    }
  }, {
    props: {
      light: true
    },
    style: {
      borderColor: theme.alpha((theme.vars || theme).palette.divider, 0.08)
    }
  }, {
    props: {
      variant: 'inset'
    },
    style: {
      marginLeft: 72
    }
  }, {
    props: {
      variant: 'middle',
      orientation: 'horizontal'
    },
    style: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    }
  }, {
    props: {
      variant: 'middle',
      orientation: 'vertical'
    },
    style: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  }, {
    props: {
      orientation: 'vertical'
    },
    style: {
      height: '100%',
      borderBottomWidth: 0,
      borderRightWidth: 'thin'
    }
  }, {
    props: {
      flexItem: true
    },
    style: {
      alignSelf: 'stretch',
      height: 'auto'
    }
  }, {
    props: ({
      ownerState
    }) => !!ownerState.children,
    style: {
      display: 'flex',
      textAlign: 'center',
      border: 0,
      borderTopStyle: 'solid',
      borderLeftStyle: 'solid',
      '&::before, &::after': {
        content: '""',
        alignSelf: 'center'
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.children && ownerState.orientation !== 'vertical',
    style: {
      '&::before, &::after': {
        width: '100%',
        borderTop: `thin solid ${(theme.vars || theme).palette.divider}`,
        borderTopStyle: 'inherit'
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.orientation === 'vertical' && ownerState.children,
    style: {
      flexDirection: 'column',
      '&::before, &::after': {
        height: '100%',
        borderLeft: `thin solid ${(theme.vars || theme).palette.divider}`,
        borderLeftStyle: 'inherit'
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.textAlign === 'right' && ownerState.orientation !== 'vertical',
    style: {
      '&::before': {
        width: '90%'
      },
      '&::after': {
        width: '10%'
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.textAlign === 'left' && ownerState.orientation !== 'vertical',
    style: {
      '&::before': {
        width: '10%'
      },
      '&::after': {
        width: '90%'
      }
    }
  }]
})));
const DividerWrapper = styled$1('span', {
  name: 'MuiDivider',
  slot: 'Wrapper',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.wrapper, ownerState.orientation === 'vertical' && styles.wrapperVertical];
  }
})(memoTheme(({
  theme
}) => ({
  display: 'inline-block',
  paddingLeft: `calc(${theme.spacing(1)} * 1.2)`,
  paddingRight: `calc(${theme.spacing(1)} * 1.2)`,
  whiteSpace: 'nowrap',
  variants: [{
    props: {
      orientation: 'vertical'
    },
    style: {
      paddingTop: `calc(${theme.spacing(1)} * 1.2)`,
      paddingBottom: `calc(${theme.spacing(1)} * 1.2)`
    }
  }]
})));
const Divider = /*#__PURE__*/React.forwardRef(function Divider(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiDivider'
  });
  const {
    absolute = false,
    children,
    className,
    orientation = 'horizontal',
    component = children || orientation === 'vertical' ? 'div' : 'hr',
    flexItem = false,
    light = false,
    role = component !== 'hr' ? 'separator' : undefined,
    textAlign = 'center',
    variant = 'fullWidth',
    ...other
  } = props;
  const ownerState = {
    ...props,
    absolute,
    component,
    flexItem,
    light,
    orientation,
    role,
    textAlign,
    variant
  };
  const classes = useUtilityClasses$7(ownerState);
  return /*#__PURE__*/jsx(DividerRoot, {
    as: component,
    className: clsx(classes.root, className),
    role: role,
    ref: ref,
    ownerState: ownerState,
    "aria-orientation": role === 'separator' && (component !== 'hr' || orientation === 'vertical') ? orientation : undefined,
    ...other,
    children: children ? /*#__PURE__*/jsx(DividerWrapper, {
      className: classes.wrapper,
      ownerState: ownerState,
      children: children
    }) : null
  });
});

/**
 * The following flag is used to ensure that this component isn't tabbable i.e.
 * does not get highlight/focus inside of MUI List.
 */
if (Divider) {
  Divider.muiSkipListHighlight = true;
}
process.env.NODE_ENV !== "production" ? Divider.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Absolutely position the element.
   * @default false
   */
  absolute: PropTypes.bool,
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   * @default false
   */
  flexItem: PropTypes.bool,
  /**
   * If `true`, the divider will have a lighter color.
   * @default false
   * @deprecated Use <Divider sx={{ opacity: 0.6 }} /> (or any opacity or color) instead. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  light: PropTypes.bool,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * @ignore
   */
  role: PropTypes.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The text alignment.
   * @default 'center'
   */
  textAlign: PropTypes.oneOf(['center', 'left', 'right']),
  /**
   * The variant to use.
   * @default 'fullWidth'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['fullWidth', 'inset', 'middle']), PropTypes.string])
} : void 0;

function getTranslateValue(direction, node, resolvedContainer) {
  const rect = node.getBoundingClientRect();
  const containerRect = resolvedContainer && resolvedContainer.getBoundingClientRect();
  const containerWindow = ownerWindow(node);
  let transform;
  if (node.fakeTransform) {
    transform = node.fakeTransform;
  } else {
    const computedStyle = containerWindow.getComputedStyle(node);
    transform = computedStyle.getPropertyValue('-webkit-transform') || computedStyle.getPropertyValue('transform');
  }
  let offsetX = 0;
  let offsetY = 0;
  if (transform && transform !== 'none' && typeof transform === 'string') {
    const transformValues = transform.split('(')[1].split(')')[0].split(',');
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }
  if (direction === 'left') {
    if (containerRect) {
      return `translateX(${containerRect.right + offsetX - rect.left}px)`;
    }
    return `translateX(${containerWindow.innerWidth + offsetX - rect.left}px)`;
  }
  if (direction === 'right') {
    if (containerRect) {
      return `translateX(-${rect.right - containerRect.left - offsetX}px)`;
    }
    return `translateX(-${rect.left + rect.width - offsetX}px)`;
  }
  if (direction === 'up') {
    if (containerRect) {
      return `translateY(${containerRect.bottom + offsetY - rect.top}px)`;
    }
    return `translateY(${containerWindow.innerHeight + offsetY - rect.top}px)`;
  }

  // direction === 'down'
  if (containerRect) {
    return `translateY(-${rect.top - containerRect.top + rect.height - offsetY}px)`;
  }
  return `translateY(-${rect.top + rect.height - offsetY}px)`;
}
function resolveContainer(containerPropProp) {
  return typeof containerPropProp === 'function' ? containerPropProp() : containerPropProp;
}
function setTranslateValue(direction, node, containerProp) {
  const resolvedContainer = resolveContainer(containerProp);
  const transform = getTranslateValue(direction, node, resolvedContainer);
  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
}

/**
 * The Slide transition is used by the [Drawer](/material-ui/react-drawer/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
const Slide = /*#__PURE__*/React.forwardRef(function Slide(props, ref) {
  const theme = useTheme();
  const defaultEasing = {
    enter: theme.transitions.easing.easeOut,
    exit: theme.transitions.easing.sharp
  };
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    addEndListener,
    appear = true,
    children,
    container: containerProp,
    direction = 'down',
    easing: easingProp = defaultEasing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition,
    ...other
  } = props;
  const childrenRef = React.useRef(null);
  const handleRef = useForkRef(getReactElementRef(children), childrenRef, ref);
  const normalizedTransitionCallback = callback => isAppearing => {
    if (callback) {
      // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
      if (isAppearing === undefined) {
        callback(childrenRef.current);
      } else {
        callback(childrenRef.current, isAppearing);
      }
    }
  };
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    setTranslateValue(direction, node, containerProp);
    reflow(node);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntering = normalizedTransitionCallback((node, isAppearing) => {
    const transitionProps = getTransitionProps({
      timeout,
      style,
      easing: easingProp
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('-webkit-transform', {
      ...transitionProps
    });
    node.style.transition = theme.transitions.create('transform', {
      ...transitionProps
    });
    node.style.webkitTransform = 'none';
    node.style.transform = 'none';
    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback(node => {
    const transitionProps = getTransitionProps({
      timeout,
      style,
      easing: easingProp
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('-webkit-transform', transitionProps);
    node.style.transition = theme.transitions.create('transform', transitionProps);
    setTranslateValue(direction, node, containerProp);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(node => {
    // No need for transitions when the component is hidden
    node.style.webkitTransition = '';
    node.style.transition = '';
    if (onExited) {
      onExited(node);
    }
  });
  const handleAddEndListener = next => {
    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(childrenRef.current, next);
    }
  };
  const updatePosition = React.useCallback(() => {
    if (childrenRef.current) {
      setTranslateValue(direction, childrenRef.current, containerProp);
    }
  }, [direction, containerProp]);
  React.useEffect(() => {
    // Skip configuration where the position is screen size invariant.
    if (inProp || direction === 'down' || direction === 'right') {
      return undefined;
    }
    const handleResize = debounce(() => {
      if (childrenRef.current) {
        setTranslateValue(direction, childrenRef.current, containerProp);
      }
    });
    const containerWindow = ownerWindow(childrenRef.current);
    containerWindow.addEventListener('resize', handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener('resize', handleResize);
    };
  }, [direction, inProp, containerProp]);
  React.useEffect(() => {
    if (!inProp) {
      // We need to update the position of the drawer when the direction change and
      // when it's hidden.
      updatePosition();
    }
  }, [inProp, updatePosition]);
  return /*#__PURE__*/jsx(TransitionComponent, {
    nodeRef: childrenRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    appear: appear,
    in: inProp,
    timeout: timeout,
    ...other,
    children: (state, {
      ownerState,
      ...restChildProps
    }) => {
      return /*#__PURE__*/React.cloneElement(children, {
        ref: handleRef,
        style: {
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
          ...style,
          ...children.props.style
        },
        ...restChildProps
      });
    }
  });
});
process.env.NODE_ENV !== "production" ? Slide.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: PropTypes.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: PropTypes.bool,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: chainPropTypes(PropTypes.oneOfType([HTMLElementType, PropTypes.func]), props => {
    if (props.open) {
      const resolvedContainer = resolveContainer(props.container);
      if (resolvedContainer && resolvedContainer.nodeType === 1) {
        const box = resolvedContainer.getBoundingClientRect();
        if (process.env.NODE_ENV !== 'production' && !globalThis.MUI_TEST_ENV && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(['MUI: The `container` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      } else if (!resolvedContainer || typeof resolvedContainer.getBoundingClientRect !== 'function' || resolvedContainer.contextElement != null && resolvedContainer.contextElement.nodeType !== 1) {
        return new Error(['MUI: The `container` prop provided to the component is invalid.', 'It should be an HTML element instance.'].join('\n'));
      }
    }
    return null;
  }),
  /**
   * Direction the child node will enter from.
   * @default 'down'
   */
  direction: PropTypes.oneOf(['down', 'left', 'right', 'up']),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
   */
  easing: PropTypes.oneOfType([PropTypes.shape({
    enter: PropTypes.string,
    exit: PropTypes.string
  }), PropTypes.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: PropTypes.bool,
  /**
   * @ignore
   */
  onEnter: PropTypes.func,
  /**
   * @ignore
   */
  onEntered: PropTypes.func,
  /**
   * @ignore
   */
  onEntering: PropTypes.func,
  /**
   * @ignore
   */
  onExit: PropTypes.func,
  /**
   * @ignore
   */
  onExited: PropTypes.func,
  /**
   * @ignore
   */
  onExiting: PropTypes.func,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    appear: PropTypes.number,
    enter: PropTypes.number,
    exit: PropTypes.number
  })])
} : void 0;

function getDrawerUtilityClass(slot) {
  return generateUtilityClass('MuiDrawer', slot);
}
generateUtilityClasses('MuiDrawer', ['root', 'docked', 'paper', 'anchorLeft', 'anchorRight', 'anchorTop', 'anchorBottom', 'paperAnchorLeft', 'paperAnchorRight', 'paperAnchorTop', 'paperAnchorBottom', 'paperAnchorDockedLeft', 'paperAnchorDockedRight', 'paperAnchorDockedTop', 'paperAnchorDockedBottom', 'modal']);

const overridesResolver$2 = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, (ownerState.variant === 'permanent' || ownerState.variant === 'persistent') && styles.docked, ownerState.variant === 'temporary' && styles.modal];
};
const useUtilityClasses$6 = ownerState => {
  const {
    classes,
    anchor,
    variant
  } = ownerState;
  const slots = {
    root: ['root', `anchor${capitalize(anchor)}`],
    docked: [(variant === 'permanent' || variant === 'persistent') && 'docked'],
    modal: ['modal'],
    paper: ['paper', `paperAnchor${capitalize(anchor)}`, variant !== 'temporary' && `paperAnchorDocked${capitalize(anchor)}`]
  };
  return composeClasses(slots, getDrawerUtilityClass, classes);
};
const DrawerRoot = styled$1(Modal, {
  name: 'MuiDrawer',
  slot: 'Root',
  overridesResolver: overridesResolver$2
})(memoTheme(({
  theme
}) => ({
  zIndex: (theme.vars || theme).zIndex.drawer
})));
const DrawerDockedRoot = styled$1('div', {
  shouldForwardProp: rootShouldForwardProp,
  name: 'MuiDrawer',
  slot: 'Docked',
  skipVariantsResolver: false,
  overridesResolver: overridesResolver$2
})({
  flex: '0 0 auto'
});
const DrawerPaper = styled$1(Paper, {
  name: 'MuiDrawer',
  slot: 'Paper',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.paper, styles[`paperAnchor${capitalize(ownerState.anchor)}`], ownerState.variant !== 'temporary' && styles[`paperAnchorDocked${capitalize(ownerState.anchor)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  flex: '1 0 auto',
  zIndex: (theme.vars || theme).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: 'touch',
  // temporary style
  position: 'fixed',
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0,
  variants: [{
    props: {
      anchor: 'left'
    },
    style: {
      left: 0
    }
  }, {
    props: {
      anchor: 'top'
    },
    style: {
      top: 0,
      left: 0,
      right: 0,
      height: 'auto',
      maxHeight: '100%'
    }
  }, {
    props: {
      anchor: 'right'
    },
    style: {
      right: 0
    }
  }, {
    props: {
      anchor: 'bottom'
    },
    style: {
      top: 'auto',
      left: 0,
      bottom: 0,
      right: 0,
      height: 'auto',
      maxHeight: '100%'
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchor === 'left' && ownerState.variant !== 'temporary',
    style: {
      borderRight: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchor === 'top' && ownerState.variant !== 'temporary',
    style: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchor === 'right' && ownerState.variant !== 'temporary',
    style: {
      borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.anchor === 'bottom' && ownerState.variant !== 'temporary',
    style: {
      borderTop: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }]
})));
const oppositeDirection = {
  left: 'right',
  right: 'left',
  top: 'down',
  bottom: 'up'
};
function isHorizontal(anchor) {
  return ['left', 'right'].includes(anchor);
}
function getAnchor({
  direction
}, anchor) {
  return direction === 'rtl' && isHorizontal(anchor) ? oppositeDirection[anchor] : anchor;
}

/**
 * The props of the [Modal](/material-ui/api/modal/) component are available
 * when `variant="temporary"` is set.
 */
const Drawer = /*#__PURE__*/React.forwardRef(function Drawer(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiDrawer'
  });
  const theme = useTheme();
  const isRtl = useRtl();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    anchor: anchorProp = 'left',
    BackdropProps,
    children,
    className,
    elevation = 16,
    hideBackdrop = false,
    ModalProps: {
      BackdropProps: BackdropPropsProp,
      ...ModalProps
    } = {},
    onClose,
    open = false,
    PaperProps = {},
    SlideProps,
    // eslint-disable-next-line react/prop-types
    TransitionComponent,
    transitionDuration = defaultTransitionDuration,
    variant = 'temporary',
    slots = {},
    slotProps = {},
    ...other
  } = props;

  // Let's assume that the Drawer will always be rendered on user space.
  // We use this state is order to skip the appear transition during the
  // initial mount of the component.
  const mounted = React.useRef(false);
  React.useEffect(() => {
    mounted.current = true;
  }, []);
  const anchorInvariant = getAnchor({
    direction: isRtl ? 'rtl' : 'ltr'
  }, anchorProp);
  const anchor = anchorProp;
  const ownerState = {
    ...props,
    anchor,
    elevation,
    open,
    variant,
    ...other
  };
  const classes = useUtilityClasses$6(ownerState);
  const externalForwardedProps = {
    slots: {
      transition: TransitionComponent,
      ...slots
    },
    slotProps: {
      paper: PaperProps,
      transition: SlideProps,
      ...slotProps,
      backdrop: mergeSlotProps(slotProps.backdrop || {
        ...BackdropProps,
        ...BackdropPropsProp
      }, {
        transitionDuration
      })
    }
  };
  const [RootSlot, rootSlotProps] = useSlot('root', {
    ref,
    elementType: DrawerRoot,
    className: clsx(classes.root, classes.modal, className),
    shouldForwardComponentProp: true,
    ownerState,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other,
      ...ModalProps
    },
    additionalProps: {
      open,
      onClose,
      hideBackdrop,
      slots: {
        backdrop: externalForwardedProps.slots.backdrop
      },
      slotProps: {
        backdrop: externalForwardedProps.slotProps.backdrop
      }
    }
  });
  const [PaperSlot, paperSlotProps] = useSlot('paper', {
    elementType: DrawerPaper,
    shouldForwardComponentProp: true,
    className: clsx(classes.paper, PaperProps.className),
    ownerState,
    externalForwardedProps,
    additionalProps: {
      elevation: variant === 'temporary' ? elevation : 0,
      square: true,
      ...(variant === 'temporary' && {
        role: 'dialog',
        'aria-modal': 'true'
      })
    }
  });
  const [DockedSlot, dockedSlotProps] = useSlot('docked', {
    elementType: DrawerDockedRoot,
    ref,
    className: clsx(classes.root, classes.docked, className),
    ownerState,
    externalForwardedProps,
    additionalProps: other // pass `other` here because `DockedSlot` is also a root slot for some variants
  });
  const [TransitionSlot, transitionSlotProps] = useSlot('transition', {
    elementType: Slide,
    ownerState,
    externalForwardedProps,
    additionalProps: {
      in: open,
      direction: oppositeDirection[anchorInvariant],
      timeout: transitionDuration,
      appear: mounted.current
    }
  });
  const drawer = /*#__PURE__*/jsx(PaperSlot, {
    ...paperSlotProps,
    children: children
  });
  if (variant === 'permanent') {
    return /*#__PURE__*/jsx(DockedSlot, {
      ...dockedSlotProps,
      children: drawer
    });
  }
  const slidingDrawer = /*#__PURE__*/jsx(TransitionSlot, {
    ...transitionSlotProps,
    children: drawer
  });
  if (variant === 'persistent') {
    return /*#__PURE__*/jsx(DockedSlot, {
      ...dockedSlotProps,
      children: slidingDrawer
    });
  }

  // variant === temporary
  return /*#__PURE__*/jsx(RootSlot, {
    ...rootSlotProps,
    children: slidingDrawer
  });
});
process.env.NODE_ENV !== "production" ? Drawer.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor: PropTypes.oneOf(['bottom', 'left', 'right', 'top']),
  /**
   * @ignore
   */
  BackdropProps: PropTypes.object,
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The elevation of the drawer.
   * @default 16
   */
  elevation: integerPropType,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: PropTypes.bool,
  /**
   * Props applied to the [`Modal`](https://mui.com/material-ui/api/modal/) element.
   * @default {}
   */
  ModalProps: PropTypes.object,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: PropTypes.func,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: PropTypes.bool,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @deprecated use the `slotProps.paper` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  PaperProps: PropTypes.object,
  /**
   * Props applied to the [`Slide`](https://mui.com/material-ui/api/slide/) element.
   * @deprecated use the `slotProps.transition` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  SlideProps: PropTypes.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    backdrop: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    docked: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    paper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    transition: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    backdrop: PropTypes.elementType,
    docked: PropTypes.elementType,
    paper: PropTypes.elementType,
    root: PropTypes.elementType,
    transition: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    appear: PropTypes.number,
    enter: PropTypes.number,
    exit: PropTypes.number
  })]),
  /**
   * The variant to use.
   * @default 'temporary'
   */
  variant: PropTypes.oneOf(['permanent', 'persistent', 'temporary'])
} : void 0;

function getListItemUtilityClass(slot) {
  return generateUtilityClass('MuiListItem', slot);
}
generateUtilityClasses('MuiListItem', ['root', 'container', 'dense', 'alignItemsFlexStart', 'divider', 'gutters', 'padding', 'secondaryAction']);

function getListItemButtonUtilityClass(slot) {
  return generateUtilityClass('MuiListItemButton', slot);
}
const listItemButtonClasses = generateUtilityClasses('MuiListItemButton', ['root', 'focusVisible', 'dense', 'alignItemsFlexStart', 'disabled', 'divider', 'gutters', 'selected']);

const overridesResolver$1 = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, ownerState.dense && styles.dense, ownerState.alignItems === 'flex-start' && styles.alignItemsFlexStart, ownerState.divider && styles.divider, !ownerState.disableGutters && styles.gutters];
};
const useUtilityClasses$5 = ownerState => {
  const {
    alignItems,
    classes,
    dense,
    disabled,
    disableGutters,
    divider,
    selected
  } = ownerState;
  const slots = {
    root: ['root', dense && 'dense', !disableGutters && 'gutters', divider && 'divider', disabled && 'disabled', alignItems === 'flex-start' && 'alignItemsFlexStart', selected && 'selected']
  };
  const composedClasses = composeClasses(slots, getListItemButtonUtilityClass, classes);
  return {
    ...classes,
    ...composedClasses
  };
};
const ListItemButtonRoot = styled$1(ButtonBase, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiListItemButton',
  slot: 'Root',
  overridesResolver: overridesResolver$1
})(memoTheme(({
  theme
}) => ({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  textDecoration: 'none',
  minWidth: 0,
  boxSizing: 'border-box',
  textAlign: 'left',
  paddingTop: 8,
  paddingBottom: 8,
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    textDecoration: 'none',
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  [`&.${listItemButtonClasses.selected}`]: {
    backgroundColor: theme.alpha((theme.vars || theme).palette.primary.main, (theme.vars || theme).palette.action.selectedOpacity),
    [`&.${listItemButtonClasses.focusVisible}`]: {
      backgroundColor: theme.alpha((theme.vars || theme).palette.primary.main, `${(theme.vars || theme).palette.action.selectedOpacity} + ${(theme.vars || theme).palette.action.focusOpacity}`)
    }
  },
  [`&.${listItemButtonClasses.selected}:hover`]: {
    backgroundColor: theme.alpha((theme.vars || theme).palette.primary.main, `${(theme.vars || theme).palette.action.selectedOpacity} + ${(theme.vars || theme).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: theme.alpha((theme.vars || theme).palette.primary.main, (theme.vars || theme).palette.action.selectedOpacity)
    }
  },
  [`&.${listItemButtonClasses.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${listItemButtonClasses.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.divider,
    style: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
      backgroundClip: 'padding-box'
    }
  }, {
    props: {
      alignItems: 'flex-start'
    },
    style: {
      alignItems: 'flex-start'
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.dense,
    style: {
      paddingTop: 4,
      paddingBottom: 4
    }
  }]
})));
const ListItemButton = /*#__PURE__*/React.forwardRef(function ListItemButton(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiListItemButton'
  });
  const {
    alignItems = 'center',
    autoFocus = false,
    component = 'div',
    children,
    dense = false,
    disableGutters = false,
    divider = false,
    focusVisibleClassName,
    selected = false,
    className,
    ...other
  } = props;
  const context = React.useContext(ListContext);
  const childContext = React.useMemo(() => ({
    dense: dense || context.dense || false,
    alignItems,
    disableGutters
  }), [alignItems, context.dense, dense, disableGutters]);
  const listItemRef = React.useRef(null);
  useEnhancedEffect(() => {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (process.env.NODE_ENV !== 'production') {
        console.error('MUI: Unable to set focus to a ListItemButton whose component has not been rendered.');
      }
    }
  }, [autoFocus]);
  const ownerState = {
    ...props,
    alignItems,
    dense: childContext.dense,
    disableGutters,
    divider,
    selected
  };
  const classes = useUtilityClasses$5(ownerState);
  const handleRef = useForkRef(listItemRef, ref);
  return /*#__PURE__*/jsx(ListContext.Provider, {
    value: childContext,
    children: /*#__PURE__*/jsx(ListItemButtonRoot, {
      ref: handleRef,
      href: other.href || other.to
      // `ButtonBase` processes `href` or `to` if `component` is set to 'button'
      ,
      component: (other.href || other.to) && component === 'div' ? 'button' : component,
      focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
      ownerState: ownerState,
      className: clsx(classes.root, className),
      ...other,
      classes: classes,
      children: children
    })
  });
});
process.env.NODE_ENV !== "production" ? ListItemButton.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: PropTypes.oneOf(['center', 'flex-start']),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: PropTypes.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: PropTypes.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: PropTypes.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: PropTypes.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: PropTypes.string,
  /**
   * @ignore
   */
  href: PropTypes.string,
  /**
   * Use to apply selected styling.
   * @default false
   */
  selected: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;

function getListItemSecondaryActionClassesUtilityClass(slot) {
  return generateUtilityClass('MuiListItemSecondaryAction', slot);
}
generateUtilityClasses('MuiListItemSecondaryAction', ['root', 'disableGutters']);

const useUtilityClasses$4 = ownerState => {
  const {
    disableGutters,
    classes
  } = ownerState;
  const slots = {
    root: ['root', disableGutters && 'disableGutters']
  };
  return composeClasses(slots, getListItemSecondaryActionClassesUtilityClass, classes);
};
const ListItemSecondaryActionRoot = styled$1('div', {
  name: 'MuiListItemSecondaryAction',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.disableGutters && styles.disableGutters];
  }
})({
  position: 'absolute',
  right: 16,
  top: '50%',
  transform: 'translateY(-50%)',
  variants: [{
    props: ({
      ownerState
    }) => ownerState.disableGutters,
    style: {
      right: 0
    }
  }]
});

/**
 * Must be used as the last child of ListItem to function properly.
 *
 * @deprecated Use the `secondaryAction` prop in the `ListItem` component instead. This component will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
 */
const ListItemSecondaryAction = /*#__PURE__*/React.forwardRef(function ListItemSecondaryAction(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiListItemSecondaryAction'
  });
  const {
    className,
    ...other
  } = props;
  const context = React.useContext(ListContext);
  const ownerState = {
    ...props,
    disableGutters: context.disableGutters
  };
  const classes = useUtilityClasses$4(ownerState);
  return /*#__PURE__*/jsx(ListItemSecondaryActionRoot, {
    className: clsx(classes.root, className),
    ownerState: ownerState,
    ref: ref,
    ...other
  });
});
process.env.NODE_ENV !== "production" ? ListItemSecondaryAction.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';

const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, ownerState.dense && styles.dense, ownerState.alignItems === 'flex-start' && styles.alignItemsFlexStart, ownerState.divider && styles.divider, !ownerState.disableGutters && styles.gutters, !ownerState.disablePadding && styles.padding, ownerState.hasSecondaryAction && styles.secondaryAction];
};
const useUtilityClasses$3 = ownerState => {
  const {
    alignItems,
    classes,
    dense,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction
  } = ownerState;
  const slots = {
    root: ['root', dense && 'dense', !disableGutters && 'gutters', !disablePadding && 'padding', divider && 'divider', alignItems === 'flex-start' && 'alignItemsFlexStart', hasSecondaryAction && 'secondaryAction'],
    container: ['container'],
    secondaryAction: ['secondaryAction']
  };
  return composeClasses(slots, getListItemUtilityClass, classes);
};
const ListItemRoot = styled$1('div', {
  name: 'MuiListItem',
  slot: 'Root',
  overridesResolver
})(memoTheme(({
  theme
}) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  textDecoration: 'none',
  width: '100%',
  boxSizing: 'border-box',
  textAlign: 'left',
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disablePadding && ownerState.dense,
    style: {
      paddingTop: 4,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disablePadding && !ownerState.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState
    }) => !ownerState.disablePadding && !!ownerState.secondaryAction,
    style: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    }
  }, {
    props: ({
      ownerState
    }) => !!ownerState.secondaryAction,
    style: {
      [`& > .${listItemButtonClasses.root}`]: {
        paddingRight: 48
      }
    }
  }, {
    props: {
      alignItems: 'flex-start'
    },
    style: {
      alignItems: 'flex-start'
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.divider,
    style: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
      backgroundClip: 'padding-box'
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.button,
    style: {
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: (theme.vars || theme).palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.hasSecondaryAction,
    style: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    }
  }]
})));
const ListItemContainer = styled$1('li', {
  name: 'MuiListItem',
  slot: 'Container'
})({
  position: 'relative'
});

/**
 * Uses an additional container component if `ListItemSecondaryAction` is the last child.
 */
const ListItem = /*#__PURE__*/React.forwardRef(function ListItem(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiListItem'
  });
  const {
    alignItems = 'center',
    children: childrenProp,
    className,
    component: componentProp,
    components = {},
    componentsProps = {},
    ContainerComponent = 'li',
    ContainerProps: {
      className: ContainerClassName,
      ...ContainerProps
    } = {},
    dense = false,
    disableGutters = false,
    disablePadding = false,
    divider = false,
    secondaryAction,
    slotProps = {},
    slots = {},
    ...other
  } = props;
  const context = React.useContext(ListContext);
  const childContext = React.useMemo(() => ({
    dense: dense || context.dense || false,
    alignItems,
    disableGutters
  }), [alignItems, context.dense, dense, disableGutters]);
  const listItemRef = React.useRef(null);
  const children = React.Children.toArray(childrenProp);

  // v4 implementation, deprecated in v6, will be removed in a future major release
  const hasSecondaryAction = children.length && isMuiElement(children[children.length - 1], ['ListItemSecondaryAction']);
  const ownerState = {
    ...props,
    alignItems,
    dense: childContext.dense,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction
  };
  const classes = useUtilityClasses$3(ownerState);
  const handleRef = useForkRef(listItemRef, ref);
  const externalForwardedProps = {
    slots,
    slotProps
  };
  const [SecondaryActionSlot, secondaryActionSlotProps] = useSlot('secondaryAction', {
    elementType: ListItemSecondaryAction,
    externalForwardedProps,
    ownerState,
    className: classes.secondaryAction
  });
  const Root = slots.root || components.Root || ListItemRoot;
  const rootProps = slotProps.root || componentsProps.root || {};
  const componentProps = {
    className: clsx(classes.root, rootProps.className, className),
    ...other
  };
  let Component = componentProp || 'li';

  // v4 implementation, deprecated in v6, will be removed in a future major release
  if (hasSecondaryAction) {
    // Use div by default.
    Component = !componentProps.component && !componentProp ? 'div' : Component;

    // Avoid nesting of li > li.
    if (ContainerComponent === 'li') {
      if (Component === 'li') {
        Component = 'div';
      } else if (componentProps.component === 'li') {
        componentProps.component = 'div';
      }
    }
    return /*#__PURE__*/jsx(ListContext.Provider, {
      value: childContext,
      children: /*#__PURE__*/jsxs(ListItemContainer, {
        as: ContainerComponent,
        className: clsx(classes.container, ContainerClassName),
        ref: handleRef,
        ownerState: ownerState,
        ...ContainerProps,
        children: [/*#__PURE__*/jsx(Root, {
          ...rootProps,
          ...(!isHostComponent(Root) && {
            as: Component,
            ownerState: {
              ...ownerState,
              ...rootProps.ownerState
            }
          }),
          ...componentProps,
          children: children
        }), children.pop()]
      })
    });
  }
  return /*#__PURE__*/jsx(ListContext.Provider, {
    value: childContext,
    children: /*#__PURE__*/jsxs(Root, {
      ...rootProps,
      as: Component,
      ref: handleRef,
      ...(!isHostComponent(Root) && {
        ownerState: {
          ...ownerState,
          ...rootProps.ownerState
        }
      }),
      ...componentProps,
      children: [children, secondaryAction && /*#__PURE__*/jsx(SecondaryActionSlot, {
        ...secondaryActionSlotProps,
        children: secondaryAction
      })]
    })
  });
});
process.env.NODE_ENV !== "production" ? ListItem.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: PropTypes.oneOf(['center', 'flex-start']),
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: chainPropTypes(PropTypes.node, props => {
    const children = React.Children.toArray(props.children);

    // React.Children.toArray(props.children).findLastIndex(isListItemSecondaryAction)
    let secondaryActionIndex = -1;
    for (let i = children.length - 1; i >= 0; i -= 1) {
      const child = children[i];
      if (isMuiElement(child, ['ListItemSecondaryAction'])) {
        secondaryActionIndex = i;
        break;
      }
    }

    //  is ListItemSecondaryAction the last child of ListItem
    if (secondaryActionIndex !== -1 && secondaryActionIndex !== children.length - 1) {
      return new Error('MUI: You used an element after ListItemSecondaryAction. ' + 'For ListItem to detect that it has a secondary action ' + 'you must pass it as the last child to ListItem.');
    }
    return null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  components: PropTypes.shape({
    Root: PropTypes.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   * @default {}
   */
  componentsProps: PropTypes.shape({
    root: PropTypes.object
  }),
  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   * @default 'li'
   * @deprecated Use the `component` or `slots.root` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ContainerComponent: elementTypeAcceptingRef,
  /**
   * Props applied to the container component if used.
   * @default {}
   * @deprecated Use the `slotProps.root` prop instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  ContainerProps: PropTypes.object,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: PropTypes.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: PropTypes.bool,
  /**
   * If `true`, all padding is removed.
   * @default false
   */
  disablePadding: PropTypes.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: PropTypes.bool,
  /**
   * The element to display at the end of ListItem.
   */
  secondaryAction: PropTypes.node,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: PropTypes.shape({
    root: PropTypes.object,
    secondaryAction: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: PropTypes.shape({
    root: PropTypes.elementType,
    secondaryAction: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;

function getListItemIconUtilityClass(slot) {
  return generateUtilityClass('MuiListItemIcon', slot);
}
const listItemIconClasses = generateUtilityClasses('MuiListItemIcon', ['root', 'alignItemsFlexStart']);

const useUtilityClasses$2 = ownerState => {
  const {
    alignItems,
    classes
  } = ownerState;
  const slots = {
    root: ['root', alignItems === 'flex-start' && 'alignItemsFlexStart']
  };
  return composeClasses(slots, getListItemIconUtilityClass, classes);
};
const ListItemIconRoot = styled$1('div', {
  name: 'MuiListItemIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.alignItems === 'flex-start' && styles.alignItemsFlexStart];
  }
})(memoTheme(({
  theme
}) => ({
  minWidth: 56,
  color: (theme.vars || theme).palette.action.active,
  flexShrink: 0,
  display: 'inline-flex',
  variants: [{
    props: {
      alignItems: 'flex-start'
    },
    style: {
      marginTop: 8
    }
  }]
})));

/**
 * A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
 */
const ListItemIcon = /*#__PURE__*/React.forwardRef(function ListItemIcon(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiListItemIcon'
  });
  const {
    className,
    ...other
  } = props;
  const context = React.useContext(ListContext);
  const ownerState = {
    ...props,
    alignItems: context.alignItems
  };
  const classes = useUtilityClasses$2(ownerState);
  return /*#__PURE__*/jsx(ListItemIconRoot, {
    className: clsx(classes.root, className),
    ownerState: ownerState,
    ref: ref,
    ...other
  });
});
process.env.NODE_ENV !== "production" ? ListItemIcon.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@mui/icons-material` SVG icon element.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;

function getListItemTextUtilityClass(slot) {
  return generateUtilityClass('MuiListItemText', slot);
}
const listItemTextClasses = generateUtilityClasses('MuiListItemText', ['root', 'multiline', 'dense', 'inset', 'primary', 'secondary']);

const useUtilityClasses$1 = ownerState => {
  const {
    classes,
    inset,
    primary,
    secondary,
    dense
  } = ownerState;
  const slots = {
    root: ['root', inset && 'inset', dense && 'dense', primary && secondary && 'multiline'],
    primary: ['primary'],
    secondary: ['secondary']
  };
  return composeClasses(slots, getListItemTextUtilityClass, classes);
};
const ListItemTextRoot = styled$1('div', {
  name: 'MuiListItemText',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${listItemTextClasses.primary}`]: styles.primary
    }, {
      [`& .${listItemTextClasses.secondary}`]: styles.secondary
    }, styles.root, ownerState.inset && styles.inset, ownerState.primary && ownerState.secondary && styles.multiline, ownerState.dense && styles.dense];
  }
})({
  flex: '1 1 auto',
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4,
  [`.${typographyClasses.root}:where(& .${listItemTextClasses.primary})`]: {
    display: 'block'
  },
  [`.${typographyClasses.root}:where(& .${listItemTextClasses.secondary})`]: {
    display: 'block'
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.primary && ownerState.secondary,
    style: {
      marginTop: 6,
      marginBottom: 6
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.inset,
    style: {
      paddingLeft: 56
    }
  }]
});
const ListItemText = /*#__PURE__*/React.forwardRef(function ListItemText(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiListItemText'
  });
  const {
    children,
    className,
    disableTypography = false,
    inset = false,
    primary: primaryProp,
    primaryTypographyProps,
    secondary: secondaryProp,
    secondaryTypographyProps,
    slots = {},
    slotProps = {},
    ...other
  } = props;
  const {
    dense
  } = React.useContext(ListContext);
  let primary = primaryProp != null ? primaryProp : children;
  let secondary = secondaryProp;
  const ownerState = {
    ...props,
    disableTypography,
    inset,
    primary: !!primary,
    secondary: !!secondary,
    dense
  };
  const classes = useUtilityClasses$1(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps: {
      primary: primaryTypographyProps,
      secondary: secondaryTypographyProps,
      ...slotProps
    }
  };
  const [RootSlot, rootSlotProps] = useSlot('root', {
    className: clsx(classes.root, className),
    elementType: ListItemTextRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    ref
  });
  const [PrimarySlot, primarySlotProps] = useSlot('primary', {
    className: classes.primary,
    elementType: Typography,
    externalForwardedProps,
    ownerState
  });
  const [SecondarySlot, secondarySlotProps] = useSlot('secondary', {
    className: classes.secondary,
    elementType: Typography,
    externalForwardedProps,
    ownerState
  });
  if (primary != null && primary.type !== Typography && !disableTypography) {
    primary = /*#__PURE__*/jsx(PrimarySlot, {
      variant: dense ? 'body2' : 'body1',
      component: primarySlotProps?.variant ? undefined : 'span',
      ...primarySlotProps,
      children: primary
    });
  }
  if (secondary != null && secondary.type !== Typography && !disableTypography) {
    secondary = /*#__PURE__*/jsx(SecondarySlot, {
      variant: "body2",
      color: "textSecondary",
      ...secondarySlotProps,
      children: secondary
    });
  }
  return /*#__PURE__*/jsxs(RootSlot, {
    ...rootSlotProps,
    children: [primary, secondary]
  });
});
process.env.NODE_ENV !== "production" ? ListItemText.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Alias for the `primary` prop.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   * @default false
   */
  disableTypography: PropTypes.bool,
  /**
   * If `true`, the children are indented.
   * This should be used if there is no left avatar or left icon.
   * @default false
   */
  inset: PropTypes.bool,
  /**
   * The main content element.
   */
  primary: PropTypes.node,
  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   * @deprecated Use `slotProps.primary` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  primaryTypographyProps: PropTypes.object,
  /**
   * The secondary content element.
   */
  secondary: PropTypes.node,
  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   * @deprecated Use `slotProps.secondary` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  secondaryTypographyProps: PropTypes.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    primary: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    secondary: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    primary: PropTypes.elementType,
    root: PropTypes.elementType,
    secondary: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;

function getToolbarUtilityClass(slot) {
  return generateUtilityClass('MuiToolbar', slot);
}
generateUtilityClasses('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);

const useUtilityClasses = ownerState => {
  const {
    classes,
    disableGutters,
    variant
  } = ownerState;
  const slots = {
    root: ['root', !disableGutters && 'gutters', variant]
  };
  return composeClasses(slots, getToolbarUtilityClass, classes);
};
const ToolbarRoot = styled$1('div', {
  name: 'MuiToolbar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disableGutters && styles.gutters, styles[ownerState.variant]];
  }
})(memoTheme(({
  theme
}) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.disableGutters,
    style: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
      }
    }
  }, {
    props: {
      variant: 'dense'
    },
    style: {
      minHeight: 48
    }
  }, {
    props: {
      variant: 'regular'
    },
    style: theme.mixins.toolbar
  }]
})));
const Toolbar = /*#__PURE__*/React.forwardRef(function Toolbar(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiToolbar'
  });
  const {
    className,
    component = 'div',
    disableGutters = false,
    variant = 'regular',
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    disableGutters,
    variant
  };
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/jsx(ToolbarRoot, {
    as: component,
    className: clsx(classes.root, className),
    ref: ref,
    ownerState: ownerState,
    ...other
  });
});
process.env.NODE_ENV !== "production" ? Toolbar.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   * The Toolbar is a flex container, allowing flex item properties to be used to lay out the children.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, disables gutter padding.
   * @default false
   */
  disableGutters: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The variant to use.
   * @default 'regular'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['dense', 'regular']), PropTypes.string])
} : void 0;

function parseApiErrorBody(raw) {
  if (!raw || typeof raw !== "object") return null;
  const o = raw;
  if (typeof o.error === "string") return o.error;
  if (o.error && typeof o.error === "object") {
    const e = o.error;
    const formErrors = e.formErrors;
    if (Array.isArray(formErrors) && typeof formErrors[0] === "string") return formErrors[0];
    const fieldErrors = e.fieldErrors;
    if (fieldErrors && typeof fieldErrors === "object") {
      const firstList = Object.values(fieldErrors).find(
        (arr) => Array.isArray(arr) && arr.length
      );
      if (firstList?.[0]) return firstList[0];
    }
  }
  return null;
}
class ApiValidationError extends Error {
  constructor(message, fieldErrors, context) {
    super(message);
    this.name = "ApiValidationError";
    this.fieldErrors = fieldErrors;
    this.context = context;
  }
}
function parseApiFieldErrors(raw) {
  if (!raw || typeof raw !== "object") return null;
  const o = raw;
  if (!o.error || typeof o.error !== "object") return null;
  const e = o.error;
  const fieldErrors = e.fieldErrors;
  if (!fieldErrors || typeof fieldErrors !== "object") return null;
  return fieldErrors;
}
function firstApiFieldErrorKey(fieldErrors) {
  const entry = Object.entries(fieldErrors).find(([, errors]) => Array.isArray(errors) && errors.length > 0);
  return entry?.[0] ?? null;
}
function httpStatusFallbackMessage(res) {
  if (res.status >= 500) return "Serwer jest chwilowo niedostępny. Spróbuj ponownie za chwilę.";
  if (res.status === 401) return "Musisz się zalogować.";
  if (res.status === 403) return "Brak uprawnień do tej operacji.";
  if (res.status === 404) return "Nie znaleziono zasobu.";
  return `Żądanie nie powiodło się (${res.status}).`;
}
async function getErrorMessageFromResponse(res, fallback) {
  const raw = await res.json().catch(() => null);
  return parseApiErrorBody(raw) ?? httpStatusFallbackMessage(res) ?? fallback;
}
async function parseFormErrorFromResponse(response, fallback) {
  const errorBody = await response.json().catch(() => null);
  const fieldErrors = errorBody?.error?.fieldErrors ?? {};
  const fieldMessages = Object.values(fieldErrors).reduce((acc, errors) => {
    if (errors) acc.push(...errors);
    return acc;
  }, []);
  return errorBody?.error?.formErrors?.[0] ?? fieldMessages[0] ?? fallback;
}

async function fetchCurrentUserProfile(signal) {
  const res = await fetch("/api/users/me", { signal });
  if (!res.ok) {
    const msg = await getErrorMessageFromResponse(res, "Nie udało się pobrać danych użytkownika");
    throw new Error(msg);
  }
  const body = await res.json();
  const firstName = body.firstName?.trim() ?? "";
  const lastName = body.lastName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  if (!email) {
    throw new Error("Nie udało się pobrać danych użytkownika");
  }
  return { firstName, lastName, email };
}
async function updateCurrentUserProfile(body) {
  const res = await fetch("/api/users/me", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const msg = await getErrorMessageFromResponse(res, "Nie udało się zapisać danych użytkownika");
    throw new Error(msg);
  }
  const updated = await res.json();
  const firstName = updated.firstName?.trim() ?? "";
  const lastName = updated.lastName?.trim() ?? "";
  const email = updated.email?.trim() ?? "";
  if (!firstName || !lastName || !email) {
    throw new Error("Nie udało się zapisać danych użytkownika");
  }
  return { firstName, lastName, email };
}
async function deleteCurrentUserAccount(confirmation) {
  const res = await fetch("/api/users/me/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ confirmation })
  });
  if (!res.ok) {
    const msg = await getErrorMessageFromResponse(res, "Nie udało się usunąć konta");
    throw new Error(msg);
  }
}

const MENU_ITEMS = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/tournaments", icon: Trophy, label: "Turnieje" },
  { href: "/club", icon: Building2, label: "Mój Klub Sportowy" },
  { href: "/settings", icon: Settings, label: "Ustawienia Sezonu" }
];
const DRAWER_WIDTH = 280;
const APP_TITLE = "Wheelchair Rugby Manager";
const isPathActive = (currentPath, path) => currentPath === path || path !== "/" && currentPath.startsWith(path);
const SELECTED_ITEM_SX = {
  borderRadius: 1.5,
  mb: 1,
  "&.Mui-selected": {
    backgroundColor: "primary.main",
    color: "white",
    "&:hover": { backgroundColor: "primary.dark" }
  }
};
function NavigationItem({
  href,
  label,
  icon,
  selected,
  onClick
}) {
  return /* @__PURE__ */ jsx(ListItem, { disablePadding: true, children: /* @__PURE__ */ jsxs(ListItemButton, { component: "a", href, selected, onClick, sx: SELECTED_ITEM_SX, children: [
    /* @__PURE__ */ jsx(ListItemIcon, { sx: { minWidth: 40, color: "inherit" }, children: icon }),
    /* @__PURE__ */ jsx(ListItemText, { primary: label })
  ] }) });
}
function DrawerContent({
  currentPath,
  onCloseMobile,
  onLogout,
  userName
}) {
  return /* @__PURE__ */ jsxs(Box, { sx: { width: "100%", p: 2, display: "flex", flexDirection: "column", minHeight: "100%" }, children: [
    /* @__PURE__ */ jsxs(Box, { children: [
      /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 2, mb: 3 }, children: [
        /* @__PURE__ */ jsx(Avatar, { sx: { bgcolor: "primary.main", width: 40, height: 40 }, children: /* @__PURE__ */ jsx(Trophy, { size: 24 }) }),
        /* @__PURE__ */ jsx(Typography, { variant: "h6", sx: { fontWeight: "bold", lineHeight: 1.2 }, children: APP_TITLE })
      ] }),
      /* @__PURE__ */ jsx(List, { sx: { mb: 3 }, children: MENU_ITEMS.map(({ href, icon: Icon, label }) => /* @__PURE__ */ jsx(
        NavigationItem,
        {
          href,
          label,
          icon: /* @__PURE__ */ jsx(Icon, { size: 20 }),
          selected: isPathActive(currentPath, href),
          onClick: onCloseMobile
        },
        href
      )) }),
      /* @__PURE__ */ jsx(Divider, { sx: { my: 2 } }),
      /* @__PURE__ */ jsxs(List, { children: [
        /* @__PURE__ */ jsx(
          NavigationItem,
          {
            href: "/profile",
            label: "Mój Profil",
            icon: /* @__PURE__ */ jsx(UserCircle, { size: 20 }),
            selected: isPathActive(currentPath, "/profile"),
            onClick: onCloseMobile
          }
        ),
        /* @__PURE__ */ jsx(ListItem, { disablePadding: true, children: /* @__PURE__ */ jsxs(ListItemButton, { onClick: () => void onLogout(), sx: { borderRadius: 1.5, color: "error.main" }, children: [
          /* @__PURE__ */ jsx(ListItemIcon, { sx: { minWidth: 40, color: "inherit" }, children: /* @__PURE__ */ jsx(LogOut, { size: 20 }) }),
          /* @__PURE__ */ jsx(ListItemText, { primary: "Wyloguj" })
        ] }) })
      ] })
    ] }),
    userName ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(Typography, { variant: "body2", sx: { textAlign: "center", mt: "auto", color: "text.secondary" }, children: [
        "Zalogowany:",
        " "
      ] }),
      /* @__PURE__ */ jsx(Box, { component: "span", sx: { fontWeight: "bold", textTransform: "capitalize", textAlign: "center" }, children: userName })
    ] }) : null,
    /* @__PURE__ */ jsx(
      Typography,
      {
        variant: "body2",
        sx: {
          textAlign: "center",
          mt: userName ? 0.5 : "auto"
        },
        children: "2.0"
      }
    )
  ] });
}
function AppShell({ children, currentPath, containerMaxWidth = "lg" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userName, setUserName] = useState(null);
  const closeMobileDrawer = () => setMobileOpen(false);
  const toggleMobileDrawer = () => setMobileOpen((prev) => !prev);
  useEffect(() => {
    ensureSuperTokensFrontendInitialized();
  }, []);
  useEffect(() => {
    const abortController = new AbortController();
    const loadCurrentUserName = async () => {
      const profile = await fetchCurrentUserProfile(abortController.signal);
      const name = `${profile.firstName} ${profile.lastName}`.trim();
      setUserName(name);
    };
    void loadCurrentUserName().catch(() => {
      setUserName(null);
    });
    return () => {
      abortController.abort();
    };
  }, []);
  const handleLogout = async () => {
    ensureSuperTokensFrontendInitialized();
    await signOut();
    window.location.href = "/";
  };
  const clubMobilePortraitCompactHorizontalPaddingSx = (theme) => currentPath === "/club" ? {
    [theme.breakpoints.down("md")]: {
      "@media (orientation: portrait)": {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
      }
    }
  } : {};
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        bgcolor: "background.default"
      },
      children: [
        /* @__PURE__ */ jsx(
          Drawer,
          {
            variant: "permanent",
            sx: {
              display: { xs: "none", md: "block" },
              width: DRAWER_WIDTH,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: DRAWER_WIDTH,
                bgcolor: "background.paper"
              }
            },
            children: /* @__PURE__ */ jsx(
              DrawerContent,
              {
                currentPath,
                onCloseMobile: closeMobileDrawer,
                onLogout: handleLogout,
                userName
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              display: "flex",
              flexDirection: "column",
              flex: 1,
              minWidth: 0
            },
            children: [
              /* @__PURE__ */ jsx(
                AppBar,
                {
                  position: "sticky",
                  sx: {
                    display: { xs: "block", md: "none" },
                    zIndex: (theme) => theme.zIndex.drawer + 1
                  },
                  children: /* @__PURE__ */ jsxs(Toolbar, { children: [
                    /* @__PURE__ */ jsx(Trophy, { size: 24, style: { marginRight: 8 } }),
                    /* @__PURE__ */ jsx(Typography, { variant: "h6", sx: { flex: 1, fontWeight: "bold" }, children: APP_TITLE }),
                    /* @__PURE__ */ jsx(IconButton, { color: "inherit", onClick: toggleMobileDrawer, children: mobileOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 }) })
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                Drawer,
                {
                  anchor: "left",
                  open: mobileOpen,
                  onClose: closeMobileDrawer,
                  sx: { display: { xs: "block", md: "none" } },
                  children: /* @__PURE__ */ jsx(
                    DrawerContent,
                    {
                      currentPath,
                      onCloseMobile: closeMobileDrawer,
                      onLogout: handleLogout,
                      userName
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                Box,
                {
                  component: "main",
                  sx: (theme) => ({
                    flex: 1,
                    p: { xs: 2, md: 3 },
                    pt: { xs: 3, md: 2 },
                    maxWidth: "100%",
                    overflowX: "auto",
                    ...clubMobilePortraitCompactHorizontalPaddingSx(theme)
                  }),
                  children: /* @__PURE__ */ jsx(Container, { maxWidth: containerMaxWidth, sx: (theme) => clubMobilePortraitCompactHorizontalPaddingSx(theme), children })
                }
              )
            ]
          }
        )
      ]
    }
  );
}

function DataLoadAlert({
  message,
  severity = "error",
  onRetry,
  retryLabel = "Spróbuj ponownie",
  sx
}) {
  if (!message) return null;
  return /* @__PURE__ */ jsx(
    Alert,
    {
      severity,
      sx,
      action: onRetry ? /* @__PURE__ */ jsx(Button, { color: "inherit", size: "small", onClick: onRetry, children: retryLabel }) : void 0,
      children: message
    }
  );
}

export { AppShell as A, DataLoadAlert as D, ListItemButton as L, listItemTextClasses as a, Avatar as b, Divider as c, dividerClasses as d, deleteCurrentUserAccount as e, fetchCurrentUserProfile as f, getErrorMessageFromResponse as g, ApiValidationError as h, firstApiFieldErrorKey as i, parseApiFieldErrors as j, parseApiErrorBody as k, listItemIconClasses as l, httpStatusFallbackMessage as m, ListItemIcon as n, ListItemText as o, parseFormErrorFromResponse as p, updateCurrentUserProfile as u };
