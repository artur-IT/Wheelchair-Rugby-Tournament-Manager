import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { b as blurActiveElement } from './blurActiveElement_iWDIUN-2.mjs';
import { D as Dialog, a as DialogTitle, b as DialogContent } from './DialogTitle_BL6--ISK.mjs';
import { g as generateUtilityClass, i as generateUtilityClasses, j as useDefaultProps, a as composeClasses, l as styled, T as Typography, R as rootShouldForwardProp, P as PropTypes, A as Alert, v as Button, C as CircularProgress } from './ThemeRegistry_D8eYcNmV.mjs';
import * as React from 'react';
import { C as clsx } from './sequence_C_bNAUSZ.mjs';
import { D as DialogActions } from './DialogActions_I4H8kn9g.mjs';

function getDialogContentTextUtilityClass(slot) {
  return generateUtilityClass('MuiDialogContentText', slot);
}
generateUtilityClasses('MuiDialogContentText', ['root']);

const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  const composedClasses = composeClasses(slots, getDialogContentTextUtilityClass, classes);
  return {
    ...classes,
    // forward classes to the Typography
    ...composedClasses
  };
};
const DialogContentTextRoot = styled(Typography, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiDialogContentText',
  slot: 'Root'
})({});
const DialogContentText = /*#__PURE__*/React.forwardRef(function DialogContentText(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiDialogContentText'
  });
  const {
    children,
    className,
    ...ownerState
  } = props;
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/jsx(DialogContentTextRoot, {
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref: ref,
    ownerState: ownerState,
    className: clsx(classes.root, className),
    ...props,
    classes: classes
  });
});
process.env.NODE_ENV !== "production" ? DialogContentText.propTypes /* remove-proptypes */ = {
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

function ConfirmationDialog({
  open,
  title,
  description,
  children,
  onClose,
  onConfirm,
  loading,
  confirmDisabled,
  errorMessage,
  confirmLabel = "Usuń",
  cancelLabel = "Anuluj",
  confirmColor = "error",
  confirmVariant = "contained",
  maxWidth = "xs",
  fullWidth = true
}) {
  const shouldWrapDescription = description != null && (typeof description === "string" || typeof description === "number");
  const handleClose = () => {
    blurActiveElement();
    onClose();
  };
  const handleConfirm = () => {
    blurActiveElement();
    onConfirm();
  };
  return /* @__PURE__ */ jsxs(
    Dialog,
    {
      open,
      onClose: loading ? void 0 : handleClose,
      maxWidth,
      fullWidth,
      disableRestoreFocus: true,
      children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: title }),
        /* @__PURE__ */ jsxs(DialogContent, { children: [
          errorMessage && /* @__PURE__ */ jsx(Alert, { severity: "error", sx: { mb: 2 }, children: errorMessage }),
          description != null && shouldWrapDescription && /* @__PURE__ */ jsx(DialogContentText, { children: description }),
          description != null && !shouldWrapDescription && description,
          children
        ] }),
        /* @__PURE__ */ jsxs(DialogActions, { children: [
          /* @__PURE__ */ jsx(Button, { onClick: handleClose, disabled: Boolean(loading), children: cancelLabel }),
          /* @__PURE__ */ jsx(
            Button,
            {
              color: confirmColor,
              variant: confirmVariant,
              onClick: handleConfirm,
              disabled: Boolean(loading) || confirmDisabled,
              children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(CircularProgress, { size: 20, sx: { mr: 1 }, "aria-label": "Ładowanie..." }),
                confirmLabel
              ] }) : confirmLabel
            }
          )
        ] })
      ]
    }
  );
}

export { ConfirmationDialog as C, DialogContentText as D };
