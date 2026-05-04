import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Trophy, Building2, UserCog, Users, Medal, CalendarDays } from 'lucide-react';
import { motion } from 'motion/react';
import { i as generateUtilityClasses, g as generateUtilityClass, an as resolveProps, j as useDefaultProps, x as capitalize, a as composeClasses, l as styled, B as ButtonBase, o as memoTheme, y as createSimplePaletteValueFilter, P as PropTypes, q as reactIsExports, _ as IconButton, A as Alert, t as Box, v as Button, w as ThemeRegistry, T as Typography } from './ThemeRegistry_D8eYcNmV.mjs';
import CloseIcon from '@mui/icons-material/Close';
import { signIn, signUp } from 'supertokens-web-js/recipe/emailpassword/index.js';
import { getAuthorisationURLWithQueryParamsAndSetState } from 'supertokens-web-js/recipe/thirdparty/index.js';
import { A as AUTH_VALIDATION } from './authValidation_BT2QwBvX.mjs';
import { e as ensureSuperTokensFrontendInitialized } from './initFrontend_DC7D9y16.mjs';
import { D as Dialog, a as DialogTitle, b as DialogContent } from './DialogTitle_BL6--ISK.mjs';
import { C as clsx } from './sequence_C_bNAUSZ.mjs';
import { T as TextField } from './TextField_BVjeauhA.mjs';
import { getYear } from 'date-fns';
import { G as Grid } from './Grid_1Y1FfHvX.mjs';
import { C as Card, a as CardContent } from './CardContent_BdwUrVmM.mjs';

/**
 * Gets only the valid children of a component,
 * and ignores any nullish or falsy child.
 *
 * @param children the children
 */
function getValidReactChildren(children) {
  return React.Children.toArray(children).filter(child => /*#__PURE__*/React.isValidElement(child));
}

function getToggleButtonUtilityClass(slot) {
  return generateUtilityClass('MuiToggleButton', slot);
}
const toggleButtonClasses = generateUtilityClasses('MuiToggleButton', ['root', 'disabled', 'selected', 'standard', 'primary', 'secondary', 'sizeSmall', 'sizeMedium', 'sizeLarge', 'fullWidth']);

/**
 * @ignore - internal component.
 */
const ToggleButtonGroupContext = /*#__PURE__*/React.createContext({});
if (process.env.NODE_ENV !== 'production') {
  ToggleButtonGroupContext.displayName = 'ToggleButtonGroupContext';
}

/**
 * @ignore - internal component.
 */
const ToggleButtonGroupButtonContext = /*#__PURE__*/React.createContext(undefined);
if (process.env.NODE_ENV !== 'production') {
  ToggleButtonGroupButtonContext.displayName = 'ToggleButtonGroupButtonContext';
}

// Determine if the toggle button value matches, or is contained in, the
// candidate group value.
function isValueSelected(value, candidate) {
  if (candidate === undefined || value === undefined) {
    return false;
  }
  if (Array.isArray(candidate)) {
    return candidate.includes(value);
  }
  return value === candidate;
}

const useUtilityClasses$1 = ownerState => {
  const {
    classes,
    fullWidth,
    selected,
    disabled,
    size,
    color
  } = ownerState;
  const slots = {
    root: ['root', selected && 'selected', disabled && 'disabled', fullWidth && 'fullWidth', `size${capitalize(size)}`, color]
  };
  return composeClasses(slots, getToggleButtonUtilityClass, classes);
};
const ToggleButtonRoot = styled(ButtonBase, {
  name: 'MuiToggleButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`size${capitalize(ownerState.size)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.button,
  borderRadius: (theme.vars || theme).shape.borderRadius,
  padding: 11,
  border: `1px solid ${(theme.vars || theme).palette.divider}`,
  color: (theme.vars || theme).palette.action.active,
  [`&.${toggleButtonClasses.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
  },
  '&:hover': {
    textDecoration: 'none',
    // Reset on mouse devices
    backgroundColor: theme.alpha((theme.vars || theme).palette.text.primary, (theme.vars || theme).palette.action.hoverOpacity),
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  variants: [{
    props: {
      color: 'standard'
    },
    style: {
      [`&.${toggleButtonClasses.selected}`]: {
        color: (theme.vars || theme).palette.text.primary,
        backgroundColor: theme.alpha((theme.vars || theme).palette.text.primary, (theme.vars || theme).palette.action.selectedOpacity),
        '&:hover': {
          backgroundColor: theme.alpha((theme.vars || theme).palette.text.primary, `${(theme.vars || theme).palette.action.selectedOpacity} + ${(theme.vars || theme).palette.action.hoverOpacity}`),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.alpha((theme.vars || theme).palette.text.primary, (theme.vars || theme).palette.action.selectedOpacity)
          }
        }
      }
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color
    },
    style: {
      [`&.${toggleButtonClasses.selected}`]: {
        color: (theme.vars || theme).palette[color].main,
        backgroundColor: theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.selectedOpacity),
        '&:hover': {
          backgroundColor: theme.alpha((theme.vars || theme).palette[color].main, `${(theme.vars || theme).palette.action.selectedOpacity} + ${(theme.vars || theme).palette.action.hoverOpacity}`),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.selectedOpacity)
          }
        }
      }
    }
  })), {
    props: {
      fullWidth: true
    },
    style: {
      width: '100%'
    }
  }, {
    props: {
      size: 'small'
    },
    style: {
      padding: 7,
      fontSize: theme.typography.pxToRem(13)
    }
  }, {
    props: {
      size: 'large'
    },
    style: {
      padding: 15,
      fontSize: theme.typography.pxToRem(15)
    }
  }]
})));
const ToggleButton = /*#__PURE__*/React.forwardRef(function ToggleButton(inProps, ref) {
  // props priority: `inProps` > `contextProps` > `themeDefaultProps`
  const {
    value: contextValue,
    ...contextProps
  } = React.useContext(ToggleButtonGroupContext);
  const toggleButtonGroupButtonContextPositionClassName = React.useContext(ToggleButtonGroupButtonContext);
  const resolvedProps = resolveProps({
    ...contextProps,
    selected: isValueSelected(inProps.value, contextValue)
  }, inProps);
  const props = useDefaultProps({
    props: resolvedProps,
    name: 'MuiToggleButton'
  });
  const {
    children,
    className,
    color = 'standard',
    disabled = false,
    disableFocusRipple = false,
    fullWidth = false,
    onChange,
    onClick,
    selected,
    size = 'medium',
    value,
    ...other
  } = props;
  const ownerState = {
    ...props,
    color,
    disabled,
    disableFocusRipple,
    fullWidth,
    size
  };
  const classes = useUtilityClasses$1(ownerState);
  const handleChange = event => {
    if (onClick) {
      onClick(event, value);
      if (event.defaultPrevented) {
        return;
      }
    }
    if (onChange) {
      onChange(event, value);
    }
  };
  const positionClassName = toggleButtonGroupButtonContextPositionClassName || '';
  return /*#__PURE__*/jsx(ToggleButtonRoot, {
    className: clsx(contextProps.className, classes.root, className, positionClassName),
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    ref: ref,
    onClick: handleChange,
    onChange: onChange,
    value: value,
    ownerState: ownerState,
    "aria-pressed": selected,
    ...other,
    children: children
  });
});
process.env.NODE_ENV !== "production" ? ToggleButton.propTypes /* remove-proptypes */ = {
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
   * The color of the button when it is in an active state.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'standard'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['standard', 'primary', 'secondary', 'error', 'info', 'success', 'warning']), PropTypes.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: PropTypes.bool,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes.bool,
  /**
   * Callback fired when the state changes.
   *
   * @param {React.MouseEvent<HTMLElement>} event The event source of the callback.
   * @param {any} value of the selected button.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when the button is clicked.
   *
   * @param {React.MouseEvent<HTMLElement>} event The event source of the callback.
   * @param {any} value of the selected button.
   */
  onClick: PropTypes.func,
  /**
   * If `true`, the button is rendered in an active state.
   */
  selected: PropTypes.bool,
  /**
   * The size of the component.
   * The prop defaults to the value inherited from the parent ToggleButtonGroup component.
   * @default 'medium'
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['small', 'medium', 'large']), PropTypes.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The value to associate with the button when selected in a
   * ToggleButtonGroup.
   */
  value: PropTypes /* @typescript-to-proptypes-ignore */.any.isRequired
} : void 0;

function getToggleButtonGroupUtilityClass(slot) {
  return generateUtilityClass('MuiToggleButtonGroup', slot);
}
const toggleButtonGroupClasses = generateUtilityClasses('MuiToggleButtonGroup', ['root', 'selected', 'horizontal', 'vertical', 'disabled', 'grouped', 'groupedHorizontal', 'groupedVertical', 'fullWidth', 'firstButton', 'lastButton', 'middleButton']);

const useUtilityClasses = ownerState => {
  const {
    classes,
    orientation,
    fullWidth,
    disabled
  } = ownerState;
  const slots = {
    root: ['root', orientation, fullWidth && 'fullWidth'],
    grouped: ['grouped', `grouped${capitalize(orientation)}`, disabled && 'disabled'],
    firstButton: ['firstButton'],
    lastButton: ['lastButton'],
    middleButton: ['middleButton']
  };
  return composeClasses(slots, getToggleButtonGroupUtilityClass, classes);
};
const ToggleButtonGroupRoot = styled('div', {
  name: 'MuiToggleButtonGroup',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${toggleButtonGroupClasses.grouped}`]: styles.grouped
    }, {
      [`& .${toggleButtonGroupClasses.grouped}`]: styles[`grouped${capitalize(ownerState.orientation)}`]
    }, {
      [`& .${toggleButtonGroupClasses.firstButton}`]: styles.firstButton
    }, {
      [`& .${toggleButtonGroupClasses.lastButton}`]: styles.lastButton
    }, {
      [`& .${toggleButtonGroupClasses.middleButton}`]: styles.middleButton
    }, styles.root, ownerState.orientation === 'vertical' && styles.vertical, ownerState.fullWidth && styles.fullWidth];
  }
})(memoTheme(({
  theme
}) => ({
  display: 'inline-flex',
  borderRadius: (theme.vars || theme).shape.borderRadius,
  variants: [{
    props: {
      orientation: 'vertical'
    },
    style: {
      flexDirection: 'column',
      [`& .${toggleButtonGroupClasses.grouped}`]: {
        [`&.${toggleButtonGroupClasses.selected} + .${toggleButtonGroupClasses.grouped}.${toggleButtonGroupClasses.selected}`]: {
          borderTop: 0,
          marginTop: 0
        }
      },
      [`& .${toggleButtonGroupClasses.firstButton},& .${toggleButtonGroupClasses.middleButton}`]: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      },
      [`& .${toggleButtonGroupClasses.lastButton},& .${toggleButtonGroupClasses.middleButton}`]: {
        marginTop: -1,
        borderTop: '1px solid transparent',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
      },
      [`& .${toggleButtonGroupClasses.lastButton}.${toggleButtonClasses.disabled},& .${toggleButtonGroupClasses.middleButton}.${toggleButtonClasses.disabled}`]: {
        borderTop: '1px solid transparent'
      }
    }
  }, {
    props: {
      fullWidth: true
    },
    style: {
      width: '100%'
    }
  }, {
    props: {
      orientation: 'horizontal'
    },
    style: {
      [`& .${toggleButtonGroupClasses.grouped}`]: {
        [`&.${toggleButtonGroupClasses.selected} + .${toggleButtonGroupClasses.grouped}.${toggleButtonGroupClasses.selected}`]: {
          borderLeft: 0,
          marginLeft: 0
        }
      },
      [`& .${toggleButtonGroupClasses.firstButton},& .${toggleButtonGroupClasses.middleButton}`]: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
      [`& .${toggleButtonGroupClasses.lastButton},& .${toggleButtonGroupClasses.middleButton}`]: {
        marginLeft: -1,
        borderLeft: '1px solid transparent',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      },
      [`& .${toggleButtonGroupClasses.lastButton}.${toggleButtonClasses.disabled},& .${toggleButtonGroupClasses.middleButton}.${toggleButtonClasses.disabled}`]: {
        borderLeft: '1px solid transparent'
      }
    }
  }]
})));
const ToggleButtonGroup = /*#__PURE__*/React.forwardRef(function ToggleButtonGroup(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiToggleButtonGroup'
  });
  const {
    children,
    className,
    color = 'standard',
    disabled = false,
    exclusive = false,
    fullWidth = false,
    onChange,
    orientation = 'horizontal',
    size = 'medium',
    value,
    ...other
  } = props;
  const ownerState = {
    ...props,
    disabled,
    fullWidth,
    orientation,
    size
  };
  const classes = useUtilityClasses(ownerState);
  const handleChange = React.useCallback((event, buttonValue) => {
    if (!onChange) {
      return;
    }
    const index = value && value.indexOf(buttonValue);
    let newValue;
    if (value && index >= 0) {
      newValue = value.slice();
      newValue.splice(index, 1);
    } else {
      newValue = value ? value.concat(buttonValue) : [buttonValue];
    }
    onChange(event, newValue);
  }, [onChange, value]);
  const handleExclusiveChange = React.useCallback((event, buttonValue) => {
    if (!onChange) {
      return;
    }
    onChange(event, value === buttonValue ? null : buttonValue);
  }, [onChange, value]);
  const context = React.useMemo(() => ({
    className: classes.grouped,
    onChange: exclusive ? handleExclusiveChange : handleChange,
    value,
    size,
    fullWidth,
    color,
    disabled
  }), [classes.grouped, exclusive, handleExclusiveChange, handleChange, value, size, fullWidth, color, disabled]);
  const validChildren = getValidReactChildren(children);
  const childrenCount = validChildren.length;
  const getButtonPositionClassName = index => {
    const isFirstButton = index === 0;
    const isLastButton = index === childrenCount - 1;
    if (isFirstButton && isLastButton) {
      return '';
    }
    if (isFirstButton) {
      return classes.firstButton;
    }
    if (isLastButton) {
      return classes.lastButton;
    }
    return classes.middleButton;
  };
  return /*#__PURE__*/jsx(ToggleButtonGroupRoot, {
    role: "group",
    className: clsx(classes.root, className),
    ref: ref,
    ownerState: ownerState,
    ...other,
    children: /*#__PURE__*/jsx(ToggleButtonGroupContext.Provider, {
      value: context,
      children: validChildren.map((child, index) => {
        if (process.env.NODE_ENV !== 'production') {
          if (reactIsExports.isFragment(child)) {
            console.error(["MUI: The ToggleButtonGroup component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
          }
        }
        return /*#__PURE__*/jsx(ToggleButtonGroupButtonContext.Provider, {
          value: getButtonPositionClassName(index),
          children: child
        }, index);
      })
    })
  });
});
process.env.NODE_ENV !== "production" ? ToggleButtonGroup.propTypes /* remove-proptypes */ = {
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
   * The color of the button when it is selected.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'standard'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['standard', 'primary', 'secondary', 'error', 'info', 'success', 'warning']), PropTypes.string]),
  /**
   * If `true`, the component is disabled. This implies that all ToggleButton children will be disabled.
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, only allow one of the child ToggleButton values to be selected.
   * @default false
   */
  exclusive: PropTypes.bool,
  /**
   * If `true`, the button group will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes.bool,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.MouseEvent<HTMLElement>} event The event source of the callback.
   * @param {any} value of the selected buttons. When `exclusive` is true
   * this is a single value; when false an array of selected values. If no value
   * is selected and `exclusive` is true the value is null; when false an empty array.
   */
  onChange: PropTypes.func,
  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['small', 'medium', 'large']), PropTypes.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The currently selected value within the group or an array of selected
   * values when `exclusive` is false.
   *
   * The value must have reference equality with the option in order to be selected.
   */
  value: PropTypes.any
} : void 0;

function getOAuthRedirectOrigin() {
  if (typeof window === "undefined") {
    return "";
  }
  const raw = "http://localhost:3000"?.trim();
  if (raw) {
    try {
      return new URL(raw).origin;
    } catch {
    }
  }
  return window.location.origin;
}

const UI_LOGIN_WARNING_AFTER_ATTEMPTS = 3;
const UI_LOGIN_LOCK_HINT_AFTER_ATTEMPTS = 5;
const UI_LOGIN_LOCK_WINDOW_MS = 5 * 60 * 1e3;
function parseLockUntil(result) {
  const maybeResult = result;
  if (maybeResult?.status !== "WRONG_CREDENTIALS_ERROR") {
    return null;
  }
  if (typeof maybeResult.lockUntil !== "string") {
    return null;
  }
  const parsed = new Date(maybeResult.lockUntil);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }
  return parsed;
}
function formatLockUntilTime(lockUntil) {
  return lockUntil.toLocaleTimeString("pl-PL", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
}
function parseRemainingAttempts(result) {
  const maybeResult = result;
  if (maybeResult?.status !== "WRONG_CREDENTIALS_ERROR") {
    return null;
  }
  if (typeof maybeResult.remainingAttempts !== "number" || !Number.isFinite(maybeResult.remainingAttempts)) {
    return null;
  }
  const attempts = Math.floor(maybeResult.remainingAttempts);
  if (attempts < 0) {
    return 0;
  }
  return attempts;
}
function buildSigninErrorMessage(result, failedAttemptsInSession) {
  const lockUntilFromBackend = parseLockUntil(result);
  if (lockUntilFromBackend) {
    return `Konto jest czasowo zablokowane po zbyt wielu nieudanych próbach logowania. Spróbuj ponownie o ${formatLockUntilTime(
      lockUntilFromBackend
    )}.`;
  }
  const remainingAttempts = parseRemainingAttempts(result);
  if (remainingAttempts !== null) {
    if (remainingAttempts <= 0) {
      const lockUntil = parseLockUntil(result) ?? new Date(Date.now() + UI_LOGIN_LOCK_WINDOW_MS);
      return `Konto jest czasowo zablokowane po zbyt wielu nieudanych próbach logowania. Spróbuj ponownie o ${formatLockUntilTime(
        lockUntil
      )}.`;
    }
    return `Błędny adres e-mail lub hasło. Pozostałe próby: ${remainingAttempts}.`;
  }
  if (failedAttemptsInSession >= UI_LOGIN_LOCK_HINT_AFTER_ATTEMPTS) {
    const fallbackLockUntil = new Date(Date.now() + UI_LOGIN_LOCK_WINDOW_MS);
    return `Konto jest czasowo zablokowane po zbyt wielu nieudanych próbach logowania. Spróbuj ponownie o ${formatLockUntilTime(
      fallbackLockUntil
    )}.`;
  }
  if (failedAttemptsInSession >= UI_LOGIN_WARNING_AFTER_ATTEMPTS) {
    const fallbackRemainingAttempts = UI_LOGIN_LOCK_HINT_AFTER_ATTEMPTS - failedAttemptsInSession;
    return `Błędny adres e-mail lub hasło. Pozostałe próby: ${fallbackRemainingAttempts}. Uwaga: po kilku błędnych próbach konto może zostać czasowo zablokowane.`;
  }
  return "Błędny adres e-mail lub hasło. Spróbuj ponownie.";
}
function buildSignupFieldErrorMessage(fieldError) {
  if (!fieldError) {
    return "Nie udało się utworzyć konta. Sprawdź adres e-mail i hasło.";
  }
  if (fieldError.id === "password") {
    return `Błąd hasła: ${fieldError.error}`;
  }
  if (fieldError.id === "email") {
    return `Błąd adresu e-mail: ${fieldError.error}`;
  }
  return fieldError.error;
}
function LoginModal({ open, onClose, onLoginSuccess }) {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [failedSigninAttemptsInSession, setFailedSigninAttemptsInSession] = useState(0);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("signin");
  const [signinCredentials, setSigninCredentials] = useState({ email: "", password: "" });
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [showResetPasswordLink, setShowResetPasswordLink] = useState(false);
  const handleLoginSuccess = onLoginSuccess ?? (() => window.location.href = "/dashboard");
  useEffect(() => {
    if (open) {
      ensureSuperTokensFrontendInitialized();
    }
  }, [open]);
  const handleModeChange = (_, v) => {
    if (!v) return;
    setMode(v);
    setFormValues(v === "signin" ? signinCredentials : { email: "", password: "" });
    if (v === "signin") {
      setError(false);
      setErrorMessage(null);
      setShowResetPasswordLink(false);
    }
  };
  const startGoogle = async () => {
    setError(false);
    setErrorMessage(null);
    setLoading(true);
    try {
      ensureSuperTokensFrontendInitialized();
      const typedEmail = formValues.email.trim().toLowerCase();
      if (typedEmail.length > 0) {
        const checkResponse = await fetch(`/api/auth/google-email-conflict?email=${encodeURIComponent(typedEmail)}`);
        if (checkResponse.ok) {
          const conflictResult = await checkResponse.json();
          if (conflictResult.conflict) {
            setError(true);
            setErrorMessage(conflictResult.message || "Konto z tym adresem e-mail już istnieje.");
            return;
          }
        }
      }
      const site = getOAuthRedirectOrigin();
      const frontendCallback = `${site}/auth/callback`;
      const googleRedirectRegistered = `${site}/api/auth/callback/google`;
      const url = await getAuthorisationURLWithQueryParamsAndSetState({
        thirdPartyId: "google",
        frontendRedirectURI: frontendCallback,
        redirectURIOnProviderDashboard: googleRedirectRegistered
      });
      window.location.assign(url);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setErrorMessage(null);
    setShowResetPasswordLink(false);
    setLoading(true);
    const email = formValues.email.trim();
    const password = formValues.password;
    try {
      ensureSuperTokensFrontendInitialized();
      const formFields = [
        { id: "email", value: email },
        { id: "password", value: password }
      ];
      if (mode === "signin") {
        const result = await signIn({ formFields });
        if (result.status === "OK") {
          setFailedSigninAttemptsInSession(0);
          setShowResetPasswordLink(false);
          handleLoginSuccess();
          return;
        }
        const nextFailedAttempts = failedSigninAttemptsInSession + 1;
        setFailedSigninAttemptsInSession(nextFailedAttempts);
        setErrorMessage(buildSigninErrorMessage(result, nextFailedAttempts));
        if (result.status === "WRONG_CREDENTIALS_ERROR") {
          setShowResetPasswordLink(true);
        }
      } else {
        const result = await signUp({ formFields });
        if (result.status === "OK") {
          handleLoginSuccess();
          return;
        }
        if (result.status === "SIGN_UP_NOT_ALLOWED") {
          setErrorMessage(`Rejestracja zablokowana: ${result.reason}`);
        } else if (result.formFields.length > 0) {
          setErrorMessage(buildSignupFieldErrorMessage(result.formFields[0]));
        } else {
          setErrorMessage("Nie udało się utworzyć konta. Sprawdź adres e-mail i hasło.");
        }
      }
    } catch {
      if (mode === "signin") {
        const nextFailedAttempts = failedSigninAttemptsInSession + 1;
        setFailedSigninAttemptsInSession(nextFailedAttempts);
        setErrorMessage(buildSigninErrorMessage(null, nextFailedAttempts));
      } else {
        setErrorMessage("Wystąpił błąd podczas rejestracji.");
      }
    } finally {
      setLoading(false);
    }
    setError(true);
  };
  const updateField = (field) => (e) => {
    const value = e.target.value;
    setFormValues((prev) => ({ ...prev, [field]: value }));
    if (mode === "signin") setSigninCredentials((prev) => ({ ...prev, [field]: value }));
  };
  const isSignin = mode === "signin";
  return /* @__PURE__ */ jsxs(Dialog, { open, onClose, maxWidth: "xs", fullWidth: true, children: [
    /* @__PURE__ */ jsxs(DialogTitle, { sx: { pr: 6 }, children: [
      isSignin ? "Logowanie" : "Rejestracja",
      /* @__PURE__ */ jsx(IconButton, { "aria-label": "zamknij", onClick: onClose, sx: { position: "absolute", right: 8, top: 8 }, children: /* @__PURE__ */ jsx(CloseIcon, {}) })
    ] }),
    /* @__PURE__ */ jsxs(DialogContent, { children: [
      error && /* @__PURE__ */ jsx(Alert, { severity: "error", sx: { mb: 2 }, children: errorMessage ?? (isSignin ? "Błędny adres e-mail lub hasło. Spróbuj ponownie." : "Nie udało się utworzyć konta (adres e-mail zajęty lub zbyt słabe hasło).") }),
      /* @__PURE__ */ jsx(Box, { sx: { mb: 2 }, children: /* @__PURE__ */ jsxs(
        ToggleButtonGroup,
        {
          exclusive: true,
          fullWidth: true,
          size: "small",
          value: mode,
          onChange: handleModeChange,
          "aria-label": "tryb konta",
          children: [
            /* @__PURE__ */ jsx(ToggleButton, { value: "signin", children: "Logowanie" }),
            /* @__PURE__ */ jsx(ToggleButton, { value: "signup", children: "Nowe konto" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(Button, { variant: "outlined", fullWidth: true, sx: { mb: 2 }, onClick: () => void startGoogle(), disabled: loading, children: "Kontynuuj z Google" }),
      /* @__PURE__ */ jsxs(Box, { component: "form", onSubmit: handleSubmit, sx: { mt: 1 }, children: [
        /* @__PURE__ */ jsx(
          TextField,
          {
            name: "email",
            label: "E-mail",
            type: "email",
            slotProps: { htmlInput: { maxLength: AUTH_VALIDATION.EMAIL_MAX_LENGTH } },
            autoComplete: isSignin ? "email" : "off",
            value: formValues.email,
            onChange: updateField("email"),
            required: true,
            fullWidth: true,
            sx: { mb: 2 }
          }
        ),
        /* @__PURE__ */ jsx(
          TextField,
          {
            name: "password",
            label: "Hasło",
            type: "password",
            slotProps: {
              htmlInput: {
                minLength: AUTH_VALIDATION.PASSWORD_MIN_LENGTH,
                maxLength: AUTH_VALIDATION.PASSWORD_MAX_LENGTH
              }
            },
            autoComplete: isSignin ? "current-password" : "new-password",
            value: formValues.password,
            onChange: updateField("password"),
            required: true,
            fullWidth: true,
            sx: { mb: 2 }
          }
        ),
        isSignin && showResetPasswordLink && /* @__PURE__ */ jsx(Box, { sx: { mt: -1, mb: 2 }, children: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "text",
            size: "small",
            href: "/auth/reset-password",
            onClick: onClose,
            sx: { textTransform: "none", px: 0, minWidth: 0 },
            children: "Nie pamiętasz hasła? Zresetuj"
          }
        ) }),
        /* @__PURE__ */ jsx(Button, { type: "submit", variant: "contained", fullWidth: true, disabled: loading, children: loading ? "Przetwarzanie…" : isSignin ? "Zaloguj" : "Utwórz konto" })
      ] })
    ] })
  ] });
}

const FEATURES = [
  {
    title: "Sezon",
    desc: [
      "Ogranicz chaos organizacyjny i działaj szybciej",
      "Stwórz sezon na nowy rok i łatwo organizuj kolejne turnieje",
      "W sezonie dodajesz drużyny, Sędziów i Klasyfikatorów tylko raz",
      "Przeglądaj wcześniejsze sezony i porównuj dane"
    ]
  },
  {
    title: "Turnieje",
    desc: [
      "Informacje o halach i noclegach w jednym miejscu",
      "Automatyczne linki do Map Google",
      "Ułóż terminarz meczów i trzymaj wszystko pod kontrolą",
      "Drukuj harmonogram meczów dla Zawodników",
      "Specjalny harmonogram dla Sędziów",
      "Klasyfikatorzy też mają swój harmonogram badań"
    ]
  },
  {
    title: "Drużyny",
    desc: [
      "Twórz przejrzyste składy zespołów",
      "Dodawaj Zawodników i Staff",
      "Sprawnie aktualizuj składy i dane kontaktowe",
      "Komplet informacji zawsze pod ręką"
    ]
  },
  {
    title: "Personel",
    desc: [
      "Wpisz dane Sędziów i Klasyfikatorów, aby łatwo się kontaktować",
      "Przydzielaj zadania personelowi w jasny i uporządkowany sposób",
      "Wprowadzasz dane 1 raz a potem tylko klikasz przydzielając zadania na turnieju"
    ]
  },
  {
    title: "Klub Sportowy",
    desc: [
      "Zarządzaj własnym Klubem",
      "Klub ma kilka drużyń? Stwórz je",
      "Sprawnie aktualizuj składy swoich drużyn",
      "Każdy zawodnik ma profil z danymi kontaktowymi i umiejętnościami!",
      "Zarządzaj personelem klubu - Zawodnicy, Trenerzy, Staff, Wolontariusze",
      "Miej komplet informacji gotowy zawsze, gdy go potrzebujesz"
    ]
  }
];
const PAGE_SX = {
  minHeight: "100vh",
  bgcolor: "background.default",
  color: "text.primary",
  display: "flex",
  flexDirection: "column"
};
const NAV_SX = {
  p: 3,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "80rem",
  mx: "auto",
  width: "100%"
};
const HERO_SX = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  px: 3,
  textAlign: "center"
};
const FEATURE_CARD_SX = {
  bgcolor: "background.paper",
  color: "text.secondary",
  borderRadius: "16px",
  border: "1px solid",
  borderColor: "divider",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "translateY(-6px) scale(1.03)",
    boxShadow: 4
  }
};
const CTA_BUTTON_SX = {
  backgroundColor: "primary.main",
  color: "primary.contrastText",
  fontWeight: 700,
  px: 4,
  py: 2,
  "&:hover": { backgroundColor: "warning.main", color: "white" }
};
const FOOTER_SX = {
  mt: 6,
  p: 4,
  textAlign: "center",
  color: "text.secondary",
  fontSize: "0.875rem"
};
const FEATURE_ICONS = {
  Sezon: CalendarDays,
  Turnieje: Medal,
  Drużyny: Users,
  Personel: UserCog,
  "Klub Sportowy": Building2
};
function LandingPage({ initialLoginOpen = false }) {
  const [loginOpen, setLoginOpen] = useState(initialLoginOpen);
  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("login")) openLogin();
  }, []);
  return /* @__PURE__ */ jsxs(ThemeRegistry, { children: [
    /* @__PURE__ */ jsx(LoginModal, { open: loginOpen, onClose: closeLogin }),
    /* @__PURE__ */ jsxs(Box, { sx: PAGE_SX, children: [
      /* @__PURE__ */ jsxs(Box, { component: "nav", sx: NAV_SX, children: [
        /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              style: { display: "inline-flex" },
              whileHover: { rotate: [0, 8, -8, 4, -4, 0], scale: 1.06 },
              transition: { duration: 0.55, ease: "easeInOut" },
              children: /* @__PURE__ */ jsx(Trophy, { color: "#FE9A00", size: 32 })
            }
          ),
          /* @__PURE__ */ jsx(Typography, { variant: "h6", sx: { letterSpacing: "-0.05em" }, children: "Wheelchair Rugby Manager" })
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "contained",
            onClick: openLogin,
            sx: {
              // Nav login hidden on small portrait; hero CTA still opens the modal.
              "@media (max-width: 599.95px) and (orientation: portrait)": { display: "none" }
            },
            children: "Zaloguj się"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(Box, { sx: HERO_SX, children: [
        /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, children: [
          /* @__PURE__ */ jsxs(
            Typography,
            {
              variant: "h2",
              sx: {
                fontWeight: 900,
                mt: 5,
                mb: 5,
                lineHeight: 1.3,
                fontSize: { xs: "2rem", md: "3rem" }
              },
              children: [
                "Zarządzaj Turniejami ",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx(Box, { component: "span", sx: { color: "primary.main" }, children: "Rugby na Wózkach" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Box,
            {
              sx: {
                color: "text.secondary",
                fontSize: "1rem",
                maxWidth: "42rem",
                mx: "auto",
                mb: 5,
                "& .MuiTypography-root": {
                  lineHeight: 1.7
                }
              },
              children: [
                /* @__PURE__ */ jsxs(Typography, { component: "p", children: [
                  "Kompleksowe narzędzie",
                  " ",
                  /* @__PURE__ */ jsx(Box, { component: "span", sx: { fontWeight: 700 }, children: "dla Organizatorów Turniejów i Trenerów" }),
                  "."
                ] }),
                /* @__PURE__ */ jsxs(Typography, { component: "p", children: [
                  /* @__PURE__ */ jsx(Box, { component: "span", sx: { fontWeight: 700 }, children: "Zarządzaj Klubem Sportowym" }),
                  " ",
                  "i swoimi drużynami."
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: openLogin, sx: CTA_BUTTON_SX, children: "Rozpocznij teraz" })
        ] }),
        /* @__PURE__ */ jsx(Box, { sx: { mt: 10, maxWidth: "72rem", width: "100%" }, children: /* @__PURE__ */ jsx(Grid, { container: true, spacing: 3, children: FEATURES.map((feature) => /* @__PURE__ */ jsx(Grid, { size: { xs: 12, md: 4 }, children: /* @__PURE__ */ jsx(Card, { sx: FEATURE_CARD_SX, children: /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxs(
            Box,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.25,
                mt: 2,
                mb: 2
              },
              children: [
                /* @__PURE__ */ jsx(
                  Box,
                  {
                    sx: {
                      color: "primary.main",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center"
                    },
                    children: (() => {
                      const Icon = FEATURE_ICONS[feature.title] ?? Trophy;
                      return /* @__PURE__ */ jsx(Icon, { size: 20 });
                    })()
                  }
                ),
                /* @__PURE__ */ jsx(Typography, { variant: "h6", sx: { fontWeight: "bold", mb: 0 }, children: feature.title })
              ]
            }
          ),
          /* @__PURE__ */ jsx(Box, { component: "ul", sx: { color: "text.secondary", m: 0, pl: 3, textAlign: "left" }, children: feature.desc.map((item) => /* @__PURE__ */ jsx(Box, { component: "li", sx: { mb: 1.5 }, children: /* @__PURE__ */ jsx(Typography, { component: "span", sx: { color: "text.secondary" }, children: item }) }, item)) })
        ] }) }) }, feature.title)) }) })
      ] }),
      /* @__PURE__ */ jsxs(Box, { component: "footer", sx: FOOTER_SX, children: [
        "© ",
        getYear(/* @__PURE__ */ new Date()),
        " Wheelchair Rugby Manager. Wszystkie prawa zastrzeżone."
      ] })
    ] })
  ] });
}

export { LandingPage as L };
