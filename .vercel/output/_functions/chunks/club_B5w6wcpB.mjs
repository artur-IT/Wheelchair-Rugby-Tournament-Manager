import { c as createComponent } from './astro-component_B53ZAH7l.mjs';
import { C as clsx, Q as renderTemplate } from './sequence_C_bNAUSZ.mjs';
import { r as renderComponent } from './entrypoint_B-rHfi_b.mjs';
import { $ as $$Layout } from './Layout_CO1a2t5Q.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useMemo, useState, useEffect, Fragment as Fragment$1, forwardRef } from 'react';
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { D as DataLoadAlert, A as AppShell } from './DataLoadAlert_CBRXbjzF.mjs';
import { Q as QueryProvider } from './QueryProvider_CFYP5LAL.mjs';
import { P as PropTypes, e as extendSxProp, s as styled, u as useThemeProps, h as handleBreakpoints, r as resolveBreakpointValues, c as createUnarySpacing, d as deepmerge, m as mergeBreakpointsInOrder, a as composeClasses, g as generateUtilityClass, b as createTheme, f as getValue, i as generateUtilityClasses, j as useDefaultProps, k as useSlot, l as styled$1, n as Paper, o as memoTheme, p as chainPropTypes, q as reactIsExports, B as ButtonBase, C as CircularProgress, T as Typography, t as Box, v as Button, A as Alert, w as ThemeRegistry } from './ThemeRegistry_BXk5lg02.mjs';
import { C as Card, a as CardContent } from './CardContent_CSafTp07.mjs';
import { T as TextField, F as FormControl, I as InputLabel, S as Select } from './TextField_D3FSEHvc.mjs';
import { startOfDay, parseISO, differenceInYears } from 'date-fns';
import { UserCircle } from 'lucide-react';
import { useForm, Controller, useWatch } from 'react-hook-form';
import { C as ConfirmationDialog } from './ConfirmationDialog_1cDXegBp.mjs';
import { M as MutationErrorAlert } from './MutationErrorAlert_Doc77SMJ.mjs';
import { b as buildGoogleMapsSearchUrl, r as resolvePlaceMapsHref } from './addressDisplay_BWOThiqF.mjs';
import { P as PersonnelTable, T as Tab, u as useMediaQuery, a as Tabs } from './PersonnelTable_CgAIW0m7.mjs';
import { b as blurActiveElement } from './blurActiveElement_iWDIUN-2.mjs';
import { M as MAX_SHORT_TEXT, s as sanitizePhone, k as MAX_LONG_TEXT } from './validateInputs_c5edMn88.mjs';
import { D as Dialog, a as DialogTitle, b as DialogContent } from './DialogTitle_p-PDvZtL.mjs';
import { D as DialogActions } from './DialogActions_BCWy51Lb.mjs';
import { f as ClubPlayerFieldsSchema, g as ClubCoachRefereeFieldsSchema, h as ClubVolunteerFieldsSchema, i as ClubStaffFieldsSchema, j as CLUB_PLAYER_CLASSIFICATION_VALUES } from './clubSchemas_BAMK3mYC.mjs';
import './zodPl_AymT4aL4.mjs';
import { z } from 'zod';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { u as useControlled } from './Grow_k_Y6qv6R.mjs';
import { C as Collapse, F as FormGroup, a as FormControlLabel, b as Checkbox } from './FormGroup_BWsAsvk1.mjs';
import { L as Link } from './Link_DuY9FoJr.mjs';
import { G as Grid } from './Grid_DFBwRzYi.mjs';
import { M as MenuItem } from './MenuItem_BKisg9NA.mjs';
import { C as Chip } from './Chip_DPqmgDH5.mjs';

const defaultTheme = createTheme();
// widening Theme to any so that the consumer can own the theme structure.
const defaultCreateStyledComponent = styled('div', {
  name: 'MuiStack',
  slot: 'Root'
});
function useThemePropsDefault(props) {
  return useThemeProps({
    props,
    name: 'MuiStack',
    defaultTheme
  });
}

/**
 * Return an array with the separator React element interspersed between
 * each React node of the input children.
 *
 * > joinChildren([1,2,3], 0)
 * [1,0,2,0,3]
 */
function joinChildren(children, separator) {
  const childrenArray = React.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);
    if (index < childrenArray.length - 1) {
      output.push(/*#__PURE__*/React.cloneElement(separator, {
        key: `separator-${index}`
      }));
    }
    return output;
  }, []);
}
const getSideFromDirection = direction => {
  return {
    row: 'Left',
    'row-reverse': 'Right',
    column: 'Top',
    'column-reverse': 'Bottom'
  }[direction];
};
const style = ({
  ownerState,
  theme
}) => {
  let styles = {
    display: 'flex',
    flexDirection: 'column',
    ...handleBreakpoints({
      theme
    }, resolveBreakpointValues({
      values: ownerState.direction,
      breakpoints: theme.breakpoints.values
    }), propValue => ({
      flexDirection: propValue
    }))
  };
  if (ownerState.spacing) {
    const transformer = createUnarySpacing(theme);
    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (typeof ownerState.spacing === 'object' && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === 'object' && ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }
      return acc;
    }, {});
    const directionValues = resolveBreakpointValues({
      values: ownerState.direction,
      base
    });
    const spacingValues = resolveBreakpointValues({
      values: ownerState.spacing,
      base
    });
    if (typeof directionValues === 'object') {
      Object.keys(directionValues).forEach((breakpoint, index, breakpoints) => {
        const directionValue = directionValues[breakpoint];
        if (!directionValue) {
          const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : 'column';
          directionValues[breakpoint] = previousDirectionValue;
        }
      });
    }
    const styleFromPropValue = (propValue, breakpoint) => {
      if (ownerState.useFlexGap) {
        return {
          gap: getValue(transformer, propValue)
        };
      }
      return {
        // The useFlexGap={false} implement relies on each child to give up control of the margin.
        // We need to reset the margin to avoid double spacing.
        '& > :not(style):not(style)': {
          margin: 0
        },
        '& > :not(style) ~ :not(style)': {
          [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: getValue(transformer, propValue)
        }
      };
    };
    styles = deepmerge(styles, handleBreakpoints({
      theme
    }, spacingValues, styleFromPropValue));
  }
  styles = mergeBreakpointsInOrder(theme.breakpoints, styles);
  return styles;
};
function createStack(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps = useThemePropsDefault,
    componentName = 'MuiStack'
  } = options;
  const useUtilityClasses = () => {
    const slots = {
      root: ['root']
    };
    return composeClasses(slots, slot => generateUtilityClass(componentName, slot), {});
  };
  const StackRoot = createStyledComponent(style);
  const Stack = /*#__PURE__*/React.forwardRef(function Grid(inProps, ref) {
    const themeProps = useThemeProps(inProps);
    const props = extendSxProp(themeProps); // `color` type conflicts with html color attribute.
    const {
      component = 'div',
      direction = 'column',
      spacing = 0,
      divider,
      children,
      className,
      useFlexGap = false,
      ...other
    } = props;
    const ownerState = {
      direction,
      spacing,
      useFlexGap
    };
    const classes = useUtilityClasses();
    return /*#__PURE__*/jsx(StackRoot, {
      as: component,
      ownerState: ownerState,
      ref: ref,
      className: clsx(classes.root, className),
      ...other,
      children: divider ? joinChildren(children, divider) : children
    });
  });
  process.env.NODE_ENV !== "production" ? Stack.propTypes /* remove-proptypes */ = {
    children: PropTypes.node,
    direction: PropTypes.oneOfType([PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row']), PropTypes.arrayOf(PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row'])), PropTypes.object]),
    divider: PropTypes.node,
    spacing: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),
    sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
  } : void 0;
  return Stack;
}

/**
 * @ignore - internal component.
 * @type {React.Context<{} | {expanded: boolean, disabled: boolean, toggle: () => void}>}
 */
const AccordionContext = /*#__PURE__*/React.createContext({});
if (process.env.NODE_ENV !== 'production') {
  AccordionContext.displayName = 'AccordionContext';
}

function getAccordionUtilityClass(slot) {
  return generateUtilityClass('MuiAccordion', slot);
}
const accordionClasses = generateUtilityClasses('MuiAccordion', ['root', 'heading', 'rounded', 'expanded', 'disabled', 'gutters', 'region']);

const useUtilityClasses$2 = ownerState => {
  const {
    classes,
    square,
    expanded,
    disabled,
    disableGutters
  } = ownerState;
  const slots = {
    root: ['root', !square && 'rounded', expanded && 'expanded', disabled && 'disabled', !disableGutters && 'gutters'],
    heading: ['heading'],
    region: ['region']
  };
  return composeClasses(slots, getAccordionUtilityClass, classes);
};
const AccordionRoot = styled$1(Paper, {
  name: 'MuiAccordion',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${accordionClasses.region}`]: styles.region
    }, styles.root, !ownerState.square && styles.rounded, !ownerState.disableGutters && styles.gutters];
  }
})(memoTheme(({
  theme
}) => {
  const transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    position: 'relative',
    transition: theme.transitions.create(['margin'], transition),
    overflowAnchor: 'none',
    // Keep the same scrolling position
    '&::before': {
      position: 'absolute',
      left: 0,
      top: -1,
      right: 0,
      height: 1,
      content: '""',
      opacity: 1,
      backgroundColor: (theme.vars || theme).palette.divider,
      transition: theme.transitions.create(['opacity', 'background-color'], transition)
    },
    '&:first-of-type': {
      '&::before': {
        display: 'none'
      }
    },
    [`&.${accordionClasses.expanded}`]: {
      '&::before': {
        opacity: 0
      },
      '&:first-of-type': {
        marginTop: 0
      },
      '&:last-of-type': {
        marginBottom: 0
      },
      '& + &': {
        '&::before': {
          display: 'none'
        }
      }
    },
    [`&.${accordionClasses.disabled}`]: {
      backgroundColor: (theme.vars || theme).palette.action.disabledBackground
    }
  };
}), memoTheme(({
  theme
}) => ({
  variants: [{
    props: props => !props.square,
    style: {
      borderRadius: 0,
      '&:first-of-type': {
        borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
        borderTopRightRadius: (theme.vars || theme).shape.borderRadius
      },
      '&:last-of-type': {
        borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
        borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
        // Fix a rendering issue on Edge
        '@supports (-ms-ime-align: auto)': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        }
      }
    }
  }, {
    props: props => !props.disableGutters,
    style: {
      [`&.${accordionClasses.expanded}`]: {
        margin: '16px 0'
      }
    }
  }]
})));
const AccordionHeading = styled$1('h3', {
  name: 'MuiAccordion',
  slot: 'Heading'
})({
  all: 'unset'
});
const AccordionRegion = styled$1('div', {
  name: 'MuiAccordion',
  slot: 'Region'
})({});
const Accordion = /*#__PURE__*/React.forwardRef(function Accordion(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiAccordion'
  });
  const {
    children: childrenProp,
    className,
    defaultExpanded = false,
    disabled = false,
    disableGutters = false,
    expanded: expandedProp,
    onChange,
    slots = {},
    slotProps = {},
    TransitionComponent: TransitionComponentProp,
    TransitionProps: TransitionPropsProp,
    ...other
  } = props;
  const [expanded, setExpandedState] = useControlled({
    controlled: expandedProp,
    default: defaultExpanded,
    name: 'Accordion',
    state: 'expanded'
  });
  const handleChange = React.useCallback(event => {
    setExpandedState(!expanded);
    if (onChange) {
      onChange(event, !expanded);
    }
  }, [expanded, onChange, setExpandedState]);
  const [summary, ...children] = React.Children.toArray(childrenProp);
  const contextValue = React.useMemo(() => ({
    expanded,
    disabled,
    disableGutters,
    toggle: handleChange
  }), [expanded, disabled, disableGutters, handleChange]);
  const ownerState = {
    ...props,
    disabled,
    disableGutters,
    expanded
  };
  const classes = useUtilityClasses$2(ownerState);
  const backwardCompatibleSlots = {
    transition: TransitionComponentProp,
    ...slots
  };
  const backwardCompatibleSlotProps = {
    transition: TransitionPropsProp,
    ...slotProps
  };
  const externalForwardedProps = {
    slots: backwardCompatibleSlots,
    slotProps: backwardCompatibleSlotProps
  };
  const [RootSlot, rootProps] = useSlot('root', {
    elementType: AccordionRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    className: clsx(classes.root, className),
    shouldForwardComponentProp: true,
    ownerState,
    ref
  });
  const [AccordionHeadingSlot, accordionProps] = useSlot('heading', {
    elementType: AccordionHeading,
    externalForwardedProps,
    className: classes.heading,
    ownerState
  });
  const [TransitionSlot, transitionProps] = useSlot('transition', {
    elementType: Collapse,
    externalForwardedProps,
    ownerState
  });
  const [AccordionRegionSlot, accordionRegionProps] = useSlot('region', {
    elementType: AccordionRegion,
    externalForwardedProps,
    ownerState,
    className: classes.region,
    additionalProps: {
      'aria-labelledby': summary.props.id,
      id: summary.props['aria-controls'],
      role: 'region'
    }
  });
  return /*#__PURE__*/jsxs(RootSlot, {
    ...rootProps,
    children: [/*#__PURE__*/jsx(AccordionHeadingSlot, {
      ...accordionProps,
      children: /*#__PURE__*/jsx(AccordionContext.Provider, {
        value: contextValue,
        children: summary
      })
    }), /*#__PURE__*/jsx(TransitionSlot, {
      in: expanded,
      timeout: "auto",
      ...transitionProps,
      children: /*#__PURE__*/jsx(AccordionRegionSlot, {
        ...accordionRegionProps,
        children: children
      })
    })]
  });
});
process.env.NODE_ENV !== "production" ? Accordion.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: chainPropTypes(PropTypes.node.isRequired, props => {
    const summary = React.Children.toArray(props.children)[0];
    if (reactIsExports.isFragment(summary)) {
      return new Error("MUI: The Accordion doesn't accept a Fragment as a child. " + 'Consider providing an array instead.');
    }
    if (! /*#__PURE__*/React.isValidElement(summary)) {
      return new Error('MUI: Expected the first child of Accordion to be a valid element.');
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
   * If `true`, expands the accordion by default.
   * @default false
   */
  defaultExpanded: PropTypes.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, it removes the margin between two expanded accordion items and prevents the increased height when expanded.
   * @default false
   */
  disableGutters: PropTypes.bool,
  /**
   * If `true`, expands the accordion, otherwise collapses it.
   * Setting this prop enables control over the accordion.
   */
  expanded: PropTypes.bool,
  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {boolean} expanded The `expanded` state of the accordion.
   */
  onChange: PropTypes.func,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    heading: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    region: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    transition: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    heading: PropTypes.elementType,
    region: PropTypes.elementType,
    root: PropTypes.elementType,
    transition: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @deprecated Use `slots.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: PropTypes.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated Use `slotProps.transition` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionProps: PropTypes.object
} : void 0;

function getAccordionDetailsUtilityClass(slot) {
  return generateUtilityClass('MuiAccordionDetails', slot);
}
generateUtilityClasses('MuiAccordionDetails', ['root']);

const useUtilityClasses$1 = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getAccordionDetailsUtilityClass, classes);
};
const AccordionDetailsRoot = styled$1('div', {
  name: 'MuiAccordionDetails',
  slot: 'Root'
})(memoTheme(({
  theme
}) => ({
  padding: theme.spacing(1, 2, 2)
})));
const AccordionDetails = /*#__PURE__*/React.forwardRef(function AccordionDetails(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiAccordionDetails'
  });
  const {
    className,
    ...other
  } = props;
  const ownerState = props;
  const classes = useUtilityClasses$1(ownerState);
  return /*#__PURE__*/jsx(AccordionDetailsRoot, {
    className: clsx(classes.root, className),
    ref: ref,
    ownerState: ownerState,
    ...other
  });
});
process.env.NODE_ENV !== "production" ? AccordionDetails.propTypes /* remove-proptypes */ = {
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;

function getAccordionSummaryUtilityClass(slot) {
  return generateUtilityClass('MuiAccordionSummary', slot);
}
const accordionSummaryClasses = generateUtilityClasses('MuiAccordionSummary', ['root', 'expanded', 'focusVisible', 'disabled', 'gutters', 'contentGutters', 'content', 'expandIconWrapper']);

const useUtilityClasses = ownerState => {
  const {
    classes,
    expanded,
    disabled,
    disableGutters
  } = ownerState;
  const slots = {
    root: ['root', expanded && 'expanded', disabled && 'disabled', !disableGutters && 'gutters'],
    focusVisible: ['focusVisible'],
    content: ['content', expanded && 'expanded', !disableGutters && 'contentGutters'],
    expandIconWrapper: ['expandIconWrapper', expanded && 'expanded']
  };
  return composeClasses(slots, getAccordionSummaryUtilityClass, classes);
};
const AccordionSummaryRoot = styled$1(ButtonBase, {
  name: 'MuiAccordionSummary',
  slot: 'Root'
})(memoTheme(({
  theme
}) => {
  const transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    display: 'flex',
    width: '100%',
    minHeight: 48,
    padding: theme.spacing(0, 2),
    transition: theme.transitions.create(['min-height', 'background-color'], transition),
    [`&.${accordionSummaryClasses.focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette.action.focus
    },
    [`&.${accordionSummaryClasses.disabled}`]: {
      opacity: (theme.vars || theme).palette.action.disabledOpacity
    },
    [`&:hover:not(.${accordionSummaryClasses.disabled})`]: {
      cursor: 'pointer'
    },
    variants: [{
      props: props => !props.disableGutters,
      style: {
        [`&.${accordionSummaryClasses.expanded}`]: {
          minHeight: 64
        }
      }
    }]
  };
}));
const AccordionSummaryContent = styled$1('span', {
  name: 'MuiAccordionSummary',
  slot: 'Content'
})(memoTheme(({
  theme
}) => ({
  display: 'flex',
  textAlign: 'start',
  flexGrow: 1,
  margin: '12px 0',
  variants: [{
    props: props => !props.disableGutters,
    style: {
      transition: theme.transitions.create(['margin'], {
        duration: theme.transitions.duration.shortest
      }),
      [`&.${accordionSummaryClasses.expanded}`]: {
        margin: '20px 0'
      }
    }
  }]
})));
const AccordionSummaryExpandIconWrapper = styled$1('span', {
  name: 'MuiAccordionSummary',
  slot: 'ExpandIconWrapper'
})(memoTheme(({
  theme
}) => ({
  display: 'flex',
  color: (theme.vars || theme).palette.action.active,
  transform: 'rotate(0deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${accordionSummaryClasses.expanded}`]: {
    transform: 'rotate(180deg)'
  }
})));
const AccordionSummary = /*#__PURE__*/React.forwardRef(function AccordionSummary(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiAccordionSummary'
  });
  const {
    children,
    className,
    expandIcon,
    focusVisibleClassName,
    onClick,
    slots,
    slotProps,
    ...other
  } = props;
  const {
    disabled = false,
    disableGutters,
    expanded,
    toggle
  } = React.useContext(AccordionContext);
  const handleChange = event => {
    if (toggle) {
      toggle(event);
    }
    if (onClick) {
      onClick(event);
    }
  };
  const ownerState = {
    ...props,
    expanded,
    disabled,
    disableGutters
  };
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = {
    slots,
    slotProps
  };
  const [RootSlot, rootSlotProps] = useSlot('root', {
    ref,
    shouldForwardComponentProp: true,
    className: clsx(classes.root, className),
    elementType: AccordionSummaryRoot,
    externalForwardedProps: {
      ...externalForwardedProps,
      ...other
    },
    ownerState,
    additionalProps: {
      focusRipple: false,
      disableRipple: true,
      disabled,
      'aria-expanded': expanded,
      focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName)
    },
    getSlotProps: handlers => ({
      ...handlers,
      onClick: event => {
        handlers.onClick?.(event);
        handleChange(event);
      }
    })
  });
  const [ContentSlot, contentSlotProps] = useSlot('content', {
    className: classes.content,
    elementType: AccordionSummaryContent,
    externalForwardedProps,
    ownerState
  });
  const [ExpandIconWrapperSlot, expandIconWrapperSlotProps] = useSlot('expandIconWrapper', {
    className: classes.expandIconWrapper,
    elementType: AccordionSummaryExpandIconWrapper,
    externalForwardedProps,
    ownerState
  });
  return /*#__PURE__*/jsxs(RootSlot, {
    ...rootSlotProps,
    children: [/*#__PURE__*/jsx(ContentSlot, {
      ...contentSlotProps,
      children: children
    }), expandIcon && /*#__PURE__*/jsx(ExpandIconWrapperSlot, {
      ...expandIconWrapperSlotProps,
      children: expandIcon
    })]
  });
});
process.env.NODE_ENV !== "production" ? AccordionSummary.propTypes /* remove-proptypes */ = {
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
   * The icon to display as the expand indicator.
   */
  expandIcon: PropTypes.node,
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
  onClick: PropTypes.func,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    content: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    expandIconWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    content: PropTypes.elementType,
    expandIconWrapper: PropTypes.elementType,
    root: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;

const Stack = createStack({
  createStyledComponent: styled$1('div', {
    name: 'MuiStack',
    slot: 'Root'
  }),
  useThemeProps: inProps => useDefaultProps({
    props: inProps,
    name: 'MuiStack'
  })
});
process.env.NODE_ENV !== "production" ? Stack.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: PropTypes.oneOfType([PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row']), PropTypes.arrayOf(PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row'])), PropTypes.object]),
  /**
   * Add an element between each child.
   */
  divider: PropTypes.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])), PropTypes.number, PropTypes.object, PropTypes.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: PropTypes.bool
} : void 0;

function ClubHeaderCard({
  isLoading,
  errorMessage,
  selectedClub,
  showClubForm,
  isEditMode,
  clubName,
  clubLogoPreviewUrl,
  logoErrorMessage,
  isCreatePending,
  createErrorMessage,
  onShowClubForm,
  onShowClubEditForm,
  onCancelClubForm,
  onClubNameChange,
  onClubLogoFileChange,
  onSaveClub
}) {
  return /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { children: [
    isLoading ? /* @__PURE__ */ jsx(CircularProgress, { size: 22 }) : null,
    errorMessage ? /* @__PURE__ */ jsx(Typography, { color: "error.main", children: errorMessage }) : null,
    !isLoading && selectedClub && !showClubForm ? /* @__PURE__ */ jsxs(
      Stack,
      {
        direction: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "center" },
        gap: { xs: 1.5, md: 1 },
        sx: { mt: 2 },
        children: [
          /* @__PURE__ */ jsxs(
            Stack,
            {
              direction: "row",
              alignItems: "center",
              gap: 1,
              sx: {
                alignSelf: { xs: "stretch", md: "auto" },
                flex: { md: 1 },
                minWidth: 0,
                width: { xs: "100%", md: "auto" }
              },
              children: [
                selectedClub.logoUrl ? /* @__PURE__ */ jsx(
                  Box,
                  {
                    component: "img",
                    src: selectedClub.logoUrl,
                    alt: `Logo klubu ${selectedClub.name}`,
                    sx: { width: "4em", height: "4em", objectFit: "contain", flexShrink: 0 }
                  }
                ) : null,
                /* @__PURE__ */ jsx(
                  Typography,
                  {
                    variant: "h5",
                    sx: {
                      fontWeight: 700,
                      flex: 1,
                      minWidth: 0,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    },
                    children: selectedClub.name
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outlined",
              onClick: onShowClubEditForm,
              sx: { alignSelf: { xs: "center", md: "auto" }, flexShrink: 0 },
              children: "Edytuj"
            }
          )
        ]
      }
    ) : null,
    !isLoading && (!selectedClub || showClubForm) ? /* @__PURE__ */ jsxs(Stack, { gap: 1.5, sx: { mt: 2 }, children: [
      !selectedClub && !showClubForm ? /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: onShowClubForm, children: "Dodaj klub" }) : /* @__PURE__ */ jsxs(Stack, { gap: 2, children: [
        /* @__PURE__ */ jsx(
          TextField,
          {
            label: "Nazwa klubu",
            value: clubName,
            onChange: (e) => onClubNameChange(e.target.value),
            fullWidth: true
          }
        ),
        /* @__PURE__ */ jsx(
          TextField,
          {
            label: "Logo klubu",
            value: "",
            type: "file",
            inputProps: { accept: "image/png,image/jpeg,image/webp" },
            onChange: (e) => {
              const input = e.target;
              onClubLogoFileChange(input.files?.[0] ?? null);
            },
            error: Boolean(logoErrorMessage),
            helperText: logoErrorMessage ?? "Dozwolone: PNG, JPG, WEBP. Maks. 2MB.",
            fullWidth: true,
            slotProps: { inputLabel: { shrink: true } }
          }
        ),
        clubLogoPreviewUrl ? /* @__PURE__ */ jsx(
          Box,
          {
            component: "img",
            src: clubLogoPreviewUrl,
            alt: "Podgląd logo klubu",
            sx: { width: "6em", height: "6em", objectFit: "contain" }
          }
        ) : null,
        /* @__PURE__ */ jsxs(Stack, { direction: { xs: "column", md: "row" }, gap: 2, children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "contained",
              disabled: !clubName.trim() || isCreatePending || Boolean(logoErrorMessage),
              onClick: onSaveClub,
              children: isEditMode ? "Zapisz zmiany" : "Zapisz klub"
            }
          ),
          /* @__PURE__ */ jsx(Button, { variant: "outlined", disabled: isCreatePending, onClick: onCancelClubForm, children: "Anuluj" })
        ] })
      ] }),
      createErrorMessage ? /* @__PURE__ */ jsx(Typography, { color: "error.main", children: createErrorMessage }) : null
    ] }) : null
  ] }) });
}

function parseBirthMonthDayFromIso(birthDate) {
  if (!birthDate?.trim()) return null;
  const slice = birthDate.trim().slice(0, 10);
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(slice);
  if (!match) return null;
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (month < 1 || month > 12 || day < 1 || day > 31) return null;
  const probeYear = 2e3;
  const test = new Date(probeYear, month - 1, day);
  if (test.getFullYear() !== probeYear || test.getMonth() !== month - 1 || test.getDate() !== day) return null;
  return { month, day };
}
function playerDisplayName(p) {
  const first = p.firstName?.trim() ?? "";
  const last = p.lastName?.trim() ?? "";
  const full = [first, last].filter(Boolean).join(" ");
  return full || first || last;
}
function nextBirthdayOccurrence(month, day, fromDay) {
  const start = startOfDay(fromDay);
  const y = start.getFullYear();
  let next = startOfDay(new Date(y, month - 1, day));
  if (next < start) {
    next = startOfDay(new Date(y + 1, month - 1, day));
  }
  return next;
}
function findNextClubBirthdayGroup(players, referenceDate = /* @__PURE__ */ new Date()) {
  const today = startOfDay(referenceDate);
  const candidates = [];
  for (const p of players) {
    const md = parseBirthMonthDayFromIso(p.birthDate);
    if (!md) continue;
    const name = playerDisplayName(p);
    if (!name) continue;
    candidates.push({ name, next: nextBirthdayOccurrence(md.month, md.day, today) });
  }
  if (candidates.length === 0) return null;
  let minMs = Infinity;
  for (const c of candidates) {
    if (c.next.getTime() < minMs) minMs = c.next.getTime();
  }
  const winners = candidates.filter((c) => c.next.getTime() === minMs);
  const names = [...new Set(winners.map((w) => w.name))].sort((a, b) => a.localeCompare(b, "pl"));
  return { names, nextOccurrence: winners[0].next };
}
function formatPolishDayMonth(d) {
  return new Intl.DateTimeFormat("pl-PL", { day: "numeric", month: "long" }).format(d);
}
function getNextClubBirthdayBannerParts(players, referenceDate = /* @__PURE__ */ new Date()) {
  const group = findNextClubBirthdayGroup(players, referenceDate);
  if (!group) return null;
  const dateLabel = formatPolishDayMonth(group.nextOccurrence);
  const namesList = group.names.join(", ");
  const rest = ` ${namesList} — ${dateLabel}.`;
  const lead = group.names.length === 1 ? "Niedługo swoje urodziny obchodzi:" : "Niedługo swoje urodziny obchodzą:";
  return { lead, rest };
}

function ClubNextBirthdayStrip({ players, isLoading }) {
  const parts = useMemo(() => {
    if (isLoading) return null;
    return getNextClubBirthdayBannerParts(players);
  }, [players, isLoading]);
  if (!parts) return null;
  return /* @__PURE__ */ jsx(
    Box,
    {
      component: "aside",
      "aria-live": "polite",
      sx: {
        alignSelf: "center",
        maxWidth: 500,
        width: "100%",
        py: 0.75,
        px: 2,
        borderRadius: 1,
        border: 1,
        borderColor: "orange",
        bgcolor: (theme) => theme.palette.mode === "dark" ? "action.hover" : "grey.50"
      },
      children: /* @__PURE__ */ jsxs(Typography, { variant: "caption", component: "p", sx: { m: 0, textAlign: "center", lineHeight: 1.4 }, children: [
        /* @__PURE__ */ jsx(Box, { component: "span", sx: { fontWeight: 700 }, children: parts.lead }),
        parts.rest
      ] })
    }
  );
}

const CLUB_PLAYER_FIELD_LABELS = {
  firstName: "Imię",
  lastName: "Nazwisko",
  classification: "Klasyfikacja",
  number: "Numer koszulki",
  status: "Status",
  birthDate: "Data urodzenia",
  contactEmail: "E-mail kontaktowy",
  contactPhone: "Telefon kontaktowy",
  contactAddress: "Ulica",
  contactCity: "Miasto",
  contactPostalCode: "Kod pocztowy",
  contactMapUrl: "Link do mapy",
  speed: "Szybkość",
  strength: "Siła",
  endurance: "Wytrzymałość",
  technique: "Technika",
  mentality: "Mentalność",
  tactics: "Taktyka"
};
const CLUB_PLAYER_SKILL_API_KEYS = /* @__PURE__ */ new Set([
  "speed",
  "strength",
  "endurance",
  "technique",
  "mentality",
  "tactics"
]);
function resolveClubPlayerFieldErrorMessage(fieldKey, rawMessage) {
  if (rawMessage !== "Nieprawidłowa wartość") return rawMessage;
  if (CLUB_PLAYER_SKILL_API_KEYS.has(fieldKey)) {
    return "Wybierz ocenę od 1 do 5 albo pozostaw puste (—).";
  }
  switch (fieldKey) {
    case "contactPostalCode":
      return "Podaj kod w formacie XX-XXX albo zostaw pole puste.";
    case "contactPhone":
      return "Podaj dokładnie 9 cyfr (bez +48) albo zostaw pole puste.";
    case "contactEmail":
      return "Podaj poprawny adres e-mail albo zostaw pole puste.";
    case "number":
      return "Podaj numer od 1 do 99 albo „-”, jeśli zawodnik nie ma numeru.";
    case "birthDate":
      return "Podaj datę w formacie RRRR-MM-DD albo zostaw puste.";
    default:
      return "To pole ma nieprawidłową wartość — sprawdź wpis.";
  }
}
function buildClubPlayerValidationBanner(fieldMessages) {
  const entries = Object.entries(fieldMessages);
  if (entries.length === 0) return "Nie udało się zapisać danych.";
  if (entries.length === 1) {
    const [key, msg] = entries[0];
    const label = CLUB_PLAYER_FIELD_LABELS[key] ?? key;
    return `${label}: ${msg}`;
  }
  const lines = entries.map(([key, msg]) => {
    const label = CLUB_PLAYER_FIELD_LABELS[key] ?? key;
    return `• ${label}: ${msg}`;
  });
  return `Nie udało się zapisać danych. Popraw:
${lines.join("\n")}`;
}
class ClubPersonnelValidationError extends Error {
  constructor(fieldMessages) {
    super(buildClubPlayerValidationBanner(fieldMessages));
    this.name = "ClubPersonnelValidationError";
    this.fieldMessages = fieldMessages;
  }
}
function parseClubPlayerApiFieldMessages(data) {
  if (!data || typeof data !== "object") return null;
  const errorValue = data.error;
  if (!errorValue || typeof errorValue !== "object") return null;
  const validation = errorValue;
  if (!validation.fieldErrors || typeof validation.fieldErrors !== "object") return null;
  const out = {};
  for (const [key, raw] of Object.entries(validation.fieldErrors)) {
    const msgs = Array.isArray(raw) ? raw.filter((v) => typeof v === "string") : [];
    const msg = msgs[0];
    if (!msg) continue;
    out[key] = resolveClubPlayerFieldErrorMessage(key, msg);
  }
  return Object.keys(out).length > 0 ? out : null;
}
function extractClubApiErrorMessage(data, fallback) {
  if (!data || typeof data !== "object") return fallback;
  const errorValue = data.error;
  if (typeof errorValue === "string" && errorValue.trim().length > 0) return errorValue;
  if (errorValue && typeof errorValue === "object") {
    const validation = errorValue;
    const formErrors = Array.isArray(validation.formErrors) ? validation.formErrors.filter((e) => typeof e === "string") : [];
    if (formErrors[0]) return formErrors[0];
    if (validation.fieldErrors && typeof validation.fieldErrors === "object") {
      const allResolved = {};
      for (const [key, raw] of Object.entries(validation.fieldErrors)) {
        const msgs = Array.isArray(raw) ? raw.filter((v) => typeof v === "string") : [];
        const msg = msgs[0];
        if (!msg) continue;
        allResolved[key] = resolveClubPlayerFieldErrorMessage(key, msg);
      }
      const keys = Object.keys(allResolved);
      if (keys.length === 1) {
        const key = keys[0];
        const label = CLUB_PLAYER_FIELD_LABELS[key] ?? key;
        return `${label}: ${allResolved[key]}`;
      }
      if (keys.length > 1) {
        return buildClubPlayerValidationBanner(allResolved);
      }
    }
  }
  return fallback;
}
function buildContactMapSearchUrl(parts) {
  const street = parts.address?.trim() ?? "";
  const postal = parts.postalCode?.trim() ?? "";
  const city = parts.city?.trim() ?? "";
  const cityLine = [postal, city].filter(Boolean).join(" ").trim();
  const fullAddress = [street, cityLine].filter(Boolean).join(", ");
  return buildGoogleMapsSearchUrl({ name: "", address: fullAddress || void 0 });
}
function computeAgeFromIsoDateString(isoDate, referenceDate = /* @__PURE__ */ new Date()) {
  if (!isoDate?.trim()) return null;
  try {
    const d = parseISO(isoDate);
    if (Number.isNaN(d.getTime())) return null;
    return differenceInYears(referenceDate, d);
  } catch {
    return null;
  }
}
function displayOptionalLastName(lastName) {
  return lastName?.trim() ? lastName : "—";
}
function zodSafeParseResolver(schema) {
  return async (values) => {
    const result = schema.safeParse(values);
    if (result.success) {
      return { values, errors: {} };
    }
    const flat = result.error.flatten().fieldErrors;
    const errors = {};
    for (const key of Object.keys(flat)) {
      const msg = flat[key]?.[0];
      if (msg && typeof msg === "string") {
        errors[key] = { type: "validate", message: msg };
      }
    }
    return { values: {}, errors };
  };
}
function playerNumberToFormValue(n) {
  return n === null || n === void 0 ? "-" : String(n);
}

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  notes: ""
};
function ClubSimpleMemberPersonnelSection({
  clubId,
  config,
  members,
  isLoading,
  loadError,
  onRetry
}) {
  const queryClient = useQueryClient();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const form = useForm({
    resolver: zodSafeParseResolver(config.formSchema),
    defaultValues: emptyForm
  });
  useEffect(() => {
    if (!dialogOpen) return;
    if (editing) {
      form.reset({
        firstName: editing.firstName,
        lastName: editing.lastName ?? "",
        email: editing.email ?? "",
        phone: editing.phone ?? "",
        notes: editing.notes ?? ""
      });
      return;
    }
    form.reset(emptyForm);
  }, [dialogOpen, editing, form]);
  const invalidate = () => queryClient.invalidateQueries({
    queryKey: [...config.queryKey(clubId)]
  });
  const saveMutation = useMutation({
    mutationFn: async (values) => {
      const parseJsonSafely = async (res2) => {
        if (res2.status === 204) return null;
        const contentType = res2.headers.get("content-type")?.toLowerCase() ?? "";
        const contentLength = res2.headers.get("content-length");
        if (!contentType.includes("application/json")) return null;
        if (contentLength === "0") return null;
        try {
          return await res2.json();
        } catch {
          return null;
        }
      };
      const body = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email || null,
        phone: values.phone || null,
        notes: values.notes || null
      };
      if (editing) {
        const res2 = await fetch(config.putUrl(editing.id), {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        const data2 = await parseJsonSafely(res2);
        if (!res2.ok) throw new Error(extractClubApiErrorMessage(data2, "Nie udało się zapisać zmian"));
        return data2;
      }
      const res = await fetch(config.postUrl(clubId), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, ...config.createExtras })
      });
      const data = await parseJsonSafely(res);
      if (!res.ok) throw new Error(extractClubApiErrorMessage(data, "Nie udało się dodać osoby"));
      return data;
    },
    onSuccess: async () => {
      setDialogOpen(false);
      setEditing(null);
      await invalidate();
    }
  });
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(config.deleteUrl(id), { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(extractClubApiErrorMessage(data, "Nie udało się usunąć"));
      }
      const text = await res.text();
      return text ? JSON.parse(text) : null;
    },
    onSuccess: async () => {
      setDeleteTarget(null);
      await invalidate();
    }
  });
  const tableRows = useMemo(
    () => members.map((m) => ({
      id: m.id,
      firstName: m.firstName,
      lastName: displayOptionalLastName(m.lastName),
      email: m.email ?? void 0,
      phone: m.phone ?? "",
      notes: m.notes ?? void 0
    })),
    [members]
  );
  if (isLoading) {
    return /* @__PURE__ */ jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ jsx(CircularProgress, { size: 24 }) });
  }
  if (loadError) {
    return /* @__PURE__ */ jsx(DataLoadAlert, { message: loadError, onRetry });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    members.length === 0 ? /* @__PURE__ */ jsx(
      Alert,
      {
        severity: "info",
        sx: { mb: 2 },
        action: /* @__PURE__ */ jsx(
          Button,
          {
            color: "inherit",
            size: "small",
            onClick: () => {
              blurActiveElement();
              setDialogOpen(true);
            },
            children: "Dodaj osobę"
          }
        ),
        children: config.emptyMessage
      }
    ) : null,
    deleteMutation.isError && deleteMutation.error instanceof Error ? /* @__PURE__ */ jsx(Box, { sx: { mb: 2 }, children: /* @__PURE__ */ jsx(MutationErrorAlert, { error: deleteMutation.error, fallbackMessage: "Nie udało się usunąć" }) }) : null,
    /* @__PURE__ */ jsx(
      PersonnelTable,
      {
        title: config.listTitle,
        data: tableRows,
        onAddClick: () => {
          blurActiveElement();
          setEditing(null);
          setDialogOpen(true);
        },
        onEdit: (person) => {
          const row = members.find((m) => m.id === person.id);
          if (!row) return;
          blurActiveElement();
          setEditing(row);
          setDialogOpen(true);
        },
        onDelete: (person) => {
          const row = members.find((m) => m.id === person.id);
          if (!row) return;
          blurActiveElement();
          setDeleteTarget(row);
        },
        deletingId: deleteMutation.isPending ? deleteTarget?.id ?? null : null
      }
    ),
    /* @__PURE__ */ jsxs(
      Dialog,
      {
        open: dialogOpen,
        onClose: () => {
          if (saveMutation.isPending) return;
          blurActiveElement();
          setDialogOpen(false);
        },
        fullWidth: true,
        maxWidth: "xs",
        disableRestoreFocus: true,
        children: [
          /* @__PURE__ */ jsx(DialogTitle, { children: editing ? config.dialogEditTitle : config.dialogAddTitle }),
          /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsxs(
            Box,
            {
              component: "form",
              id: "club-simple-member-form",
              sx: { mt: 1, display: "flex", flexDirection: "column", gap: 2 },
              onSubmit: (e) => {
                e.preventDefault();
                void form.handleSubmit((v) => saveMutation.mutate(v))();
              },
              children: [
                saveMutation.error instanceof Error ? /* @__PURE__ */ jsx(Alert, { severity: "error", children: saveMutation.error.message }) : null,
                /* @__PURE__ */ jsx(
                  Controller,
                  {
                    name: "firstName",
                    control: form.control,
                    render: ({ field, fieldState }) => /* @__PURE__ */ jsx(
                      TextField,
                      {
                        ...field,
                        label: "Imię",
                        required: true,
                        error: Boolean(fieldState.error),
                        helperText: fieldState.error?.message,
                        inputProps: { maxLength: MAX_SHORT_TEXT }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  Controller,
                  {
                    name: "lastName",
                    control: form.control,
                    render: ({ field, fieldState }) => /* @__PURE__ */ jsx(
                      TextField,
                      {
                        ...field,
                        value: field.value ?? "",
                        label: "Nazwisko",
                        required: config.lastNameRequired,
                        error: Boolean(fieldState.error),
                        helperText: fieldState.error?.message,
                        inputProps: { maxLength: MAX_SHORT_TEXT }
                      }
                    )
                  }
                ),
                config.showEmailField ? /* @__PURE__ */ jsx(
                  Controller,
                  {
                    name: "email",
                    control: form.control,
                    render: ({ field, fieldState }) => /* @__PURE__ */ jsx(
                      TextField,
                      {
                        ...field,
                        value: field.value ?? "",
                        label: "E-mail",
                        type: "email",
                        error: Boolean(fieldState.error),
                        helperText: fieldState.error?.message,
                        inputProps: { maxLength: MAX_SHORT_TEXT }
                      }
                    )
                  }
                ) : null,
                /* @__PURE__ */ jsx(
                  Controller,
                  {
                    name: "phone",
                    control: form.control,
                    render: ({ field, fieldState }) => /* @__PURE__ */ jsx(
                      TextField,
                      {
                        ...field,
                        value: field.value ?? "",
                        label: "Telefon",
                        placeholder: "9 cyfr",
                        inputMode: "numeric",
                        error: Boolean(fieldState.error),
                        helperText: fieldState.error?.message ?? "Opcjonalnie — wpisz 9 cyfr (bez przedrostka kraju).",
                        onChange: (e) => field.onChange(sanitizePhone(e.target.value))
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx(
                  Controller,
                  {
                    name: "notes",
                    control: form.control,
                    render: ({ field, fieldState }) => /* @__PURE__ */ jsx(
                      TextField,
                      {
                        ...field,
                        value: field.value ?? "",
                        label: "Uwagi",
                        placeholder: "Dodatkowe informacje o osobie",
                        multiline: true,
                        rows: 3,
                        error: Boolean(fieldState.error),
                        helperText: fieldState.error?.message,
                        inputProps: { maxLength: 500 }
                      }
                    )
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs(DialogActions, { children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                onClick: () => {
                  blurActiveElement();
                  setDialogOpen(false);
                },
                disabled: saveMutation.isPending,
                children: "Anuluj"
              }
            ),
            /* @__PURE__ */ jsx(Button, { type: "submit", form: "club-simple-member-form", variant: "contained", disabled: saveMutation.isPending, children: saveMutation.isPending ? /* @__PURE__ */ jsx(CircularProgress, { size: 20 }) : "Zapisz" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      ConfirmationDialog,
      {
        open: Boolean(deleteTarget),
        onClose: () => !deleteMutation.isPending && setDeleteTarget(null),
        onConfirm: () => {
          if (deleteTarget) deleteMutation.mutate(deleteTarget.id);
        },
        loading: deleteMutation.isPending,
        title: config.deleteDialogTitle,
        description: /* @__PURE__ */ jsxs("span", { children: [
          "Czy na pewno chcesz usunąć",
          " ",
          /* @__PURE__ */ jsxs("strong", { children: [
            deleteTarget?.firstName,
            " ",
            displayOptionalLastName(deleteTarget?.lastName)
          ] }),
          "? Tej operacji nie cofniesz."
        ] })
      }
    )
  ] });
}

const skillRatingFromForm = z.preprocess(
  (v) => v === null || v === void 0 ? "" : v,
  z.union([
    z.literal(""),
    z.number().int().min(1, "Ocena od 1 do 5").max(5, "Ocena od 1 do 5")
  ])
);
const clubPlayerFormSchema = ClubPlayerFieldsSchema.omit({ clubId: true, height: true }).extend({
  speed: skillRatingFromForm,
  strength: skillRatingFromForm,
  endurance: skillRatingFromForm,
  technique: skillRatingFromForm,
  mentality: skillRatingFromForm,
  tactics: skillRatingFromForm
});
const clubCoachFormSchema = ClubCoachRefereeFieldsSchema.omit({ clubId: true });
const clubVolunteerFormSchema = ClubVolunteerFieldsSchema.omit({ clubId: true });
const clubRefereeFormSchema = ClubCoachRefereeFieldsSchema.omit({ clubId: true });
const clubStaffOtherFormSchema = ClubStaffFieldsSchema.omit({ clubId: true });

const CONFIG$3 = {
  listTitle: "Trenerzy",
  emptyMessage: "Brak trenerów. Dodaj pierwszego trenera — imię i nazwisko są wymagane.",
  dialogAddTitle: "Dodaj trenera",
  dialogEditTitle: "Edytuj trenera",
  deleteDialogTitle: "Usuń trenera",
  queryKey: (clubId) => ["club", "coaches", clubId],
  postUrl: (clubId) => `/api/club/${clubId}/coaches`,
  putUrl: (id) => `/api/club/coaches/${id}`,
  deleteUrl: (id) => `/api/club/coaches/${id}`,
  formSchema: clubCoachFormSchema,
  showEmailField: true,
  lastNameRequired: true
};
function ClubCoachesPersonnelSection(props) {
  return /* @__PURE__ */ jsx(
    ClubSimpleMemberPersonnelSection,
    {
      clubId: props.clubId,
      config: CONFIG$3,
      members: props.coaches,
      isLoading: props.isLoading,
      loadError: props.loadError,
      onRetry: props.onRetry
    }
  );
}

const CONFIG$2 = {
  listTitle: "Pozostali",
  emptyMessage: "Brak pozostałych osób. Dodaj wpis — wymagane jest tylko imię.",
  dialogAddTitle: "Dodaj osobę",
  dialogEditTitle: "Edytuj osobę",
  deleteDialogTitle: "Usuń osobę",
  queryKey: (clubId) => ["club", "staff", clubId],
  postUrl: (clubId) => `/api/club/${clubId}/staff`,
  putUrl: (id) => `/api/club/staff/${id}`,
  deleteUrl: (id) => `/api/club/staff/${id}`,
  formSchema: clubStaffOtherFormSchema,
  createExtras: { role: "OTHER" },
  showEmailField: true,
  lastNameRequired: false
};
function ClubOthersPersonnelSection(props) {
  return /* @__PURE__ */ jsx(
    ClubSimpleMemberPersonnelSection,
    {
      clubId: props.clubId,
      config: CONFIG$2,
      members: props.others,
      isLoading: props.isLoading,
      loadError: props.loadError,
      onRetry: props.onRetry
    }
  );
}

const STATUS_OPTIONS = [
  { value: "ACTIVE", label: "Aktywny" },
  { value: "INACTIVE", label: "Nieaktywny" },
  { value: "GUEST", label: "Gość" }
];
const PLAYER_SKILL_RATING_OPTIONS = [1, 2, 3, 4, 5];
const PLAYER_SKILL_FIELDS = [
  { name: "speed", label: "Szybkość" },
  { name: "strength", label: "Siła" },
  { name: "endurance", label: "Wytrzymałość" },
  { name: "technique", label: "Technika" },
  { name: "mentality", label: "Mentalność" },
  { name: "tactics", label: "Taktyka" }
];
const PLAYER_LIST_TILE_WIDTH_PX = 310;
const statusLabel = (s) => STATUS_OPTIONS.find((o) => o.value === (s ?? "ACTIVE"))?.label ?? s ?? "ACTIVE";
function playerBirthDisplay(birthDate) {
  if (!birthDate?.trim()) return "—";
  const d = birthDate.slice(0, 10);
  const years = computeAgeFromIsoDateString(`${d}T12:00:00.000Z`);
  return years === null ? d : `${d} (${years} lat)`;
}
function playerAddressLine(p) {
  const line1 = p.contactAddress?.trim();
  const cityLine = [p.contactPostalCode?.trim(), p.contactCity?.trim()].filter(Boolean).join(" ");
  const parts = [line1, cityLine].filter(Boolean);
  return parts.length ? parts.join(", ") : "—";
}
function playerContactAddressForMaps(p) {
  const line1 = p.contactAddress?.trim();
  const cityLine = [p.contactPostalCode?.trim(), p.contactCity?.trim()].filter(Boolean).join(" ");
  return [line1, cityLine].filter(Boolean).join(", ");
}
function formatClassificationForList$1(c) {
  if (c === null || c === void 0) return "—";
  const n = Number(c);
  if (!Number.isFinite(n)) return "—";
  return n.toFixed(1);
}
const SKILL_RATING_COLOR_STOPS = [
  { pos: 1, r: 183, g: 28, b: 28 },
  { pos: 2, r: 230, g: 81, b: 0 },
  { pos: 3, r: 251, g: 192, b: 45 },
  { pos: 4, r: 139, g: 195, b: 74 },
  { pos: 5, r: 46, g: 125, b: 50 }
];
function skillRatingColor(rating) {
  const x = Math.max(1, Math.min(5, rating));
  const stops = SKILL_RATING_COLOR_STOPS;
  for (let i = 0; i < stops.length - 1; i++) {
    const a = stops[i];
    const b = stops[i + 1];
    if (!a || !b) break;
    if (x <= b.pos) {
      const t = (x - a.pos) / (b.pos - a.pos);
      const lerp = (u, v) => Math.round(u + (v - u) * t);
      return `rgb(${lerp(a.r, b.r)}, ${lerp(a.g, b.g)}, ${lerp(a.b, b.b)})`;
    }
  }
  const last = stops[stops.length - 1];
  if (last) return `rgb(${last.r}, ${last.g}, ${last.b})`;
  return "rgb(128, 128, 128)";
}
function playerSkillsPresent(p) {
  return PLAYER_SKILL_FIELDS.flatMap(({ name, label }) => {
    const v = p[name];
    return typeof v === "number" && Number.isFinite(v) ? [{ name, label, value: v }] : [];
  });
}
function PlayerDetailField({ label, children }) {
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "caption", color: "text.secondary", component: "p", sx: { m: 0, mb: 0.25 }, children: label }),
    /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "div", sx: { wordBreak: "break-word" }, children })
  ] });
}
const emptyPlayerForm = () => ({
  firstName: "",
  lastName: "",
  classification: 0.5,
  number: "-",
  status: "ACTIVE",
  birthDate: null,
  contactEmail: "",
  contactPhone: "",
  contactAddress: "",
  contactCity: "",
  contactPostalCode: "",
  contactMapUrl: "",
  speed: "",
  strength: "",
  endurance: "",
  technique: "",
  mentality: "",
  tactics: ""
});
function mapPlayerToForm(p) {
  return {
    firstName: p.firstName,
    lastName: p.lastName,
    classification: p.classification ?? 0.5,
    number: playerNumberToFormValue(p.number),
    status: p.status ?? "ACTIVE",
    birthDate: p.birthDate ? p.birthDate.slice(0, 10) : null,
    contactEmail: p.contactEmail ?? "",
    contactPhone: p.contactPhone ?? "",
    contactAddress: p.contactAddress ?? "",
    contactCity: p.contactCity ?? "",
    contactPostalCode: p.contactPostalCode ?? "",
    contactMapUrl: p.contactMapUrl ?? "",
    speed: p.speed ?? "",
    strength: p.strength ?? "",
    endurance: p.endurance ?? "",
    technique: p.technique ?? "",
    mentality: p.mentality ?? "",
    tactics: p.tactics ?? ""
  };
}
function toPlayerApiJson(values) {
  const payload = {
    firstName: values.firstName,
    lastName: values.lastName,
    classification: values.classification,
    number: values.number,
    status: values.status,
    birthDate: values.birthDate?.trim() ? values.birthDate.slice(0, 10) : null,
    contactEmail: values.contactEmail?.trim() || null,
    contactPhone: values.contactPhone?.trim() || null
  };
  if (values.contactAddress?.trim()) payload.contactAddress = values.contactAddress.trim();
  if (values.contactCity?.trim()) payload.contactCity = values.contactCity.trim();
  if (values.contactPostalCode?.trim()) payload.contactPostalCode = values.contactPostalCode.trim();
  if (values.contactMapUrl?.trim()) payload.contactMapUrl = values.contactMapUrl.trim();
  for (const key of ["speed", "strength", "endurance", "technique", "mentality", "tactics"]) {
    const raw = values[key];
    payload[key] = typeof raw === "number" ? raw : null;
  }
  return payload;
}
function ClubPlayersPersonnelSection({
  clubId,
  players,
  isLoading,
  loadError,
  onRetry
}) {
  const queryClient = useQueryClient();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const form = useForm({
    resolver: zodSafeParseResolver(clubPlayerFormSchema),
    defaultValues: emptyPlayerForm()
  });
  const watchedBirth = useWatch({ control: form.control, name: "birthDate" });
  const watchedAddress = useWatch({ control: form.control, name: "contactAddress" });
  const watchedPostal = useWatch({ control: form.control, name: "contactPostalCode" });
  const watchedCity = useWatch({ control: form.control, name: "contactCity" });
  const ageDisplay = useMemo(() => {
    if (!watchedBirth?.trim()) return "—";
    const years = computeAgeFromIsoDateString(`${watchedBirth}T12:00:00.000Z`);
    return years === null ? "—" : `${years} lat`;
  }, [watchedBirth]);
  useEffect(() => {
    if (!dialogOpen) return;
    const url = buildContactMapSearchUrl({
      address: watchedAddress,
      postalCode: watchedPostal,
      city: watchedCity
    });
    form.setValue("contactMapUrl", url ?? "", { shouldValidate: false, shouldDirty: false });
  }, [dialogOpen, watchedAddress, watchedPostal, watchedCity, form]);
  useEffect(() => {
    if (!dialogOpen) return;
    if (editing) {
      form.reset(mapPlayerToForm(editing));
      return;
    }
    form.reset(emptyPlayerForm());
  }, [dialogOpen, editing, form]);
  const invalidatePlayersAndTeams = async () => {
    await queryClient.invalidateQueries({ queryKey: ["club", "players", clubId] });
    await queryClient.invalidateQueries({ queryKey: ["club", "teams", clubId] });
  };
  const saveMutation = useMutation({
    mutationFn: async (values) => {
      const json = toPlayerApiJson(values);
      if (editing) {
        const res2 = await fetch(`/api/club/players/${editing.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(json)
        });
        if (!res2.ok) {
          const data3 = await res2.json().catch(() => ({}));
          const fieldMap = parseClubPlayerApiFieldMessages(data3);
          if (fieldMap) throw new ClubPersonnelValidationError(fieldMap);
          throw new Error(extractClubApiErrorMessage(data3, "Nie udało się zapisać zawodnika"));
        }
        const data2 = await res2.json();
        return data2;
      }
      const res = await fetch(`/api/club/${clubId}/players`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(json)
      });
      if (!res.ok) {
        const data2 = await res.json().catch(() => ({}));
        const fieldMap = parseClubPlayerApiFieldMessages(data2);
        if (fieldMap) throw new ClubPersonnelValidationError(fieldMap);
        throw new Error(extractClubApiErrorMessage(data2, "Nie udało się dodać zawodnika"));
      }
      const data = await res.json();
      return data;
    },
    onMutate: () => {
      form.clearErrors();
    },
    onError: (error) => {
      if (error instanceof ClubPersonnelValidationError) {
        for (const key of Object.keys(error.fieldMessages)) {
          if (key in emptyPlayerForm()) {
            const msg = error.fieldMessages[key];
            if (msg) {
              form.setError(key, { type: "server", message: msg });
            }
          }
        }
      }
    },
    onSuccess: async () => {
      setDialogOpen(false);
      setEditing(null);
      await invalidatePlayersAndTeams();
    }
  });
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(`/api/club/players/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const data2 = await res.json().catch(() => ({}));
        throw new Error(extractClubApiErrorMessage(data2, "Nie udało się usunąć zawodnika"));
      }
      const data = await res.json();
      return data;
    },
    onSuccess: async () => {
      setDeleteTarget(null);
      await invalidatePlayersAndTeams();
    }
  });
  if (isLoading) {
    return /* @__PURE__ */ jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ jsx(CircularProgress, { size: 24 }) });
  }
  if (loadError) {
    return /* @__PURE__ */ jsx(DataLoadAlert, { message: loadError, onRetry });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    players.length === 0 ? /* @__PURE__ */ jsx(
      Alert,
      {
        severity: "info",
        sx: { mb: 2 },
        action: /* @__PURE__ */ jsx(
          Button,
          {
            color: "inherit",
            size: "small",
            onClick: () => {
              blurActiveElement();
              setDialogOpen(true);
            },
            children: "Dodaj zawodnika"
          }
        ),
        children: "Brak zawodników w klubie. Dodaj pierwszą osobę, aby przypisać ją do drużyny."
      }
    ) : null,
    deleteMutation.isError && deleteMutation.error instanceof Error ? /* @__PURE__ */ jsx(Box, { sx: { mb: 2 }, children: /* @__PURE__ */ jsx(MutationErrorAlert, { error: deleteMutation.error, fallbackMessage: "Nie udało się usunąć zawodnika" }) }) : null,
    /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h6", sx: { fontWeight: "bold" }, children: "Lista zawodników" }),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "contained",
          size: "small",
          onClick: () => {
            blurActiveElement();
            setEditing(null);
            setDialogOpen(true);
          },
          children: "+ Dodaj zawodnika"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      Stack,
      {
        component: "ul",
        direction: "row",
        flexWrap: "wrap",
        spacing: 1,
        useFlexGap: true,
        sx: { listStyle: "none", m: 0, p: 0, alignItems: "flex-start", width: "100%" },
        children: players.map((p) => {
          const shirt = p.number === null || p.number === void 0 ? "—" : String(p.number);
          const classificationDisplay = formatClassificationForList$1(p.classification);
          const skillsRow = playerSkillsPresent(p);
          const mapsHref = resolvePlaceMapsHref({
            mapUrl: p.contactMapUrl ?? void 0,
            name: "",
            address: playerContactAddressForMaps(p)
          });
          return /* @__PURE__ */ jsxs(
            Accordion,
            {
              component: "li",
              disableGutters: true,
              elevation: 0,
              sx: {
                width: PLAYER_LIST_TILE_WIDTH_PX,
                maxWidth: "100%",
                boxSizing: "border-box",
                border: 1,
                borderColor: "divider",
                borderRadius: 2,
                listStyle: "none",
                overflow: "hidden",
                bgcolor: "background.paper",
                boxShadow: 1,
                flexShrink: 0,
                "&:before": { display: "none" }
              },
              children: [
                /* @__PURE__ */ jsxs(
                  AccordionSummary,
                  {
                    component: "div",
                    expandIcon: /* @__PURE__ */ jsx(ExpandMoreIcon, {}),
                    sx: {
                      alignItems: "flex-start",
                      px: 2,
                      py: 1.5,
                      "& .MuiAccordionSummary-content": {
                        flexDirection: "column",
                        alignItems: "stretch",
                        gap: 1.25,
                        my: 0
                      },
                      "& .MuiAccordionSummary-expandIconWrapper": {
                        alignSelf: "flex-start",
                        pt: 0.25
                      }
                    },
                    children: [
                      /* @__PURE__ */ jsxs(Stack, { direction: "row", alignItems: "baseline", flexWrap: "wrap", columnGap: 1, rowGap: 0.5, children: [
                        /* @__PURE__ */ jsx(Typography, { component: "span", variant: "subtitle1", sx: { fontWeight: 700 }, children: p.firstName }),
                        /* @__PURE__ */ jsx(Typography, { component: "span", variant: "subtitle1", sx: { fontWeight: 700 }, children: p.lastName }),
                        /* @__PURE__ */ jsx(Typography, { component: "span", variant: "body2", color: "text.secondary", children: classificationDisplay })
                      ] }),
                      /* @__PURE__ */ jsx(
                        Box,
                        {
                          sx: {
                            display: "grid",
                            gridTemplateColumns: "minmax(0, 1fr) auto",
                            columnGap: 2,
                            rowGap: 0.75,
                            alignItems: "center"
                          },
                          children: skillsRow.length ? skillsRow.map(({ name, label, value }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
                            /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "text.secondary", component: "div", sx: { minWidth: 0 }, children: label }),
                            /* @__PURE__ */ jsx(
                              Box,
                              {
                                component: "span",
                                sx: (theme) => {
                                  const bg = skillRatingColor(value);
                                  return {
                                    justifySelf: "end",
                                    width: 26,
                                    height: 26,
                                    boxSizing: "border-box",
                                    flexShrink: 0,
                                    borderRadius: 0.5,
                                    bgcolor: bg,
                                    color: theme.palette.getContrastText(bg),
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 700,
                                    typography: "body2",
                                    lineHeight: 1
                                  };
                                },
                                children: value
                              }
                            )
                          ] }, name)) : /* @__PURE__ */ jsx(
                            Typography,
                            {
                              variant: "body2",
                              color: "text.disabled",
                              sx: { fontStyle: "italic", gridColumn: "1 / -1" },
                              children: "Brak ocenionych umiejętności"
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxs(Stack, { direction: "row", flexWrap: "wrap", gap: 1, useFlexGap: true, sx: { pt: 0.25 }, children: [
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            size: "small",
                            variant: "outlined",
                            onClick: (e) => {
                              e.stopPropagation();
                              blurActiveElement();
                              setEditing(p);
                              setDialogOpen(true);
                            },
                            children: "Edytuj"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            size: "small",
                            color: "error",
                            variant: "outlined",
                            disabled: deleteMutation.isPending && deleteTarget?.id === p.id,
                            onClick: (e) => {
                              e.stopPropagation();
                              blurActiveElement();
                              setDeleteTarget(p);
                            },
                            children: "Usuń"
                          }
                        )
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  AccordionDetails,
                  {
                    sx: {
                      px: 2,
                      pb: 2,
                      pt: 0,
                      borderTop: 1,
                      borderColor: "divider",
                      bgcolor: (theme) => theme.palette.mode === "dark" ? "action.hover" : theme.palette.grey[50]
                    },
                    children: /* @__PURE__ */ jsxs(
                      Box,
                      {
                        sx: {
                          display: "grid",
                          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
                          gap: 1.5,
                          pt: 2
                        },
                        children: [
                          /* @__PURE__ */ jsx(PlayerDetailField, { label: "Numer koszulki", children: shirt }),
                          /* @__PURE__ */ jsx(PlayerDetailField, { label: "Status", children: statusLabel(p.status ?? "ACTIVE") }),
                          /* @__PURE__ */ jsx(PlayerDetailField, { label: "Data urodzenia", children: playerBirthDisplay(p.birthDate) }),
                          /* @__PURE__ */ jsx(PlayerDetailField, { label: "Telefon", children: p.contactPhone?.trim() || "—" }),
                          /* @__PURE__ */ jsx(Box, { sx: { gridColumn: { xs: "auto", sm: "1 / -1" } }, children: /* @__PURE__ */ jsx(PlayerDetailField, { label: "E-mail", children: p.contactEmail?.trim() || "—" }) }),
                          /* @__PURE__ */ jsx(Box, { sx: { gridColumn: { xs: "auto", sm: "1 / -1" } }, children: /* @__PURE__ */ jsx(PlayerDetailField, { label: "Adres", children: playerAddressLine(p) }) }),
                          mapsHref ? /* @__PURE__ */ jsx(Link, { href: mapsHref, target: "_blank", rel: "noopener noreferrer", children: "Mapa ->" }) : "—"
                        ]
                      }
                    )
                  }
                )
              ]
            },
            p.id
          );
        })
      }
    ),
    /* @__PURE__ */ jsxs(
      Dialog,
      {
        open: dialogOpen,
        onClose: () => {
          if (saveMutation.isPending) return;
          blurActiveElement();
          setDialogOpen(false);
        },
        fullWidth: true,
        maxWidth: "sm",
        disableRestoreFocus: true,
        children: [
          /* @__PURE__ */ jsx(DialogTitle, { children: editing ? "Edytuj zawodnika" : "Nowy zawodnik" }),
          /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsxs(
            Box,
            {
              component: "form",
              id: "club-player-form",
              sx: { mt: 1, display: "flex", flexDirection: "column", gap: 2 },
              onSubmit: (e) => {
                e.preventDefault();
                void form.handleSubmit((v) => saveMutation.mutate(v))();
              },
              children: [
                saveMutation.error instanceof Error && !(saveMutation.error instanceof ClubPersonnelValidationError) ? /* @__PURE__ */ jsx(Alert, { severity: "error", sx: { whiteSpace: "pre-line" }, children: saveMutation.error.message }) : null,
                /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, children: [
                  /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
                    Controller,
                    {
                      name: "firstName",
                      control: form.control,
                      render: ({ field, fieldState }) => /* @__PURE__ */ jsx(
                        TextField,
                        {
                          ...field,
                          fullWidth: true,
                          label: "Imię",
                          required: true,
                          error: Boolean(fieldState.error),
                          helperText: fieldState.error?.message,
                          inputProps: { maxLength: MAX_SHORT_TEXT }
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
                    Controller,
                    {
                      name: "lastName",
                      control: form.control,
                      render: ({ field, fieldState }) => /* @__PURE__ */ jsx(
                        TextField,
                        {
                          ...field,
                          fullWidth: true,
                          label: "Nazwisko",
                          required: true,
                          error: Boolean(fieldState.error),
                          helperText: fieldState.error?.message,
                          inputProps: { maxLength: MAX_SHORT_TEXT }
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
                    Controller,
                    {
                      name: "classification",
                      control: form.control,
                      render: ({ field, fieldState }) => /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, error: Boolean(fieldState.error), children: [
                        /* @__PURE__ */ jsx(InputLabel, { id: "classification-label", children: "Klasyfikacja" }),
                        /* @__PURE__ */ jsx(
                          Select,
                          {
                            ...field,
                            labelId: "classification-label",
                            label: "Klasyfikacja",
                            value: field.value,
                            onChange: (e) => field.onChange(Number(e.target.value)),
                            children: CLUB_PLAYER_CLASSIFICATION_VALUES.map((v) => /* @__PURE__ */ jsx(MenuItem, { value: v, children: v }, v))
                          }
                        ),
                        fieldState.error ? /* @__PURE__ */ jsx(Typography, { variant: "caption", color: "error", sx: { mt: 0.5, ml: 1.5 }, children: fieldState.error.message }) : null
                      ] })
                    }
                  ) }),
                  /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
                    Controller,
                    {
                      name: "number",
                      control: form.control,
                      render: ({ field, fieldState }) => /* @__PURE__ */ jsx(
                        TextField,
                        {
                          ...field,
                          fullWidth: true,
                          value: field.value ?? "-",
                          label: "Numer koszulki",
                          required: true,
                          error: Boolean(fieldState.error),
                          helperText: fieldState.error?.message ?? "Od 1 do 99 albo znak „-”, jeśli nie ma numeru.",
                          inputProps: { maxLength: 3 },
                          onFocus: () => {
                            if (field.value === "-") field.onChange("");
                          },
                          onBlur: (e) => {
                            const trimmed = e.target.value.trim();
                            if (trimmed === "" || trimmed === "–") field.onChange("-");
                            field.onBlur();
                          }
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsxs(Grid, { size: 12, children: [
                    /* @__PURE__ */ jsx(Typography, { variant: "subtitle2", sx: { fontWeight: 600 }, children: "Umiejętności" }),
                    /* @__PURE__ */ jsx(Typography, { variant: "caption", color: "text.secondary", component: "p", sx: { mt: 0.25, mb: 0 }, children: "Ocena od 1 do 5 w każdej kategorii (opcjonalnie)." })
                  ] }),
                  PLAYER_SKILL_FIELDS.map(({ name, label }) => /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
                    Controller,
                    {
                      name,
                      control: form.control,
                      render: ({ field, fieldState }) => /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, size: "small", required: false, error: Boolean(fieldState.error), children: [
                        /* @__PURE__ */ jsx(InputLabel, { id: `${name}-label`, children: label }),
                        /* @__PURE__ */ jsxs(
                          Select,
                          {
                            labelId: `${name}-label`,
                            label,
                            required: false,
                            value: field.value === "" ? "" : String(field.value),
                            onChange: (e) => {
                              const v = e.target.value;
                              field.onChange(v === "" ? "" : Number(v));
                            },
                            children: [
                              /* @__PURE__ */ jsx(MenuItem, { value: "", children: /* @__PURE__ */ jsx("em", { children: "—" }) }),
                              PLAYER_SKILL_RATING_OPTIONS.map((n) => /* @__PURE__ */ jsx(MenuItem, { value: String(n), children: n }, n))
                            ]
                          }
                        ),
                        fieldState.error ? /* @__PURE__ */ jsx(Typography, { variant: "caption", color: "error", sx: { mt: 0.5, ml: 1.5 }, children: fieldState.error.message }) : null
                      ] })
                    }
                  ) }, name)),
                  /* @__PURE__ */ jsx(Grid, { size: 12, children: /* @__PURE__ */ jsx(
                    Controller,
                    {
                      name: "status",
                      control: form.control,
                      render: ({ field, fieldState }) => /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, error: Boolean(fieldState.error), children: [
                        /* @__PURE__ */ jsx(InputLabel, { id: "status-label", children: "Status" }),
                        /* @__PURE__ */ jsx(Select, { ...field, labelId: "status-label", label: "Status", value: field.value, children: STATUS_OPTIONS.map((o) => /* @__PURE__ */ jsx(MenuItem, { value: o.value, children: o.label }, o.value)) })
                      ] })
                    }
                  ) }),
                  /* @__PURE__ */ jsx(Grid, { size: 12, children: /* @__PURE__ */ jsx(Typography, { variant: "subtitle2", sx: { fontWeight: 600 }, children: "Dane osobowe" }) }),
                  /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
                    Controller,
                    {
                      name: "birthDate",
                      control: form.control,
                      render: ({ field, fieldState }) => /* @__PURE__ */ jsx(
                        TextField,
                        {
                          ...field,
                          fullWidth: true,
                          value: field.value ?? "",
                          label: "Data urodzenia (opcjonalnie)",
                          type: "date",
                          InputLabelProps: { shrink: true },
                          error: Boolean(fieldState.error),
                          helperText: fieldState.error?.message,
                          onChange: (e) => field.onChange(e.target.value === "" ? null : e.target.value)
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(TextField, { fullWidth: true, label: "Wiek (liczony automatycznie)", value: ageDisplay, disabled: true }) }),
                  /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
                    Controller,
                    {
                      name: "contactEmail",
                      control: form.control,
                      render: ({ field, fieldState }) => /* @__PURE__ */ jsx(
                        TextField,
                        {
                          ...field,
                          fullWidth: true,
                          value: field.value ?? "",
                          label: "E-mail kontaktowy",
                          type: "email",
                          error: Boolean(fieldState.error),
                          helperText: fieldState.error?.message,
                          inputProps: { maxLength: MAX_SHORT_TEXT }
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
                    Controller,
                    {
                      name: "contactPhone",
                      control: form.control,
                      render: ({ field, fieldState }) => /* @__PURE__ */ jsx(
                        TextField,
                        {
                          ...field,
                          fullWidth: true,
                          value: field.value ?? "",
                          label: "Telefon kontaktowy",
                          inputMode: "numeric",
                          error: Boolean(fieldState.error),
                          helperText: fieldState.error?.message ?? "Opcjonalnie — 9 cyfr bez prefiksu kraju.",
                          onChange: (e) => field.onChange(sanitizePhone(e.target.value))
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsx(Grid, { size: 12, children: /* @__PURE__ */ jsx(Typography, { variant: "subtitle2", sx: { fontWeight: 600 }, children: "Dane teleadresowe" }) }),
                  /* @__PURE__ */ jsx(Grid, { size: 12, children: /* @__PURE__ */ jsx(
                    Controller,
                    {
                      name: "contactAddress",
                      control: form.control,
                      render: ({ field, fieldState }) => /* @__PURE__ */ jsx(
                        TextField,
                        {
                          ...field,
                          fullWidth: true,
                          value: field.value ?? "",
                          label: "Ulica",
                          placeholder: "Ulica",
                          error: Boolean(fieldState.error),
                          helperText: fieldState.error?.message,
                          inputProps: { maxLength: MAX_LONG_TEXT }
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
                    Controller,
                    {
                      name: "contactPostalCode",
                      control: form.control,
                      render: ({ field, fieldState }) => /* @__PURE__ */ jsx(
                        TextField,
                        {
                          ...field,
                          fullWidth: true,
                          value: field.value ?? "",
                          label: "Kod pocztowy",
                          placeholder: "XX-XXX",
                          error: Boolean(fieldState.error),
                          helperText: fieldState.error?.message
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsx(Grid, { size: { xs: 12, sm: 6 }, children: /* @__PURE__ */ jsx(
                    Controller,
                    {
                      name: "contactCity",
                      control: form.control,
                      render: ({ field, fieldState }) => /* @__PURE__ */ jsx(
                        TextField,
                        {
                          ...field,
                          fullWidth: true,
                          value: field.value ?? "",
                          label: "Miasto",
                          error: Boolean(fieldState.error),
                          helperText: fieldState.error?.message,
                          inputProps: { maxLength: MAX_SHORT_TEXT }
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsx(Grid, { size: 12, children: /* @__PURE__ */ jsx(
                    Controller,
                    {
                      name: "contactMapUrl",
                      control: form.control,
                      render: ({ field }) => /* @__PURE__ */ jsx(
                        TextField,
                        {
                          ...field,
                          fullWidth: true,
                          value: field.value ?? "",
                          label: "Link do Mapy",
                          InputProps: { readOnly: true },
                          helperText: "Uzupełnij ulicę, kod i miasto — link zaktualizuje się automatycznie (Google Maps)."
                        }
                      )
                    }
                  ) })
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs(DialogActions, { children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                onClick: () => {
                  blurActiveElement();
                  setDialogOpen(false);
                },
                disabled: saveMutation.isPending,
                children: "Anuluj"
              }
            ),
            /* @__PURE__ */ jsx(Button, { type: "submit", form: "club-player-form", variant: "contained", disabled: saveMutation.isPending, children: saveMutation.isPending ? /* @__PURE__ */ jsx(CircularProgress, { size: 20 }) : "Zapisz" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      ConfirmationDialog,
      {
        open: Boolean(deleteTarget),
        onClose: () => !deleteMutation.isPending && setDeleteTarget(null),
        onConfirm: () => {
          if (deleteTarget) deleteMutation.mutate(deleteTarget.id);
        },
        loading: deleteMutation.isPending,
        title: "Usuń zawodnika",
        description: /* @__PURE__ */ jsxs("span", { children: [
          "Czy na pewno chcesz usunąć",
          " ",
          /* @__PURE__ */ jsxs("strong", { children: [
            deleteTarget?.firstName,
            " ",
            deleteTarget?.lastName
          ] }),
          "? Tej operacji nie cofniesz."
        ] })
      }
    )
  ] });
}

const CONFIG$1 = {
  listTitle: "Sędziowie",
  emptyMessage: "Brak sędziów. Dodaj pierwszą osobę — imię i nazwisko są wymagane.",
  dialogAddTitle: "Dodaj sędziego",
  dialogEditTitle: "Edytuj sędziego",
  deleteDialogTitle: "Usuń sędziego",
  queryKey: (clubId) => ["club", "referees", clubId],
  postUrl: (clubId) => `/api/club/${clubId}/referees`,
  putUrl: (id) => `/api/club/referees/${id}`,
  deleteUrl: (id) => `/api/club/referees/${id}`,
  formSchema: clubRefereeFormSchema,
  showEmailField: true,
  lastNameRequired: true
};
function ClubRefereesPersonnelSection(props) {
  return /* @__PURE__ */ jsx(
    ClubSimpleMemberPersonnelSection,
    {
      clubId: props.clubId,
      config: CONFIG$1,
      members: props.referees,
      isLoading: props.isLoading,
      loadError: props.loadError,
      onRetry: props.onRetry
    }
  );
}

const CONFIG = {
  listTitle: "Wolontariusze",
  emptyMessage: "Brak wolontariuszy. Dodaj osobę, która pomoże przy organizacji — imię jest wymagane, reszta opcjonalna.",
  dialogAddTitle: "Dodaj wolontariusza",
  dialogEditTitle: "Edytuj wolontariusza",
  deleteDialogTitle: "Usuń wolontariusza",
  queryKey: (clubId) => ["club", "volunteers", clubId],
  postUrl: (clubId) => `/api/club/${clubId}/volunteers`,
  putUrl: (id) => `/api/club/volunteers/${id}`,
  deleteUrl: (id) => `/api/club/volunteers/${id}`,
  formSchema: clubVolunteerFormSchema,
  showEmailField: false,
  lastNameRequired: false
};
function ClubVolunteersPersonnelSection(props) {
  return /* @__PURE__ */ jsx(
    ClubSimpleMemberPersonnelSection,
    {
      clubId: props.clubId,
      config: CONFIG,
      members: props.volunteers,
      isLoading: props.isLoading,
      loadError: props.loadError,
      onRetry: props.onRetry
    }
  );
}

const StyledTab = forwardRef((props, ref) => /* @__PURE__ */ jsx(Tab, { ref, component: "a", iconPosition: "start", ...props }));
StyledTab.displayName = "StyledTab";
function ClubPersonnelTabsSection({
  clubId,
  players,
  playersLoading,
  playersError,
  onRetryPlayers,
  volunteers,
  volunteersLoading,
  volunteersError,
  onRetryVolunteers,
  coaches,
  coachesLoading,
  coachesError,
  onRetryCoaches,
  referees,
  refereesLoading,
  refereesError,
  onRetryReferees,
  others,
  othersLoading,
  othersError,
  onRetryOthers
}) {
  const [activeTab, setActiveTab] = useState("players");
  const isWide = useMediaQuery("(min-width:1000px)");
  return /* @__PURE__ */ jsxs(Paper, { sx: { borderRadius: 3 }, children: [
    /* @__PURE__ */ jsxs(
      Tabs,
      {
        value: activeTab,
        onChange: (_, value) => setActiveTab(value),
        variant: isWide ? "standard" : "fullWidth",
        sx: isWide ? {
          "& .MuiTab-root": {
            minWidth: "auto",
            px: 2.5
          },
          "& .MuiTabs-flexContainer": {
            width: "fit-content"
          }
        } : void 0,
        children: [
          /* @__PURE__ */ jsx(StyledTab, { label: "Zawodnicy", value: "players", icon: /* @__PURE__ */ jsx(UserCircle, { size: 18 }) }),
          /* @__PURE__ */ jsx(StyledTab, { label: "Wolontariusze", value: "volunteers", icon: /* @__PURE__ */ jsx(UserCircle, { size: 18 }) }),
          /* @__PURE__ */ jsx(StyledTab, { label: "Trenerzy", value: "coaches", icon: /* @__PURE__ */ jsx(UserCircle, { size: 18 }) }),
          /* @__PURE__ */ jsx(StyledTab, { label: "Sędziowie", value: "referees", icon: /* @__PURE__ */ jsx(UserCircle, { size: 18 }) }),
          /* @__PURE__ */ jsx(StyledTab, { label: "Pozostali", value: "others", icon: /* @__PURE__ */ jsx(UserCircle, { size: 18 }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(CardContent, { sx: { minHeight: 400 }, children: [
      activeTab === "players" ? /* @__PURE__ */ jsx(
        ClubPlayersPersonnelSection,
        {
          clubId,
          players,
          isLoading: playersLoading,
          loadError: playersError,
          onRetry: onRetryPlayers
        }
      ) : null,
      activeTab === "volunteers" ? /* @__PURE__ */ jsx(
        ClubVolunteersPersonnelSection,
        {
          clubId,
          volunteers,
          isLoading: volunteersLoading,
          loadError: volunteersError,
          onRetry: onRetryVolunteers
        }
      ) : null,
      activeTab === "coaches" ? /* @__PURE__ */ jsx(
        ClubCoachesPersonnelSection,
        {
          clubId,
          coaches,
          isLoading: coachesLoading,
          loadError: coachesError,
          onRetry: onRetryCoaches
        }
      ) : null,
      activeTab === "referees" ? /* @__PURE__ */ jsx(
        ClubRefereesPersonnelSection,
        {
          clubId,
          referees,
          isLoading: refereesLoading,
          loadError: refereesError,
          onRetry: onRetryReferees
        }
      ) : null,
      activeTab === "others" ? /* @__PURE__ */ jsx(
        ClubOthersPersonnelSection,
        {
          clubId,
          others,
          isLoading: othersLoading,
          loadError: othersError,
          onRetry: onRetryOthers
        }
      ) : null
    ] })
  ] });
}

function TeamCreateForm({
  isEditing = false,
  teamName,
  teamFormula,
  teamCoachId,
  teamPlayerIds,
  coaches,
  players,
  isPending,
  errorMessage,
  onTeamNameChange,
  onTeamFormulaChange,
  onTeamCoachChange,
  onTeamPlayersChange,
  onCreateTeam,
  onCancelTeamForm
}) {
  const formulaField = /* @__PURE__ */ jsxs(
    TextField,
    {
      select: true,
      label: "Formuła",
      value: teamFormula,
      onChange: (e) => onTeamFormulaChange(e.target.value),
      fullWidth: true,
      sx: { flex: { md: "0 0 160px" }, minWidth: 0 },
      children: [
        /* @__PURE__ */ jsx(MenuItem, { value: "WR4", children: "WR'4" }),
        /* @__PURE__ */ jsx(MenuItem, { value: "WR5", children: "WR'5" })
      ]
    }
  );
  const coachField = /* @__PURE__ */ jsxs(
    TextField,
    {
      select: true,
      label: "Trener",
      value: teamCoachId,
      onChange: (e) => onTeamCoachChange(e.target.value),
      fullWidth: true,
      sx: { flex: { md: "1 1 0" }, minWidth: 0 },
      children: [
        /* @__PURE__ */ jsx(MenuItem, { value: "", children: "Bez trenera" }),
        coaches.map((coach) => /* @__PURE__ */ jsxs(MenuItem, { value: coach.id, children: [
          coach.firstName,
          " ",
          coach.lastName
        ] }, coach.id))
      ]
    }
  );
  return /* @__PURE__ */ jsxs(Stack, { gap: 2, sx: { mb: 3 }, children: [
    /* @__PURE__ */ jsxs(Stack, { direction: { xs: "column", md: "row" }, gap: 2, sx: { alignItems: { md: "flex-start" } }, children: [
      /* @__PURE__ */ jsx(
        TextField,
        {
          label: "Nazwa drużyny",
          value: teamName,
          onChange: (e) => onTeamNameChange(e.target.value),
          fullWidth: true,
          sx: { flex: { md: "1 1 0" }, minWidth: 0 }
        }
      ),
      formulaField,
      coachField
    ] }),
    /* @__PURE__ */ jsxs(Box, { children: [
      /* @__PURE__ */ jsx(Typography, { variant: "subtitle2", sx: { fontWeight: 600, mb: 1 }, children: "Zawodnicy w drużynie" }),
      /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mb: 1.5 }, children: "Zaznacz checkbox przy osobach, które mają być w składzie." }),
      players.length === 0 ? /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "text.disabled", children: "Brak zawodników w klubie — dodaj ich w zakładce Zawodnicy." }) : /* @__PURE__ */ jsx(
        FormGroup,
        {
          sx: {
            maxHeight: 280,
            overflow: "auto",
            pr: 0.5,
            border: 1,
            borderColor: "divider",
            borderRadius: 1,
            p: 1,
            bgcolor: (theme) => theme.palette.mode === "dark" ? "action.hover" : theme.palette.grey[50]
          },
          children: players.map((player) => {
            const label = `${player.firstName} ${player.lastName}`;
            const checked = teamPlayerIds.includes(player.id);
            return /* @__PURE__ */ jsx(
              FormControlLabel,
              {
                control: /* @__PURE__ */ jsx(
                  Checkbox,
                  {
                    size: "small",
                    checked,
                    onChange: () => {
                      onTeamPlayersChange(
                        checked ? teamPlayerIds.filter((id) => id !== player.id) : [...teamPlayerIds, player.id]
                      );
                    }
                  }
                ),
                label,
                sx: { mr: 0, alignItems: "center", py: 0.25 }
              },
              player.id
            );
          })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Stack, { direction: "row", gap: 1.5, flexWrap: "wrap", children: [
      /* @__PURE__ */ jsx(Button, { variant: "outlined", disabled: isPending, onClick: onCancelTeamForm, children: "Anuluj" }),
      /* @__PURE__ */ jsx(Button, { variant: "contained", disabled: !teamName.trim() || isPending, onClick: onCreateTeam, children: isEditing ? "Zapisz zmiany" : "Zapisz drużynę" })
    ] }),
    errorMessage ? /* @__PURE__ */ jsx(Typography, { color: "error.main", children: errorMessage }) : null
  ] });
}

function formatClassificationForList(c) {
  if (c === null || c === void 0) return "—";
  const n = Number(c);
  if (!Number.isFinite(n)) return "—";
  return n.toFixed(1);
}
function TeamTile({
  team,
  expanded,
  onExpandChange,
  onEditTeam,
  onRequestDeleteTeam,
  isDeletePending = false
}) {
  return /* @__PURE__ */ jsxs(
    Accordion,
    {
      expanded,
      onChange: (_event, nextExpanded) => onExpandChange(nextExpanded),
      disableGutters: true,
      elevation: 0,
      sx: {
        // Fill grid column (desktop: half row per tile; mobile: single full-width column).
        width: "100%",
        minWidth: 0,
        maxWidth: "100%",
        boxSizing: "border-box",
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
        overflow: "hidden",
        bgcolor: "background.paper",
        boxShadow: 1,
        "&:before": { display: "none" }
      },
      children: [
        /* @__PURE__ */ jsxs(
          AccordionSummary,
          {
            component: "div",
            expandIcon: /* @__PURE__ */ jsx(ExpandMoreIcon, {}),
            sx: {
              px: 2,
              py: 1.5,
              "& .MuiAccordionSummary-content": {
                flexDirection: "column",
                alignItems: "stretch",
                gap: 1.25,
                my: 0
              },
              "& .MuiAccordionSummary-expandIconWrapper": {
                alignSelf: "flex-start",
                pt: 0.25
              }
            },
            children: [
              /* @__PURE__ */ jsxs(Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", gap: 2, flexWrap: "wrap", children: [
                /* @__PURE__ */ jsx(Typography, { sx: { fontWeight: 700 }, children: team.name }),
                /* @__PURE__ */ jsx(Chip, { label: team.formula === "WR4" ? "WR'4" : "WR'5", size: "small" })
              ] }),
              /* @__PURE__ */ jsxs(Typography, { color: "text.secondary", variant: "body2", component: "div", children: [
                "Zawodników:",
                " ",
                /* @__PURE__ */ jsx(Typography, { component: "span", color: "text.secondary", variant: "body2", sx: { fontWeight: 700 }, children: team.players.length })
              ] }),
              /* @__PURE__ */ jsxs(Typography, { color: "text.secondary", variant: "body2", component: "div", children: [
                "Trener:",
                " ",
                team.coach ? /* @__PURE__ */ jsxs(Typography, { component: "span", color: "text.secondary", variant: "body2", sx: { fontWeight: 700 }, children: [
                  team.coach.firstName,
                  " ",
                  team.coach.lastName
                ] }) : "brak"
              ] }),
              /* @__PURE__ */ jsxs(Stack, { direction: "row", flexWrap: "wrap", gap: 1, useFlexGap: true, sx: { pt: 0.25 }, children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    size: "small",
                    variant: "outlined",
                    onClick: (e) => {
                      e.stopPropagation();
                      onEditTeam(team);
                    },
                    children: "Edytuj"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    size: "small",
                    color: "error",
                    variant: "outlined",
                    disabled: isDeletePending,
                    onClick: (e) => {
                      e.stopPropagation();
                      onRequestDeleteTeam(team);
                    },
                    children: "Usuń"
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          AccordionDetails,
          {
            sx: {
              px: 2,
              pb: 2,
              pt: 0,
              borderTop: 1,
              borderColor: "divider",
              bgcolor: (theme) => theme.palette.mode === "dark" ? "action.hover" : theme.palette.grey[50]
            },
            children: team.players.length === 0 ? /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "text.secondary", sx: { pt: 2 }, children: "Brak zawodników w składzie." }) : /* @__PURE__ */ jsxs(Box, { sx: { pt: 2, display: "flex", flexDirection: "column", gap: 1.5 }, children: [
              /* @__PURE__ */ jsxs(
                Stack,
                {
                  direction: "row",
                  spacing: 1,
                  sx: {
                    pb: 0.5,
                    borderBottom: 1,
                    borderColor: "divider",
                    typography: "caption",
                    color: "text.secondary",
                    fontWeight: 600
                  },
                  children: [
                    /* @__PURE__ */ jsx(Box, { sx: { flex: "1 1 28%", minWidth: 0 }, children: "Imię" }),
                    /* @__PURE__ */ jsx(Box, { sx: { flex: "1 1 28%", minWidth: 0 }, children: "Nazwisko" }),
                    /* @__PURE__ */ jsx(Box, { sx: { flex: "0 0 5.5rem", textAlign: "right" }, children: "Klasyfikacja" })
                  ]
                }
              ),
              team.players.map(({ player }) => /* @__PURE__ */ jsxs(Stack, { direction: "row", spacing: 1, alignItems: "baseline", sx: { typography: "body2" }, children: [
                /* @__PURE__ */ jsx(Typography, { component: "span", sx: { flex: "1 1 28%", minWidth: 0, fontWeight: 600 }, children: player.firstName }),
                /* @__PURE__ */ jsx(Typography, { component: "span", sx: { flex: "1 1 28%", minWidth: 0, fontWeight: 600 }, children: player.lastName }),
                /* @__PURE__ */ jsx(Typography, { component: "span", color: "text.secondary", sx: { flex: "0 0 5.5rem", textAlign: "right" }, children: formatClassificationForList(player.classification) })
              ] }, player.id))
            ] })
          }
        )
      ]
    }
  );
}

function TeamsSectionCard({
  teams,
  isTeamsLoading,
  showTeamForm,
  isEditingTeam,
  coaches,
  players,
  teamName,
  teamFormula,
  teamCoachId,
  teamPlayerIds,
  teamFormErrorMessage,
  isTeamFormPending,
  teamPendingDelete,
  deleteTeamErrorMessage,
  isDeleteTeamPending,
  onShowTeamForm,
  onTeamNameChange,
  onTeamFormulaChange,
  onTeamCoachChange,
  onTeamPlayersChange,
  onSubmitTeamForm,
  onCancelTeamForm,
  onEditTeam,
  onTeamPendingDeleteChange,
  onConfirmDeleteTeam
}) {
  const [expandedTeamId, setExpandedTeamId] = useState(false);
  return /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h6", sx: { mb: 2 }, children: "Drużyny" }),
    isTeamsLoading ? /* @__PURE__ */ jsx(CircularProgress, { size: 22 }) : null,
    !isTeamsLoading && !showTeamForm ? /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: onShowTeamForm, sx: { mb: teams.length > 0 ? 2 : 0 }, children: "Dodaj drużynę" }) : null,
    showTeamForm ? /* @__PURE__ */ jsx(
      TeamCreateForm,
      {
        isEditing: isEditingTeam,
        teamName,
        teamFormula,
        teamCoachId,
        teamPlayerIds,
        coaches,
        players,
        isPending: isTeamFormPending,
        errorMessage: teamFormErrorMessage,
        onTeamNameChange,
        onTeamFormulaChange,
        onTeamCoachChange,
        onTeamPlayersChange,
        onCreateTeam: onSubmitTeamForm,
        onCancelTeamForm
      }
    ) : null,
    /* @__PURE__ */ jsx(
      Box,
      {
        sx: {
          display: "grid",
          // Desktop: always two equal columns so one team occupies half width; two teams span full row.
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
          gap: 1.5,
          // Stretch tiles horizontally to fill each column; alignItems:start keeps row height per tile.
          justifyItems: "stretch",
          alignItems: "start"
        },
        children: teams.map((team) => /* @__PURE__ */ jsx(
          TeamTile,
          {
            team,
            expanded: expandedTeamId === team.id,
            onExpandChange: (next) => setExpandedTeamId(next ? team.id : false),
            onEditTeam,
            onRequestDeleteTeam: (t) => onTeamPendingDeleteChange(t),
            isDeletePending: isDeleteTeamPending && teamPendingDelete?.id === team.id
          },
          team.id
        ))
      }
    ),
    /* @__PURE__ */ jsx(
      ConfirmationDialog,
      {
        open: teamPendingDelete !== null,
        title: "Usunąć drużynę?",
        description: teamPendingDelete ? /* @__PURE__ */ jsxs(Fragment, { children: [
          "Czy na pewno usunąć drużynę ",
          /* @__PURE__ */ jsx("strong", { children: teamPendingDelete.name }),
          "? Ta operacja jest trwała."
        ] }) : null,
        errorMessage: deleteTeamErrorMessage,
        loading: isDeleteTeamPending,
        onClose: () => onTeamPendingDeleteChange(null),
        onConfirm: onConfirmDeleteTeam
      }
    )
  ] }) });
}

const MAX_LOGO_FILE_SIZE_BYTES = 2 * 1024 * 1024;
const MAX_LOGO_DIMENSION_PX = 1024;
const ALLOWED_LOGO_MIME_TYPES = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp"]);
const extractApiErrorMessage = (data, fallback) => {
  if (!data || typeof data !== "object") return fallback;
  const errorValue = data.error;
  if (typeof errorValue === "string" && errorValue.trim().length > 0) return errorValue;
  if (errorValue && typeof errorValue === "object") {
    const validation = errorValue;
    const formError = Array.isArray(validation.formErrors) && typeof validation.formErrors[0] === "string" ? validation.formErrors[0] : null;
    if (formError) return formError;
    if (validation.fieldErrors && typeof validation.fieldErrors === "object") {
      const firstFieldError = Object.values(validation.fieldErrors).find(
        (value) => Array.isArray(value) && typeof value[0] === "string"
      );
      if (firstFieldError?.[0]) return firstFieldError[0];
    }
  }
  return fallback;
};
const fetchClubs = async () => {
  const res = await fetch("/api/club");
  if (!res.ok) throw new Error("Nie udało się pobrać klubów");
  return res.json();
};
const createClub = async (payload) => {
  const res = await fetch("/api/club", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(extractApiErrorMessage(data, "Nie udało się utworzyć klubu"));
  return data;
};
const updateClub = async (payload) => {
  const { id, ...body } = payload;
  const res = await fetch(`/api/club/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(extractApiErrorMessage(data, "Nie udało się zaktualizować klubu"));
  return data;
};
const fetchCoaches = async (clubId) => {
  const res = await fetch(`/api/club/${clubId}/coaches`);
  if (!res.ok) throw new Error("Nie udało się pobrać trenerów");
  return res.json();
};
const fetchPlayers = async (clubId) => {
  const res = await fetch(`/api/club/${clubId}/players`);
  if (!res.ok) throw new Error("Nie udało się pobrać zawodników");
  return res.json();
};
const fetchTeams = async (clubId) => {
  const res = await fetch(`/api/club/${clubId}/teams`);
  if (!res.ok) throw new Error("Nie udało się pobrać drużyn");
  return res.json();
};
const fetchVolunteers = async (clubId) => {
  const res = await fetch(`/api/club/${clubId}/volunteers`);
  if (!res.ok) throw new Error("Nie udało się pobrać wolontariuszy");
  return res.json();
};
const fetchReferees = async (clubId) => {
  const res = await fetch(`/api/club/${clubId}/referees`);
  if (!res.ok) throw new Error("Nie udało się pobrać sędziów");
  return res.json();
};
const fetchStaff = async (clubId) => {
  const res = await fetch(`/api/club/${clubId}/staff`);
  if (!res.ok) throw new Error("Nie udało się pobrać pozostałego personelu");
  return res.json();
};
const createTeam = async (payload) => {
  const { clubId, ...body } = payload;
  const res = await fetch(`/api/club/${clubId}/teams`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(typeof data?.error === "string" ? data.error : "Nie udało się utworzyć drużyny");
  return data;
};
const updateClubTeam = async (payload) => {
  const { teamId, clubId, name, formula, coachId, playerIds } = payload;
  const res = await fetch(`/api/club/teams/${teamId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      clubId,
      name,
      formula,
      ...coachId?.trim() ? { coachId: coachId.trim() } : {},
      playerIds
    })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(typeof data?.error === "string" ? data.error : "Nie udało się zaktualizować drużyny");
  return data;
};
const deleteClubTeam = async ({ teamId }) => {
  const res = await fetch(`/api/club/teams/${teamId}`, { method: "DELETE" });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(
      data && typeof data === "object" && typeof data.error === "string" ? data.error : "Nie udało się usunąć drużyny"
    );
  }
};
const readFileAsDataUrl = async (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : "");
  reader.onerror = () => reject(new Error("Nie udało się wczytać pliku logo"));
  reader.readAsDataURL(file);
});
const readImageDimensions = async (file) => new Promise((resolve, reject) => {
  const image = new Image();
  const objectUrl = URL.createObjectURL(file);
  image.onload = () => {
    resolve({ width: image.naturalWidth, height: image.naturalHeight });
    URL.revokeObjectURL(objectUrl);
  };
  image.onerror = () => {
    URL.revokeObjectURL(objectUrl);
    reject(new Error("Nie udało się odczytać wymiarów obrazu"));
  };
  image.src = objectUrl;
});
function ClubPageContent() {
  const queryClient = useQueryClient();
  const [clubName, setClubName] = useState("");
  const [clubLogoUrl, setClubLogoUrl] = useState("");
  const [logoErrorMessage, setLogoErrorMessage] = useState(null);
  const [showClubForm, setShowClubForm] = useState(false);
  const [isClubEditMode, setIsClubEditMode] = useState(false);
  const [selectedClubId, setSelectedClubId] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamFormula, setTeamFormula] = useState("WR4");
  const [teamCoachId, setTeamCoachId] = useState("");
  const [teamPlayerIds, setTeamPlayerIds] = useState([]);
  const [showTeamForm, setShowTeamForm] = useState(false);
  const [editingTeamId, setEditingTeamId] = useState(null);
  const [teamPendingDelete, setTeamPendingDelete] = useState(null);
  const clubsQuery = useQuery({
    queryKey: ["club", "list"],
    queryFn: fetchClubs
  });
  const createClubMutation = useMutation({
    mutationFn: createClub,
    onSuccess: () => {
      setClubName("");
      setClubLogoUrl("");
      setLogoErrorMessage(null);
      setShowClubForm(false);
      return queryClient.invalidateQueries({ queryKey: ["club", "list"] });
    }
  });
  const updateClubMutation = useMutation({
    mutationFn: updateClub,
    onSuccess: () => {
      setShowClubForm(false);
      setIsClubEditMode(false);
      return queryClient.invalidateQueries({ queryKey: ["club", "list"] });
    }
  });
  const sortedClubs = useMemo(
    () => [...clubsQuery.data ?? []].sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
    [clubsQuery.data]
  );
  const selectedClub = useMemo(
    () => sortedClubs.find((club) => club.id === selectedClubId) ?? null,
    [sortedClubs, selectedClubId]
  );
  const coachesQuery = useQuery({
    queryKey: ["club", "coaches", selectedClubId],
    queryFn: () => fetchCoaches(selectedClubId),
    enabled: selectedClubId.length > 0
  });
  const playersQuery = useQuery({
    queryKey: ["club", "players", selectedClubId],
    queryFn: () => fetchPlayers(selectedClubId),
    enabled: selectedClubId.length > 0
  });
  const teamsQuery = useQuery({
    queryKey: ["club", "teams", selectedClubId],
    queryFn: () => fetchTeams(selectedClubId),
    enabled: selectedClubId.length > 0
  });
  const volunteersQuery = useQuery({
    queryKey: ["club", "volunteers", selectedClubId],
    queryFn: () => fetchVolunteers(selectedClubId),
    enabled: selectedClubId.length > 0
  });
  const refereesQuery = useQuery({
    queryKey: ["club", "referees", selectedClubId],
    queryFn: () => fetchReferees(selectedClubId),
    enabled: selectedClubId.length > 0
  });
  const staffQuery = useQuery({
    queryKey: ["club", "staff", selectedClubId],
    queryFn: () => fetchStaff(selectedClubId),
    enabled: selectedClubId.length > 0
  });
  const createTeamMutation = useMutation({
    mutationFn: createTeam,
    onSuccess: async (_data, variables) => {
      setTeamName("");
      setTeamFormula("WR4");
      setTeamCoachId("");
      setTeamPlayerIds([]);
      setEditingTeamId(null);
      setShowTeamForm(false);
      await queryClient.invalidateQueries({ queryKey: ["club", "teams", variables.clubId] });
    }
  });
  const updateTeamMutation = useMutation({
    mutationFn: updateClubTeam,
    onSuccess: async (_data, variables) => {
      setTeamName("");
      setTeamFormula("WR4");
      setTeamCoachId("");
      setTeamPlayerIds([]);
      setEditingTeamId(null);
      setShowTeamForm(false);
      await queryClient.invalidateQueries({ queryKey: ["club", "teams", variables.clubId] });
    }
  });
  const deleteTeamMutation = useMutation({
    mutationFn: deleteClubTeam,
    onSuccess: async (_data, variables) => {
      setTeamPendingDelete(null);
      await queryClient.invalidateQueries({ queryKey: ["club", "teams", variables.clubId] });
    }
  });
  useEffect(() => {
    if (!selectedClubId && sortedClubs.length > 0) {
      setSelectedClubId(sortedClubs[0].id);
    }
  }, [selectedClubId, sortedClubs]);
  return /* @__PURE__ */ jsxs(Box, { sx: { maxWidth: 980, mx: "auto", display: "flex", flexDirection: "column", gap: 3 }, children: [
    /* @__PURE__ */ jsx(
      ClubHeaderCard,
      {
        isLoading: clubsQuery.isPending,
        errorMessage: clubsQuery.error instanceof Error ? clubsQuery.error.message : null,
        selectedClub,
        showClubForm,
        isEditMode: isClubEditMode,
        clubName,
        clubLogoPreviewUrl: clubLogoUrl,
        logoErrorMessage,
        isCreatePending: createClubMutation.isPending || updateClubMutation.isPending,
        createErrorMessage: (createClubMutation.error instanceof Error ? createClubMutation.error.message : null) ?? (updateClubMutation.error instanceof Error ? updateClubMutation.error.message : null),
        onShowClubForm: () => {
          setIsClubEditMode(false);
          setClubName("");
          setClubLogoUrl("");
          setLogoErrorMessage(null);
          setShowClubForm(true);
        },
        onShowClubEditForm: () => {
          if (!selectedClub) return;
          setIsClubEditMode(true);
          setClubName(selectedClub.name ?? "");
          setClubLogoUrl(selectedClub.logoUrl ?? "");
          setLogoErrorMessage(null);
          setShowClubForm(true);
        },
        onCancelClubForm: () => {
          setShowClubForm(false);
          setIsClubEditMode(false);
          setClubName("");
          setClubLogoUrl("");
          setLogoErrorMessage(null);
        },
        onClubNameChange: setClubName,
        onClubLogoFileChange: (file) => {
          if (!file) {
            setClubLogoUrl("");
            setLogoErrorMessage(null);
            return;
          }
          void (async () => {
            if (!ALLOWED_LOGO_MIME_TYPES.has(file.type)) {
              setClubLogoUrl("");
              setLogoErrorMessage("Nieobsługiwany format pliku. Wybierz PNG, JPG albo WEBP.");
              return;
            }
            if (file.size > MAX_LOGO_FILE_SIZE_BYTES) {
              setClubLogoUrl("");
              setLogoErrorMessage("Plik jest za duży. Maksymalny rozmiar logo to 2MB.");
              return;
            }
            try {
              const dimensions = await readImageDimensions(file);
              if (dimensions.width > MAX_LOGO_DIMENSION_PX || dimensions.height > MAX_LOGO_DIMENSION_PX) {
                setClubLogoUrl("");
                setLogoErrorMessage("Obraz jest za duży. Maksymalny wymiar to 1024x1024 px.");
                return;
              }
              const dataUrl = await readFileAsDataUrl(file);
              setClubLogoUrl(dataUrl);
              setLogoErrorMessage(null);
            } catch {
              setClubLogoUrl("");
              setLogoErrorMessage("Nie udało się odczytać pliku graficznego.");
            }
          })();
        },
        onSaveClub: () => {
          const payload = {
            name: clubName.trim(),
            logoUrl: clubLogoUrl.trim()
          };
          if (isClubEditMode && selectedClub) {
            updateClubMutation.mutate({ id: selectedClub.id, ...payload });
            return;
          }
          createClubMutation.mutate(payload);
        }
      }
    ),
    selectedClubId ? /* @__PURE__ */ jsx(ClubNextBirthdayStrip, { players: playersQuery.data ?? [], isLoading: playersQuery.isPending }) : null,
    selectedClubId ? /* @__PURE__ */ jsx(
      TeamsSectionCard,
      {
        teams: teamsQuery.data ?? [],
        isTeamsLoading: teamsQuery.isPending,
        showTeamForm,
        isEditingTeam: editingTeamId !== null,
        coaches: coachesQuery.data ?? [],
        players: playersQuery.data ?? [],
        teamName,
        teamFormula,
        teamCoachId,
        teamPlayerIds,
        teamFormErrorMessage: (createTeamMutation.error instanceof Error ? createTeamMutation.error.message : null) ?? (updateTeamMutation.error instanceof Error ? updateTeamMutation.error.message : null),
        isTeamFormPending: createTeamMutation.isPending || updateTeamMutation.isPending,
        teamPendingDelete,
        deleteTeamErrorMessage: deleteTeamMutation.error instanceof Error ? deleteTeamMutation.error.message : null,
        isDeleteTeamPending: deleteTeamMutation.isPending,
        onShowTeamForm: () => {
          setEditingTeamId(null);
          setTeamName("");
          setTeamFormula("WR4");
          setTeamCoachId("");
          setTeamPlayerIds([]);
          setShowTeamForm(true);
        },
        onTeamNameChange: setTeamName,
        onTeamFormulaChange: setTeamFormula,
        onTeamCoachChange: setTeamCoachId,
        onTeamPlayersChange: setTeamPlayerIds,
        onSubmitTeamForm: () => {
          if (editingTeamId) {
            updateTeamMutation.mutate({
              teamId: editingTeamId,
              clubId: selectedClubId,
              name: teamName.trim(),
              formula: teamFormula,
              coachId: teamCoachId || void 0,
              playerIds: teamPlayerIds
            });
            return;
          }
          createTeamMutation.mutate({
            clubId: selectedClubId,
            name: teamName.trim(),
            formula: teamFormula,
            coachId: teamCoachId || void 0,
            playerIds: teamPlayerIds
          });
        },
        onCancelTeamForm: () => {
          setTeamName("");
          setTeamFormula("WR4");
          setTeamCoachId("");
          setTeamPlayerIds([]);
          setEditingTeamId(null);
          setShowTeamForm(false);
          createTeamMutation.reset();
          updateTeamMutation.reset();
        },
        onEditTeam: (team) => {
          setEditingTeamId(team.id);
          setTeamName(team.name);
          setTeamFormula(team.formula);
          setTeamCoachId(team.coach?.id ?? "");
          setTeamPlayerIds(team.players.map((row) => row.player.id));
          setShowTeamForm(true);
        },
        onTeamPendingDeleteChange: (team) => {
          setTeamPendingDelete(team);
          if (team === null) deleteTeamMutation.reset();
        },
        onConfirmDeleteTeam: () => {
          if (teamPendingDelete) {
            deleteTeamMutation.mutate({ clubId: selectedClubId, teamId: teamPendingDelete.id });
          }
        }
      }
    ) : null,
    selectedClubId ? /* @__PURE__ */ jsx(
      ClubPersonnelTabsSection,
      {
        clubId: selectedClubId,
        players: playersQuery.data ?? [],
        playersLoading: playersQuery.isPending,
        playersError: playersQuery.error instanceof Error ? playersQuery.error.message : null,
        onRetryPlayers: () => void playersQuery.refetch(),
        volunteers: volunteersQuery.data ?? [],
        volunteersLoading: volunteersQuery.isPending,
        volunteersError: volunteersQuery.error instanceof Error ? volunteersQuery.error.message : null,
        onRetryVolunteers: () => void volunteersQuery.refetch(),
        coaches: coachesQuery.data ?? [],
        coachesLoading: coachesQuery.isPending,
        coachesError: coachesQuery.error instanceof Error ? coachesQuery.error.message : null,
        onRetryCoaches: () => void coachesQuery.refetch(),
        referees: refereesQuery.data ?? [],
        refereesLoading: refereesQuery.isPending,
        refereesError: refereesQuery.error instanceof Error ? refereesQuery.error.message : null,
        onRetryReferees: () => void refereesQuery.refetch(),
        others: (staffQuery.data ?? []).filter((person) => person.role === "OTHER"),
        othersLoading: staffQuery.isPending,
        othersError: staffQuery.error instanceof Error ? staffQuery.error.message : null,
        onRetryOthers: () => void staffQuery.refetch()
      }
    ) : null
  ] });
}
function ClubPage() {
  return /* @__PURE__ */ jsx(QueryProvider, { children: /* @__PURE__ */ jsx(ThemeRegistry, { children: /* @__PURE__ */ jsx(AppShell, { currentPath: "/club", children: /* @__PURE__ */ jsx(ClubPageContent, {}) }) }) });
}

const $$Club = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mój Klub Sportowy" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ClubPage", ClubPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/features/club/components/ClubPage/ClubPage", "client:component-export": "default" })} ` })}`;
}, "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/club.astro", void 0);

const $$file = "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/club.astro";
const $$url = "/club";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Club,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
