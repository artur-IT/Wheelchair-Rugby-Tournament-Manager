import { c as createComponent } from './astro-component_B53ZAH7l.mjs';
import { C as clsx, Q as renderTemplate } from './sequence_C_bNAUSZ.mjs';
import { r as renderComponent } from './entrypoint_BRj9trZt.mjs';
import { $ as $$Layout } from './Layout_CO1a2t5Q.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { useRef, useState, useMemo, useId as useId$1, useEffect, useCallback } from 'react';
import { MapPin, Trash2, ChevronDown } from 'lucide-react';
import { Q as QueryProvider } from './QueryProvider_CFYP5LAL.mjs';
import { z as createSvgIcon, l as styled, R as rootShouldForwardProp, o as memoTheme, P as PropTypes, g as generateUtilityClass, i as generateUtilityClasses, j as useDefaultProps, ao as createChainedFunction, k as useSlot, x as capitalize, a as composeClasses, y as createSimplePaletteValueFilter, a3 as refType, F as useForkRef, a7 as useId, A as Alert, t as Box, C as CircularProgress, $ as List, T as Typography, v as Button, n as Paper, _ as IconButton, w as ThemeRegistry } from './ThemeRegistry_D8eYcNmV.mjs';
import { L as ListItemButton, n as ListItemIcon, o as ListItemText, D as DataLoadAlert, c as Divider, A as AppShell } from './DataLoadAlert_DbJvhLOL.mjs';
import { C as ConfirmationDialog } from './ConfirmationDialog_CE1Tx5wT.mjs';
import { D as Dialog, a as DialogTitle, b as DialogContent } from './DialogTitle_BL6--ISK.mjs';
import { S as SwitchBase, F as FormGroup, b as Checkbox, a as FormControlLabel, C as Collapse } from './FormGroup_Boyc65nx.mjs';
import { D as DialogActions } from './DialogActions_I4H8kn9g.mjs';
import { f as formatDateRangePl, u as updateTournamentRefereePlanEntry, T as Tooltip, c as createTournamentMatch, a as updateTournamentMatch, b as fetchTournamentRefereePlan, d as createTournamentRefereePlanEntry, e as fetchTournamentClassifierPlan, g as createTournamentClassifierPlanEntry, h as updateTournamentClassifierPlanEntry, i as deleteTournamentClassifierPlanEntry, j as fetchTournamentByIdOrNull, k as fetchTournamentMatches, s as setTournamentTeams, r as removeTeamFromTournament, l as setTournamentTeamPlayers, m as setTournamentReferees, n as removeRefereeFromTournament, o as setTournamentClassifiers, p as removeClassifierFromTournament, q as deleteTournamentMatch } from './tournaments_BPH4TZ6Q.mjs';
import { L as Link } from './Link_Y3CcU4d0.mjs';
import { r as resolvePlaceMapsHref, f as formatAddressForDisplay } from './addressDisplay_BWOThiqF.mjs';
import { T as TableContainer, a as Table, b as TableHead, c as TableRow, d as TableCell, e as TableBody } from './TableRow_CirYsbnw.mjs';
import { q as queryKeys } from './queryKeys_DJxV4cae.mjs';
import { u as useFormControl, T as TextField } from './TextField_BVjeauhA.mjs';
import { M as MenuItem } from './MenuItem_BNajpNiW.mjs';
import { u as useControlled } from './Grow_BQXtgw3c.mjs';
import { h as fetchTeamsBySeason, d as fetchTeamById, f as fetchPersonnelBySeason } from './teams_KzoR5amP.mjs';

const RadioButtonUncheckedIcon = createSvgIcon(/*#__PURE__*/jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'RadioButtonUnchecked');

const RadioButtonCheckedIcon = createSvgIcon(/*#__PURE__*/jsx("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}), 'RadioButtonChecked');

const RadioButtonIconRoot = styled('span', {
  name: 'MuiRadioButtonIcon',
  shouldForwardProp: rootShouldForwardProp
})({
  position: 'relative',
  display: 'flex'
});
const RadioButtonIconBackground = styled(RadioButtonUncheckedIcon, {
  name: 'MuiRadioButtonIcon'
})({
  // Scale applied to prevent dot misalignment in Safari
  transform: 'scale(1)'
});
const RadioButtonIconDot = styled(RadioButtonCheckedIcon, {
  name: 'MuiRadioButtonIcon'
})(memoTheme(({
  theme
}) => ({
  left: 0,
  position: 'absolute',
  transform: 'scale(0)',
  transition: theme.transitions.create('transform', {
    easing: theme.transitions.easing.easeIn,
    duration: theme.transitions.duration.shortest
  }),
  variants: [{
    props: {
      checked: true
    },
    style: {
      transform: 'scale(1)',
      transition: theme.transitions.create('transform', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.shortest
      })
    }
  }]
})));

/**
 * @ignore - internal component.
 */
function RadioButtonIcon(props) {
  const {
    checked = false,
    classes = {},
    fontSize
  } = props;
  const ownerState = {
    ...props,
    checked
  };
  return /*#__PURE__*/jsxs(RadioButtonIconRoot, {
    className: classes.root,
    ownerState: ownerState,
    children: [/*#__PURE__*/jsx(RadioButtonIconBackground, {
      fontSize: fontSize,
      className: classes.background,
      ownerState: ownerState
    }), /*#__PURE__*/jsx(RadioButtonIconDot, {
      fontSize: fontSize,
      className: classes.dot,
      ownerState: ownerState
    })]
  });
}
process.env.NODE_ENV !== "production" ? RadioButtonIcon.propTypes /* remove-proptypes */ = {
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   */
  fontSize: PropTypes.oneOf(['small', 'medium'])
} : void 0;

/**
 * @ignore - internal component.
 */
const RadioGroupContext = /*#__PURE__*/React.createContext(undefined);
if (process.env.NODE_ENV !== 'production') {
  RadioGroupContext.displayName = 'RadioGroupContext';
}

function useRadioGroup() {
  return React.useContext(RadioGroupContext);
}

function getRadioUtilityClass(slot) {
  return generateUtilityClass('MuiRadio', slot);
}
const radioClasses = generateUtilityClasses('MuiRadio', ['root', 'checked', 'disabled', 'colorPrimary', 'colorSecondary', 'sizeSmall']);

const useUtilityClasses$1 = ownerState => {
  const {
    classes,
    color,
    size
  } = ownerState;
  const slots = {
    root: ['root', `color${capitalize(color)}`, size !== 'medium' && `size${capitalize(size)}`]
  };
  return {
    ...classes,
    ...composeClasses(slots, getRadioUtilityClass, classes)
  };
};
const RadioRoot = styled(SwitchBase, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiRadio',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.size !== 'medium' && styles[`size${capitalize(ownerState.size)}`], styles[`color${capitalize(ownerState.color)}`]];
  }
})(memoTheme(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  [`&.${radioClasses.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled
  },
  variants: [{
    props: {
      color: 'default',
      disabled: false,
      disableRipple: false
    },
    style: {
      '&:hover': {
        backgroundColor: theme.alpha((theme.vars || theme).palette.action.active, (theme.vars || theme).palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color,
      disabled: false,
      disableRipple: false
    },
    style: {
      '&:hover': {
        backgroundColor: theme.alpha((theme.vars || theme).palette[color].main, (theme.vars || theme).palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
    props: {
      color,
      disabled: false
    },
    style: {
      [`&.${radioClasses.checked}`]: {
        color: (theme.vars || theme).palette[color].main
      }
    }
  })), {
    // Should be last to override other colors
    props: {
      disableRipple: false
    },
    style: {
      // Reset on touch devices, it doesn't add specificity
      '&:hover': {
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    }
  }]
})));
function areEqualValues(a, b) {
  if (typeof b === 'object' && b !== null) {
    return a === b;
  }

  // The value could be a number, the DOM will stringify it anyway.
  return String(a) === String(b);
}
const defaultCheckedIcon = /*#__PURE__*/jsx(RadioButtonIcon, {
  checked: true
});
const defaultIcon = /*#__PURE__*/jsx(RadioButtonIcon, {});
const Radio = /*#__PURE__*/React.forwardRef(function Radio(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiRadio'
  });
  const {
    checked: checkedProp,
    checkedIcon = defaultCheckedIcon,
    color = 'primary',
    icon = defaultIcon,
    name: nameProp,
    onChange: onChangeProp,
    size = 'medium',
    className,
    disabled: disabledProp,
    disableRipple = false,
    slots = {},
    slotProps = {},
    inputProps,
    ...other
  } = props;
  const muiFormControl = useFormControl();
  let disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }
  disabled ??= false;
  const ownerState = {
    ...props,
    disabled,
    disableRipple,
    color,
    size
  };
  const classes = useUtilityClasses$1(ownerState);
  const radioGroup = useRadioGroup();
  let checked = checkedProp;
  const onChange = createChainedFunction(onChangeProp, radioGroup && radioGroup.onChange);
  let name = nameProp;
  if (radioGroup) {
    if (typeof checked === 'undefined') {
      checked = areEqualValues(radioGroup.value, props.value);
    }
    if (typeof name === 'undefined') {
      name = radioGroup.name;
    }
  }
  const externalInputProps = slotProps.input ?? inputProps;
  const [RootSlot, rootSlotProps] = useSlot('root', {
    ref,
    elementType: RadioRoot,
    className: clsx(classes.root, className),
    shouldForwardComponentProp: true,
    externalForwardedProps: {
      slots,
      slotProps,
      ...other
    },
    getSlotProps: handlers => ({
      ...handlers,
      onChange: (event, ...args) => {
        handlers.onChange?.(event, ...args);
        onChange(event, ...args);
      }
    }),
    ownerState,
    additionalProps: {
      type: 'radio',
      icon: /*#__PURE__*/React.cloneElement(icon, {
        fontSize: icon.props.fontSize ?? size
      }),
      checkedIcon: /*#__PURE__*/React.cloneElement(checkedIcon, {
        fontSize: checkedIcon.props.fontSize ?? size
      }),
      disabled,
      name,
      checked,
      slots,
      slotProps: {
        // Do not forward `slotProps.root` again because it's already handled by the `RootSlot` in this file.
        input: typeof externalInputProps === 'function' ? externalInputProps(ownerState) : externalInputProps
      }
    }
  });
  return /*#__PURE__*/jsx(RootSlot, {
    ...rootSlotProps,
    classes: classes
  });
});
process.env.NODE_ENV !== "production" ? Radio.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.bool,
  /**
   * The icon to display when the component is checked.
   * @default <RadioButtonIcon checked />
   */
  checkedIcon: PropTypes.node,
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
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning']), PropTypes.string]),
  /**
   * If `true`, the component is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: PropTypes.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <RadioButtonIcon />
   */
  icon: PropTypes.node,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes) applied to the `input` element.
   * @deprecated Use `slotProps.input` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputProps: PropTypes.object,
  /**
   * Pass a ref to the `input` element.
   * @deprecated Use `slotProps.input.ref` instead. This prop will be removed in a future major release. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  inputRef: refType,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: PropTypes.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: PropTypes.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   * @default 'medium'
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['medium', 'small']), PropTypes.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    input: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    input: PropTypes.elementType,
    root: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: PropTypes.any
} : void 0;

function getRadioGroupUtilityClass(slot) {
  return generateUtilityClass('MuiRadioGroup', slot);
}
generateUtilityClasses('MuiRadioGroup', ['root', 'row', 'error']);

const useUtilityClasses = props => {
  const {
    classes,
    row,
    error
  } = props;
  const slots = {
    root: ['root', row && 'row', error && 'error']
  };
  return composeClasses(slots, getRadioGroupUtilityClass, classes);
};
const RadioGroup = /*#__PURE__*/React.forwardRef(function RadioGroup(props, ref) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions,
    children,
    className,
    defaultValue,
    name: nameProp,
    onChange,
    value: valueProp,
    ...other
  } = props;
  const rootRef = React.useRef(null);
  const classes = useUtilityClasses(props);
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'RadioGroup'
  });
  React.useImperativeHandle(actions, () => ({
    focus: () => {
      let input = rootRef.current.querySelector('input:not(:disabled):checked');
      if (!input) {
        input = rootRef.current.querySelector('input:not(:disabled)');
      }
      if (input) {
        input.focus();
      }
    }
  }), []);
  const handleRef = useForkRef(ref, rootRef);
  const name = useId(nameProp);
  const contextValue = React.useMemo(() => ({
    name,
    onChange(event) {
      setValueState(event.target.value);
      if (onChange) {
        onChange(event, event.target.value);
      }
    },
    value
  }), [name, onChange, setValueState, value]);
  return /*#__PURE__*/jsx(RadioGroupContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/jsx(FormGroup, {
      role: "radiogroup",
      ref: handleRef,
      className: clsx(classes.root, className),
      ...other,
      children: children
    })
  });
});
process.env.NODE_ENV !== "production" ? RadioGroup.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,
  /**
   * The name used to reference the value of the control.
   * If you don't provide this prop, it falls back to a randomly generated name.
   */
  name: PropTypes.string,
  /**
   * Callback fired when a radio button is selected.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * @param {string} value The value of the selected radio button.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes.func,
  /**
   * Value of the selected radio button. The DOM API casts this to a string.
   */
  value: PropTypes.any
} : void 0;

function SelectionDialog({
  open,
  title,
  items,
  selectedIds,
  toggleSelected,
  onClose,
  onSave,
  loading = false,
  availableLoading = false,
  availableError,
  saveError,
  confirmLabel = "Dodaj",
  cancelLabel = "Anuluj",
  emptyState,
  description
}) {
  const showEmptyState = !items.length && !availableLoading;
  return /* @__PURE__ */ jsxs(Dialog, { open, onClose: loading ? void 0 : onClose, fullWidth: true, maxWidth: "sm", disableRestoreFocus: true, children: [
    /* @__PURE__ */ jsx(DialogTitle, { children: title }),
    /* @__PURE__ */ jsxs(DialogContent, { dividers: true, children: [
      description,
      availableError ? /* @__PURE__ */ jsx(Alert, { severity: "error", sx: { mb: 2 }, children: availableError }) : null,
      saveError ? /* @__PURE__ */ jsx(Alert, { severity: "error", sx: { mb: 2 }, children: saveError }) : null,
      availableLoading ? /* @__PURE__ */ jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 3 }, children: /* @__PURE__ */ jsx(CircularProgress, { size: 24 }) }) : /* @__PURE__ */ jsxs(List, { dense: true, children: [
        items.map((item) => {
          const checked = selectedIds.includes(item.id);
          return /* @__PURE__ */ jsxs(ListItemButton, { onClick: () => toggleSelected(item.id), children: [
            /* @__PURE__ */ jsx(ListItemIcon, { children: /* @__PURE__ */ jsx(Checkbox, { edge: "start", checked, tabIndex: -1, disableRipple: true }) }),
            /* @__PURE__ */ jsx(ListItemText, { primary: item.label })
          ] }, item.id);
        }),
        showEmptyState ? emptyState ?? /* @__PURE__ */ jsx(Typography, { color: "textSecondary", sx: { py: 1 }, children: "Brak pozycji do wyboru." }) : null
      ] })
    ] }),
    /* @__PURE__ */ jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsx(Button, { onClick: onClose, disabled: loading, children: cancelLabel }),
      /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: onSave, disabled: loading || availableLoading, children: confirmLabel })
    ] })
  ] });
}

function TournamentDetailsDialogs({
  tournament,
  matchToDelete,
  matchDayToDelete,
  classifierDayToDelete,
  deleteMatchLoading,
  deleteMatchError,
  deleteMatchDayLoading,
  deleteMatchDayError,
  deleteClassifierDayLoading,
  deleteClassifierDayError,
  getScheduleDayLabel,
  closeDeleteMatchDialog,
  confirmDeleteMatch,
  closeDeleteMatchDayDialog,
  confirmDeleteMatchDay,
  closeDeleteClassifierDayDialog,
  confirmDeleteClassifierDay,
  teams,
  referees,
  classifiers,
  getPersonDisplayName
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SelectionDialog,
      {
        open: teams.addTeamsOpen,
        title: "Dodaj drużyny",
        items: teams.availableTeams.map((team) => ({ id: team.id, label: team.name })),
        selectedIds: teams.selectedTeamIds,
        toggleSelected: teams.toggleSelectedTeam,
        onClose: teams.closeAddTeamsDialog,
        onSave: teams.saveSelectedTeams,
        loading: teams.saveTeamsLoading,
        availableLoading: teams.availableTeamsLoading,
        availableError: teams.availableTeamsError,
        saveError: teams.saveTeamsError,
        emptyState: teams.availableTeams.length === 0 && !teams.availableTeamsError ? /* @__PURE__ */ jsx(Typography, { color: "textSecondary", sx: { py: 1 }, children: "Brak dostępnych drużyn w tym sezonie." }) : void 0
      }
    ),
    /* @__PURE__ */ jsx(
      ConfirmationDialog,
      {
        open: Boolean(matchToDelete),
        title: "Usunąć mecz?",
        description: matchToDelete ? /* @__PURE__ */ jsxs(Typography, { color: "textSecondary", children: [
          tournament.teams.find((t) => t.id === matchToDelete.teamAId)?.name ?? matchToDelete.teamAId,
          " vs",
          " ",
          tournament.teams.find((t) => t.id === matchToDelete.teamBId)?.name ?? matchToDelete.teamBId
        ] }) : null,
        onClose: closeDeleteMatchDialog,
        onConfirm: confirmDeleteMatch,
        loading: deleteMatchLoading,
        errorMessage: deleteMatchError,
        confirmLabel: "Usuń",
        cancelLabel: "Anuluj"
      }
    ),
    /* @__PURE__ */ jsx(
      ConfirmationDialog,
      {
        open: Boolean(matchDayToDelete),
        title: "Usunąć dzień?",
        description: matchDayToDelete != null ? /* @__PURE__ */ jsx(Typography, { color: "textSecondary", children: getScheduleDayLabel(matchDayToDelete) }) : null,
        onClose: closeDeleteMatchDayDialog,
        onConfirm: confirmDeleteMatchDay,
        loading: deleteMatchDayLoading,
        errorMessage: deleteMatchDayError,
        confirmLabel: "Usuń",
        cancelLabel: "Anuluj"
      }
    ),
    /* @__PURE__ */ jsx(
      ConfirmationDialog,
      {
        open: Boolean(classifierDayToDelete),
        title: "Usunąć dzień planu klasyfikatorów?",
        description: classifierDayToDelete != null ? /* @__PURE__ */ jsx(Typography, { color: "textSecondary", children: getScheduleDayLabel(classifierDayToDelete) }) : null,
        onClose: closeDeleteClassifierDayDialog,
        onConfirm: confirmDeleteClassifierDay,
        loading: deleteClassifierDayLoading,
        errorMessage: deleteClassifierDayError,
        confirmLabel: "Usuń",
        cancelLabel: "Anuluj"
      }
    ),
    /* @__PURE__ */ jsx(
      ConfirmationDialog,
      {
        open: Boolean(teams.teamToRemove),
        title: "Usunąć drużynę z turnieju?",
        description: teams.teamToRemove ? /* @__PURE__ */ jsxs(Typography, { color: "textSecondary", children: [
          "Drużyna: ",
          /* @__PURE__ */ jsx("strong", { children: teams.teamToRemove.name })
        ] }) : null,
        onClose: teams.closeRemoveTeamDialog,
        onConfirm: teams.confirmRemoveTeam,
        loading: teams.removeTeamLoading,
        errorMessage: teams.removeTeamError,
        confirmLabel: "Usuń",
        cancelLabel: "Anuluj"
      }
    ),
    /* @__PURE__ */ jsx(
      SelectionDialog,
      {
        open: teams.editTeamPlayersOpen,
        title: `Skład drużyny${teams.selectedTeamForPlayers ? `: ${teams.selectedTeamForPlayers.name}` : ""}`,
        items: teams.availableTeamPlayers,
        selectedIds: teams.selectedTeamPlayerIds,
        toggleSelected: teams.toggleSelectedTeamPlayer,
        onClose: teams.closeEditTeamPlayersDialog,
        onSave: teams.saveSelectedTeamPlayers,
        loading: teams.saveTeamPlayersLoading,
        availableLoading: teams.availableTeamPlayersLoading,
        availableError: teams.availableTeamPlayersError,
        saveError: teams.saveTeamPlayersError,
        confirmLabel: "Zapisz",
        emptyState: teams.availableTeamPlayers.length === 0 && !teams.availableTeamPlayersError ? /* @__PURE__ */ jsx(Typography, { color: "textSecondary", sx: { py: 1 }, children: "Brak zawodników w drużynie." }) : void 0
      }
    ),
    /* @__PURE__ */ jsx(
      SelectionDialog,
      {
        open: referees.addRefereesOpen,
        title: "Dodaj sędziów",
        items: referees.availableReferees.map((referee) => ({
          id: referee.id,
          label: getPersonDisplayName(referee)
        })),
        selectedIds: referees.selectedRefereeIds,
        toggleSelected: referees.toggleSelectedReferee,
        onClose: referees.closeAddRefereesDialog,
        onSave: referees.saveSelectedReferees,
        loading: referees.saveRefereesLoading,
        availableLoading: referees.availableRefereesLoading,
        availableError: referees.availableRefereesError,
        saveError: referees.saveRefereesError,
        emptyState: referees.availableReferees.length === 0 && !referees.availableRefereesError ? /* @__PURE__ */ jsx(Typography, { color: "textSecondary", sx: { py: 1 }, children: "Brak dostępnych sędziów w tym sezonie." }) : void 0
      }
    ),
    /* @__PURE__ */ jsx(
      ConfirmationDialog,
      {
        open: Boolean(referees.refereeToRemove),
        title: "Usunąć sędziego z turnieju?",
        description: referees.refereeToRemove ? /* @__PURE__ */ jsxs(Typography, { color: "textSecondary", children: [
          "Sędzia: ",
          /* @__PURE__ */ jsx("strong", { children: getPersonDisplayName(referees.refereeToRemove) })
        ] }) : null,
        onClose: referees.closeRemoveRefereeDialog,
        onConfirm: referees.confirmRemoveReferee,
        loading: referees.removeRefereeLoading,
        errorMessage: referees.removeRefereeError,
        confirmLabel: "Usuń",
        cancelLabel: "Anuluj"
      }
    ),
    /* @__PURE__ */ jsx(
      SelectionDialog,
      {
        open: classifiers.addClassifiersOpen,
        title: "Dodaj klasyfikatorów",
        items: classifiers.availableClassifiers.map((classifier) => ({
          id: classifier.id,
          label: getPersonDisplayName(classifier)
        })),
        selectedIds: classifiers.selectedClassifierIds,
        toggleSelected: classifiers.toggleSelectedClassifier,
        onClose: classifiers.closeAddClassifiersDialog,
        onSave: classifiers.saveSelectedClassifiers,
        loading: classifiers.saveClassifiersLoading,
        availableLoading: classifiers.availableClassifiersLoading,
        availableError: classifiers.availableClassifiersError,
        saveError: classifiers.saveClassifiersError,
        emptyState: classifiers.availableClassifiers.length === 0 && !classifiers.availableClassifiersError ? /* @__PURE__ */ jsx(Typography, { color: "textSecondary", sx: { py: 1 }, children: "Brak dostępnych klasyfikatorów w tym sezonie." }) : void 0
      }
    ),
    /* @__PURE__ */ jsx(
      ConfirmationDialog,
      {
        open: Boolean(classifiers.classifierToRemove),
        title: "Usunąć klasyfikatora z turnieju?",
        description: classifiers.classifierToRemove ? /* @__PURE__ */ jsxs(Typography, { color: "textSecondary", children: [
          "Klasyfikator: ",
          /* @__PURE__ */ jsx("strong", { children: getPersonDisplayName(classifiers.classifierToRemove) })
        ] }) : null,
        onClose: classifiers.closeRemoveClassifierDialog,
        onConfirm: classifiers.confirmRemoveClassifier,
        loading: classifiers.removeClassifierLoading,
        errorMessage: classifiers.removeClassifierError,
        confirmLabel: "Usuń",
        cancelLabel: "Anuluj"
      }
    )
  ] });
}

function TournamentHeader({ id, tournament }) {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
      },
      children: [
        /* @__PURE__ */ jsxs(Box, { children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/tournaments",
              underline: "hover",
              sx: {
                color: "primary.main",
                fontWeight: 600,
                fontSize: "0.875rem",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                mb: 1
              },
              children: "← Powrót do listy"
            }
          ),
          /* @__PURE__ */ jsx(
            Typography,
            {
              variant: "h3",
              sx: {
                fontWeight: 900,
                // Smaller title on narrow portrait so long names fit without dominating the screen.
                "@media (max-width: 599.95px) and (orientation: portrait)": {
                  fontSize: "1.375rem",
                  lineHeight: 1.25,
                  wordBreak: "break-word"
                }
              },
              children: tournament.name
            }
          ),
          /* @__PURE__ */ jsx(Typography, { color: "textSecondary", children: formatDateRangePl(tournament.startDate, tournament.endDate) })
        ] }),
        /* @__PURE__ */ jsx(Box, { sx: { display: "flex", gap: 1.5 }, children: /* @__PURE__ */ jsx(
          Button,
          {
            component: "a",
            href: `/tournaments/${id}/edit`,
            variant: "contained",
            sx: { borderRadius: 4, fontWeight: "bold" },
            children: "Edytuj turniej"
          }
        ) })
      ]
    }
  );
}

function TournamentInfoPanels({ tournament }) {
  const mealLocationLabel = (location) => {
    if (location === "HALL") return "Hala";
    if (location === "HOTEL") return "Hotel";
    return "Brak danych";
  };
  const hasStructuredCatering = Boolean(
    tournament.breakfastServingTime || tournament.lunchServingTime || tournament.dinnerServingTime || tournament.cateringNotes
  );
  const venue = tournament.venue;
  const accommodation = tournament.accommodation;
  const venueMapsHref = resolvePlaceMapsHref(venue);
  const accommodationMapsHref = resolvePlaceMapsHref(accommodation);
  const cardSx = {
    p: 3,
    borderRadius: 3,
    bgcolor: "background.paper",
    border: 1,
    borderColor: "divider",
    boxSizing: "border-box",
    width: "100%",
    minWidth: 0,
    maxWidth: { xs: "100%", md: 350 },
    justifySelf: { xs: "stretch", md: "center" }
  };
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        display: "grid",
        width: "100%",
        minWidth: 0,
        gridTemplateColumns: {
          xs: "minmax(0, 1fr)",
          sm: "minmax(0, 1fr)",
          md: "repeat(auto-fit, minmax(280px, 1fr))",
          lg: "repeat(3, minmax(0, 350px))",
          xl: "repeat(3, minmax(0, 350px))"
        },
        gap: 3,
        alignItems: "stretch",
        justifyContent: "center",
        overflowX: "visible"
      },
      children: [
        venue ? /* @__PURE__ */ jsxs(Paper, { variant: "outlined", sx: cardSx, children: [
          /* @__PURE__ */ jsxs(
            Box,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 2
              },
              children: [
                /* @__PURE__ */ jsx(
                  Box,
                  {
                    sx: {
                      bgcolor: "info.light",
                      p: 1,
                      borderRadius: 2,
                      color: "info.dark"
                    },
                    children: /* @__PURE__ */ jsx(MapPin, { size: 20 })
                  }
                ),
                /* @__PURE__ */ jsx(Typography, { variant: "h6", sx: { fontWeight: "bold" }, children: "Hala Sportowa" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(Typography, { sx: { fontWeight: 600 }, children: venue.name }),
          /* @__PURE__ */ jsx(Typography, { color: "textSecondary", sx: { mb: 1, whiteSpace: "pre-line", overflowWrap: "anywhere" }, children: formatAddressForDisplay(venue.address) }),
          venueMapsHref ? /* @__PURE__ */ jsx(
            Link,
            {
              href: venueMapsHref,
              target: "_blank",
              rel: "noreferrer",
              underline: "hover",
              sx: { fontWeight: "bold", fontSize: "0.875rem" },
              children: "Otwórz w Mapach →"
            }
          ) : null
        ] }) : null,
        accommodation ? /* @__PURE__ */ jsxs(Paper, { variant: "outlined", sx: cardSx, children: [
          /* @__PURE__ */ jsxs(
            Box,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 2
              },
              children: [
                /* @__PURE__ */ jsx(
                  Box,
                  {
                    sx: {
                      bgcolor: "secondary.light",
                      p: 1,
                      borderRadius: 2,
                      color: "secondary.dark"
                    },
                    children: /* @__PURE__ */ jsx(MapPin, { size: 20 })
                  }
                ),
                /* @__PURE__ */ jsx(Typography, { variant: "h6", sx: { fontWeight: "bold" }, children: "Zakwaterowanie" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(Typography, { sx: { fontWeight: 600 }, children: accommodation.name }),
          /* @__PURE__ */ jsx(Typography, { color: "textSecondary", sx: { mb: 1, whiteSpace: "pre-line", overflowWrap: "anywhere" }, children: formatAddressForDisplay(accommodation.address) }),
          tournament.parking ? /* @__PURE__ */ jsxs(Typography, { sx: { mb: 1 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "Parking:" }),
            " ",
            tournament.parking
          ] }) : null,
          accommodationMapsHref ? /* @__PURE__ */ jsx(
            Link,
            {
              href: accommodationMapsHref,
              target: "_blank",
              rel: "noreferrer",
              underline: "hover",
              sx: { fontWeight: "bold", fontSize: "0.875rem" },
              children: "Otwórz w Mapach →"
            }
          ) : null
        ] }) : null,
        /* @__PURE__ */ jsxs(Paper, { variant: "outlined", sx: cardSx, children: [
          /* @__PURE__ */ jsxs(
            Box,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 2
              },
              children: [
                /* @__PURE__ */ jsx(
                  Box,
                  {
                    sx: {
                      bgcolor: "warning.light",
                      p: 1,
                      borderRadius: 2,
                      color: "warning.dark"
                    },
                    children: /* @__PURE__ */ jsx(MapPin, { size: 20 })
                  }
                ),
                /* @__PURE__ */ jsx(Typography, { variant: "h6", sx: { fontWeight: "bold" }, children: "Wyżywienie" })
              ]
            }
          ),
          hasStructuredCatering ? /* @__PURE__ */ jsxs(Box, { sx: { display: "grid", gap: 1 }, children: [
            /* @__PURE__ */ jsxs(Typography, { children: [
              /* @__PURE__ */ jsx("strong", { children: "Śniadania:" }),
              " ",
              tournament.breakfastServingTime || "Brak danych",
              " /",
              " ",
              /* @__PURE__ */ jsx("strong", { children: mealLocationLabel(tournament.breakfastLocation) })
            ] }),
            /* @__PURE__ */ jsxs(Typography, { children: [
              /* @__PURE__ */ jsx("strong", { children: "Obiady:" }),
              " ",
              tournament.lunchServingTime || "Brak danych",
              " /",
              " ",
              /* @__PURE__ */ jsx("strong", { children: mealLocationLabel(tournament.lunchLocation) })
            ] }),
            /* @__PURE__ */ jsxs(Typography, { children: [
              /* @__PURE__ */ jsx("strong", { children: "Kolacje:" }),
              " ",
              tournament.dinnerServingTime || "Brak danych",
              " /",
              " ",
              /* @__PURE__ */ jsx("strong", { children: mealLocationLabel(tournament.dinnerLocation) })
            ] }),
            tournament.cateringNotes ? /* @__PURE__ */ jsxs(Typography, { sx: { whiteSpace: "pre-wrap", overflowWrap: "anywhere" }, children: [
              /* @__PURE__ */ jsx("strong", { children: "Uwagi:" }),
              " ",
              tournament.cateringNotes
            ] }) : null
          ] }) : tournament.catering ? /* @__PURE__ */ jsx(Typography, { sx: { fontWeight: 600, whiteSpace: "pre-wrap", overflowWrap: "anywhere" }, children: tournament.catering }) : /* @__PURE__ */ jsx(Typography, { color: "textSecondary", children: "Brak danych." })
        ] })
      ]
    }
  );
}

function matchHasRecordedResult(m) {
  return typeof m.scoreA === "number" && typeof m.scoreB === "number";
}
const MATCH_DURATION_MINUTES = 90;
const MATCH_DURATION_MS = MATCH_DURATION_MINUTES * 60 * 1e3;
function buildMatchDayOptions(startIso, endIso) {
  const startDate = new Date(startIso);
  const endDate = endIso ? new Date(endIso) : startDate;
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) return [];
  const first = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const last = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
  const formatter = new Intl.DateTimeFormat("pl-PL", { weekday: "long" });
  const options = [];
  const cur = new Date(first);
  while (cur <= last) {
    const label = `${formatter.format(cur)} (${cur.toLocaleDateString("pl-PL")})`;
    options.push({ timestamp: cur.getTime(), label });
    cur.setDate(cur.getDate() + 1);
  }
  return options;
}
function formatDayOptionLabel(timestamp) {
  const d = new Date(timestamp);
  const formatter = new Intl.DateTimeFormat("pl-PL", { weekday: "long" });
  return `${formatter.format(d)} (${d.toLocaleDateString("pl-PL")})`;
}
function getMatchDayTimestamp(scheduledAtIso) {
  const d = new Date(scheduledAtIso);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}
function tournamentDayBounds(tournamentStartIso, tournamentEndIso) {
  const start = new Date(tournamentStartIso);
  const end = tournamentEndIso ? new Date(tournamentEndIso) : start;
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return null;
  const first = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime();
  const last = new Date(end.getFullYear(), end.getMonth(), end.getDate()).getTime();
  return { first, last };
}
function isScheduledDayOutsideTournamentRange(scheduledAtIso, tournamentStartIso, tournamentEndIso) {
  const bounds = tournamentDayBounds(tournamentStartIso, tournamentEndIso);
  if (!bounds) return false;
  const matchDay = getMatchDayTimestamp(scheduledAtIso);
  if (Number.isNaN(matchDay)) return true;
  return matchDay < bounds.first || matchDay > bounds.last;
}
function isDayTimestampOutsideTournamentRange(dayTimestamp, tournamentStartIso, tournamentEndIso) {
  const bounds = tournamentDayBounds(tournamentStartIso, tournamentEndIso);
  if (!bounds) return false;
  return dayTimestamp < bounds.first || dayTimestamp > bounds.last;
}
function pad2(n) {
  return String(n).padStart(2, "0");
}
function minutesToTime(minutes) {
  const normalized = (minutes % (24 * 60) + 24 * 60) % (24 * 60);
  const hour = Math.floor(normalized / 60);
  const minute = normalized % 60;
  return `${pad2(hour)}:${pad2(minute)}`;
}
function timeToMinutes(time) {
  const [hourRaw, minuteRaw] = time.split(":");
  const hour = Number(hourRaw);
  const minute = Number(minuteRaw);
  if (!Number.isFinite(hour) || !Number.isFinite(minute)) return null;
  return hour * 60 + minute;
}
function parseJerseyInfo(jerseyInfo) {
  const fallbackA = "jasne";
  const fallbackB = "ciemne";
  if (!jerseyInfo) return { teamA: fallbackA, teamB: fallbackB };
  const normalized = jerseyInfo.toLowerCase();
  const tokenToValue = (token) => {
    if (!token) return void 0;
    const t = token.toLowerCase();
    if (t === "jasne" || t === "jasny") return "jasne";
    if (t === "ciemne" || t === "ciemny") return "ciemne";
    return void 0;
  };
  const aToken = normalized.match(/team a:\s*(jasne|jasny|ciemne|ciemny)/)?.[1];
  const bToken = normalized.match(/team b:\s*(jasne|jasny|ciemne|ciemny)/)?.[1];
  return {
    teamA: tokenToValue(aToken) ?? fallbackA,
    teamB: tokenToValue(bToken) ?? fallbackB
  };
}

const PRINT_WINDOW_FEATURES = "width=1200,height=800";
function printPageSizeCss(orientation) {
  return orientation === "portrait" ? "A4 portrait" : "A4 landscape";
}
function printElementAsPdf(title, element, options) {
  const tournamentDateRange = options?.tournamentDateRange;
  const printWindow = window.open("", "_blank", PRINT_WINDOW_FEATURES);
  if (!printWindow) {
    alert("Unable to open print window. Please allow popups for this site.");
    return;
  }
  const clone = element.cloneNode(true);
  clone.querySelectorAll(".wr-print-hide").forEach((node) => node.remove());
  clone.querySelectorAll(".wr-print-duplicate-title").forEach((node) => node.remove());
  const doc = printWindow.document;
  doc.title = title;
  while (doc.head.firstChild) doc.head.removeChild(doc.head.firstChild);
  while (doc.body.firstChild) doc.body.removeChild(doc.body.firstChild);
  const charsetMeta = doc.createElement("meta");
  charsetMeta.setAttribute("charset", "utf-8");
  doc.head.appendChild(charsetMeta);
  document.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
    const copy = doc.createElement("link");
    const href = link.getAttribute("href");
    const rel = link.getAttribute("rel");
    if (href) copy.setAttribute("href", href);
    if (rel) copy.setAttribute("rel", rel);
    doc.head.appendChild(copy);
  });
  document.querySelectorAll("style").forEach((style) => {
    const copy = doc.createElement("style");
    copy.textContent = style.textContent;
    doc.head.appendChild(copy);
  });
  const dynamicPageStyle = doc.createElement("style");
  dynamicPageStyle.id = "wr-print-dynamic-page";
  dynamicPageStyle.textContent = `@page { size: ${printPageSizeCss("landscape")}; margin: 10mm; }`;
  doc.head.appendChild(dynamicPageStyle);
  const printStyleTag = doc.createElement("style");
  printStyleTag.textContent = `
    @media print {
      .wr-print-window-toolbar {
        display: none !important;
      }
    }
    .wr-print-window-toolbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      box-sizing: border-box;
      width: 100%;
      margin: 0 0 12px;
      padding: 10px 12px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;
      font-family: system-ui, -apple-system, Segoe UI, sans-serif;
      font-size: 14px;
      color: #4D4D4D;
      background: #FAFAFA;
      border-bottom: 1px solid #D4D4D4;
    }
    .wr-print-window-toolbar button {
      font: inherit;
      padding: 6px 12px;
      border-radius: 6px;
      border: 1px solid #D4D4D4;
      background: #FFFFFF;
      cursor: pointer;
    }
    .wr-print-window-toolbar button:hover {
      background: #EBEBEB;
    }
    .wr-print-window-toolbar button.wr-print-orient-active {
      border-color: #4BA8DE;
      background: #A5D3EF;
      font-weight: 600;
    }
    .wr-print-window-toolbar .wr-print-toolbar-primary {
      background: #4BA8DE;
      color: #FFFFFF;
      border-color: #90A1B9;
    }
    .wr-print-window-toolbar .wr-print-toolbar-primary:hover {
      background: #90A1B9;
    }
    * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    body {
      font-family: Arial, sans-serif;
      color: #4D4D4D;
      margin: 0;
    }
    .wr-print-hide {
      display: none !important;
    }
    .wr-print-header {
      margin-bottom: 12px;
    }
    .wr-print-title {
      font-size: 22px;
      font-weight: 700;
      margin: 0;
    }
    .wr-print-subtitle {
      font-size: 14px;
      margin: 4px 0 0;
      color: #717171;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid #D4D4D4;
      padding: 6px 8px;
      vertical-align: middle;
    }
    thead th {
      font-weight: 700;
    }
    .MuiPaper-root {
      box-shadow: none !important;
    }
    .MuiTableContainer-root {
      overflow: visible !important;
    }
    .MuiTable-root {
      table-layout: auto;
    }
  `;
  doc.head.appendChild(printStyleTag);
  const toolbar = doc.createElement("div");
  toolbar.className = "wr-print-window-toolbar";
  toolbar.setAttribute("role", "toolbar");
  toolbar.setAttribute("aria-label", "Print preview options");
  toolbar.innerHTML = `
    <span>Orientacja strony:</span>
    <button type="button" id="wr-print-orient-portrait" aria-pressed="false">Pionowo</button>
    <button type="button" id="wr-print-orient-landscape" aria-pressed="true" class="wr-print-orient-active">Poziomo</button>
    <button type="button" class="wr-print-toolbar-primary" id="wr-print-run">Drukuj…</button>
    <button type="button" id="wr-print-close-window">Zamknij</button>
  `;
  const header = doc.createElement("header");
  header.className = "wr-print-header";
  const heading = doc.createElement("h1");
  heading.className = "wr-print-title";
  heading.textContent = title;
  header.appendChild(heading);
  if (tournamentDateRange) {
    const subtitle = doc.createElement("p");
    subtitle.className = "wr-print-subtitle";
    subtitle.textContent = tournamentDateRange;
    header.appendChild(subtitle);
  }
  const main = doc.createElement("div");
  main.appendChild(header);
  main.appendChild(clone);
  doc.body.appendChild(toolbar);
  doc.body.appendChild(main);
  const script = doc.createElement("script");
  script.textContent = `
    (function () {
      var w = window;
      var dynamic = document.getElementById("wr-print-dynamic-page");
      var btnP = document.getElementById("wr-print-orient-portrait");
      var btnL = document.getElementById("wr-print-orient-landscape");
      function setPageSize(css) {
        dynamic.textContent = "@page { size: " + css + "; margin: 10mm; }";
      }
      function syncButtons(orientation) {
        var isP = orientation === "portrait";
        btnP.setAttribute("aria-pressed", isP ? "true" : "false");
        btnL.setAttribute("aria-pressed", isP ? "false" : "true");
        btnP.classList.toggle("wr-print-orient-active", isP);
        btnL.classList.toggle("wr-print-orient-active", !isP);
      }
      btnP.addEventListener("click", function () {
        setPageSize(${JSON.stringify(printPageSizeCss("portrait"))});
        syncButtons("portrait");
      });
      btnL.addEventListener("click", function () {
        setPageSize(${JSON.stringify(printPageSizeCss("landscape"))});
        syncButtons("landscape");
      });
      document.getElementById("wr-print-run").addEventListener("click", function () {
        w.focus();
        w.print();
      });
      document.getElementById("wr-print-close-window").addEventListener("click", function () {
        w.close();
      });
    })();
  `;
  doc.body.appendChild(script);
}

function getTeamNameColor(scoreA, scoreB, side) {
  const hasBothScores = typeof scoreA === "number" && typeof scoreB === "number";
  if (!hasBothScores || !side) return "text.primary";
  if (scoreA === scoreB) return "warning.main";
  if (side === "A") return scoreA > scoreB ? "success.main" : "error.main";
  return scoreB > scoreA ? "success.main" : "error.main";
}
function TournamentMatchesPlanPanel({
  tournament,
  matches,
  matchesLoading,
  matchesError,
  onRetryMatches,
  scheduleTableDayTimestamps,
  parseJerseyInfo,
  jerseyValueToNounLabel,
  getMatchDayTimestamp,
  getScheduleDayLabel,
  openAddMatchDialog,
  openNewDayTable,
  openEditMatchDialog,
  setMatchDayToDelete,
  deleteMatchDayLoading,
  matchDayToDelete,
  isDayOutOfRange
}) {
  const panelRef = useRef(null);
  const tournamentDateRangeLabel = formatDateRangePl(tournament.startDate, tournament.endDate);
  function handlePrintPlan() {
    if (!panelRef.current) return;
    printElementAsPdf(`Plan rozgrywek - ${tournament.name}`, panelRef.current, {
      tournamentDateRange: tournamentDateRangeLabel
    });
  }
  return /* @__PURE__ */ jsxs(
    Paper,
    {
      ref: panelRef,
      sx: {
        py: 4,
        px: 2,
        borderRadius: 3,
        bgcolor: "background.default",
        alignSelf: "stretch",
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box"
      },
      children: [
        /* @__PURE__ */ jsx(Typography, { className: "wr-print-duplicate-title", variant: "h6", sx: { fontWeight: "bold", mb: 3 }, children: "Plan Rozgrywek" }),
        matchesLoading ? /* @__PURE__ */ jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 5 }, children: /* @__PURE__ */ jsx(CircularProgress, { size: 24 }) }) : matchesError ? /* @__PURE__ */ jsx(DataLoadAlert, { message: matchesError, onRetry: onRetryMatches }) : scheduleTableDayTimestamps.length === 0 ? /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              color: "text.secondary",
              fontStyle: "italic",
              textAlign: "center",
              py: 5,
              border: "2px dashed",
              borderColor: "divider",
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2
            },
            children: [
              /* @__PURE__ */ jsxs(Typography, { children: [
                "Brak zaplanowanych meczów.",
                /* @__PURE__ */ jsx("br", {}),
                "Dodaj nowy mecz do planu."
              ] }),
              /* @__PURE__ */ jsx(Box, { sx: { display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }, children: /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: () => openAddMatchDialog(), disabled: tournament.teams.length < 2, children: "Dodaj" }) })
            ]
          }
        ) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(Box, { className: "wr-print-hide", sx: { display: "flex", justifyContent: "flex-start", mb: 2, gap: 2 }, children: [
            /* @__PURE__ */ jsx(Button, { variant: "outlined", onClick: openNewDayTable, disabled: tournament.teams.length < 2, children: "Nowy dzień" }),
            /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: handlePrintPlan, children: "Wydrukuj" })
          ] }),
          /* @__PURE__ */ jsx(Box, { sx: { display: "flex", flexDirection: "column", alignItems: "stretch", gap: 5, width: "100%" }, children: scheduleTableDayTimestamps.map((dayTimestamp) => {
            const dayMatches = matches.filter((m) => getMatchDayTimestamp(m.scheduledAt) === dayTimestamp);
            const dayLabel = getScheduleDayLabel(dayTimestamp);
            const dayHighlight = isDayOutOfRange?.(dayTimestamp) ?? false;
            return /* @__PURE__ */ jsxs(
              Box,
              {
                sx: {
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: "stretch",
                  maxWidth: "100%",
                  width: "100%",
                  boxSizing: "border-box",
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "rgba(212, 212, 212, 0.7)",
                  borderRadius: 3,
                  boxShadow: "0 2px 10px rgba(144, 161, 185, 0.12)",
                  p: 2.5
                },
                children: [
                  /* @__PURE__ */ jsx(
                    Typography,
                    {
                      variant: "h6",
                      sx: {
                        fontWeight: 900,
                        mb: 2,
                        ...dayHighlight ? {
                          color: "common.white",
                          bgcolor: "error.main",
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                          display: "inline-block"
                        } : {}
                      },
                      children: dayLabel
                    }
                  ),
                  dayMatches.length === 0 ? /* @__PURE__ */ jsxs(
                    Box,
                    {
                      sx: {
                        color: "text.secondary",
                        fontStyle: "italic",
                        textAlign: "center",
                        py: 4,
                        border: "2px dashed",
                        borderColor: "divider",
                        borderRadius: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                        width: "fit-content",
                        maxWidth: "100%",
                        alignSelf: "center",
                        minWidth: { xs: "min(100%, 280px)", sm: 320 }
                      },
                      children: [
                        /* @__PURE__ */ jsx(Typography, { children: "Brak zaplanowanych meczów w tym dniu." }),
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "contained",
                            onClick: () => openAddMatchDialog(dayTimestamp),
                            disabled: tournament.teams.length < 2,
                            children: "Dodaj mecz"
                          }
                        )
                      ]
                    }
                  ) : /* @__PURE__ */ jsx(
                    TableContainer,
                    {
                      component: Paper,
                      sx: {
                        borderRadius: 2,
                        width: "100%",
                        maxWidth: "100%",
                        overflowX: "auto",
                        boxShadow: "none",
                        border: "1px solid",
                        borderColor: "rgba(212, 212, 212, 0.55)"
                      },
                      children: /* @__PURE__ */ jsxs(
                        Table,
                        {
                          size: "small",
                          "aria-label": `Tabela planu rozgrywek: ${dayLabel}`,
                          sx: {
                            tableLayout: "auto",
                            width: "100%",
                            "& .MuiTableCell-root": {
                              px: 1,
                              py: 0.5,
                              borderBottom: "none"
                            }
                          },
                          children: [
                            /* @__PURE__ */ jsx(
                              TableHead,
                              {
                                sx: {
                                  bgcolor: "rgba(75, 168, 222, 0.22)",
                                  "& .MuiTableCell-root": {
                                    whiteSpace: "nowrap",
                                    fontWeight: 700,
                                    color: "text.primary",
                                    py: 0.5
                                  }
                                },
                                children: /* @__PURE__ */ jsxs(TableRow, { children: [
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Drużyna A" }),
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Punkty" }),
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Start" }),
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Koniec" }),
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Punkty" }),
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Drużyna B" }),
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Boisko" }),
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Koszulki" })
                                ] })
                              }
                            ),
                            /* @__PURE__ */ jsx(TableBody, { children: dayMatches.map((m) => {
                              const teamAName = tournament.teams.find((t) => t.id === m.teamAId)?.name ?? "—";
                              const teamBName = tournament.teams.find((t) => t.id === m.teamBId)?.name ?? "—";
                              const startD = new Date(m.scheduledAt);
                              const endD = new Date(startD.getTime() + MATCH_DURATION_MS);
                              const startTime = !Number.isNaN(startD.getTime()) ? startD.toLocaleTimeString("pl-PL", {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: false
                              }) : "—";
                              const endTime = !Number.isNaN(endD.getTime()) ? endD.toLocaleTimeString("pl-PL", {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: false
                              }) : "—";
                              const { teamA: jerseyA, teamB: jerseyB } = parseJerseyInfo(m.jerseyInfo);
                              return /* @__PURE__ */ jsxs(
                                TableRow,
                                {
                                  sx: {
                                    "&:not(:last-of-type) .MuiTableCell-root": {
                                      borderBottom: "1px solid",
                                      borderBottomColor: "rgba(212, 212, 212, 0.65)"
                                    }
                                  },
                                  children: [
                                    /* @__PURE__ */ jsx(
                                      TableCell,
                                      {
                                        align: "center",
                                        sx: { fontWeight: 600, color: getTeamNameColor(m.scoreA, m.scoreB, "A") },
                                        children: teamAName
                                      }
                                    ),
                                    /* @__PURE__ */ jsx(TableCell, { align: "center", sx: { fontSize: "1.4rem" }, children: m.scoreA ?? "—" }),
                                    /* @__PURE__ */ jsx(TableCell, { align: "center", children: startTime }),
                                    /* @__PURE__ */ jsx(TableCell, { align: "center", children: endTime }),
                                    /* @__PURE__ */ jsx(TableCell, { align: "center", sx: { fontSize: "1.4rem" }, children: m.scoreB ?? "—" }),
                                    /* @__PURE__ */ jsx(
                                      TableCell,
                                      {
                                        align: "center",
                                        sx: { fontWeight: 600, color: getTeamNameColor(m.scoreA, m.scoreB, "B") },
                                        children: teamBName
                                      }
                                    ),
                                    /* @__PURE__ */ jsx(TableCell, { align: "center", children: m.court ?? "—" }),
                                    /* @__PURE__ */ jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsx(
                                      Box,
                                      {
                                        sx: {
                                          display: "flex",
                                          flexDirection: "column",
                                          alignItems: "center"
                                        },
                                        children: /* @__PURE__ */ jsx(
                                          Typography,
                                          {
                                            variant: "body2",
                                            component: "div",
                                            sx: { textAlign: "left", whiteSpace: "pre-line" },
                                            children: `A: ${jerseyValueToNounLabel(jerseyA)}
B: ${jerseyValueToNounLabel(jerseyB)}`
                                          }
                                        )
                                      }
                                    ) })
                                  ]
                                },
                                m.id
                              );
                            }) })
                          ]
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxs(Box, { className: "wr-print-hide", sx: { display: "flex", justifyContent: "flex-start", mt: 2, gap: 2 }, children: [
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        variant: "outlined",
                        color: "primary",
                        onClick: () => openEditMatchDialog(dayMatches),
                        disabled: dayMatches.length === 0,
                        children: "Edytuj"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        variant: "outlined",
                        color: "error",
                        onClick: () => setMatchDayToDelete(dayTimestamp),
                        disabled: deleteMatchDayLoading && matchDayToDelete === dayTimestamp,
                        children: "Usuń"
                      }
                    )
                  ] })
                ]
              },
              dayTimestamp
            );
          }) })
        ] })
      ]
    }
  );
}

const refereeSelectSx = {
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 1.25,
    fontSize: "0.875rem",
    pt: 1.25,
    pb: 0.5,
    px: 1,
    minHeight: "unset",
    boxSizing: "border-box",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  "& .MuiOutlinedInput-notchedOutline": {
    top: 0
  },
  "@media print": {
    "& .MuiOutlinedInput-notchedOutline": {
      border: 0
    },
    "& .MuiSelect-icon": {
      display: "none"
    },
    "& .MuiSelect-select": {
      pr: 1
    }
  }
};
function roleToPayloadKey(role) {
  switch (role) {
    case "REFEREE_1":
      return "referee1Id";
    case "REFEREE_2":
      return "referee2Id";
    case "TABLE_PENALTY":
      return "tablePenaltyId";
    case "TABLE_CLOCK":
      return "tableClockId";
    default: {
      const _exhaustive = role;
      return _exhaustive;
    }
  }
}
function TournamentRefereePlanPanel({
  tournament,
  matches,
  refereePlanByMatchId,
  refereePlanLoading,
  refereePlanError,
  onRetryRefereePlan,
  scheduleTableDayTimestamps,
  getMatchDayTimestamp,
  getScheduleDayLabel,
  openAddRefereePlanDialog,
  personDisplayName,
  isDayOutOfRange
}) {
  const panelRef = useRef(null);
  const queryClient = useQueryClient();
  const [inlineSaveError, setInlineSaveError] = useState(null);
  const savingMatchIds = useMemo(() => /* @__PURE__ */ new Set(), []);
  const [, forceRerender] = useState(0);
  const inlineSaveMutation = useMutation({
    mutationFn: async (args) => {
      const payload = {
        teamAId: args.match.teamAId,
        teamBId: args.match.teamBId,
        scheduledAt: args.match.scheduledAt,
        court: args.match.court
      };
      Object.keys(args.nextAssignments).forEach((role) => {
        const key = roleToPayloadKey(role);
        const value = args.nextAssignments[role];
        payload[key] = typeof value === "string" && value.trim().length > 0 ? value : void 0;
      });
      return updateTournamentRefereePlanEntry(tournament.id, args.match.id, payload);
    },
    onSuccess: async () => {
      setInlineSaveError(null);
      await queryClient.invalidateQueries({ queryKey: queryKeys.tournaments.refereePlan(tournament.id) });
    },
    onError: (e) => {
      setInlineSaveError(e instanceof Error ? e.message : "Nie udało się zapisać planu sędziów");
    }
  });
  const tournamentDateRangeLabel = formatDateRangePl(tournament.startDate, tournament.endDate);
  function handlePrintPlan() {
    if (!panelRef.current) return;
    printElementAsPdf(`Plan sędziów - ${tournament.name}`, panelRef.current, {
      tournamentDateRange: tournamentDateRangeLabel
    });
  }
  return /* @__PURE__ */ jsxs(
    Paper,
    {
      ref: panelRef,
      sx: {
        py: 4,
        px: 2,
        borderRadius: 3,
        bgcolor: "background.default",
        alignSelf: "stretch",
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box"
      },
      children: [
        /* @__PURE__ */ jsxs(Box, { className: "wr-print-duplicate-title", sx: { display: "flex", alignItems: "center", gap: 2, mb: 3 }, children: [
          /* @__PURE__ */ jsx(
            Box,
            {
              sx: {
                bgcolor: "warning.main",
                p: 1,
                borderRadius: 2,
                color: "warning.contrastText"
              },
              children: /* @__PURE__ */ jsx(Typography, { component: "div", sx: { fontWeight: 900 }, children: "SJ" })
            }
          ),
          /* @__PURE__ */ jsx(Typography, { variant: "h6", sx: { fontWeight: "bold" }, children: "Plan Sędziów" })
        ] }),
        refereePlanLoading ? /* @__PURE__ */ jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 5 }, children: /* @__PURE__ */ jsx(CircularProgress, { size: 24 }) }) : refereePlanError ? /* @__PURE__ */ jsx(DataLoadAlert, { message: refereePlanError, onRetry: onRetryRefereePlan }) : scheduleTableDayTimestamps.length === 0 ? /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              color: "text.secondary",
              fontStyle: "italic",
              textAlign: "center",
              py: 5,
              border: "2px dashed",
              borderColor: "divider",
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2
            },
            children: [
              /* @__PURE__ */ jsxs(Typography, { children: [
                "Brak zaplanowanych pozycji sędziów.",
                /* @__PURE__ */ jsx("br", {}),
                "Dodaj nowy wpis do planu."
              ] }),
              /* @__PURE__ */ jsx(Box, { sx: { display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }, children: /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "contained",
                  onClick: () => openAddRefereePlanDialog(),
                  disabled: tournament.teams.length < 2 || matches.length === 0,
                  children: "Dodaj"
                }
              ) })
            ]
          }
        ) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Box, { className: "wr-print-hide", sx: { display: "flex", justifyContent: "flex-start", mb: 2, gap: 2 }, children: /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: handlePrintPlan, children: "Wydrukuj" }) }),
          inlineSaveError ? /* @__PURE__ */ jsx(Alert, { className: "wr-print-hide", severity: "error", sx: { mb: 2 }, children: inlineSaveError }) : null,
          /* @__PURE__ */ jsx(Box, { sx: { display: "flex", flexDirection: "column", alignItems: "stretch", gap: 5, width: "100%" }, children: scheduleTableDayTimestamps.map((dayTimestamp) => {
            const dayMatches = matches.filter((m) => getMatchDayTimestamp(m.scheduledAt) === dayTimestamp);
            const dayLabel = getScheduleDayLabel(dayTimestamp);
            const dayHighlight = isDayOutOfRange?.(dayTimestamp) ?? false;
            return /* @__PURE__ */ jsxs(
              Box,
              {
                sx: {
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: "stretch",
                  maxWidth: "100%",
                  width: "100%",
                  boxSizing: "border-box",
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "rgba(212, 212, 212, 0.7)",
                  borderRadius: 3,
                  boxShadow: "0 2px 10px rgba(144, 161, 185, 0.12)",
                  p: 2.5
                },
                children: [
                  /* @__PURE__ */ jsx(
                    Typography,
                    {
                      variant: "h6",
                      sx: {
                        fontWeight: 900,
                        mb: 2,
                        ...dayHighlight ? {
                          color: "common.white",
                          bgcolor: "error.main",
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                          display: "inline-block"
                        } : {}
                      },
                      children: dayLabel
                    }
                  ),
                  dayMatches.length === 0 ? /* @__PURE__ */ jsxs(
                    Box,
                    {
                      sx: {
                        color: "text.secondary",
                        fontStyle: "italic",
                        textAlign: "center",
                        py: 4,
                        border: "2px dashed",
                        borderColor: "divider",
                        borderRadius: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                        width: "fit-content",
                        maxWidth: "100%",
                        alignSelf: "center",
                        minWidth: { xs: "min(100%, 280px)", sm: 320 }
                      },
                      children: [
                        /* @__PURE__ */ jsx(Typography, { children: "Brak zaplanowanych meczów w tym dniu." }),
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            variant: "contained",
                            onClick: () => openAddRefereePlanDialog(dayTimestamp),
                            disabled: tournament.teams.length < 2,
                            children: "Dodaj wpis sędziów"
                          }
                        )
                      ]
                    }
                  ) : /* @__PURE__ */ jsx(
                    TableContainer,
                    {
                      component: Paper,
                      sx: {
                        borderRadius: 2,
                        width: "100%",
                        maxWidth: "100%",
                        overflowX: "auto",
                        boxShadow: "none",
                        border: "1px solid",
                        borderColor: "rgba(212, 212, 212, 0.55)"
                      },
                      children: /* @__PURE__ */ jsxs(
                        Table,
                        {
                          size: "small",
                          "aria-label": `Tabela planu sędziów: ${dayLabel}`,
                          sx: {
                            tableLayout: "auto",
                            width: "100%",
                            "& .MuiTableCell-root": {
                              px: 1,
                              borderBottom: "none"
                            }
                          },
                          children: [
                            /* @__PURE__ */ jsx(
                              TableHead,
                              {
                                sx: {
                                  bgcolor: "rgba(225, 113, 0, 0.18)",
                                  "& .MuiTableCell-root": {
                                    fontWeight: 700,
                                    color: "text.primary",
                                    py: 1.25
                                  }
                                },
                                children: /* @__PURE__ */ jsxs(TableRow, { children: [
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Drużyna A" }),
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Start" }),
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Koniec" }),
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Drużyna B" }),
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Boisko" }),
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Sędzia 1" }),
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Sędzia 2" }),
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Stolik kar" }),
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Zagary" })
                                ] })
                              }
                            ),
                            /* @__PURE__ */ jsx(TableBody, { children: dayMatches.map((m) => {
                              const teamAName = tournament.teams.find((t) => t.id === m.teamAId)?.name ?? "—";
                              const teamBName = tournament.teams.find((t) => t.id === m.teamBId)?.name ?? "—";
                              const startD = new Date(m.scheduledAt);
                              const endD = new Date(startD.getTime() + MATCH_DURATION_MS);
                              const startTime = !Number.isNaN(startD.getTime()) ? startD.toLocaleTimeString("pl-PL", {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: false
                              }) : "—";
                              const endTime = !Number.isNaN(endD.getTime()) ? endD.toLocaleTimeString("pl-PL", {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: false
                              }) : "—";
                              const assignments = refereePlanByMatchId[m.id] ?? {};
                              const ref1 = assignments.REFEREE_1;
                              const ref2 = assignments.REFEREE_2;
                              const tablePenalty = assignments.TABLE_PENALTY;
                              const tableClock = assignments.TABLE_CLOCK;
                              const isSaving = savingMatchIds.has(m.id);
                              const refereesLocked = matchHasRecordedResult(m);
                              const refereeLockTooltip = refereesLocked ? "Wynik meczu jest wpisany. Usuń wynik w planie meczów, aby zmienić sędziów." : "";
                              const setRole = async (role, refereeId) => {
                                if (isSaving || refereesLocked) return;
                                setInlineSaveError(null);
                                savingMatchIds.add(m.id);
                                forceRerender((x) => x + 1);
                                const nextAssignments = {
                                  REFEREE_1: ref1 ?? "",
                                  REFEREE_2: ref2 ?? "",
                                  TABLE_PENALTY: tablePenalty ?? "",
                                  TABLE_CLOCK: tableClock ?? "",
                                  [role]: refereeId
                                };
                                try {
                                  await inlineSaveMutation.mutateAsync({ match: m, nextAssignments });
                                } finally {
                                  savingMatchIds.delete(m.id);
                                  forceRerender((x) => x + 1);
                                }
                              };
                              const optionDisabled = (candidateId, currentValue, conflicts) => candidateId !== currentValue && conflicts.includes(candidateId);
                              return /* @__PURE__ */ jsxs(
                                TableRow,
                                {
                                  sx: {
                                    "&:not(:last-of-type) .MuiTableCell-root": {
                                      borderBottom: "1px solid",
                                      borderBottomColor: "rgba(212, 212, 212, 0.65)"
                                    }
                                  },
                                  children: [
                                    /* @__PURE__ */ jsx(TableCell, { align: "center", sx: { fontWeight: 600 }, children: teamAName }),
                                    /* @__PURE__ */ jsx(TableCell, { align: "center", children: startTime }),
                                    /* @__PURE__ */ jsx(TableCell, { align: "center", children: endTime }),
                                    /* @__PURE__ */ jsx(TableCell, { align: "center", sx: { fontWeight: 600 }, children: teamBName }),
                                    /* @__PURE__ */ jsx(TableCell, { align: "center", children: m.court ?? "—" }),
                                    /* @__PURE__ */ jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsx(Tooltip, { title: refereeLockTooltip, disableHoverListener: !refereesLocked, children: /* @__PURE__ */ jsx("span", { style: { display: "block", width: "100%" }, children: /* @__PURE__ */ jsxs(
                                      TextField,
                                      {
                                        select: true,
                                        size: "small",
                                        sx: refereeSelectSx,
                                        value: ref1 ?? "",
                                        onChange: (e) => void setRole("REFEREE_1", String(e.target.value)),
                                        disabled: isSaving || refereesLocked,
                                        fullWidth: true,
                                        children: [
                                          /* @__PURE__ */ jsx(MenuItem, { value: "", children: "—" }),
                                          tournament.referees.map((r) => /* @__PURE__ */ jsx(
                                            MenuItem,
                                            {
                                              value: r.id,
                                              disabled: optionDisabled(r.id, ref1, [
                                                ref2 ?? "",
                                                tablePenalty ?? "",
                                                tableClock ?? ""
                                              ]),
                                              children: personDisplayName(r)
                                            },
                                            r.id
                                          ))
                                        ]
                                      }
                                    ) }) }) }),
                                    /* @__PURE__ */ jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsx(Tooltip, { title: refereeLockTooltip, disableHoverListener: !refereesLocked, children: /* @__PURE__ */ jsx("span", { style: { display: "block", width: "100%" }, children: /* @__PURE__ */ jsxs(
                                      TextField,
                                      {
                                        select: true,
                                        size: "small",
                                        sx: refereeSelectSx,
                                        value: ref2 ?? "",
                                        onChange: (e) => void setRole("REFEREE_2", String(e.target.value)),
                                        disabled: isSaving || refereesLocked,
                                        fullWidth: true,
                                        children: [
                                          /* @__PURE__ */ jsx(MenuItem, { value: "", children: "—" }),
                                          tournament.referees.map((r) => /* @__PURE__ */ jsx(
                                            MenuItem,
                                            {
                                              value: r.id,
                                              disabled: optionDisabled(r.id, ref2, [
                                                ref1 ?? "",
                                                tablePenalty ?? "",
                                                tableClock ?? ""
                                              ]),
                                              children: personDisplayName(r)
                                            },
                                            r.id
                                          ))
                                        ]
                                      }
                                    ) }) }) }),
                                    /* @__PURE__ */ jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsx(Tooltip, { title: refereeLockTooltip, disableHoverListener: !refereesLocked, children: /* @__PURE__ */ jsx("span", { style: { display: "block", width: "100%" }, children: /* @__PURE__ */ jsxs(
                                      TextField,
                                      {
                                        select: true,
                                        size: "small",
                                        sx: refereeSelectSx,
                                        value: tablePenalty ?? "",
                                        onChange: (e) => void setRole("TABLE_PENALTY", String(e.target.value)),
                                        disabled: isSaving || refereesLocked,
                                        fullWidth: true,
                                        children: [
                                          /* @__PURE__ */ jsx(MenuItem, { value: "", children: "—" }),
                                          tournament.referees.map((r) => /* @__PURE__ */ jsx(
                                            MenuItem,
                                            {
                                              value: r.id,
                                              disabled: optionDisabled(r.id, tablePenalty, [
                                                ref1 ?? "",
                                                ref2 ?? "",
                                                tableClock ?? ""
                                              ]),
                                              children: personDisplayName(r)
                                            },
                                            r.id
                                          ))
                                        ]
                                      }
                                    ) }) }) }),
                                    /* @__PURE__ */ jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsx(Tooltip, { title: refereeLockTooltip, disableHoverListener: !refereesLocked, children: /* @__PURE__ */ jsx("span", { style: { display: "block", width: "100%" }, children: /* @__PURE__ */ jsxs(
                                      TextField,
                                      {
                                        select: true,
                                        size: "small",
                                        sx: refereeSelectSx,
                                        value: tableClock ?? "",
                                        onChange: (e) => void setRole("TABLE_CLOCK", String(e.target.value)),
                                        disabled: isSaving || refereesLocked,
                                        fullWidth: true,
                                        children: [
                                          /* @__PURE__ */ jsx(MenuItem, { value: "", children: "—" }),
                                          tournament.referees.map((r) => /* @__PURE__ */ jsx(
                                            MenuItem,
                                            {
                                              value: r.id,
                                              disabled: optionDisabled(r.id, tableClock, [
                                                ref1 ?? "",
                                                ref2 ?? "",
                                                tablePenalty ?? ""
                                              ]),
                                              children: personDisplayName(r)
                                            },
                                            r.id
                                          ))
                                        ]
                                      }
                                    ) }) }) })
                                  ]
                                },
                                m.id
                              );
                            }) })
                          ]
                        }
                      )
                    }
                  )
                ]
              },
              dayTimestamp
            );
          }) })
        ] })
      ]
    }
  );
}

function toDayTimestamp$1(iso) {
  const d = new Date(iso);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}
function formatClassification(value) {
  if (value == null) return "—";
  return value.toFixed(1);
}
function TournamentClassifierPlanPanel({
  tournament,
  rows,
  loading,
  error,
  onRetry,
  scheduleTableDayTimestamps,
  getScheduleDayLabel,
  openAddDialog,
  openNewDayTable,
  canCreateNewDay,
  hasMatches,
  openEditDialog,
  setDayToDelete,
  deleteDayLoading,
  dayToDelete,
  isDayOutOfRange
}) {
  const panelRef = useRef(null);
  const rowsByDay = useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const row of rows) {
      const day = toDayTimestamp$1(row.scheduledAt);
      const current = map.get(day) ?? [];
      current.push(row);
      map.set(day, current);
    }
    return map;
  }, [rows]);
  const players = useMemo(() => tournament.teams.flatMap((t) => t.players ?? []), [tournament.teams]);
  const playerTeamNameById = useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const team of tournament.teams) {
      for (const player of team.players ?? []) {
        map.set(player.id, team.name);
      }
    }
    return map;
  }, [tournament.teams]);
  const canAddEntries = players.length > 0;
  function handlePrint() {
    if (!panelRef.current) return;
    printElementAsPdf(`Plan klasyfikatorów - ${tournament.name}`, panelRef.current);
  }
  return /* @__PURE__ */ jsxs(
    Paper,
    {
      ref: panelRef,
      sx: {
        py: 4,
        px: 2,
        borderRadius: 3,
        bgcolor: "background.default",
        alignSelf: { xs: "stretch", lg: "flex-start" },
        width: { xs: "100%", lg: "fit-content" },
        maxWidth: "100%",
        boxSizing: "border-box"
      },
      children: [
        /* @__PURE__ */ jsxs(Box, { className: "wr-print-duplicate-title", sx: { display: "flex", alignItems: "center", gap: 2, mb: 3 }, children: [
          /* @__PURE__ */ jsx(Box, { sx: { bgcolor: "info.light", p: 1, borderRadius: 2, color: "info.dark" }, children: /* @__PURE__ */ jsx(Typography, { component: "div", sx: { fontWeight: 900 }, children: "KL" }) }),
          /* @__PURE__ */ jsx(Typography, { variant: "h6", sx: { fontWeight: "bold" }, children: "Plan Klasyfikatorów" })
        ] }),
        loading ? /* @__PURE__ */ jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 5 }, children: /* @__PURE__ */ jsx(CircularProgress, { size: 24 }) }) : error ? /* @__PURE__ */ jsx(DataLoadAlert, { message: error, onRetry }) : scheduleTableDayTimestamps.length === 0 ? /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              color: "text.secondary",
              fontStyle: "italic",
              textAlign: "center",
              py: 5,
              border: "2px dashed",
              borderColor: "divider",
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2
            },
            children: [
              /* @__PURE__ */ jsx(Typography, { children: "Brak zaplanowanych badań klasyfikacyjnych." }),
              /* @__PURE__ */ jsx(Box, { sx: { display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }, children: /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: () => openAddDialog(), disabled: !canAddEntries, children: "Dodaj" }) })
            ]
          }
        ) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(Box, { className: "wr-print-hide", sx: { display: "flex", justifyContent: "flex-start", mb: 2, gap: 2 }, children: [
            /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: () => openAddDialog(), disabled: !canAddEntries, children: "Dodaj" }),
            hasMatches ? null : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(Button, { variant: "outlined", onClick: openNewDayTable, disabled: !canAddEntries || !canCreateNewDay, children: "Nowy dzień" }),
              /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: handlePrint, children: "Wydrukuj" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Box, { sx: { display: "flex", flexDirection: "column", alignItems: "stretch", gap: 5, width: "100%" }, children: scheduleTableDayTimestamps.map((dayTimestamp) => {
            const dayRows = rowsByDay.get(dayTimestamp) ?? [];
            const dayLabel = getScheduleDayLabel(dayTimestamp);
            const dayHighlight = isDayOutOfRange?.(dayTimestamp) ?? false;
            return /* @__PURE__ */ jsxs(
              Box,
              {
                sx: {
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: { xs: "stretch", lg: "flex-start" },
                  maxWidth: "100%",
                  width: { xs: "100%", lg: "fit-content" },
                  boxSizing: "border-box",
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "rgba(212, 212, 212, 0.7)",
                  borderRadius: 3,
                  boxShadow: "0 2px 10px rgba(144, 161, 185, 0.12)",
                  p: 2.5
                },
                children: [
                  /* @__PURE__ */ jsx(
                    Typography,
                    {
                      variant: "h6",
                      sx: {
                        fontWeight: 900,
                        mb: 2,
                        ...dayHighlight ? {
                          color: "common.white",
                          bgcolor: "error.main",
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                          display: "inline-block"
                        } : {}
                      },
                      children: dayLabel
                    }
                  ),
                  dayRows.length === 0 ? /* @__PURE__ */ jsxs(
                    Box,
                    {
                      sx: {
                        color: "text.secondary",
                        fontStyle: "italic",
                        textAlign: "center",
                        py: 4,
                        border: "2px dashed",
                        borderColor: "divider",
                        borderRadius: 2,
                        width: "fit-content",
                        maxWidth: "100%",
                        alignSelf: "center",
                        minWidth: { xs: "min(100%, 280px)", sm: 320 }
                      },
                      children: [
                        /* @__PURE__ */ jsx(Typography, { children: "Brak zaplanowanych badań w tym dniu." }),
                        /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: () => openAddDialog(dayTimestamp), sx: { mt: 2 }, children: "Dodaj badanie" })
                      ]
                    }
                  ) : /* @__PURE__ */ jsx(
                    TableContainer,
                    {
                      component: Paper,
                      sx: {
                        borderRadius: 2,
                        width: "fit-content",
                        maxWidth: "100%",
                        overflowX: "auto",
                        boxShadow: "none",
                        border: "1px solid",
                        borderColor: "rgba(212, 212, 212, 0.55)"
                      },
                      children: /* @__PURE__ */ jsxs(
                        Table,
                        {
                          size: "small",
                          "aria-label": `Tabela planu klasyfikatorów: ${dayLabel}`,
                          sx: {
                            tableLayout: "auto",
                            width: "max-content",
                            "& .MuiTableCell-root": {
                              px: 1,
                              borderBottom: "none"
                            }
                          },
                          children: [
                            /* @__PURE__ */ jsx(
                              TableHead,
                              {
                                sx: {
                                  bgcolor: "rgba(75, 168, 222, 0.22)",
                                  "& .MuiTableCell-root": {
                                    fontWeight: 700,
                                    color: "text.primary",
                                    py: 1.25
                                  }
                                },
                                children: /* @__PURE__ */ jsxs(TableRow, { children: [
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Zawodnik" }),
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Start badania" }),
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Koniec badania" }),
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Klasyfikacja" }),
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Obserwacja" }),
                                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Drużyna" })
                                ] })
                              }
                            ),
                            /* @__PURE__ */ jsx(TableBody, { children: dayRows.map((row) => {
                              const player = players.find((p) => p.id === row.playerId);
                              const teamName = playerTeamNameById.get(row.playerId);
                              const startDate = new Date(row.scheduledAt);
                              const endDate = new Date(row.endsAt);
                              return /* @__PURE__ */ jsxs(
                                TableRow,
                                {
                                  sx: {
                                    "&:not(:last-of-type) .MuiTableCell-root": {
                                      borderBottom: "1px solid",
                                      borderBottomColor: "rgba(212, 212, 212, 0.65)"
                                    }
                                  },
                                  children: [
                                    /* @__PURE__ */ jsx(TableCell, { align: "center", sx: { fontWeight: 600 }, children: player ? `${player.firstName} ${player.lastName}` : "—" }),
                                    /* @__PURE__ */ jsx(TableCell, { align: "center", children: startDate.toLocaleTimeString("pl-PL", {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                      hour12: false
                                    }) }),
                                    /* @__PURE__ */ jsx(TableCell, { align: "center", children: endDate.toLocaleTimeString("pl-PL", {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                      hour12: false
                                    }) }),
                                    /* @__PURE__ */ jsx(TableCell, { align: "center", children: formatClassification(row.classification) }),
                                    /* @__PURE__ */ jsx(TableCell, { align: "center", children: row.observation ? "Tak" : "Nie" }),
                                    /* @__PURE__ */ jsx(TableCell, { align: "center", children: teamName ?? "—" })
                                  ]
                                },
                                row.examId
                              );
                            }) })
                          ]
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxs(Box, { className: "wr-print-hide", sx: { display: "flex", justifyContent: "flex-start", mt: 2, gap: 2 }, children: [
                    /* @__PURE__ */ jsx(Button, { variant: "outlined", onClick: () => openEditDialog(dayTimestamp), children: "Edytuj" }),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        variant: "outlined",
                        color: "error",
                        onClick: () => setDayToDelete(dayTimestamp),
                        disabled: deleteDayLoading && dayToDelete === dayTimestamp,
                        children: "Usuń dzień"
                      }
                    )
                  ] })
                ]
              },
              dayTimestamp
            );
          }) })
        ] })
      ]
    }
  );
}

function TournamentTeamsPanel({
  tournament,
  openAddTeamsDialog,
  openRemoveTeamDialog,
  openEditTeamPlayersDialog,
  removeTeamLoading,
  teamToRemove
}) {
  return /* @__PURE__ */ jsxs(Paper, { sx: { p: 3, borderRadius: 3, maxWidth: "100%", minWidth: 0, boxSizing: "border-box", height: "100%" }, children: [
    /* @__PURE__ */ jsxs(Typography, { variant: "h6", sx: { fontWeight: "bold", mb: 0.5 }, children: [
      "Drużyny",
      /* @__PURE__ */ jsxs(Box, { component: "span", sx: { fontSize: "0.875rem", fontWeight: 400, color: "text.secondary", ml: 1 }, children: [
        "(",
        tournament.teams.length,
        ")"
      ] })
    ] }),
    tournament.teams.length === 0 ? /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 1.5 }, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "textSecondary", children: "Brak przypisanych drużyn." }),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "contained",
          onClick: openAddTeamsDialog,
          "aria-label": "Dodaj drużyny do turnieju",
          sx: { alignSelf: "flex-start" },
          children: "Dodaj"
        }
      )
    ] }) : /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 1.5 }, children: [
      /* @__PURE__ */ jsx(
        Box,
        {
          sx: {
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "100%",
            minWidth: 0,
            alignItems: "stretch"
          },
          children: tournament.teams.map((team) => /* @__PURE__ */ jsxs(
            Box,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                p: 0.5,
                px: 1,
                borderRadius: 2,
                bgcolor: "background.paper",
                width: "100%",
                minWidth: 0,
                boxSizing: "border-box"
              },
              children: [
                /* @__PURE__ */ jsx(
                  Box,
                  {
                    sx: {
                      width: 32,
                      height: 32,
                      flexShrink: 0,
                      bgcolor: "white",
                      borderRadius: 1,
                      border: "1px solid",
                      borderColor: "divider",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      color: "info.main"
                    },
                    children: team.name[0] ?? "?"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "text",
                    onClick: () => openEditTeamPlayersDialog(team),
                    "aria-label": `Edytuj zawodników drużyny ${team.name}`,
                    sx: {
                      color: "info.main",
                      fontWeight: 500,
                      flex: 1,
                      width: "100%",
                      minWidth: 0,
                      justifyContent: "flex-start",
                      textAlign: "left",
                      whiteSpace: "normal",
                      px: 0,
                      overflowWrap: "anywhere",
                      "&:hover": { color: "info.dark" }
                    },
                    children: team.name
                  }
                ),
                /* @__PURE__ */ jsxs(Typography, { variant: "body2", color: "text.secondary", children: [
                  "(",
                  team.players?.length ?? 0,
                  ")"
                ] }),
                /* @__PURE__ */ jsx(Tooltip, { title: "Usuń drużynę z turnieju", children: /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(
                  IconButton,
                  {
                    "aria-label": `Usuń drużynę ${team.name} z turnieju`,
                    color: "error",
                    onClick: () => openRemoveTeamDialog(team),
                    size: "small",
                    disabled: removeTeamLoading && teamToRemove?.id === team.id,
                    sx: { border: "1px solid", borderColor: "divider", borderRadius: 2, p: 0 },
                    children: /* @__PURE__ */ jsx(Trash2, { size: 18 })
                  }
                ) }) })
              ]
            },
            team.id
          ))
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outlined",
          onClick: openAddTeamsDialog,
          "aria-label": "Dodaj drużyny do turnieju",
          sx: { alignSelf: "flex-start" },
          children: "Dodaj"
        }
      )
    ] })
  ] });
}

function TournamentRefereesPanel({
  tournament,
  personDisplayName,
  openAddRefereesDialog,
  openRemoveRefereeDialog,
  removeRefereeLoading,
  refereeToRemove
}) {
  return /* @__PURE__ */ jsxs(Paper, { sx: { p: 3, borderRadius: 3, maxWidth: "100%", minWidth: 0, boxSizing: "border-box", height: "100%" }, children: [
    /* @__PURE__ */ jsxs(Typography, { variant: "h6", sx: { fontWeight: "bold", mb: 0.5 }, children: [
      "Sędziowie",
      /* @__PURE__ */ jsxs(Box, { component: "span", sx: { fontSize: "0.875rem", fontWeight: 400, color: "text.secondary", ml: 1 }, children: [
        "(",
        tournament.referees.length,
        ")"
      ] })
    ] }),
    tournament.referees.length === 0 ? /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 1.5 }, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "textSecondary", children: "Brak przypisanych sędziów." }),
      /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: openAddRefereesDialog, sx: { alignSelf: "flex-start" }, children: "Dodaj" })
    ] }) : /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 1.5 }, children: [
      /* @__PURE__ */ jsx(
        Box,
        {
          sx: {
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "100%",
            minWidth: 0,
            alignItems: "stretch"
          },
          children: tournament.referees.map((r) => /* @__PURE__ */ jsxs(
            Box,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                p: 0.5,
                px: 1,
                borderRadius: 2,
                bgcolor: "background.paper",
                width: "100%",
                minWidth: 0,
                boxSizing: "border-box"
              },
              children: [
                /* @__PURE__ */ jsx(
                  Box,
                  {
                    sx: {
                      width: 32,
                      height: 32,
                      flexShrink: 0,
                      bgcolor: "white",
                      borderRadius: 1,
                      border: "1px solid",
                      borderColor: "divider",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      color: "primary.main"
                    },
                    children: r.firstName?.[0] ?? "?"
                  }
                ),
                /* @__PURE__ */ jsx(Typography, { sx: { fontWeight: 500, flex: 1, minWidth: 0, overflowWrap: "anywhere" }, children: personDisplayName(r) }),
                /* @__PURE__ */ jsx(Tooltip, { title: "Usuń sędziego z turnieju", children: /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(
                  IconButton,
                  {
                    "aria-label": `Usuń sędziego ${personDisplayName(r)} z turnieju`,
                    color: "error",
                    onClick: () => openRemoveRefereeDialog(r),
                    size: "small",
                    disabled: removeRefereeLoading && refereeToRemove?.id === r.id,
                    sx: { border: "1px solid", borderColor: "divider", borderRadius: 2, p: 0 },
                    children: /* @__PURE__ */ jsx(Trash2, { size: 18 })
                  }
                ) }) })
              ]
            },
            r.id
          ))
        }
      ),
      /* @__PURE__ */ jsx(Button, { variant: "outlined", onClick: openAddRefereesDialog, sx: { alignSelf: "flex-start" }, children: "Dodaj" })
    ] })
  ] });
}

function TournamentClassifiersPanel({
  tournament,
  personDisplayName,
  openAddClassifiersDialog,
  openRemoveClassifierDialog,
  removeClassifierLoading,
  classifierToRemove
}) {
  return /* @__PURE__ */ jsxs(Paper, { sx: { p: 3, borderRadius: 3, maxWidth: "100%", minWidth: 0, boxSizing: "border-box", height: "100%" }, children: [
    /* @__PURE__ */ jsxs(Typography, { variant: "h6", sx: { fontWeight: "bold", mb: 0.5 }, children: [
      "Klasyfikatorzy",
      /* @__PURE__ */ jsxs(Box, { component: "span", sx: { fontSize: "0.875rem", fontWeight: 400, color: "text.secondary", ml: 1 }, children: [
        "(",
        tournament.classifiers.length,
        ")"
      ] })
    ] }),
    tournament.classifiers.length === 0 ? /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 1.5 }, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "textSecondary", children: "Brak przypisanych klasyfikatorów." }),
      /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: openAddClassifiersDialog, sx: { alignSelf: "flex-start" }, children: "Dodaj" })
    ] }) : /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 1.5 }, children: [
      /* @__PURE__ */ jsx(
        Box,
        {
          sx: {
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "100%",
            minWidth: 0,
            alignItems: "stretch"
          },
          children: tournament.classifiers.map((c) => /* @__PURE__ */ jsxs(
            Box,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                p: 0.5,
                px: 1,
                borderRadius: 2,
                bgcolor: "background.paper",
                width: "100%",
                minWidth: 0,
                boxSizing: "border-box"
              },
              children: [
                /* @__PURE__ */ jsx(
                  Box,
                  {
                    sx: {
                      width: 32,
                      height: 32,
                      flexShrink: 0,
                      bgcolor: "white",
                      borderRadius: 1,
                      border: "1px solid",
                      borderColor: "divider",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      color: "primary.main"
                    },
                    children: c.firstName?.[0] ?? "?"
                  }
                ),
                /* @__PURE__ */ jsx(Typography, { sx: { fontWeight: 500, flex: 1, minWidth: 0, overflowWrap: "anywhere" }, children: personDisplayName(c) }),
                /* @__PURE__ */ jsx(Tooltip, { title: "Usuń klasyfikatora z turnieju", children: /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(
                  IconButton,
                  {
                    "aria-label": `Usuń klasyfikatora ${personDisplayName(c)} z turnieju`,
                    color: "error",
                    onClick: () => openRemoveClassifierDialog(c),
                    size: "small",
                    disabled: removeClassifierLoading && classifierToRemove?.id === c.id,
                    sx: { border: "1px solid", borderColor: "divider", borderRadius: 2, p: 0 },
                    children: /* @__PURE__ */ jsx(Trash2, { size: 18 })
                  }
                ) }) })
              ]
            },
            c.id
          ))
        }
      ),
      /* @__PURE__ */ jsx(Button, { variant: "outlined", onClick: openAddClassifiersDialog, sx: { alignSelf: "flex-start" }, children: "Dodaj" })
    ] })
  ] });
}

function muiSelectTextFieldAccessibilityProps(domId) {
  return {
    id: domId,
    slotProps: {
      inputLabel: {
        // Omit invalid label→div association; aria-labelledby handles a11y.
        htmlFor: void 0
      }
    }
  };
}

const computeDraftEndTime = (startTime) => {
  const startMinutes = timeToMinutes(startTime) ?? 0;
  return minutesToTime(startMinutes + MATCH_DURATION_MINUTES);
};
function AddMatchDialog({ addMatch, tournament }) {
  const matchPlanSelectId = useId$1().replace(/:/g, "");
  return /* @__PURE__ */ jsxs(Dialog, { open: addMatch.open, onClose: addMatch.closeDialog, fullWidth: true, maxWidth: "md", disableRestoreFocus: true, children: [
    /* @__PURE__ */ jsxs(
      DialogTitle,
      {
        sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          flexWrap: "wrap"
        },
        children: [
          /* @__PURE__ */ jsx(Typography, { component: "div", variant: "h6", sx: { fontWeight: 900 }, children: "Tworzenie planu rozgrywek" }),
          /* @__PURE__ */ jsx(
            TextField,
            {
              select: true,
              label: "Dzień tygodnia",
              ...muiSelectTextFieldAccessibilityProps(`${matchPlanSelectId}-weekday`),
              value: String(addMatch.dayTimestamp ?? ""),
              onChange: (e) => addMatch.setDayTimestamp(Number(e.target.value)),
              size: "small",
              sx: { minWidth: 220 },
              children: addMatch.options.map((o) => /* @__PURE__ */ jsx(MenuItem, { value: String(o.timestamp), children: o.label }, o.timestamp))
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs(DialogContent, { dividers: true, children: [
      addMatch.error ? /* @__PURE__ */ jsx(Alert, { severity: "error", sx: { mb: 2 }, children: addMatch.error }) : null,
      /* @__PURE__ */ jsxs(Box, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, mb: 2 }, children: [
        /* @__PURE__ */ jsx(
          TextField,
          {
            select: true,
            label: "Drużyna A",
            ...muiSelectTextFieldAccessibilityProps(`${matchPlanSelectId}-team-a`),
            value: addMatch.teamAId,
            onChange: (e) => addMatch.setTeamAId(String(e.target.value)),
            fullWidth: true,
            size: "small",
            children: tournament.teams.map((t) => /* @__PURE__ */ jsx(MenuItem, { value: t.id, children: t.name }, t.id))
          }
        ),
        /* @__PURE__ */ jsx(
          TextField,
          {
            select: true,
            label: "Drużyna B",
            ...muiSelectTextFieldAccessibilityProps(`${matchPlanSelectId}-team-b`),
            value: addMatch.teamBId,
            onChange: (e) => addMatch.setTeamBId(String(e.target.value)),
            fullWidth: true,
            size: "small",
            children: tournament.teams.map((t) => /* @__PURE__ */ jsx(MenuItem, { value: t.id, disabled: t.id === addMatch.teamAId, children: t.name }, t.id))
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        Box,
        {
          sx: {
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "120px 120px 105px 105px 105px" },
            gap: 1.5,
            mb: 2,
            alignItems: "end"
          },
          children: [
            /* @__PURE__ */ jsx(
              TextField,
              {
                type: "time",
                label: "Start",
                value: addMatch.startTime,
                onChange: (e) => addMatch.setStartTime(e.target.value),
                InputLabelProps: { shrink: true },
                size: "small",
                sx: { minWidth: 120 }
              }
            ),
            /* @__PURE__ */ jsx(
              TextField,
              {
                type: "time",
                label: "Koniec",
                value: addMatch.endTime,
                InputLabelProps: { shrink: true },
                InputProps: { readOnly: true },
                size: "small",
                sx: { minWidth: 120 }
              }
            ),
            /* @__PURE__ */ jsxs(
              TextField,
              {
                select: true,
                label: "Boisko",
                ...muiSelectTextFieldAccessibilityProps(`${matchPlanSelectId}-court`),
                value: addMatch.court,
                onChange: (e) => addMatch.setCourt(String(e.target.value)),
                size: "small",
                sx: { minWidth: 105 },
                children: [
                  /* @__PURE__ */ jsx(MenuItem, { value: "1", children: "1" }),
                  /* @__PURE__ */ jsx(MenuItem, { value: "2", children: "2" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              TextField,
              {
                type: "number",
                label: "Wynik A",
                value: addMatch.scoreA,
                onChange: (e) => addMatch.setScoreA(e.target.value),
                InputLabelProps: { shrink: true },
                size: "small",
                sx: { minWidth: 105 }
              }
            ),
            /* @__PURE__ */ jsx(
              TextField,
              {
                type: "number",
                label: "Wynik B",
                value: addMatch.scoreB,
                onChange: (e) => addMatch.setScoreB(e.target.value),
                InputLabelProps: { shrink: true },
                size: "small",
                sx: { minWidth: 105 }
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(Divider, { sx: { mb: 2 } }),
      /* @__PURE__ */ jsx(Typography, { sx: { fontWeight: 900, mb: 1, fontSize: 14 }, children: "Kolory koszulek" }),
      /* @__PURE__ */ jsxs(Box, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }, children: [
        /* @__PURE__ */ jsxs(Box, { children: [
          /* @__PURE__ */ jsx(Typography, { color: "text.secondary", sx: { mb: 1, fontSize: 13 }, children: "Drużyna A" }),
          /* @__PURE__ */ jsxs(
            RadioGroup,
            {
              row: true,
              value: addMatch.jerseyA,
              onChange: (e) => {
                const next = e.target.value;
                addMatch.setJerseyA(next);
                addMatch.setJerseyB(next === "jasne" ? "ciemne" : "jasne");
              },
              children: [
                /* @__PURE__ */ jsx(
                  FormControlLabel,
                  {
                    value: "jasne",
                    control: /* @__PURE__ */ jsx(Radio, { size: "small" }),
                    label: "Jasne",
                    sx: { "& .MuiFormControlLabel-label": { fontSize: 13 } }
                  }
                ),
                /* @__PURE__ */ jsx(
                  FormControlLabel,
                  {
                    value: "ciemne",
                    control: /* @__PURE__ */ jsx(Radio, { size: "small" }),
                    label: "Ciemne",
                    sx: { "& .MuiFormControlLabel-label": { fontSize: 13 } }
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(Box, { children: [
          /* @__PURE__ */ jsx(Typography, { color: "text.secondary", sx: { mb: 1, fontSize: 13 }, children: "Drużyna B" }),
          /* @__PURE__ */ jsxs(
            RadioGroup,
            {
              row: true,
              value: addMatch.jerseyB,
              onChange: (e) => {
                const next = e.target.value;
                addMatch.setJerseyB(next);
                addMatch.setJerseyA(next === "jasne" ? "ciemne" : "jasne");
              },
              children: [
                /* @__PURE__ */ jsx(
                  FormControlLabel,
                  {
                    value: "jasne",
                    control: /* @__PURE__ */ jsx(Radio, { size: "small" }),
                    label: "Jasne",
                    sx: { "& .MuiFormControlLabel-label": { fontSize: 13 } }
                  }
                ),
                /* @__PURE__ */ jsx(
                  FormControlLabel,
                  {
                    value: "ciemne",
                    control: /* @__PURE__ */ jsx(Radio, { size: "small" }),
                    label: "Ciemne",
                    sx: { "& .MuiFormControlLabel-label": { fontSize: 13 } }
                  }
                )
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsx(Button, { onClick: addMatch.closeDialog, disabled: addMatch.loading, children: "Anuluj" }),
      /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: addMatch.submit, disabled: addMatch.loading, children: "Dodaj" })
    ] })
  ] });
}
function EditMatchDialog({
  editMatch,
  tournament,
  matches,
  deleteMatchLoading,
  setMatchToDelete,
  setDeleteMatchError
}) {
  const matchPlanSelectId = useId$1().replace(/:/g, "");
  return /* @__PURE__ */ jsxs(
    Dialog,
    {
      open: editMatch.open,
      onClose: editMatch.closeDialog,
      fullWidth: true,
      maxWidth: false,
      disableRestoreFocus: true,
      sx: {
        "& .MuiDialog-paper": {
          width: "100%",
          maxWidth: { xs: "calc(100vw - 32px)", md: 1200 }
        }
      },
      children: [
        /* @__PURE__ */ jsxs(
          DialogTitle,
          {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              flexWrap: "wrap"
            },
            children: [
              /* @__PURE__ */ jsx(Typography, { component: "div", variant: "h6", sx: { fontWeight: 900 }, children: "Edycja meczu" }),
              /* @__PURE__ */ jsx(
                TextField,
                {
                  select: true,
                  label: "Dzień tygodnia",
                  ...muiSelectTextFieldAccessibilityProps(`${matchPlanSelectId}-weekday`),
                  value: String(editMatch.dayTimestamp ?? ""),
                  onChange: (e) => editMatch.setDayTimestamp(Number(e.target.value)),
                  size: "small",
                  sx: { minWidth: 220 },
                  children: editMatch.options.map((o) => /* @__PURE__ */ jsx(MenuItem, { value: String(o.timestamp), children: o.label }, o.timestamp))
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(DialogContent, { dividers: true, children: [
          editMatch.error ? /* @__PURE__ */ jsx(Alert, { severity: "error", sx: { mb: 2 }, children: editMatch.error }) : null,
          /* @__PURE__ */ jsx(TableContainer, { component: Paper, variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ jsxs(
            Table,
            {
              size: "small",
              "aria-label": "Tabela meczów",
              sx: {
                tableLayout: "auto",
                "& .MuiTableCell-root": {
                  px: 1
                },
                "& .MuiTableCell-head": {
                  px: 1
                }
              },
              children: [
                /* @__PURE__ */ jsx(TableHead, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsx(TableCell, { align: "center" }),
                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Drużyna A" }),
                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Wynik A" }),
                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Start" }),
                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Koniec" }),
                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Wynik B" }),
                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Drużyna B" }),
                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Boisko" }),
                  /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Kolor koszulek" })
                ] }) }),
                /* @__PURE__ */ jsx(TableBody, { children: editMatch.drafts.map((draft, idx) => /* @__PURE__ */ jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsx(TableCell, { align: "center", sx: { paddingLeft: 1, paddingRight: 1, verticalAlign: "middle" }, children: (() => {
                    const teamAName = tournament.teams.find((t) => t.id === draft.teamAId)?.name ?? draft.teamAId;
                    const teamBName = tournament.teams.find((t) => t.id === draft.teamBId)?.name ?? draft.teamBId;
                    const canDeleteFromApi = Boolean(draft.id);
                    const disabled = editMatch.loading || canDeleteFromApi && deleteMatchLoading;
                    return /* @__PURE__ */ jsx(Tooltip, { title: "Usuń rozgrywkę", children: /* @__PURE__ */ jsx(
                      Box,
                      {
                        component: "span",
                        sx: { display: "inline-flex", justifyContent: "center", width: "100%" },
                        children: /* @__PURE__ */ jsx(
                          IconButton,
                          {
                            "aria-label": `Usuń rozgrywkę ${teamAName} vs ${teamBName}`,
                            color: "error",
                            onClick: () => {
                              if (disabled) return;
                              if (!draft.id) {
                                editMatch.setDrafts((prev) => prev.filter((_, i) => i !== idx));
                                return;
                              }
                              const match = matches.find((m) => m.id === draft.id);
                              if (!match) {
                                editMatch.setDrafts((prev) => prev.filter((d) => d.id !== draft.id));
                                return;
                              }
                              setDeleteMatchError(null);
                              setMatchToDelete(match);
                              editMatch.closeDialog();
                            },
                            size: "small",
                            disabled,
                            sx: { border: "1px solid", borderColor: "divider", borderRadius: 2, p: 0 },
                            children: /* @__PURE__ */ jsx(Trash2, { size: 18 })
                          }
                        )
                      }
                    ) });
                  })() }),
                  /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
                    TextField,
                    {
                      select: true,
                      label: "Drużyna A",
                      ...muiSelectTextFieldAccessibilityProps(`${matchPlanSelectId}-team-a-${idx}`),
                      value: draft.teamAId,
                      onChange: (e) => {
                        const nextTeamAId = String(e.target.value);
                        editMatch.setDrafts(
                          (prev) => prev.map((d, i) => {
                            if (i !== idx) return d;
                            const nextTeamBId = d.teamBId === nextTeamAId ? tournament.teams.find((t) => t.id !== nextTeamAId)?.id ?? "" : d.teamBId;
                            return { ...d, teamAId: nextTeamAId, teamBId: nextTeamBId };
                          })
                        );
                      },
                      size: "small",
                      fullWidth: true,
                      children: tournament.teams.map((t) => /* @__PURE__ */ jsx(MenuItem, { value: t.id, children: t.name }, t.id))
                    }
                  ) }),
                  /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
                    TextField,
                    {
                      type: "number",
                      label: "Wynik A",
                      value: draft.scoreA,
                      onChange: (e) => editMatch.setDrafts(
                        (prev) => prev.map((d, i) => i === idx ? { ...d, scoreA: e.target.value } : d)
                      ),
                      InputLabelProps: { shrink: true },
                      size: "small",
                      fullWidth: true,
                      sx: { minWidth: 90 }
                    }
                  ) }),
                  /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
                    TextField,
                    {
                      type: "time",
                      label: "Start",
                      value: draft.startTime,
                      onChange: (e) => {
                        const nextStart = e.target.value;
                        const nextEnd = computeDraftEndTime(nextStart);
                        editMatch.setDrafts(
                          (prev) => prev.map((d, i) => i === idx ? { ...d, startTime: nextStart, endTime: nextEnd } : d)
                        );
                      },
                      InputLabelProps: { shrink: true },
                      size: "small"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
                    TextField,
                    {
                      type: "time",
                      label: "Koniec",
                      value: draft.endTime,
                      InputLabelProps: { shrink: true },
                      InputProps: { readOnly: true },
                      size: "small"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
                    TextField,
                    {
                      type: "number",
                      label: "Wynik B",
                      value: draft.scoreB,
                      onChange: (e) => editMatch.setDrafts(
                        (prev) => prev.map((d, i) => i === idx ? { ...d, scoreB: e.target.value } : d)
                      ),
                      InputLabelProps: { shrink: true },
                      size: "small",
                      fullWidth: true,
                      sx: { minWidth: 90 }
                    }
                  ) }),
                  /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
                    TextField,
                    {
                      select: true,
                      label: "Drużyna B",
                      ...muiSelectTextFieldAccessibilityProps(`${matchPlanSelectId}-team-b-${idx}`),
                      value: draft.teamBId,
                      onChange: (e) => editMatch.setDrafts(
                        (prev) => prev.map((d, i) => i === idx ? { ...d, teamBId: String(e.target.value) } : d)
                      ),
                      size: "small",
                      fullWidth: true,
                      children: tournament.teams.map((t) => /* @__PURE__ */ jsx(MenuItem, { value: t.id, disabled: t.id === draft.teamAId, children: t.name }, t.id))
                    }
                  ) }),
                  /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs(
                    TextField,
                    {
                      select: true,
                      label: "Boisko",
                      ...muiSelectTextFieldAccessibilityProps(`${matchPlanSelectId}-court-${idx}`),
                      value: draft.court,
                      onChange: (e) => editMatch.setDrafts(
                        (prev) => prev.map((d, i) => i === idx ? { ...d, court: String(e.target.value) } : d)
                      ),
                      size: "small",
                      fullWidth: true,
                      sx: { minWidth: 90 },
                      children: [
                        /* @__PURE__ */ jsx(MenuItem, { value: "1", children: "1" }),
                        /* @__PURE__ */ jsx(MenuItem, { value: "2", children: "2" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx(TableCell, { sx: { verticalAlign: "middle", px: 1.5 }, children: /* @__PURE__ */ jsxs(
                    Box,
                    {
                      sx: {
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: 0.25
                      },
                      children: [
                        /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1, flexWrap: "nowrap" }, children: [
                          /* @__PURE__ */ jsx(Typography, { variant: "caption", color: "text.secondary", sx: { minWidth: 12, lineHeight: 1 }, children: "A" }),
                          /* @__PURE__ */ jsxs(
                            RadioGroup,
                            {
                              row: true,
                              value: draft.jerseyA,
                              sx: { flexWrap: "nowrap", whiteSpace: "nowrap", my: -0.25 },
                              onChange: (e) => {
                                const next = e.target.value;
                                editMatch.setDrafts(
                                  (prev) => prev.map(
                                    (d, i) => i === idx ? { ...d, jerseyA: next, jerseyB: next === "jasne" ? "ciemne" : "jasne" } : d
                                  )
                                );
                              },
                              children: [
                                /* @__PURE__ */ jsx(
                                  FormControlLabel,
                                  {
                                    value: "jasne",
                                    control: /* @__PURE__ */ jsx(Radio, { size: "small" }),
                                    label: "Jasne",
                                    sx: {
                                      mr: 0.75,
                                      my: 0,
                                      "& .MuiFormControlLabel-label": { fontSize: 12, whiteSpace: "nowrap", lineHeight: 1 }
                                    }
                                  }
                                ),
                                /* @__PURE__ */ jsx(
                                  FormControlLabel,
                                  {
                                    value: "ciemne",
                                    control: /* @__PURE__ */ jsx(Radio, { size: "small" }),
                                    label: "Ciemne",
                                    sx: {
                                      mr: 0,
                                      my: 0,
                                      "& .MuiFormControlLabel-label": { fontSize: 12, whiteSpace: "nowrap", lineHeight: 1 }
                                    }
                                  }
                                )
                              ]
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 1, flexWrap: "nowrap" }, children: [
                          /* @__PURE__ */ jsx(Typography, { variant: "caption", color: "text.secondary", sx: { minWidth: 12, lineHeight: 1 }, children: "B" }),
                          /* @__PURE__ */ jsxs(
                            RadioGroup,
                            {
                              row: true,
                              value: draft.jerseyB,
                              sx: { flexWrap: "nowrap", whiteSpace: "nowrap", my: -0.25 },
                              onChange: (e) => {
                                const next = e.target.value;
                                editMatch.setDrafts(
                                  (prev) => prev.map(
                                    (d, i) => i === idx ? { ...d, jerseyB: next, jerseyA: next === "jasne" ? "ciemne" : "jasne" } : d
                                  )
                                );
                              },
                              children: [
                                /* @__PURE__ */ jsx(
                                  FormControlLabel,
                                  {
                                    value: "jasne",
                                    control: /* @__PURE__ */ jsx(Radio, { size: "small" }),
                                    label: "Jasne",
                                    sx: {
                                      mr: 0.75,
                                      my: 0,
                                      "& .MuiFormControlLabel-label": { fontSize: 12, whiteSpace: "nowrap", lineHeight: 1 }
                                    }
                                  }
                                ),
                                /* @__PURE__ */ jsx(
                                  FormControlLabel,
                                  {
                                    value: "ciemne",
                                    control: /* @__PURE__ */ jsx(Radio, { size: "small" }),
                                    label: "Ciemne",
                                    sx: {
                                      mr: 0,
                                      my: 0,
                                      "& .MuiFormControlLabel-label": { fontSize: 12, whiteSpace: "nowrap", lineHeight: 1 }
                                    }
                                  }
                                )
                              ]
                            }
                          )
                        ] })
                      ]
                    }
                  ) })
                ] }, draft.id ?? `row-${idx}`)) })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(Box, { sx: { mt: 2, display: "flex", justifyContent: "flex-start" }, children: /* @__PURE__ */ jsx(Button, { variant: "outlined", onClick: editMatch.addRow, disabled: editMatch.loading, children: "Dodaj kolejny mecz" }) })
        ] }),
        /* @__PURE__ */ jsxs(DialogActions, { children: [
          /* @__PURE__ */ jsx(Button, { onClick: editMatch.closeDialog, disabled: editMatch.loading, children: "Anuluj" }),
          /* @__PURE__ */ jsx(
            Button,
            {
              color: "error",
              variant: "outlined",
              disabled: editMatch.loading || deleteMatchLoading,
              onClick: () => {
                if (!editMatch.match) return;
                setDeleteMatchError(null);
                setMatchToDelete(editMatch.match);
                editMatch.closeDialog();
              },
              children: "Usuń"
            }
          ),
          /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: editMatch.submit, disabled: editMatch.loading, children: "Zapisz" })
        ] })
      ]
    }
  );
}

const isRefereeTaken = (candidateId, excludeId, conflictingIds) => candidateId !== excludeId && conflictingIds.includes(candidateId);
function AddRefereePlanDialog({ addRefereePlan, tournament, personDisplayName }) {
  const refereePlanSelectId = useId$1().replace(/:/g, "");
  const addRefereePlanPenaltyConflicts = [
    addRefereePlan.referee1Id,
    addRefereePlan.referee2Id,
    addRefereePlan.tableClockId
  ];
  const addRefereePlanClockConflicts = [
    addRefereePlan.referee1Id,
    addRefereePlan.referee2Id,
    addRefereePlan.tablePenaltyId
  ];
  return /* @__PURE__ */ jsxs(Dialog, { open: addRefereePlan.open, onClose: addRefereePlan.closeDialog, fullWidth: true, maxWidth: "md", disableRestoreFocus: true, children: [
    /* @__PURE__ */ jsxs(
      DialogTitle,
      {
        sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          flexWrap: "wrap"
        },
        children: [
          /* @__PURE__ */ jsx(Typography, { component: "div", variant: "h6", sx: { fontWeight: 900 }, children: "Tworzenie planu sędziów" }),
          /* @__PURE__ */ jsx(
            TextField,
            {
              select: true,
              label: "Dzień tygodnia",
              ...muiSelectTextFieldAccessibilityProps(`${refereePlanSelectId}-weekday`),
              value: String(addRefereePlan.dayTimestamp ?? ""),
              onChange: (e) => addRefereePlan.setDayTimestamp(Number(e.target.value)),
              size: "small",
              sx: { minWidth: 220 },
              children: addRefereePlan.dayOptions.map((o) => /* @__PURE__ */ jsx(MenuItem, { value: String(o.timestamp), children: o.label }, o.timestamp))
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs(DialogContent, { dividers: true, children: [
      addRefereePlan.error ? /* @__PURE__ */ jsx(Alert, { severity: "error", sx: { mb: 2 }, children: addRefereePlan.error }) : null,
      /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
        /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 120px 120px 1fr 95px" },
              gap: 1.5,
              alignItems: "end"
            },
            children: [
              /* @__PURE__ */ jsx(
                TextField,
                {
                  select: true,
                  label: "Drużyna A",
                  ...muiSelectTextFieldAccessibilityProps(`${refereePlanSelectId}-team-a`),
                  value: addRefereePlan.teamAId,
                  onChange: (e) => addRefereePlan.setTeamAId(String(e.target.value)),
                  fullWidth: true,
                  size: "small",
                  children: tournament.teams.map((t) => /* @__PURE__ */ jsx(MenuItem, { value: t.id, children: t.name }, t.id))
                }
              ),
              /* @__PURE__ */ jsx(
                TextField,
                {
                  type: "time",
                  label: "Start",
                  value: addRefereePlan.startTime,
                  onChange: (e) => addRefereePlan.setStartTime(e.target.value),
                  InputLabelProps: { shrink: true },
                  size: "small"
                }
              ),
              /* @__PURE__ */ jsx(
                TextField,
                {
                  type: "time",
                  label: "Koniec",
                  value: addRefereePlan.endTime,
                  InputLabelProps: { shrink: true },
                  InputProps: { readOnly: true },
                  size: "small"
                }
              ),
              /* @__PURE__ */ jsx(
                TextField,
                {
                  select: true,
                  label: "Drużyna B",
                  ...muiSelectTextFieldAccessibilityProps(`${refereePlanSelectId}-team-b`),
                  value: addRefereePlan.teamBId,
                  onChange: (e) => addRefereePlan.setTeamBId(String(e.target.value)),
                  fullWidth: true,
                  size: "small",
                  children: tournament.teams.map((t) => /* @__PURE__ */ jsx(MenuItem, { value: t.id, disabled: t.id === addRefereePlan.teamAId, children: t.name }, t.id))
                }
              ),
              /* @__PURE__ */ jsxs(
                TextField,
                {
                  select: true,
                  label: "Boisko",
                  ...muiSelectTextFieldAccessibilityProps(`${refereePlanSelectId}-court`),
                  value: addRefereePlan.court,
                  onChange: (e) => addRefereePlan.setCourt(String(e.target.value)),
                  size: "small",
                  children: [
                    /* @__PURE__ */ jsx(MenuItem, { value: "1", children: "1" }),
                    /* @__PURE__ */ jsx(MenuItem, { value: "2", children: "2" })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(Divider, {}),
        /* @__PURE__ */ jsx(Typography, { sx: { fontWeight: 900, fontSize: 14 }, children: "Obsada sędziowska" }),
        /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr 1fr" },
              gap: 1.5
            },
            children: [
              /* @__PURE__ */ jsxs(
                TextField,
                {
                  select: true,
                  label: "Sędzia 1",
                  ...muiSelectTextFieldAccessibilityProps(`${refereePlanSelectId}-ref1`),
                  value: addRefereePlan.referee1Id,
                  onChange: (e) => addRefereePlan.setReferee1Id(String(e.target.value)),
                  size: "small",
                  children: [
                    /* @__PURE__ */ jsx(MenuItem, { value: "", children: "—" }),
                    tournament.referees.map((r) => /* @__PURE__ */ jsx(
                      MenuItem,
                      {
                        value: r.id,
                        disabled: r.id !== addRefereePlan.referee1Id && [addRefereePlan.referee2Id, addRefereePlan.tablePenaltyId, addRefereePlan.tableClockId].includes(
                          r.id
                        ),
                        children: personDisplayName(r)
                      },
                      r.id
                    ))
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                TextField,
                {
                  select: true,
                  label: "Sędzia 2",
                  ...muiSelectTextFieldAccessibilityProps(`${refereePlanSelectId}-ref2`),
                  value: addRefereePlan.referee2Id,
                  onChange: (e) => addRefereePlan.setReferee2Id(String(e.target.value)),
                  size: "small",
                  children: [
                    /* @__PURE__ */ jsx(MenuItem, { value: "", children: "—" }),
                    tournament.referees.map((r) => /* @__PURE__ */ jsx(
                      MenuItem,
                      {
                        value: r.id,
                        disabled: r.id !== addRefereePlan.referee2Id && [addRefereePlan.referee1Id, addRefereePlan.tablePenaltyId, addRefereePlan.tableClockId].includes(
                          r.id
                        ),
                        children: personDisplayName(r)
                      },
                      r.id
                    ))
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                TextField,
                {
                  select: true,
                  label: "Stolik kar",
                  ...muiSelectTextFieldAccessibilityProps(`${refereePlanSelectId}-penalty`),
                  value: addRefereePlan.tablePenaltyId,
                  onChange: (e) => addRefereePlan.setTablePenaltyId(String(e.target.value)),
                  size: "small",
                  children: [
                    /* @__PURE__ */ jsx(MenuItem, { value: "", children: "—" }),
                    tournament.referees.map((r) => {
                      const penaltyDisabled = isRefereeTaken(
                        r.id,
                        addRefereePlan.tablePenaltyId,
                        addRefereePlanPenaltyConflicts
                      );
                      return /* @__PURE__ */ jsx(MenuItem, { value: r.id, disabled: penaltyDisabled, children: personDisplayName(r) }, r.id);
                    })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                TextField,
                {
                  select: true,
                  label: "Zagary",
                  ...muiSelectTextFieldAccessibilityProps(`${refereePlanSelectId}-clock`),
                  value: addRefereePlan.tableClockId,
                  onChange: (e) => addRefereePlan.setTableClockId(String(e.target.value)),
                  size: "small",
                  children: [
                    /* @__PURE__ */ jsx(MenuItem, { value: "", children: "—" }),
                    tournament.referees.map((r) => {
                      const clockDisabled = isRefereeTaken(r.id, addRefereePlan.tableClockId, addRefereePlanClockConflicts);
                      return /* @__PURE__ */ jsx(MenuItem, { value: r.id, disabled: clockDisabled, children: personDisplayName(r) }, r.id);
                    })
                  ]
                }
              )
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs(DialogActions, { children: [
      /* @__PURE__ */ jsx(Button, { onClick: addRefereePlan.closeDialog, disabled: addRefereePlan.loading, children: "Anuluj" }),
      /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: addRefereePlan.submit, disabled: addRefereePlan.loading, children: "Dodaj" })
    ] })
  ] });
}

function getPlayers(tournament) {
  return tournament.teams.flatMap((team) => team.players ?? []);
}
function AddClassifierPlanDialog({ addClassifierPlan, tournament }) {
  const classifierSelectId = useId$1().replace(/:/g, "");
  const players = getPlayers(tournament);
  const q = addClassifierPlan.search.trim().toLowerCase();
  const filteredPlayers = q ? players.filter((p) => `${p.firstName} ${p.lastName}`.toLowerCase().includes(q)) : players;
  return /* @__PURE__ */ jsxs(
    Dialog,
    {
      open: addClassifierPlan.open,
      onClose: addClassifierPlan.closeDialog,
      fullWidth: true,
      maxWidth: "md",
      disableRestoreFocus: true,
      children: [
        /* @__PURE__ */ jsxs(
          DialogTitle,
          {
            sx: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, flexWrap: "wrap" },
            children: [
              /* @__PURE__ */ jsx(Typography, { component: "div", variant: "h6", sx: { fontWeight: 900 }, children: "Tworzenie planu klasyfikatorów" }),
              /* @__PURE__ */ jsx(
                TextField,
                {
                  select: true,
                  label: "Dzień tygodnia",
                  ...muiSelectTextFieldAccessibilityProps(`${classifierSelectId}-weekday`),
                  value: String(addClassifierPlan.dayTimestamp ?? ""),
                  onChange: (e) => addClassifierPlan.setDayTimestamp(Number(e.target.value)),
                  size: "small",
                  sx: { minWidth: 220 },
                  children: addClassifierPlan.dayOptions.map((o) => /* @__PURE__ */ jsx(MenuItem, { value: String(o.timestamp), children: o.label }, o.timestamp))
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(DialogContent, { dividers: true, children: [
          addClassifierPlan.error ? /* @__PURE__ */ jsx(Alert, { severity: "error", sx: { mb: 2 }, children: addClassifierPlan.error }) : null,
          /* @__PURE__ */ jsxs(
            Box,
            {
              sx: {
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 150px 150px 160px 160px" },
                gap: 1.5,
                alignItems: "end",
                mb: 2
              },
              children: [
                /* @__PURE__ */ jsx(
                  TextField,
                  {
                    label: "Wybrany zawodnik",
                    value: players.find((p) => p.id === addClassifierPlan.playerId) ? `${players.find((p) => p.id === addClassifierPlan.playerId)?.firstName} ${players.find((p) => p.id === addClassifierPlan.playerId)?.lastName}` : "",
                    InputProps: { readOnly: true },
                    size: "small"
                  }
                ),
                /* @__PURE__ */ jsx(
                  TextField,
                  {
                    type: "time",
                    label: "Start",
                    value: addClassifierPlan.startTime,
                    onChange: (e) => addClassifierPlan.setStartTime(e.target.value),
                    InputLabelProps: { shrink: true },
                    size: "small"
                  }
                ),
                /* @__PURE__ */ jsx(
                  TextField,
                  {
                    type: "time",
                    label: "Koniec",
                    value: addClassifierPlan.endTime,
                    onChange: (e) => addClassifierPlan.setEndTime(e.target.value),
                    InputLabelProps: { shrink: true },
                    size: "small"
                  }
                ),
                /* @__PURE__ */ jsx(
                  TextField,
                  {
                    type: "number",
                    label: "Klasyfikacja",
                    value: addClassifierPlan.classification,
                    onChange: (e) => addClassifierPlan.setClassification(e.target.value),
                    size: "small",
                    inputProps: { step: "0.5", min: "0", max: "4" }
                  }
                ),
                /* @__PURE__ */ jsxs(
                  TextField,
                  {
                    select: true,
                    label: "Obserwacja",
                    ...muiSelectTextFieldAccessibilityProps(`${classifierSelectId}-observation`),
                    value: addClassifierPlan.observation ? "yes" : "no",
                    onChange: (e) => addClassifierPlan.setObservation(String(e.target.value) === "yes"),
                    size: "small",
                    children: [
                      /* @__PURE__ */ jsx(MenuItem, { value: "yes", children: "Tak" }),
                      /* @__PURE__ */ jsx(MenuItem, { value: "no", children: "Nie" })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            TextField,
            {
              label: "Szukaj zawodnika (imię lub nazwisko)",
              value: addClassifierPlan.search,
              onChange: (e) => addClassifierPlan.setSearch(e.target.value),
              fullWidth: true,
              size: "small",
              sx: { mb: 2 }
            }
          ),
          /* @__PURE__ */ jsx(TableContainer, { component: Paper, variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ jsxs(Table, { size: "small", "aria-label": "Lista zawodników", children: [
            /* @__PURE__ */ jsx(TableHead, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
              /* @__PURE__ */ jsx(TableCell, { children: "Zawodnik" }),
              /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Akcja" })
            ] }) }),
            /* @__PURE__ */ jsx(TableBody, { children: filteredPlayers.map((player) => /* @__PURE__ */ jsxs(TableRow, { selected: player.id === addClassifierPlan.playerId, children: [
              /* @__PURE__ */ jsxs(TableCell, { children: [
                player.firstName,
                " ",
                player.lastName
              ] }),
              /* @__PURE__ */ jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsx(
                Button,
                {
                  variant: player.id === addClassifierPlan.playerId ? "contained" : "outlined",
                  onClick: () => addClassifierPlan.setPlayerId(player.id),
                  size: "small",
                  children: "Wybierz"
                }
              ) })
            ] }, player.id)) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(DialogActions, { children: [
          /* @__PURE__ */ jsx(Button, { onClick: addClassifierPlan.closeDialog, disabled: addClassifierPlan.loading, children: "Anuluj" }),
          /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: addClassifierPlan.submit, disabled: addClassifierPlan.loading, children: "Dodaj" })
        ] })
      ]
    }
  );
}
function EditClassifierPlanDialog({ editClassifierPlan, tournament }) {
  const classifierSelectId = useId$1().replace(/:/g, "");
  const players = getPlayers(tournament);
  return /* @__PURE__ */ jsxs(
    Dialog,
    {
      open: editClassifierPlan.open,
      onClose: editClassifierPlan.closeDialog,
      fullWidth: true,
      maxWidth: "md",
      disableRestoreFocus: true,
      children: [
        /* @__PURE__ */ jsxs(
          DialogTitle,
          {
            sx: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, flexWrap: "wrap" },
            children: [
              /* @__PURE__ */ jsx(Typography, { component: "div", variant: "h6", sx: { fontWeight: 900 }, children: "Edycja planu klasyfikatorów" }),
              /* @__PURE__ */ jsx(
                TextField,
                {
                  select: true,
                  label: "Dzień tygodnia",
                  ...muiSelectTextFieldAccessibilityProps(`${classifierSelectId}-weekday`),
                  value: String(editClassifierPlan.dayTimestamp ?? ""),
                  onChange: (e) => editClassifierPlan.setDayTimestamp(Number(e.target.value)),
                  size: "small",
                  sx: { minWidth: 220 },
                  children: editClassifierPlan.dayOptions.map((o) => /* @__PURE__ */ jsx(MenuItem, { value: String(o.timestamp), children: o.label }, o.timestamp))
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(DialogContent, { dividers: true, children: [
          editClassifierPlan.error ? /* @__PURE__ */ jsx(Alert, { severity: "error", sx: { mb: 2 }, children: editClassifierPlan.error }) : null,
          /* @__PURE__ */ jsx(TableContainer, { component: Paper, variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ jsxs(Table, { size: "small", "aria-label": "Tabela planu klasyfikatorów (edycja)", sx: { tableLayout: "auto" }, children: [
            /* @__PURE__ */ jsx(TableHead, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
              /* @__PURE__ */ jsx(TableCell, { align: "center" }),
              /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Zawodnik" }),
              /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Start" }),
              /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Koniec" }),
              /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Klasyfikacja" }),
              /* @__PURE__ */ jsx(TableCell, { align: "center", children: "Obserwacja" })
            ] }) }),
            /* @__PURE__ */ jsx(TableBody, { children: editClassifierPlan.drafts.map((draft, idx) => /* @__PURE__ */ jsxs(TableRow, { children: [
              /* @__PURE__ */ jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsx(Tooltip, { title: "Usuń pozycję", children: /* @__PURE__ */ jsx(Box, { sx: { display: "flex", justifyContent: "center", width: "100%" }, children: /* @__PURE__ */ jsx(
                IconButton,
                {
                  "aria-label": "Usuń pozycję",
                  color: "error",
                  onClick: () => {
                    if (!draft.id) {
                      editClassifierPlan.setDrafts((prev) => prev.filter((_, i) => i !== idx));
                      return;
                    }
                    void editClassifierPlan.deleteEntry(draft.id);
                  },
                  size: "small",
                  sx: { border: "1px solid", borderColor: "divider", borderRadius: 2, p: 0 },
                  children: /* @__PURE__ */ jsx(Trash2, { size: 18 })
                }
              ) }) }) }),
              /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
                TextField,
                {
                  select: true,
                  label: "Zawodnik",
                  ...muiSelectTextFieldAccessibilityProps(`${classifierSelectId}-player-${idx}`),
                  value: draft.playerId,
                  onChange: (e) => editClassifierPlan.setDrafts(
                    (prev) => prev.map((d, i) => i === idx ? { ...d, playerId: String(e.target.value) } : d)
                  ),
                  size: "small",
                  fullWidth: true,
                  children: players.map((p) => /* @__PURE__ */ jsxs(MenuItem, { value: p.id, children: [
                    p.firstName,
                    " ",
                    p.lastName
                  ] }, p.id))
                }
              ) }),
              /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
                TextField,
                {
                  type: "time",
                  label: "Start",
                  value: draft.startTime,
                  onChange: (e) => {
                    const startTime = e.target.value;
                    const [hRaw, mRaw] = startTime.split(":");
                    const h = Number(hRaw);
                    const m = Number(mRaw);
                    const end = Number.isFinite(h) && Number.isFinite(m) ? `${String((h + Math.floor((m + 30) / 60)) % 24).padStart(2, "0")}:${String((m + 30) % 60).padStart(2, "0")}` : draft.endTime;
                    editClassifierPlan.setDrafts(
                      (prev) => prev.map((d, i) => i === idx ? { ...d, startTime, endTime: end } : d)
                    );
                  },
                  InputLabelProps: { shrink: true },
                  size: "small"
                }
              ) }),
              /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
                TextField,
                {
                  type: "time",
                  label: "Koniec",
                  value: draft.endTime,
                  onChange: (e) => editClassifierPlan.setDrafts(
                    (prev) => prev.map((d, i) => i === idx ? { ...d, endTime: e.target.value } : d)
                  ),
                  InputLabelProps: { shrink: true },
                  size: "small"
                }
              ) }),
              /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
                TextField,
                {
                  type: "number",
                  label: "Klasyfikacja",
                  value: draft.classification,
                  onChange: (e) => editClassifierPlan.setDrafts(
                    (prev) => prev.map((d, i) => i === idx ? { ...d, classification: e.target.value } : d)
                  ),
                  size: "small",
                  inputProps: { step: "0.5", min: "0", max: "4" }
                }
              ) }),
              /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs(
                TextField,
                {
                  select: true,
                  label: "Obserwacja",
                  ...muiSelectTextFieldAccessibilityProps(`${classifierSelectId}-observation-${idx}`),
                  value: draft.observation ? "yes" : "no",
                  onChange: (e) => {
                    const observation = String(e.target.value) === "yes";
                    editClassifierPlan.setDrafts(
                      (prev) => prev.map((d, i) => i === idx ? { ...d, observation } : d)
                    );
                  },
                  size: "small",
                  fullWidth: true,
                  children: [
                    /* @__PURE__ */ jsx(MenuItem, { value: "yes", children: "Tak" }),
                    /* @__PURE__ */ jsx(MenuItem, { value: "no", children: "Nie" })
                  ]
                }
              ) })
            ] }, draft.id ?? `class-row-${idx}`)) })
          ] }) }),
          /* @__PURE__ */ jsx(Box, { sx: { mt: 2, display: "flex", justifyContent: "flex-start" }, children: /* @__PURE__ */ jsx(Button, { variant: "outlined", onClick: editClassifierPlan.addRow, disabled: editClassifierPlan.loading, children: "Dodaj kolejne badanie" }) })
        ] }),
        /* @__PURE__ */ jsxs(DialogActions, { children: [
          /* @__PURE__ */ jsx(Button, { onClick: editClassifierPlan.closeDialog, disabled: editClassifierPlan.loading, children: "Anuluj" }),
          /* @__PURE__ */ jsx(Button, { variant: "contained", onClick: editClassifierPlan.submit, disabled: editClassifierPlan.loading, children: "Zapisz" })
        ] })
      ]
    }
  );
}

const DEFAULT_MATCH_START_TIME = "10:00";
const DEFAULT_MATCH_END_TIME = minutesToTime(10 * 60 + MATCH_DURATION_MINUTES);
const getMatchEndFromStart = (startTime) => {
  const startMinutes = timeToMinutes(startTime);
  if (startMinutes == null) return DEFAULT_MATCH_END_TIME;
  return minutesToTime(startMinutes + MATCH_DURATION_MINUTES);
};
function useMatchPlanManager({
  tournament,
  matches,
  refreshMatches,
  refreshRefereePlan,
  matchDayOptions
}) {
  const isOnSameDay = (scheduledAtIso, dayTimestamp) => {
    const date = new Date(scheduledAtIso);
    if (Number.isNaN(date.getTime())) return false;
    return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() === dayTimestamp;
  };
  const normalizeCourt = (court) => {
    const next = (court ?? "").trim();
    return next === "" ? void 0 : next;
  };
  const hasTimeOverlap = (startA, endA, startB, endB) => {
    return startA < endB && endA > startB;
  };
  const [addMatchOpen, setAddMatchOpen] = useState(false);
  const [createMatchError, setCreateMatchError] = useState(null);
  const [allowedNewDayTimestamps, setAllowedNewDayTimestamps] = useState(null);
  const [newMatchDayTimestamp, setNewMatchDayTimestamp] = useState(null);
  const [newMatchTeamAId, setNewMatchTeamAId] = useState("");
  const [newMatchTeamBId, setNewMatchTeamBId] = useState("");
  const [newMatchStartTime, setNewMatchStartTime] = useState(DEFAULT_MATCH_START_TIME);
  const [newMatchEndTime, setNewMatchEndTime] = useState(DEFAULT_MATCH_END_TIME);
  const [newMatchCourt, setNewMatchCourt] = useState("1");
  const [newMatchScoreA, setNewMatchScoreA] = useState("");
  const [newMatchScoreB, setNewMatchScoreB] = useState("");
  const [newMatchJerseyA, setNewMatchJerseyA] = useState("jasne");
  const [newMatchJerseyB, setNewMatchJerseyB] = useState("ciemne");
  useEffect(() => {
    setNewMatchEndTime(getMatchEndFromStart(newMatchStartTime));
  }, [newMatchStartTime]);
  const [editMatchOpen, setEditMatchOpen] = useState(false);
  const [editMatch, setEditMatch] = useState(null);
  const [editMatchError, setEditMatchError] = useState(null);
  const [editMatchDayTimestamp, setEditMatchDayTimestamp] = useState(null);
  const [editMatchDrafts, setEditMatchDrafts] = useState([]);
  const createMatchMutation = useMutation({
    mutationFn: (payload) => createTournamentMatch(tournament.id, payload)
  });
  const saveMatchMutation = useMutation({
    mutationFn: (payload) => {
      const { matchId, ...body } = payload;
      if (!matchId) return createTournamentMatch(tournament.id, body);
      return updateTournamentMatch(tournament.id, matchId, body);
    }
  });
  const createMatchLoading = createMatchMutation.isPending;
  const editMatchLoading = saveMatchMutation.isPending;
  function openAddMatchDialog(presetDayTimestamp, allowedDays) {
    setAddMatchOpen(true);
    setCreateMatchError(null);
    createMatchMutation.reset();
    setNewMatchDayTimestamp(presetDayTimestamp ?? matchDayOptions[0]?.timestamp ?? null);
    setAllowedNewDayTimestamps(allowedDays ?? null);
    const [teamA, teamB] = tournament.teams;
    setNewMatchTeamAId(teamA?.id ?? "");
    setNewMatchTeamBId(teamB?.id ?? "");
    setNewMatchStartTime(DEFAULT_MATCH_START_TIME);
    setNewMatchCourt("1");
    setNewMatchScoreA("");
    setNewMatchScoreB("");
    setNewMatchJerseyA("jasne");
    setNewMatchJerseyB("ciemne");
  }
  function closeAddMatchDialog() {
    if (createMatchLoading) return;
    setAddMatchOpen(false);
    setCreateMatchError(null);
    setAllowedNewDayTimestamps(null);
  }
  async function submitNewMatch() {
    if (!newMatchDayTimestamp) {
      setCreateMatchError("Wybierz dzień tygodnia");
      return;
    }
    if (allowedNewDayTimestamps && !allowedNewDayTimestamps.includes(newMatchDayTimestamp)) {
      setCreateMatchError("Wybierz wolny dzień (bez zaplanowanych meczów).");
      return;
    }
    if (!newMatchTeamAId || !newMatchTeamBId) {
      setCreateMatchError("Wybierz drużyny A i B");
      return;
    }
    if (newMatchTeamAId === newMatchTeamBId) {
      setCreateMatchError("Drużyny A i B muszą być różne");
      return;
    }
    const [hourRaw, minuteRaw] = newMatchStartTime.split(":");
    const hour = Number(hourRaw);
    const minute = Number(minuteRaw);
    if (!Number.isFinite(hour) || !Number.isFinite(minute)) {
      setCreateMatchError("Podaj poprawną godzinę");
      return;
    }
    const startMinutes = hour * 60 + minute;
    const minMinutes = 7 * 60;
    const maxMinutes = 22 * 60;
    const latestStartMinutes = maxMinutes - MATCH_DURATION_MINUTES;
    const endMinutes = startMinutes + MATCH_DURATION_MINUTES;
    if (startMinutes < minMinutes || startMinutes > latestStartMinutes) {
      setCreateMatchError("Start musi być w przedziale 07:00-20:30");
      return;
    }
    if (endMinutes > maxMinutes) {
      setCreateMatchError("Mecz musi zakończyć się najpóźniej o 22:00");
      return;
    }
    const selectedCourt = normalizeCourt(newMatchCourt);
    if (selectedCourt) {
      const overlappingMatch = matches.find((match) => {
        if (normalizeCourt(match.court) !== selectedCourt) return false;
        if (!isOnSameDay(match.scheduledAt, newMatchDayTimestamp)) return false;
        const matchStart = new Date(match.scheduledAt);
        if (Number.isNaN(matchStart.getTime())) return false;
        const matchStartMinutes = matchStart.getHours() * 60 + matchStart.getMinutes();
        const matchEndMinutes = matchStartMinutes + MATCH_DURATION_MINUTES;
        return hasTimeOverlap(startMinutes, endMinutes, matchStartMinutes, matchEndMinutes);
      });
      if (overlappingMatch) {
        setCreateMatchError("Na tym boisku jest już mecz w tym czasie. Wybierz inną godzinę startu.");
        return;
      }
    }
    const day = new Date(newMatchDayTimestamp);
    const scheduledAt = new Date(day.getFullYear(), day.getMonth(), day.getDate(), hour, minute, 0, 0).toISOString();
    const scoreA = newMatchScoreA.trim() === "" ? void 0 : Number(newMatchScoreA);
    const scoreB = newMatchScoreB.trim() === "" ? void 0 : Number(newMatchScoreB);
    if (scoreA !== void 0 && (!Number.isFinite(scoreA) || !Number.isInteger(scoreA) || scoreA < 0 || scoreA > 99) || scoreB !== void 0 && (!Number.isFinite(scoreB) || !Number.isInteger(scoreB) || scoreB < 0 || scoreB > 99)) {
      setCreateMatchError("Wynik musi być w zakresie 0-99");
      return;
    }
    const court = newMatchCourt.trim() === "" ? void 0 : newMatchCourt.trim();
    const jerseyInfo = `Team A: ${newMatchJerseyA}, Team B: ${newMatchJerseyB}`;
    createMatchMutation.reset();
    setCreateMatchError(null);
    try {
      await createMatchMutation.mutateAsync({
        teamAId: newMatchTeamAId,
        teamBId: newMatchTeamBId,
        scheduledAt,
        court,
        jerseyInfo,
        scoreA,
        scoreB
      });
      await refreshMatches(tournament.id);
      await refreshRefereePlan(tournament.id);
      setAddMatchOpen(false);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Nie udało się utworzyć meczu";
      setCreateMatchError(message);
    } finally {
      createMatchMutation.reset();
    }
  }
  function openEditMatchDialog(matchesToEdit) {
    if (matchesToEdit.length === 0) return;
    setEditMatchError(null);
    saveMatchMutation.reset();
    setEditMatch(matchesToEdit[0]);
    setEditMatchOpen(true);
    const first = matchesToEdit[0];
    const d = new Date(first.scheduledAt);
    if (!Number.isNaN(d.getTime())) {
      setEditMatchDayTimestamp(new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime());
    } else {
      setEditMatchDayTimestamp(null);
    }
    setEditMatchDrafts(
      matchesToEdit.map((match) => {
        const matchDate = new Date(match.scheduledAt);
        const hasValidMatchDate = !Number.isNaN(matchDate.getTime());
        const startTime = hasValidMatchDate ? `${pad2(matchDate.getHours())}:${pad2(matchDate.getMinutes())}` : DEFAULT_MATCH_START_TIME;
        const startMinutes = hasValidMatchDate ? matchDate.getHours() * 60 + matchDate.getMinutes() : 10 * 60;
        const endTime = minutesToTime(startMinutes + MATCH_DURATION_MINUTES);
        return {
          id: match.id,
          teamAId: match.teamAId,
          teamBId: match.teamBId,
          startTime,
          endTime,
          court: match.court ?? "1",
          scoreA: match.scoreA != null ? String(match.scoreA) : "",
          scoreB: match.scoreB != null ? String(match.scoreB) : "",
          jerseyA: parseJerseyInfo(match.jerseyInfo).teamA,
          jerseyB: parseJerseyInfo(match.jerseyInfo).teamB
        };
      })
    );
  }
  function closeEditMatchDialog() {
    if (editMatchLoading) return;
    setEditMatchOpen(false);
    setEditMatch(null);
    setEditMatchDrafts([]);
    setEditMatchError(null);
  }
  function addAnotherEditMatchRow() {
    const teamAId = tournament.teams[0]?.id ?? "";
    const teamBId = tournament.teams.find((t) => t.id !== teamAId)?.id ?? teamAId;
    setEditMatchDrafts((prev) => [
      ...prev,
      {
        teamAId,
        teamBId,
        startTime: DEFAULT_MATCH_START_TIME,
        endTime: DEFAULT_MATCH_END_TIME,
        court: "1",
        scoreA: "",
        scoreB: "",
        jerseyA: "jasne",
        jerseyB: "ciemne"
      }
    ]);
  }
  async function submitEditedMatch() {
    if (!editMatch) return;
    if (!editMatchDayTimestamp) {
      setEditMatchError("Wybierz dzień tygodnia");
      return;
    }
    if (editMatchDrafts.length === 0) {
      setEditMatchError("Brak meczów do zapisania");
      return;
    }
    const day = new Date(editMatchDayTimestamp);
    const draftIds = new Set(editMatchDrafts.map((draft) => draft.id).filter((id) => Boolean(id)));
    const outsideDraftMatches = matches.filter((match) => !draftIds.has(match.id));
    const plannedDraftSlots = [];
    saveMatchMutation.reset();
    setEditMatchError(null);
    try {
      for (const [index, draft] of editMatchDrafts.entries()) {
        if (!draft.teamAId || !draft.teamBId) {
          setEditMatchError("Wybierz drużyny A i B");
          return;
        }
        if (draft.teamAId === draft.teamBId) {
          setEditMatchError("Drużyny A i B muszą być różne");
          return;
        }
        const [hourRaw, minuteRaw] = draft.startTime.split(":");
        const hour = Number(hourRaw);
        const minute = Number(minuteRaw);
        if (!Number.isFinite(hour) || !Number.isFinite(minute)) {
          setEditMatchError("Podaj poprawny Start");
          return;
        }
        const startMinutes = hour * 60 + minute;
        const minMinutes = 7 * 60;
        const maxMinutes = 22 * 60;
        const latestStartMinutes = maxMinutes - MATCH_DURATION_MINUTES;
        const endMinutes = startMinutes + MATCH_DURATION_MINUTES;
        if (startMinutes < minMinutes || startMinutes > latestStartMinutes) {
          setEditMatchError("Start musi być w przedziale 07:00-20:30");
          return;
        }
        if (endMinutes > maxMinutes) {
          setEditMatchError("Mecz musi zakończyć się najpóźniej o 22:00");
          return;
        }
        const selectedCourt = normalizeCourt(draft.court);
        if (selectedCourt) {
          const overlapWithOutsideMatch = outsideDraftMatches.find((match) => {
            if (!isOnSameDay(match.scheduledAt, editMatchDayTimestamp)) return false;
            if (normalizeCourt(match.court) !== selectedCourt) return false;
            const matchStart = new Date(match.scheduledAt);
            if (Number.isNaN(matchStart.getTime())) return false;
            const matchStartMinutes = matchStart.getHours() * 60 + matchStart.getMinutes();
            const matchEndMinutes = matchStartMinutes + MATCH_DURATION_MINUTES;
            return hasTimeOverlap(startMinutes, endMinutes, matchStartMinutes, matchEndMinutes);
          });
          if (overlapWithOutsideMatch) {
            setEditMatchError(`Mecz w wierszu ${index + 1} koliduje czasowo z innym meczem na tym samym boisku.`);
            return;
          }
          const overlapWithDraft = plannedDraftSlots.find(
            (slot) => slot.court === selectedCourt && hasTimeOverlap(startMinutes, endMinutes, slot.start, slot.end)
          );
          if (overlapWithDraft) {
            setEditMatchError(
              `Mecz w wierszu ${index + 1} koliduje czasowo z meczem w wierszu ${overlapWithDraft.row}.`
            );
            return;
          }
        }
        plannedDraftSlots.push({
          row: index + 1,
          start: startMinutes,
          end: endMinutes,
          court: selectedCourt
        });
        const scheduledAt = new Date(
          day.getFullYear(),
          day.getMonth(),
          day.getDate(),
          hour,
          minute,
          0,
          0
        ).toISOString();
        const scoreA = draft.scoreA.trim() === "" ? void 0 : Number(draft.scoreA);
        const scoreB = draft.scoreB.trim() === "" ? void 0 : Number(draft.scoreB);
        if (scoreA !== void 0 && (!Number.isFinite(scoreA) || !Number.isInteger(scoreA) || scoreA < 0 || scoreA > 99) || scoreB !== void 0 && (!Number.isFinite(scoreB) || !Number.isInteger(scoreB) || scoreB < 0 || scoreB > 99)) {
          setEditMatchError("Wynik musi być w zakresie 0-99");
          return;
        }
        const court = draft.court.trim() === "" ? void 0 : draft.court.trim();
        const jerseyInfo = `Team A: ${draft.jerseyA}, Team B: ${draft.jerseyB}`;
        await saveMatchMutation.mutateAsync({
          matchId: draft.id,
          teamAId: draft.teamAId,
          teamBId: draft.teamBId,
          scheduledAt,
          court,
          jerseyInfo,
          scoreA,
          scoreB
        });
      }
      await refreshMatches(tournament.id);
      await refreshRefereePlan(tournament.id);
      closeEditMatchDialog();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Nie udało się zaktualizować meczu";
      setEditMatchError(message);
    } finally {
      saveMatchMutation.reset();
    }
  }
  const newMatchDayOptionsForSelect = allowedNewDayTimestamps ? matchDayOptions.filter((o) => allowedNewDayTimestamps.includes(o.timestamp)) : matchDayOptions;
  const editDayOptions = editMatchDayTimestamp != null && !matchDayOptions.some((o) => o.timestamp === editMatchDayTimestamp) ? [...matchDayOptions, { timestamp: editMatchDayTimestamp, label: formatDayOptionLabel(editMatchDayTimestamp) }] : matchDayOptions;
  const addMatch = {
    open: addMatchOpen,
    loading: createMatchLoading,
    error: createMatchError,
    dayTimestamp: newMatchDayTimestamp,
    setDayTimestamp: setNewMatchDayTimestamp,
    teamAId: newMatchTeamAId,
    setTeamAId: setNewMatchTeamAId,
    teamBId: newMatchTeamBId,
    setTeamBId: setNewMatchTeamBId,
    startTime: newMatchStartTime,
    setStartTime: setNewMatchStartTime,
    endTime: newMatchEndTime,
    setEndTime: setNewMatchEndTime,
    court: newMatchCourt,
    setCourt: setNewMatchCourt,
    scoreA: newMatchScoreA,
    setScoreA: setNewMatchScoreA,
    scoreB: newMatchScoreB,
    setScoreB: setNewMatchScoreB,
    jerseyA: newMatchJerseyA,
    setJerseyA: setNewMatchJerseyA,
    jerseyB: newMatchJerseyB,
    setJerseyB: setNewMatchJerseyB,
    options: newMatchDayOptionsForSelect,
    openDialog: openAddMatchDialog,
    closeDialog: closeAddMatchDialog,
    submit: submitNewMatch
  };
  const editMatchControls = {
    open: editMatchOpen,
    loading: editMatchLoading,
    error: editMatchError,
    dayTimestamp: editMatchDayTimestamp,
    setDayTimestamp: setEditMatchDayTimestamp,
    drafts: editMatchDrafts,
    setDrafts: setEditMatchDrafts,
    match: editMatch,
    setMatch: setEditMatch,
    addRow: addAnotherEditMatchRow,
    openDialog: openEditMatchDialog,
    closeDialog: closeEditMatchDialog,
    submit: submitEditedMatch,
    options: editDayOptions
  };
  return { addMatch, editMatch: editMatchControls };
}

const DEFAULT_REFEREE_PLAN_START_TIME = "10:00";
const DEFAULT_REFEREE_PLAN_END_TIME = minutesToTime(10 * 60 + MATCH_DURATION_MINUTES);
const getRefereePlanEndFromStart = (startTime) => {
  const startMinutes = timeToMinutes(startTime);
  if (startMinutes == null) return DEFAULT_REFEREE_PLAN_END_TIME;
  return minutesToTime(startMinutes + MATCH_DURATION_MINUTES);
};
function useRefereePlanManager({
  tournament,
  matchDayOptions,
  refreshMatches
}) {
  const queryClient = useQueryClient();
  const tid = tournament?.id;
  const {
    data: refereePlanRows = [],
    isPending: refereePlanLoading,
    isError: refereePlanQueryError,
    error: refereePlanErr
  } = useQuery({
    queryKey: queryKeys.tournaments.refereePlan(tid ?? "__none__"),
    queryFn: ({ signal }) => fetchTournamentRefereePlan(tid, signal),
    enabled: Boolean(tid)
  });
  const refereePlanError = refereePlanQueryError && refereePlanErr instanceof Error ? refereePlanErr.message : null;
  const refereePlanByMatchId = useMemo(() => {
    const mapping = {};
    for (const row of refereePlanRows) {
      mapping[row.matchId] = row.refereeAssignments;
    }
    return mapping;
  }, [refereePlanRows]);
  const [addRefereePlanOpen, setAddRefereePlanOpen] = useState(false);
  const [createRefereePlanError, setCreateRefereePlanError] = useState(null);
  const [newRefereePlanDayTimestamp, setNewRefereePlanDayTimestamp] = useState(null);
  const [newRefereePlanTeamAId, setNewRefereePlanTeamAId] = useState("");
  const [newRefereePlanTeamBId, setNewRefereePlanTeamBId] = useState("");
  const [newRefereePlanStartTime, setNewRefereePlanStartTime] = useState(DEFAULT_REFEREE_PLAN_START_TIME);
  const [newRefereePlanEndTime, setNewRefereePlanEndTime] = useState(DEFAULT_REFEREE_PLAN_END_TIME);
  const [newRefereePlanCourt, setNewRefereePlanCourt] = useState("1");
  const [newRefereePlanReferee1Id, setNewRefereePlanReferee1Id] = useState("");
  const [newRefereePlanReferee2Id, setNewRefereePlanReferee2Id] = useState("");
  const [newRefereePlanTablePenaltyId, setNewRefereePlanTablePenaltyId] = useState("");
  const [newRefereePlanTableClockId, setNewRefereePlanTableClockId] = useState("");
  const [allowedNewRefereePlanDayTimestamps, setAllowedNewRefereePlanDayTimestamps] = useState(null);
  const [editRefereePlanOpen, setEditRefereePlanOpen] = useState(false);
  const [editRefereePlanDayTimestamp, setEditRefereePlanDayTimestamp] = useState(null);
  const [editRefereePlanError, setEditRefereePlanError] = useState(null);
  const [editRefereePlanDrafts, setEditRefereePlanDrafts] = useState([]);
  const createRefereePlanMutation = useMutation({
    mutationFn: (payload) => {
      if (!tid) throw new Error("Brak turnieju");
      return createTournamentRefereePlanEntry(tid, payload);
    }
  });
  const saveRefereePlanMutation = useMutation({
    mutationFn: (payload) => {
      if (!tid) throw new Error("Brak turnieju");
      const { matchId, ...body } = payload;
      if (!matchId) return createTournamentRefereePlanEntry(tid, body);
      return updateTournamentRefereePlanEntry(tid, matchId, body);
    }
  });
  const createRefereePlanLoading = createRefereePlanMutation.isPending;
  const editRefereePlanLoading = saveRefereePlanMutation.isPending;
  useEffect(() => {
    setNewRefereePlanEndTime(getRefereePlanEndFromStart(newRefereePlanStartTime));
  }, [newRefereePlanStartTime]);
  const refreshRefereePlan = useCallback(
    async (tournamentId) => {
      await queryClient.invalidateQueries({ queryKey: queryKeys.tournaments.refereePlan(tournamentId) });
    },
    [queryClient]
  );
  const newRefereePlanDayOptionsForSelect = useMemo(() => {
    if (allowedNewRefereePlanDayTimestamps) {
      return matchDayOptions.filter((o) => allowedNewRefereePlanDayTimestamps.includes(o.timestamp));
    }
    return matchDayOptions;
  }, [allowedNewRefereePlanDayTimestamps, matchDayOptions]);
  const editRefereePlanDayOptions = useMemo(() => {
    if (editRefereePlanDayTimestamp != null && !matchDayOptions.some((option) => option.timestamp === editRefereePlanDayTimestamp)) {
      return [
        ...matchDayOptions,
        { timestamp: editRefereePlanDayTimestamp, label: formatDayOptionLabel(editRefereePlanDayTimestamp) }
      ];
    }
    return matchDayOptions;
  }, [editRefereePlanDayTimestamp, matchDayOptions]);
  function openAddRefereePlanDialog(presetDayTimestamp, allowedDays) {
    if (!tournament) return;
    setAddRefereePlanOpen(true);
    setCreateRefereePlanError(null);
    createRefereePlanMutation.reset();
    setAllowedNewRefereePlanDayTimestamps(allowedDays ?? null);
    setNewRefereePlanDayTimestamp(presetDayTimestamp ?? matchDayOptions[0]?.timestamp ?? null);
    const [teamA, teamB] = tournament.teams;
    setNewRefereePlanTeamAId(teamA?.id ?? "");
    setNewRefereePlanTeamBId(teamB?.id ?? "");
    setNewRefereePlanStartTime(DEFAULT_REFEREE_PLAN_START_TIME);
    setNewRefereePlanCourt("1");
    const referees = tournament.referees;
    setNewRefereePlanReferee1Id(referees[0]?.id ?? "");
    setNewRefereePlanReferee2Id(referees[1]?.id ?? "");
    setNewRefereePlanTablePenaltyId(referees[2]?.id ?? "");
    setNewRefereePlanTableClockId(referees[3]?.id ?? "");
  }
  function closeAddRefereePlanDialog() {
    if (createRefereePlanLoading) return;
    setAddRefereePlanOpen(false);
    setCreateRefereePlanError(null);
    setAllowedNewRefereePlanDayTimestamps(null);
  }
  async function submitNewRefereePlan() {
    if (!tournament) return;
    if (!newRefereePlanDayTimestamp) {
      setCreateRefereePlanError("Wybierz dzień tygodnia");
      return;
    }
    if (allowedNewRefereePlanDayTimestamps && !allowedNewRefereePlanDayTimestamps.includes(newRefereePlanDayTimestamp)) {
      setCreateRefereePlanError("Wybierz wolny dzień (bez zaplanowanych meczów).");
      return;
    }
    if (!newRefereePlanTeamAId || !newRefereePlanTeamBId) {
      setCreateRefereePlanError("Wybierz drużyny A i B");
      return;
    }
    if (newRefereePlanTeamAId === newRefereePlanTeamBId) {
      setCreateRefereePlanError("Drużyny A i B muszą być różne");
      return;
    }
    const [hourRaw, minuteRaw] = newRefereePlanStartTime.split(":");
    const hour = Number(hourRaw);
    const minute = Number(minuteRaw);
    if (!Number.isFinite(hour) || !Number.isFinite(minute)) {
      setCreateRefereePlanError("Podaj poprawną godzinę");
      return;
    }
    const startMinutes = hour * 60 + minute;
    const minMinutes = 7 * 60;
    const maxMinutes = 22 * 60;
    const latestStartMinutes = maxMinutes - MATCH_DURATION_MINUTES;
    const endMinutes = startMinutes + MATCH_DURATION_MINUTES;
    if (startMinutes < minMinutes || startMinutes > latestStartMinutes) {
      setCreateRefereePlanError("Start musi być w przedziale 07:00-20:30");
      return;
    }
    if (endMinutes > maxMinutes) {
      setCreateRefereePlanError("Mecz musi zakończyć się najpóźniej o 22:00");
      return;
    }
    const day = new Date(newRefereePlanDayTimestamp);
    const scheduledAt = new Date(day.getFullYear(), day.getMonth(), day.getDate(), hour, minute, 0, 0).toISOString();
    const court = newRefereePlanCourt.trim() === "" ? void 0 : newRefereePlanCourt.trim();
    const referee1Id = newRefereePlanReferee1Id.trim() === "" ? void 0 : newRefereePlanReferee1Id.trim();
    const referee2Id = newRefereePlanReferee2Id.trim() === "" ? void 0 : newRefereePlanReferee2Id.trim();
    const tablePenaltyId = newRefereePlanTablePenaltyId.trim() === "" ? void 0 : newRefereePlanTablePenaltyId.trim();
    const tableClockId = newRefereePlanTableClockId.trim() === "" ? void 0 : newRefereePlanTableClockId.trim();
    createRefereePlanMutation.reset();
    setCreateRefereePlanError(null);
    try {
      await createRefereePlanMutation.mutateAsync({
        teamAId: newRefereePlanTeamAId,
        teamBId: newRefereePlanTeamBId,
        scheduledAt,
        court,
        referee1Id,
        referee2Id,
        tablePenaltyId,
        tableClockId
      });
      await refreshMatches(tournament.id);
      await refreshRefereePlan(tournament.id);
      setAddRefereePlanOpen(false);
    } catch (e) {
      setCreateRefereePlanError(e instanceof Error ? e.message : "Nie udało się utworzyć wpisu w planie sędziów");
    } finally {
      createRefereePlanMutation.reset();
    }
  }
  function openEditRefereePlanDialog(matchesToEdit) {
    if (!tournament) return;
    if (matchesToEdit.length === 0) return;
    setEditRefereePlanError(null);
    saveRefereePlanMutation.reset();
    const first = matchesToEdit[0];
    const d = new Date(first.scheduledAt);
    if (!Number.isNaN(d.getTime())) {
      setEditRefereePlanDayTimestamp(new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime());
    } else {
      setEditRefereePlanDayTimestamp(null);
    }
    setEditRefereePlanDrafts(
      matchesToEdit.map((match) => {
        const matchDate = new Date(match.scheduledAt);
        const hasValidMatchDate = !Number.isNaN(matchDate.getTime());
        const startTime = hasValidMatchDate ? `${pad2(matchDate.getHours())}:${pad2(matchDate.getMinutes())}` : DEFAULT_REFEREE_PLAN_START_TIME;
        const startMinutes = hasValidMatchDate ? matchDate.getHours() * 60 + matchDate.getMinutes() : 10 * 60;
        const endTime = minutesToTime(startMinutes + MATCH_DURATION_MINUTES);
        const assignments = refereePlanByMatchId[match.id] ?? {};
        return {
          id: match.id,
          teamAId: match.teamAId,
          teamBId: match.teamBId,
          startTime,
          endTime,
          court: match.court ?? "1",
          referee1Id: assignments.REFEREE_1 ?? "",
          referee2Id: assignments.REFEREE_2 ?? "",
          tablePenaltyId: assignments.TABLE_PENALTY ?? "",
          tableClockId: assignments.TABLE_CLOCK ?? ""
        };
      })
    );
    setEditRefereePlanOpen(true);
  }
  function closeEditRefereePlanDialog() {
    if (editRefereePlanLoading) return;
    setEditRefereePlanOpen(false);
    setEditRefereePlanDayTimestamp(null);
    setEditRefereePlanDrafts([]);
    setEditRefereePlanError(null);
  }
  function addAnotherEditRefereePlanRow() {
    if (!tournament) return;
    if (tournament.teams.length < 2) {
      setEditRefereePlanError("Brak wystarczającej liczby drużyn do utworzenia rozgrywki");
      return;
    }
    const teamAId = tournament.teams[0]?.id ?? "";
    const teamBId = tournament.teams.find((t) => t.id !== teamAId)?.id ?? teamAId;
    setEditRefereePlanDrafts((prev) => [
      ...prev,
      {
        teamAId,
        teamBId,
        startTime: DEFAULT_REFEREE_PLAN_START_TIME,
        endTime: DEFAULT_REFEREE_PLAN_END_TIME,
        court: "1",
        referee1Id: "",
        referee2Id: "",
        tablePenaltyId: "",
        tableClockId: ""
      }
    ]);
  }
  async function submitEditedRefereePlan() {
    if (!tournament) return;
    if (!editRefereePlanDayTimestamp) {
      setEditRefereePlanError("Wybierz dzień tygodnia");
      return;
    }
    if (editRefereePlanDrafts.length === 0) {
      setEditRefereePlanError("Brak pozycji do zapisania");
      return;
    }
    saveRefereePlanMutation.reset();
    setEditRefereePlanError(null);
    try {
      const day = new Date(editRefereePlanDayTimestamp);
      const minMinutes = 7 * 60;
      const maxMinutes = 22 * 60;
      const parsedStartTimes = [];
      for (const draft of editRefereePlanDrafts) {
        if (!draft.teamAId || !draft.teamBId) {
          setEditRefereePlanError("Wybierz drużyny A i B");
          return;
        }
        if (draft.teamAId === draft.teamBId) {
          setEditRefereePlanError("Drużyny A i B muszą być różne");
          return;
        }
        const [hourRaw, minuteRaw] = draft.startTime.split(":");
        const hour = Number(hourRaw);
        const minute = Number(minuteRaw);
        if (!Number.isFinite(hour) || !Number.isFinite(minute)) {
          setEditRefereePlanError("Podaj poprawny Start");
          return;
        }
        const startMinutes = hour * 60 + minute;
        const latestStartMinutes = maxMinutes - MATCH_DURATION_MINUTES;
        const endMinutes = startMinutes + MATCH_DURATION_MINUTES;
        if (startMinutes < minMinutes || startMinutes > latestStartMinutes) {
          setEditRefereePlanError("Start musi być w przedziale 07:00-20:30");
          return;
        }
        if (endMinutes > maxMinutes) {
          setEditRefereePlanError("Mecz musi zakończyć się najpóźniej o 22:00");
          return;
        }
        parsedStartTimes.push({ hour, minute });
      }
      for (let i = 0; i < editRefereePlanDrafts.length; i++) {
        const draft = editRefereePlanDrafts[i];
        const parsedStartTime = parsedStartTimes[i];
        if (!parsedStartTime) {
          setEditRefereePlanError("Nie udało się przygotować godziny zapisu");
          return;
        }
        const { hour, minute } = parsedStartTime;
        const scheduledAt = new Date(
          day.getFullYear(),
          day.getMonth(),
          day.getDate(),
          hour,
          minute,
          0,
          0
        ).toISOString();
        const court = draft.court.trim() === "" ? void 0 : draft.court.trim();
        const referee1Id = draft.referee1Id.trim() === "" ? void 0 : draft.referee1Id.trim();
        const referee2Id = draft.referee2Id.trim() === "" ? void 0 : draft.referee2Id.trim();
        const tablePenaltyId = draft.tablePenaltyId.trim() === "" ? void 0 : draft.tablePenaltyId.trim();
        const tableClockId = draft.tableClockId.trim() === "" ? void 0 : draft.tableClockId.trim();
        await saveRefereePlanMutation.mutateAsync({
          matchId: draft.id,
          teamAId: draft.teamAId,
          teamBId: draft.teamBId,
          scheduledAt,
          court,
          referee1Id,
          referee2Id,
          tablePenaltyId,
          tableClockId
        });
      }
      await refreshMatches(tournament.id);
      await refreshRefereePlan(tournament.id);
      closeEditRefereePlanDialog();
    } catch (e) {
      setEditRefereePlanError(e instanceof Error ? e.message : "Nie udało się zapisać wpisu w planie sędziów");
    } finally {
      saveRefereePlanMutation.reset();
    }
  }
  return {
    refereePlanByMatchId,
    refereePlanLoading,
    refereePlanError,
    refreshRefereePlan,
    add: {
      open: addRefereePlanOpen,
      loading: createRefereePlanLoading,
      error: createRefereePlanError,
      dayTimestamp: newRefereePlanDayTimestamp,
      setDayTimestamp: setNewRefereePlanDayTimestamp,
      teamAId: newRefereePlanTeamAId,
      setTeamAId: setNewRefereePlanTeamAId,
      teamBId: newRefereePlanTeamBId,
      setTeamBId: setNewRefereePlanTeamBId,
      startTime: newRefereePlanStartTime,
      setStartTime: setNewRefereePlanStartTime,
      endTime: newRefereePlanEndTime,
      setEndTime: setNewRefereePlanEndTime,
      court: newRefereePlanCourt,
      setCourt: setNewRefereePlanCourt,
      referee1Id: newRefereePlanReferee1Id,
      setReferee1Id: setNewRefereePlanReferee1Id,
      referee2Id: newRefereePlanReferee2Id,
      setReferee2Id: setNewRefereePlanReferee2Id,
      tablePenaltyId: newRefereePlanTablePenaltyId,
      setTablePenaltyId: setNewRefereePlanTablePenaltyId,
      tableClockId: newRefereePlanTableClockId,
      setTableClockId: setNewRefereePlanTableClockId,
      dayOptions: newRefereePlanDayOptionsForSelect,
      openDialog: openAddRefereePlanDialog,
      closeDialog: closeAddRefereePlanDialog,
      submit: submitNewRefereePlan
    },
    edit: {
      open: editRefereePlanOpen,
      loading: editRefereePlanLoading,
      error: editRefereePlanError,
      dayTimestamp: editRefereePlanDayTimestamp,
      setDayTimestamp: setEditRefereePlanDayTimestamp,
      drafts: editRefereePlanDrafts,
      setDrafts: setEditRefereePlanDrafts,
      dayOptions: editRefereePlanDayOptions,
      addRow: addAnotherEditRefereePlanRow,
      openDialog: openEditRefereePlanDialog,
      closeDialog: closeEditRefereePlanDialog,
      submit: submitEditedRefereePlan
    }
  };
}

const DEFAULT_START = "10:00";
const EXAM_DURATION_MINUTES = 30;
function isValidClassification(value) {
  return value >= 0 && value <= 4 && Number.isInteger(value * 2);
}
function getEnd(startTime) {
  const startMinutes = timeToMinutes(startTime);
  if (startMinutes == null) return "10:30";
  const h = Math.floor((startMinutes + EXAM_DURATION_MINUTES) / 60) % 24;
  const m = (startMinutes + EXAM_DURATION_MINUTES) % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
function toDayTimestamp(iso) {
  const d = new Date(iso);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}
function useClassifierPlanManager({
  tournament,
  matchDayOptions
}) {
  const queryClient = useQueryClient();
  const tid = tournament?.id;
  const storageKey = tid ? `wr-classifier-plan-days:${tid}` : null;
  const {
    data: classifierPlanRows = [],
    isPending: classifierPlanLoading,
    isError: classifierPlanQueryError,
    error: classifierPlanErr
  } = useQuery({
    queryKey: queryKeys.tournaments.classifierPlan(tid ?? "__none__"),
    queryFn: ({ signal }) => {
      if (!tid) throw new Error("Brak turnieju");
      return fetchTournamentClassifierPlan(tid, signal);
    },
    enabled: Boolean(tid)
  });
  const classifierPlanError = classifierPlanQueryError && classifierPlanErr instanceof Error ? classifierPlanErr.message : null;
  const [savedEmptyDays, setSavedEmptyDays] = useState([]);
  const [addOpen, setAddOpen] = useState(false);
  const [addError, setAddError] = useState(null);
  const [addDayTimestamp, setAddDayTimestamp] = useState(null);
  const [addPlayerId, setAddPlayerId] = useState("");
  const [addStartTime, setAddStartTime] = useState(DEFAULT_START);
  const [addEndTime, setAddEndTime] = useState(getEnd(DEFAULT_START));
  const [addClassification, setAddClassification] = useState("");
  const [addObservation, setAddObservation] = useState(false);
  const [addSearch, setAddSearch] = useState("");
  const [allowedAddDays, setAllowedAddDays] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [editError, setEditError] = useState(null);
  const [editDayTimestamp, setEditDayTimestamp] = useState(null);
  const [editDrafts, setEditDrafts] = useState([]);
  const createMutation = useMutation({
    mutationFn: (payload) => {
      if (!tid) throw new Error("Brak turnieju");
      return createTournamentClassifierPlanEntry(tid, payload);
    }
  });
  const saveMutation = useMutation({
    mutationFn: (payload) => {
      if (!tid) throw new Error("Brak turnieju");
      if (payload.examId) {
        return updateTournamentClassifierPlanEntry(tid, payload.examId, payload);
      }
      return createTournamentClassifierPlanEntry(tid, payload);
    }
  });
  const deleteMutation = useMutation({
    mutationFn: (examId) => {
      if (!tid) throw new Error("Brak turnieju");
      return deleteTournamentClassifierPlanEntry(tid, examId);
    }
  });
  const addDayOptions = useMemo(() => {
    if (allowedAddDays) return matchDayOptions.filter((o) => allowedAddDays.includes(o.timestamp));
    return matchDayOptions;
  }, [allowedAddDays, matchDayOptions]);
  const editDayOptions = useMemo(() => {
    if (editDayTimestamp == null || matchDayOptions.some((o) => o.timestamp === editDayTimestamp))
      return matchDayOptions;
    return [...matchDayOptions, { timestamp: editDayTimestamp, label: formatDayOptionLabel(editDayTimestamp) }];
  }, [editDayTimestamp, matchDayOptions]);
  const refreshClassifierPlan = useCallback(
    async (tournamentId) => {
      await queryClient.invalidateQueries({ queryKey: queryKeys.tournaments.classifierPlan(tournamentId) });
    },
    [queryClient]
  );
  useEffect(() => {
    if (!storageKey) return;
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) {
        setSavedEmptyDays([]);
        return;
      }
      const parsed = JSON.parse(raw);
      const arr = Array.isArray(parsed) ? parsed.filter((v) => typeof v === "number") : [];
      setSavedEmptyDays(arr);
    } catch {
      setSavedEmptyDays([]);
    }
  }, [storageKey]);
  useEffect(() => {
    if (!storageKey || matchDayOptions.length === 0) return;
    const allowed = new Set(matchDayOptions.map((o) => o.timestamp));
    setSavedEmptyDays((prev) => prev.filter((ts) => allowed.has(ts)));
  }, [matchDayOptions, storageKey]);
  useEffect(() => {
    if (!storageKey) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(savedEmptyDays));
    } catch {
    }
  }, [savedEmptyDays, storageKey]);
  const classifierDayTimestamps = useMemo(() => {
    const fromRows = classifierPlanRows.map((r) => toDayTimestamp(r.scheduledAt));
    return Array.from(/* @__PURE__ */ new Set([...fromRows, ...savedEmptyDays])).sort((a, b) => a - b);
  }, [classifierPlanRows, savedEmptyDays]);
  const canCreateNewDay = useMemo(() => {
    const used = new Set(classifierDayTimestamps);
    return matchDayOptions.some((o) => !used.has(o.timestamp));
  }, [classifierDayTimestamps, matchDayOptions]);
  const addEmptyDay = useCallback(
    (timestamp) => {
      setSavedEmptyDays((prev) => Array.from(/* @__PURE__ */ new Set([...prev, timestamp])).sort((a, b) => a - b));
    },
    [setSavedEmptyDays]
  );
  const removeDay = useCallback(
    (timestamp) => {
      setSavedEmptyDays((prev) => prev.filter((t) => t !== timestamp));
    },
    [setSavedEmptyDays]
  );
  function openAddDialog(presetDayTimestamp, allowedDays) {
    if (!tournament) return;
    setAddOpen(true);
    setAddError(null);
    createMutation.reset();
    setAllowedAddDays(allowedDays ?? null);
    setAddDayTimestamp(presetDayTimestamp ?? matchDayOptions[0]?.timestamp ?? null);
    const firstPlayer = tournament.teams.flatMap((t) => t.players ?? [])[0];
    setAddPlayerId(firstPlayer?.id ?? "");
    setAddStartTime(DEFAULT_START);
    setAddEndTime(getEnd(DEFAULT_START));
    setAddClassification("");
    setAddObservation(false);
    setAddSearch("");
  }
  function closeAddDialog() {
    if (createMutation.isPending) return;
    setAddOpen(false);
    setAddError(null);
    setAllowedAddDays(null);
  }
  async function submitAdd() {
    if (!tournament || !addDayTimestamp) return;
    if (!addPlayerId) return setAddError("Wybierz zawodnika");
    const startMinutes = timeToMinutes(addStartTime);
    if (startMinutes == null) return setAddError("Podaj poprawną godzinę startu");
    const endMinutes = timeToMinutes(addEndTime);
    if (endMinutes == null) return setAddError("Podaj poprawną godzinę zakończenia");
    const day = new Date(addDayTimestamp);
    const scheduledAtDate = new Date(
      day.getFullYear(),
      day.getMonth(),
      day.getDate(),
      Math.floor(startMinutes / 60),
      startMinutes % 60,
      0,
      0
    );
    const endsAtDate = new Date(
      day.getFullYear(),
      day.getMonth(),
      day.getDate(),
      Math.floor(endMinutes / 60),
      endMinutes % 60,
      0,
      0
    );
    if (endsAtDate.getTime() <= scheduledAtDate.getTime()) return setAddError("Koniec musi być po starcie");
    const scheduledAt = scheduledAtDate.toISOString();
    const endsAt = endsAtDate.toISOString();
    const classification = addClassification.trim() === "" ? void 0 : Number(addClassification);
    if (classification != null && !Number.isFinite(classification)) return setAddError("Podaj poprawną klasyfikację");
    if (classification != null && !isValidClassification(classification))
      return setAddError("Klasyfikacja musi być od 0 do 4 z krokiem 0.5");
    setAddError(null);
    try {
      await createMutation.mutateAsync({
        playerId: addPlayerId,
        scheduledAt,
        endsAt,
        classification,
        observation: addObservation
      });
      await refreshClassifierPlan(tournament.id);
      addEmptyDay(addDayTimestamp);
      setAddOpen(false);
    } catch (e) {
      setAddError(e instanceof Error ? e.message : "Nie udało się utworzyć wpisu planu klasyfikatorów");
    }
  }
  function openEditDialog(dayTimestamp) {
    if (!tournament) return;
    const rows = classifierPlanRows.filter((r) => toDayTimestamp(r.scheduledAt) === dayTimestamp);
    setEditDrafts(
      rows.map((row) => {
        const d = new Date(row.scheduledAt);
        const startTime = `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
        const e = new Date(row.endsAt);
        const endTime = `${String(e.getHours()).padStart(2, "0")}:${String(e.getMinutes()).padStart(2, "0")}`;
        return {
          id: row.examId,
          playerId: row.playerId,
          startTime,
          endTime,
          classification: row.classification != null ? String(row.classification) : "",
          observation: row.observation
        };
      })
    );
    setEditDayTimestamp(dayTimestamp);
    setEditError(null);
    setEditOpen(true);
  }
  function closeEditDialog() {
    if (saveMutation.isPending || deleteMutation.isPending) return;
    setEditOpen(false);
    setEditError(null);
    setEditDayTimestamp(null);
    setEditDrafts([]);
  }
  function addRow() {
    const firstPlayer = tournament?.teams.flatMap((t) => t.players ?? [])[0];
    setEditDrafts((prev) => [
      ...prev,
      {
        playerId: firstPlayer?.id ?? "",
        startTime: DEFAULT_START,
        endTime: getEnd(DEFAULT_START),
        classification: "",
        observation: false
      }
    ]);
  }
  async function submitEdit() {
    if (!tournament || !editDayTimestamp) return;
    setEditError(null);
    const day = new Date(editDayTimestamp);
    const payloads = [];
    for (const draft of editDrafts) {
      const startMinutes = timeToMinutes(draft.startTime);
      if (startMinutes == null) return setEditError("Podaj poprawną godzinę startu");
      const endMinutes = timeToMinutes(draft.endTime);
      if (endMinutes == null) return setEditError("Podaj poprawną godzinę zakończenia");
      if (!draft.playerId) return setEditError("Wybierz zawodnika");
      const scheduledAtDate = new Date(
        day.getFullYear(),
        day.getMonth(),
        day.getDate(),
        Math.floor(startMinutes / 60),
        startMinutes % 60,
        0,
        0
      );
      const endsAtDate = new Date(
        day.getFullYear(),
        day.getMonth(),
        day.getDate(),
        Math.floor(endMinutes / 60),
        endMinutes % 60,
        0,
        0
      );
      if (endsAtDate.getTime() <= scheduledAtDate.getTime()) return setEditError("Koniec musi być po starcie");
      const scheduledAt = scheduledAtDate.toISOString();
      const endsAt = endsAtDate.toISOString();
      const classification = draft.classification.trim() === "" ? void 0 : Number(draft.classification);
      if (classification != null && !Number.isFinite(classification))
        return setEditError("Podaj poprawną klasyfikację");
      if (classification != null && !isValidClassification(classification))
        return setEditError("Klasyfikacja musi być od 0 do 4 z krokiem 0.5");
      payloads.push({
        examId: draft.id,
        playerId: draft.playerId,
        scheduledAt,
        endsAt,
        classification,
        observation: draft.observation
      });
    }
    try {
      for (const payload of payloads) {
        await saveMutation.mutateAsync(payload);
      }
      await refreshClassifierPlan(tournament.id);
      addEmptyDay(editDayTimestamp);
      closeEditDialog();
    } catch (e) {
      setEditError(e instanceof Error ? e.message : "Nie udało się zapisać planu klasyfikatorów");
    }
  }
  async function deleteEntry(examId) {
    if (!tournament) return;
    try {
      await deleteMutation.mutateAsync(examId);
      await refreshClassifierPlan(tournament.id);
      setEditDrafts((prev) => prev.filter((d) => d.id !== examId));
    } catch (e) {
      setEditError(e instanceof Error ? e.message : "Nie udało się usunąć wpisu");
    }
  }
  return {
    classifierPlanRows,
    classifierPlanLoading,
    classifierPlanError,
    refreshClassifierPlan,
    classifierDayTimestamps,
    canCreateNewDay,
    addEmptyDay,
    removeDay,
    add: {
      open: addOpen,
      loading: createMutation.isPending,
      error: addError,
      dayTimestamp: addDayTimestamp,
      setDayTimestamp: setAddDayTimestamp,
      playerId: addPlayerId,
      setPlayerId: setAddPlayerId,
      startTime: addStartTime,
      setStartTime: setAddStartTime,
      endTime: addEndTime,
      setEndTime: setAddEndTime,
      classification: addClassification,
      setClassification: setAddClassification,
      observation: addObservation,
      setObservation: setAddObservation,
      search: addSearch,
      setSearch: setAddSearch,
      dayOptions: addDayOptions,
      openDialog: openAddDialog,
      closeDialog: closeAddDialog,
      submit: submitAdd
    },
    edit: {
      open: editOpen,
      loading: saveMutation.isPending || deleteMutation.isPending,
      error: editError,
      dayTimestamp: editDayTimestamp,
      setDayTimestamp: setEditDayTimestamp,
      drafts: editDrafts,
      setDrafts: setEditDrafts,
      dayOptions: editDayOptions,
      addRow,
      openDialog: openEditDialog,
      closeDialog: closeEditDialog,
      submit: submitEdit,
      deleteEntry
    }
  };
}

function useTournamentDetails(id) {
  const queryClient = useQueryClient();
  const [scheduleDayTimestamps, setScheduleDayTimestamps] = useState([]);
  const {
    data: tournament = null,
    isPending: loading,
    isError: tournamentQueryError,
    error: tournamentErr
  } = useQuery({
    queryKey: queryKeys.tournaments.detail(id),
    queryFn: ({ signal }) => fetchTournamentByIdOrNull(id, signal)
  });
  const error = tournamentQueryError && tournamentErr instanceof Error ? tournamentErr.message : null;
  const tournamentId = tournament?.id;
  const {
    data: matches = [],
    isPending: matchesLoading,
    isError: matchesQueryError,
    error: matchesErr
  } = useQuery({
    queryKey: queryKeys.tournaments.matches(tournamentId ?? "__none__"),
    queryFn: ({ signal }) => fetchTournamentMatches(tournamentId, signal),
    enabled: Boolean(tournamentId)
  });
  const matchesError = matchesQueryError && matchesErr instanceof Error ? matchesErr.message : null;
  useEffect(() => {
    if (!tournamentId) return;
    setScheduleDayTimestamps([]);
  }, [tournamentId]);
  const refetchTournament = useCallback(() => {
    void queryClient.invalidateQueries({ queryKey: queryKeys.tournaments.detail(id) });
  }, [queryClient, id]);
  const refreshTournament = useCallback(
    async (nextId) => {
      await queryClient.invalidateQueries({ queryKey: queryKeys.tournaments.detail(nextId) });
    },
    [queryClient]
  );
  const refreshMatches = useCallback(
    async (tid) => {
      await queryClient.invalidateQueries({ queryKey: queryKeys.tournaments.matches(tid) });
    },
    [queryClient]
  );
  const matchDayOptions = useMemo(
    () => buildMatchDayOptions(tournament?.startDate ?? "", tournament?.endDate ?? ""),
    [tournament?.startDate, tournament?.endDate]
  );
  const matchesDayTimestamps = useMemo(
    () => Array.from(new Set(matches.map((m) => getMatchDayTimestamp(m.scheduledAt)))).sort((a, b) => a - b),
    [matches]
  );
  const scheduleTableDayTimestamps = useMemo(
    () => Array.from(/* @__PURE__ */ new Set([...scheduleDayTimestamps, ...matchesDayTimestamps])).sort((a, b) => a - b),
    [matchesDayTimestamps, scheduleDayTimestamps]
  );
  const getScheduleDayLabel = useCallback(
    (timestamp) => matchDayOptions.find((o) => o.timestamp === timestamp)?.label ?? formatDayOptionLabel(timestamp),
    [matchDayOptions]
  );
  const hasMatchesOutsideTournamentRange = useMemo(() => {
    if (!tournament) return false;
    return matches.some(
      (m) => isScheduledDayOutsideTournamentRange(m.scheduledAt, tournament.startDate, tournament.endDate)
    );
  }, [tournament, matches]);
  const isScheduledDayOutsideTournamentRangeCb = useCallback(
    (scheduledAtIso) => tournament ? isScheduledDayOutsideTournamentRange(scheduledAtIso, tournament.startDate, tournament.endDate) : false,
    [tournament]
  );
  const isDayTimestampOutsideTournamentRangeCb = useCallback(
    (dayTimestamp) => tournament ? isDayTimestampOutsideTournamentRange(dayTimestamp, tournament.startDate, tournament.endDate) : false,
    [tournament]
  );
  return {
    tournament,
    loading,
    error,
    refetchTournament,
    matches,
    matchesLoading,
    matchesError,
    scheduleDayTimestamps,
    setScheduleDayTimestamps,
    matchDayOptions,
    scheduleTableDayTimestamps,
    getScheduleDayLabel,
    refreshTournament,
    refreshMatches,
    hasMatchesOutsideTournamentRange,
    isScheduledDayOutsideTournamentRange: isScheduledDayOutsideTournamentRangeCb,
    isDayTimestampOutsideTournamentRange: isDayTimestampOutsideTournamentRangeCb
  };
}

function useTournamentPersonnelManager({ tournament }) {
  const queryClient = useQueryClient();
  const seasonId = tournament?.seasonId;
  const [addTeamsOpen, setAddTeamsOpen] = useState(false);
  const [selectedTeamIds, setSelectedTeamIds] = useState([]);
  const [saveTeamsError, setSaveTeamsError] = useState(null);
  const [teamToRemove, setTeamToRemove] = useState(null);
  const [removeTeamError, setRemoveTeamError] = useState(null);
  const [selectedTeamForPlayers, setSelectedTeamForPlayers] = useState(null);
  const [selectedTeamPlayerIds, setSelectedTeamPlayerIds] = useState([]);
  const [saveTeamPlayersError, setSaveTeamPlayersError] = useState(null);
  const {
    data: availableTeams = [],
    isPending: availableTeamsLoading,
    isError: teamsQueryError,
    error: teamsErr
  } = useQuery({
    queryKey: queryKeys.teams.bySeason(seasonId ?? "__none__"),
    queryFn: ({ signal }) => {
      if (!seasonId) return Promise.reject(new Error("Missing season"));
      return fetchTeamsBySeason(seasonId, signal);
    },
    enabled: Boolean(seasonId && addTeamsOpen)
  });
  const availableTeamsError = teamsQueryError && teamsErr instanceof Error ? teamsErr.message : null;
  const saveTeamsMutation = useMutation({
    mutationFn: ({ tournamentId, teamIds }) => setTournamentTeams(tournamentId, teamIds),
    onSuccess: (_, { tournamentId }) => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.tournaments.detail(tournamentId) });
    }
  });
  const removeTeamMutation = useMutation({
    mutationFn: ({ tournamentId, teamId }) => removeTeamFromTournament(tournamentId, teamId),
    onSuccess: (_, { tournamentId }) => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.tournaments.detail(tournamentId) });
    }
  });
  const {
    data: selectedTeamPlayers = [],
    isPending: selectedTeamPlayersLoading,
    isError: selectedTeamPlayersQueryError,
    error: selectedTeamPlayersErr
  } = useQuery({
    queryKey: queryKeys.teams.players(selectedTeamForPlayers?.id ?? "__none__"),
    queryFn: async ({ signal }) => {
      if (!selectedTeamForPlayers) return [];
      const team = await fetchTeamById(selectedTeamForPlayers.id, signal);
      if (!team) return [];
      return (team.players ?? []).map((player) => ({
        id: player.id,
        label: `${player.firstName} ${player.lastName}`.trim()
      }));
    },
    enabled: Boolean(selectedTeamForPlayers)
  });
  const availableTeamPlayersError = selectedTeamPlayersQueryError && selectedTeamPlayersErr instanceof Error ? selectedTeamPlayersErr.message : null;
  const saveTeamPlayersMutation = useMutation({
    mutationFn: ({ tournamentId, teamId, playerIds }) => setTournamentTeamPlayers(tournamentId, teamId, playerIds),
    onSuccess: (_, { tournamentId }) => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.tournaments.detail(tournamentId) });
    }
  });
  const [addRefereesOpen, setAddRefereesOpen] = useState(false);
  const [selectedRefereeIds, setSelectedRefereeIds] = useState([]);
  const [saveRefereesError, setSaveRefereesError] = useState(null);
  const [refereeToRemove, setRefereeToRemove] = useState(null);
  const [removeRefereeError, setRemoveRefereeError] = useState(null);
  const {
    data: availableReferees = [],
    isPending: availableRefereesLoading,
    isError: refereesQueryError,
    error: refereesErr
  } = useQuery({
    queryKey: queryKeys.referees.bySeason(seasonId ?? "__none__"),
    queryFn: ({ signal }) => {
      if (!seasonId) return Promise.reject(new Error("Missing season"));
      return fetchPersonnelBySeason("/api/referees", seasonId, "Nie udało się pobrać sędziów", signal);
    },
    enabled: Boolean(seasonId && addRefereesOpen)
  });
  const availableRefereesError = refereesQueryError && refereesErr instanceof Error ? refereesErr.message : null;
  const saveRefereesMutation = useMutation({
    mutationFn: ({ tournamentId, refereeIds }) => setTournamentReferees(tournamentId, refereeIds),
    onSuccess: (_, { tournamentId }) => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.tournaments.detail(tournamentId) });
    }
  });
  const removeRefereeMutation = useMutation({
    mutationFn: ({ tournamentId, refereeId }) => removeRefereeFromTournament(tournamentId, refereeId),
    onSuccess: (_, { tournamentId }) => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.tournaments.detail(tournamentId) });
    }
  });
  const [addClassifiersOpen, setAddClassifiersOpen] = useState(false);
  const [selectedClassifierIds, setSelectedClassifierIds] = useState([]);
  const [saveClassifiersError, setSaveClassifiersError] = useState(null);
  const [classifierToRemove, setClassifierToRemove] = useState(null);
  const [removeClassifierError, setRemoveClassifierError] = useState(null);
  const {
    data: availableClassifiers = [],
    isPending: availableClassifiersLoading,
    isError: classifiersQueryError,
    error: classifiersErr
  } = useQuery({
    queryKey: queryKeys.classifiers.bySeason(seasonId ?? "__none__"),
    queryFn: ({ signal }) => {
      if (!seasonId) return Promise.reject(new Error("Missing season"));
      return fetchPersonnelBySeason("/api/classifiers", seasonId, "Nie udało się pobrać klasyfikatorów", signal);
    },
    enabled: Boolean(seasonId && addClassifiersOpen)
  });
  const availableClassifiersError = classifiersQueryError && classifiersErr instanceof Error ? classifiersErr.message : null;
  const saveClassifiersMutation = useMutation({
    mutationFn: ({ tournamentId, classifierIds }) => setTournamentClassifiers(tournamentId, classifierIds),
    onSuccess: (_, { tournamentId }) => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.tournaments.detail(tournamentId) });
    }
  });
  const removeClassifierMutation = useMutation({
    mutationFn: ({ tournamentId, classifierId }) => removeClassifierFromTournament(tournamentId, classifierId),
    onSuccess: (_, { tournamentId }) => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.tournaments.detail(tournamentId) });
    }
  });
  function openAddTeamsDialog() {
    if (!tournament) return;
    setAddTeamsOpen(true);
    setSaveTeamsError(null);
    setSelectedTeamIds(tournament.teams.map((t) => t.id));
  }
  function closeAddTeamsDialog() {
    if (saveTeamsMutation.isPending) return;
    setAddTeamsOpen(false);
    setSaveTeamsError(null);
  }
  function toggleSelectedTeam(teamId) {
    setSelectedTeamIds((prev) => prev.includes(teamId) ? prev.filter((id) => id !== teamId) : [...prev, teamId]);
  }
  async function saveSelectedTeams() {
    if (!tournament) return;
    if (selectedTeamIds.length === 0) {
      setSaveTeamsError("Wybierz przynajmniej jedną drużynę");
      return;
    }
    setSaveTeamsError(null);
    try {
      await saveTeamsMutation.mutateAsync({ tournamentId: tournament.id, teamIds: selectedTeamIds });
      setAddTeamsOpen(false);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Nie udało się dodać drużyn";
      setSaveTeamsError(message);
    }
  }
  function openRemoveTeamDialog(team) {
    setRemoveTeamError(null);
    setTeamToRemove(team);
  }
  function closeRemoveTeamDialog() {
    if (removeTeamMutation.isPending) return;
    setTeamToRemove(null);
    setRemoveTeamError(null);
  }
  async function confirmRemoveTeam() {
    if (!tournament || !teamToRemove) return;
    setRemoveTeamError(null);
    try {
      await removeTeamMutation.mutateAsync({ tournamentId: tournament.id, teamId: teamToRemove.id });
      setTeamToRemove(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Nie udało się usunąć drużyny z turnieju";
      setRemoveTeamError(message);
    }
  }
  function openEditTeamPlayersDialog(team) {
    setSelectedTeamForPlayers(team);
    setSelectedTeamPlayerIds((team.players ?? []).map((player) => player.id));
    setSaveTeamPlayersError(null);
  }
  function closeEditTeamPlayersDialog() {
    if (saveTeamPlayersMutation.isPending) return;
    setSelectedTeamForPlayers(null);
    setSelectedTeamPlayerIds([]);
    setSaveTeamPlayersError(null);
  }
  function toggleSelectedTeamPlayer(playerId) {
    setSelectedTeamPlayerIds(
      (prev) => prev.includes(playerId) ? prev.filter((currentId) => currentId !== playerId) : [...prev, playerId]
    );
  }
  async function saveSelectedTeamPlayers() {
    if (!tournament || !selectedTeamForPlayers) return;
    setSaveTeamPlayersError(null);
    try {
      await saveTeamPlayersMutation.mutateAsync({
        tournamentId: tournament.id,
        teamId: selectedTeamForPlayers.id,
        playerIds: selectedTeamPlayerIds
      });
      setSelectedTeamForPlayers(null);
      setSelectedTeamPlayerIds([]);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Nie udało się zapisać składu drużyny";
      setSaveTeamPlayersError(message);
    }
  }
  function openAddRefereesDialog() {
    if (!tournament) return;
    setAddRefereesOpen(true);
    setSaveRefereesError(null);
    setSelectedRefereeIds(tournament.referees.map((r) => r.id));
  }
  function closeAddRefereesDialog() {
    if (saveRefereesMutation.isPending) return;
    setAddRefereesOpen(false);
    setSaveRefereesError(null);
  }
  function toggleSelectedReferee(refereeId) {
    setSelectedRefereeIds(
      (prev) => prev.includes(refereeId) ? prev.filter((id) => id !== refereeId) : [...prev, refereeId]
    );
  }
  async function saveSelectedReferees() {
    if (!tournament) return;
    if (selectedRefereeIds.length === 0) {
      setSaveRefereesError("Wybierz przynajmniej jednego sędziego");
      return;
    }
    setSaveRefereesError(null);
    try {
      await saveRefereesMutation.mutateAsync({ tournamentId: tournament.id, refereeIds: selectedRefereeIds });
      setAddRefereesOpen(false);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Nie udało się dodać sędziów";
      setSaveRefereesError(message);
    }
  }
  function openRemoveRefereeDialog(person) {
    setRemoveRefereeError(null);
    setRefereeToRemove(person);
  }
  function closeRemoveRefereeDialog() {
    if (removeRefereeMutation.isPending) return;
    setRefereeToRemove(null);
    setRemoveRefereeError(null);
  }
  async function confirmRemoveReferee() {
    if (!tournament || !refereeToRemove) return;
    setRemoveRefereeError(null);
    try {
      await removeRefereeMutation.mutateAsync({ tournamentId: tournament.id, refereeId: refereeToRemove.id });
      setRefereeToRemove(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Nie udało się usunąć sędziego z turnieju";
      setRemoveRefereeError(message);
    }
  }
  function openAddClassifiersDialog() {
    if (!tournament) return;
    setAddClassifiersOpen(true);
    setSaveClassifiersError(null);
    setSelectedClassifierIds(tournament.classifiers.map((c) => c.id));
  }
  function closeAddClassifiersDialog() {
    if (saveClassifiersMutation.isPending) return;
    setAddClassifiersOpen(false);
    setSaveClassifiersError(null);
  }
  function toggleSelectedClassifier(classifierId) {
    setSelectedClassifierIds(
      (prev) => prev.includes(classifierId) ? prev.filter((id) => id !== classifierId) : [...prev, classifierId]
    );
  }
  async function saveSelectedClassifiers() {
    if (!tournament) return;
    if (selectedClassifierIds.length === 0) {
      setSaveClassifiersError("Wybierz przynajmniej jednego klasyfikatora");
      return;
    }
    setSaveClassifiersError(null);
    try {
      await saveClassifiersMutation.mutateAsync({
        tournamentId: tournament.id,
        classifierIds: selectedClassifierIds
      });
      setAddClassifiersOpen(false);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Nie udało się dodać klasyfikatorów";
      setSaveClassifiersError(message);
    }
  }
  function openRemoveClassifierDialog(person) {
    setRemoveClassifierError(null);
    setClassifierToRemove(person);
  }
  function closeRemoveClassifierDialog() {
    if (removeClassifierMutation.isPending) return;
    setClassifierToRemove(null);
    setRemoveClassifierError(null);
  }
  async function confirmRemoveClassifier() {
    if (!tournament || !classifierToRemove) return;
    setRemoveClassifierError(null);
    try {
      await removeClassifierMutation.mutateAsync({
        tournamentId: tournament.id,
        classifierId: classifierToRemove.id
      });
      setClassifierToRemove(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Nie udało się usunąć klasyfikatora z turnieju";
      setRemoveClassifierError(message);
    }
  }
  const teams = {
    addTeamsOpen,
    availableTeams,
    availableTeamsLoading,
    availableTeamsError,
    selectedTeamIds,
    saveTeamsLoading: saveTeamsMutation.isPending,
    saveTeamsError,
    teamToRemove,
    removeTeamLoading: removeTeamMutation.isPending,
    removeTeamError,
    selectedTeamForPlayers,
    editTeamPlayersOpen: Boolean(selectedTeamForPlayers),
    availableTeamPlayers: selectedTeamPlayers,
    availableTeamPlayersLoading: selectedTeamPlayersLoading,
    availableTeamPlayersError,
    selectedTeamPlayerIds,
    saveTeamPlayersLoading: saveTeamPlayersMutation.isPending,
    saveTeamPlayersError,
    openAddTeamsDialog,
    closeAddTeamsDialog,
    toggleSelectedTeam,
    saveSelectedTeams,
    openRemoveTeamDialog,
    closeRemoveTeamDialog,
    confirmRemoveTeam,
    openEditTeamPlayersDialog,
    closeEditTeamPlayersDialog,
    toggleSelectedTeamPlayer,
    saveSelectedTeamPlayers
  };
  const referees = {
    addRefereesOpen,
    availableReferees,
    availableRefereesLoading,
    availableRefereesError,
    selectedRefereeIds,
    saveRefereesLoading: saveRefereesMutation.isPending,
    saveRefereesError,
    refereeToRemove,
    removeRefereeLoading: removeRefereeMutation.isPending,
    removeRefereeError,
    openAddRefereesDialog,
    closeAddRefereesDialog,
    toggleSelectedReferee,
    saveSelectedReferees,
    openRemoveRefereeDialog,
    closeRemoveRefereeDialog,
    confirmRemoveReferee
  };
  const classifiers = {
    addClassifiersOpen,
    availableClassifiers,
    availableClassifiersLoading,
    availableClassifiersError,
    selectedClassifierIds,
    saveClassifiersLoading: saveClassifiersMutation.isPending,
    saveClassifiersError,
    classifierToRemove,
    removeClassifierLoading: removeClassifierMutation.isPending,
    removeClassifierError,
    openAddClassifiersDialog,
    closeAddClassifiersDialog,
    toggleSelectedClassifier,
    saveSelectedClassifiers,
    openRemoveClassifierDialog,
    closeRemoveClassifierDialog,
    confirmRemoveClassifier
  };
  return { teams, referees, classifiers };
}

const getPersonDisplayName = (person) => `${person.firstName ?? ""} ${person.lastName ?? ""}`.trim() || "—";
function TournamentDetails({ id }) {
  return /* @__PURE__ */ jsx(ThemeRegistry, { children: /* @__PURE__ */ jsx(AppShell, { currentPath: "/tournaments", containerMaxWidth: "xl", children: /* @__PURE__ */ jsx(QueryProvider, { children: /* @__PURE__ */ jsx(TournamentDetailsContent, { id }) }) }) });
}
function TournamentDetailsContent({ id }) {
  const [showPostEditDateHint, setShowPostEditDateHint] = useState(false);
  const [teamsPersonnelRowExpanded, setTeamsPersonnelRowExpanded] = useState(true);
  const {
    tournament,
    loading,
    error,
    refetchTournament,
    matches,
    matchesLoading,
    matchesError,
    setScheduleDayTimestamps,
    matchDayOptions,
    scheduleTableDayTimestamps,
    getScheduleDayLabel,
    refreshMatches,
    hasMatchesOutsideTournamentRange,
    isDayTimestampOutsideTournamentRange
  } = useTournamentDetails(id);
  useEffect(() => {
    const key = `wr-tournament-dates-edited:${id}`;
    try {
      if (sessionStorage.getItem(key)) {
        sessionStorage.removeItem(key);
        setShowPostEditDateHint(true);
      }
    } catch {
    }
  }, [id]);
  const queryClient = useQueryClient();
  const deleteMatchMutation = useMutation({
    mutationFn: ({ tournamentId, matchId }) => deleteTournamentMatch(tournamentId, matchId),
    onSuccess: (_, { tournamentId }) => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.tournaments.detail(tournamentId) });
    }
  });
  const deleteMatchDayMutation = useMutation({
    mutationFn: async ({ tournamentId, matchIds }) => {
      const results = await Promise.allSettled(matchIds.map((matchId) => deleteTournamentMatch(tournamentId, matchId)));
      const failures = results.filter((r) => r.status === "rejected");
      if (failures.length > 0) {
        throw new Error(`Nie udało się usunąć ${failures.length} z ${matchIds.length} meczów`);
      }
    },
    onSuccess: (_, { tournamentId }) => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.tournaments.detail(tournamentId) });
    }
  });
  const refereePlanManager = useRefereePlanManager({
    tournament,
    matches,
    matchDayOptions,
    refreshMatches
  });
  const { add: addRefereePlan } = refereePlanManager;
  const matchManager = useMatchPlanManager({
    tournament,
    matches,
    refreshMatches,
    refreshRefereePlan: refereePlanManager.refreshRefereePlan,
    matchDayOptions
  });
  const { addMatch, editMatch } = matchManager;
  const [matchToDelete, setMatchToDelete] = useState(null);
  const [deleteMatchError, setDeleteMatchError] = useState(null);
  const [matchDayToDelete, setMatchDayToDelete] = useState(null);
  const [deleteMatchDayError, setDeleteMatchDayError] = useState(null);
  const [classifierDayToDelete, setClassifierDayToDelete] = useState(null);
  const [deleteClassifierDayError, setDeleteClassifierDayError] = useState(null);
  const [deleteClassifierDayLoading, setDeleteClassifierDayLoading] = useState(false);
  const personnel = useTournamentPersonnelManager({ tournament });
  const { teams, referees, classifiers } = personnel;
  const classifierPlanManager = useClassifierPlanManager({ tournament, matchDayOptions });
  const { add: addClassifierPlan, edit: editClassifierPlan } = classifierPlanManager;
  if (loading) {
    return /* @__PURE__ */ jsx(Box, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ jsx(CircularProgress, {}) });
  }
  if (error) {
    return /* @__PURE__ */ jsx(DataLoadAlert, { message: error, onRetry: refetchTournament, sx: { mb: 3 } });
  }
  if (!tournament) {
    return /* @__PURE__ */ jsx(Typography, { children: "Nie znaleziono turnieju." });
  }
  function jerseyValueToNounLabel(value) {
    return value === "jasne" ? "Jasne" : "Ciemne";
  }
  function closeDeleteMatchDialog() {
    if (deleteMatchMutation.isPending) return;
    setMatchToDelete(null);
    setDeleteMatchError(null);
  }
  async function confirmDeleteMatch() {
    if (!tournament || !matchToDelete) return;
    const deletedId = matchToDelete.id;
    setDeleteMatchError(null);
    try {
      await deleteMatchMutation.mutateAsync({ tournamentId: tournament.id, matchId: matchToDelete.id });
      editMatch.setDrafts((prev) => prev.filter((d) => d.id !== deletedId));
      if (editMatch.match?.id === deletedId) editMatch.setMatch(null);
      setMatchToDelete(null);
    } catch (e) {
      setDeleteMatchError(e instanceof Error ? e.message : "Nie udało się usunąć meczu");
    }
  }
  function closeDeleteMatchDayDialog() {
    if (deleteMatchDayMutation.isPending) return;
    setMatchDayToDelete(null);
    setDeleteMatchDayError(null);
  }
  async function confirmDeleteMatchDay() {
    if (!tournament || matchDayToDelete == null) return;
    setDeleteMatchDayError(null);
    try {
      const dayMatches = matches.filter((m) => getMatchDayTimestamp(m.scheduledAt) === matchDayToDelete);
      const matchIds = dayMatches.map((m) => m.id);
      await deleteMatchDayMutation.mutateAsync({ tournamentId: tournament.id, matchIds });
      setScheduleDayTimestamps((prev) => prev.filter((ts) => ts !== matchDayToDelete));
      setMatchDayToDelete(null);
    } catch (e) {
      setDeleteMatchDayError(e instanceof Error ? e.message : "Nie udało się usunąć dnia");
    }
  }
  async function confirmDeleteClassifierDay() {
    if (!tournament || classifierDayToDelete == null) return;
    setDeleteClassifierDayError(null);
    setDeleteClassifierDayLoading(true);
    try {
      const toDelete = classifierPlanManager.classifierPlanRows.filter(
        (row) => getMatchDayTimestamp(row.scheduledAt) === classifierDayToDelete
      );
      const results = await Promise.allSettled(
        toDelete.map((row) => deleteTournamentClassifierPlanEntry(tournament.id, row.examId))
      );
      const failures = results.filter((r) => r.status === "rejected");
      if (failures.length > 0) {
        throw new Error(`Nie udało się usunąć ${failures.length} z ${toDelete.length} wpisów`);
      }
      await classifierPlanManager.refreshClassifierPlan(tournament.id);
      classifierPlanManager.removeDay(classifierDayToDelete);
      setClassifierDayToDelete(null);
    } catch (e) {
      setDeleteClassifierDayError(e instanceof Error ? e.message : "Nie udało się usunąć dnia planu klasyfikatorów");
    } finally {
      setDeleteClassifierDayLoading(false);
    }
  }
  const createOpenNewDayHandler = (openDialog) => {
    return () => {
      if (!tournament) return;
      if (tournament.teams.length < 2) return;
      const used = new Set(scheduleTableDayTimestamps);
      const freeDayOptions = (matchDayOptions ?? []).filter((o) => !used.has(o.timestamp));
      const nextDay = freeDayOptions[0]?.timestamp ?? null;
      if (!nextDay) return;
      openDialog(
        nextDay,
        freeDayOptions.map((o) => o.timestamp)
      );
    };
  };
  const openNewDayTable = createOpenNewDayHandler(addMatch.openDialog);
  const openNewDayRefereePlanTable = createOpenNewDayHandler(addRefereePlan.openDialog);
  const openNewDayClassifierPlanTable = () => {
    if (!tournament) return;
    const used = new Set(classifierPlanManager.classifierDayTimestamps);
    const freeDayOptions = (matchDayOptions ?? []).filter((o) => !used.has(o.timestamp));
    const nextDay = freeDayOptions[0]?.timestamp ?? null;
    if (!nextDay) return;
    addClassifierPlan.openDialog(
      nextDay,
      freeDayOptions.map((o) => o.timestamp)
    );
  };
  const showScheduleDateAlert = showPostEditDateHint || hasMatchesOutsideTournamentRange;
  return /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 4 }, children: [
    /* @__PURE__ */ jsx(TournamentHeader, { id, tournament }),
    showScheduleDateAlert ? /* @__PURE__ */ jsx(
      Alert,
      {
        severity: hasMatchesOutsideTournamentRange ? "error" : "warning",
        variant: "outlined",
        onClose: showPostEditDateHint && !hasMatchesOutsideTournamentRange ? () => setShowPostEditDateHint(false) : void 0,
        children: hasMatchesOutsideTournamentRange ? /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "span", children: "Część meczów jest zaplanowana poza aktualnymi datami turnieju. Zaktualizuj terminy w planie rozgrywek i w planie sędziów." }) : /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "span", children: "Daty turnieju zostały zmienione. Sprawdź i zaktualizuj terminy meczów w planie rozgrywek oraz w planie sędziów — stare daty nie przesuwają się automatycznie." })
      }
    ) : null,
    /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 4, width: "100%", minWidth: 0 }, children: [
      /* @__PURE__ */ jsx(TournamentInfoPanels, { tournament }),
      /* @__PURE__ */ jsxs(
        Box,
        {
          sx: {
            border: 1,
            borderColor: "divider",
            borderRadius: 3,
            bgcolor: "background.paper",
            overflow: "hidden"
          },
          children: [
            /* @__PURE__ */ jsxs(
              Box,
              {
                component: "button",
                type: "button",
                id: "tournament-teams-personnel-toggle",
                onClick: () => setTeamsPersonnelRowExpanded((open) => !open),
                "aria-expanded": teamsPersonnelRowExpanded,
                "aria-controls": "tournament-teams-personnel-region",
                sx: {
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 2,
                  px: 2,
                  py: 1.5,
                  border: "none",
                  bgcolor: "background.paper",
                  cursor: "pointer",
                  textAlign: "left",
                  "&:hover": { bgcolor: "background.default" }
                },
                children: [
                  /* @__PURE__ */ jsx(Typography, { component: "span", variant: "subtitle1", sx: { fontWeight: "bold" }, children: "Drużyny / Sędziowie / Klasyfikatorzy" }),
                  /* @__PURE__ */ jsx(
                    ChevronDown,
                    {
                      size: 22,
                      style: {
                        flexShrink: 0,
                        transition: "transform 0.2s ease",
                        transform: teamsPersonnelRowExpanded ? "rotate(180deg)" : "rotate(0deg)"
                      }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(Collapse, { in: teamsPersonnelRowExpanded, children: /* @__PURE__ */ jsx(
              Box,
              {
                id: "tournament-teams-personnel-region",
                role: "region",
                "aria-labelledby": "tournament-teams-personnel-toggle",
                sx: { p: 2, pt: 0 },
                children: /* @__PURE__ */ jsxs(
                  Box,
                  {
                    sx: {
                      display: "grid",
                      gridTemplateColumns: { xs: "minmax(0, 1fr)", lg: "repeat(3, minmax(0, 1fr))" },
                      gap: 2,
                      width: "100%",
                      minWidth: 0,
                      alignItems: "stretch"
                    },
                    children: [
                      /* @__PURE__ */ jsx(
                        TournamentTeamsPanel,
                        {
                          tournament,
                          openAddTeamsDialog: teams.openAddTeamsDialog,
                          openRemoveTeamDialog: teams.openRemoveTeamDialog,
                          openEditTeamPlayersDialog: teams.openEditTeamPlayersDialog,
                          removeTeamLoading: teams.removeTeamLoading,
                          teamToRemove: teams.teamToRemove
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TournamentRefereesPanel,
                        {
                          tournament,
                          personDisplayName: getPersonDisplayName,
                          openAddRefereesDialog: referees.openAddRefereesDialog,
                          openRemoveRefereeDialog: referees.openRemoveRefereeDialog,
                          removeRefereeLoading: referees.removeRefereeLoading,
                          refereeToRemove: referees.refereeToRemove
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        TournamentClassifiersPanel,
                        {
                          tournament,
                          personDisplayName: getPersonDisplayName,
                          openAddClassifiersDialog: classifiers.openAddClassifiersDialog,
                          openRemoveClassifierDialog: classifiers.openRemoveClassifierDialog,
                          removeClassifierLoading: classifiers.removeClassifierLoading,
                          classifierToRemove: classifiers.classifierToRemove
                        }
                      )
                    ]
                  }
                )
              }
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Box,
        {
          sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            gap: 4,
            minWidth: 0,
            width: {
              xs: "calc(100% + 48px)",
              sm: "calc(100% + 64px)",
              md: "calc(100% + 80px)",
              lg: "100%"
            },
            mx: { xs: -3, sm: -4, md: -5, lg: 0 }
          },
          children: [
            /* @__PURE__ */ jsx(
              TournamentMatchesPlanPanel,
              {
                tournament,
                matches,
                matchesLoading,
                matchesError,
                onRetryMatches: () => void refreshMatches(tournament.id),
                scheduleTableDayTimestamps,
                parseJerseyInfo,
                jerseyValueToNounLabel,
                getMatchDayTimestamp,
                getScheduleDayLabel,
                openAddMatchDialog: addMatch.openDialog,
                openNewDayTable,
                openEditMatchDialog: editMatch.openDialog,
                setMatchDayToDelete,
                deleteMatchDayLoading: deleteMatchDayMutation.isPending,
                matchDayToDelete,
                isDayOutOfRange: isDayTimestampOutsideTournamentRange
              }
            ),
            /* @__PURE__ */ jsx(
              TournamentRefereePlanPanel,
              {
                tournament,
                matches,
                refereePlanByMatchId: refereePlanManager.refereePlanByMatchId,
                refereePlanLoading: refereePlanManager.refereePlanLoading,
                refereePlanError: refereePlanManager.refereePlanError,
                onRetryRefereePlan: () => void refereePlanManager.refreshRefereePlan(tournament.id),
                scheduleTableDayTimestamps,
                getMatchDayTimestamp,
                getScheduleDayLabel,
                openAddRefereePlanDialog: addRefereePlan.openDialog,
                openNewDayRefereePlanTable,
                personDisplayName: getPersonDisplayName,
                setMatchDayToDelete,
                deleteMatchDayLoading: deleteMatchDayMutation.isPending,
                matchDayToDelete,
                isDayOutOfRange: isDayTimestampOutsideTournamentRange
              }
            ),
            /* @__PURE__ */ jsx(
              TournamentClassifierPlanPanel,
              {
                tournament,
                rows: classifierPlanManager.classifierPlanRows,
                loading: classifierPlanManager.classifierPlanLoading,
                error: classifierPlanManager.classifierPlanError,
                onRetry: () => void classifierPlanManager.refreshClassifierPlan(tournament.id),
                scheduleTableDayTimestamps: classifierPlanManager.classifierDayTimestamps,
                getScheduleDayLabel,
                openAddDialog: addClassifierPlan.openDialog,
                openNewDayTable: openNewDayClassifierPlanTable,
                canCreateNewDay: classifierPlanManager.canCreateNewDay,
                hasMatches: matches.length > 0,
                openEditDialog: editClassifierPlan.openDialog,
                setDayToDelete: setClassifierDayToDelete,
                deleteDayLoading: deleteClassifierDayLoading,
                dayToDelete: classifierDayToDelete,
                isDayOutOfRange: isDayTimestampOutsideTournamentRange
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(AddMatchDialog, { addMatch, tournament }),
    /* @__PURE__ */ jsx(
      EditMatchDialog,
      {
        editMatch,
        tournament,
        matches,
        deleteMatchLoading: deleteMatchMutation.isPending,
        setMatchToDelete,
        setDeleteMatchError
      }
    ),
    /* @__PURE__ */ jsx(
      AddRefereePlanDialog,
      {
        addRefereePlan,
        tournament,
        personDisplayName: getPersonDisplayName
      }
    ),
    /* @__PURE__ */ jsx(AddClassifierPlanDialog, { addClassifierPlan, tournament }),
    /* @__PURE__ */ jsx(EditClassifierPlanDialog, { editClassifierPlan, tournament }),
    /* @__PURE__ */ jsx(
      TournamentDetailsDialogs,
      {
        tournament,
        matchToDelete,
        matchDayToDelete,
        classifierDayToDelete,
        deleteMatchLoading: deleteMatchMutation.isPending,
        deleteMatchError,
        deleteMatchDayLoading: deleteMatchDayMutation.isPending,
        deleteMatchDayError,
        deleteClassifierDayLoading,
        deleteClassifierDayError,
        getScheduleDayLabel,
        closeDeleteMatchDialog,
        confirmDeleteMatch,
        closeDeleteMatchDayDialog,
        confirmDeleteMatchDay,
        closeDeleteClassifierDayDialog: () => setClassifierDayToDelete(null),
        confirmDeleteClassifierDay,
        teams,
        referees,
        classifiers,
        getPersonDisplayName
      }
    )
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const { id } = Astro2.params;
  if (!id) return Astro2.redirect("/tournaments");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Szczegóły turnieju" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TournamentDetails", TournamentDetails, { "id": id, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/features/tournaments/components/TournamentDetails/TournamentDetails", "client:component-export": "default" })} ` })}`;
}, "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/tournaments/[id]/index.astro", void 0);

const $$file = "E:/z_Gita/Wheelchair-Rugby-Tournament-Manager/src/pages/tournaments/[id]/index.astro";
const $$url = "/tournaments/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
