import * as React from 'react';
import { g as generateUtilityClass, i as generateUtilityClasses, j as useDefaultProps, a as composeClasses, l as styled, o as memoTheme, P as PropTypes, x as capitalize } from './ThemeRegistry_D8eYcNmV.mjs';
import { C as clsx } from './sequence_C_bNAUSZ.mjs';
import { jsx } from 'react/jsx-runtime';

/**
 * @ignore - internal component.
 */
const TableContext = /*#__PURE__*/React.createContext();
if (process.env.NODE_ENV !== 'production') {
  TableContext.displayName = 'TableContext';
}

function getTableUtilityClass(slot) {
  return generateUtilityClass('MuiTable', slot);
}
generateUtilityClasses('MuiTable', ['root', 'stickyHeader']);

const useUtilityClasses$5 = ownerState => {
  const {
    classes,
    stickyHeader
  } = ownerState;
  const slots = {
    root: ['root', stickyHeader && 'stickyHeader']
  };
  return composeClasses(slots, getTableUtilityClass, classes);
};
const TableRoot = styled('table', {
  name: 'MuiTable',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.stickyHeader && styles.stickyHeader];
  }
})(memoTheme(({
  theme
}) => ({
  display: 'table',
  width: '100%',
  borderCollapse: 'collapse',
  borderSpacing: 0,
  '& caption': {
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: (theme.vars || theme).palette.text.secondary,
    textAlign: 'left',
    captionSide: 'bottom'
  },
  variants: [{
    props: ({
      ownerState
    }) => ownerState.stickyHeader,
    style: {
      borderCollapse: 'separate'
    }
  }]
})));
const defaultComponent$3 = 'table';
const Table = /*#__PURE__*/React.forwardRef(function Table(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiTable'
  });
  const {
    className,
    component = defaultComponent$3,
    padding = 'normal',
    size = 'medium',
    stickyHeader = false,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    padding,
    size,
    stickyHeader
  };
  const classes = useUtilityClasses$5(ownerState);
  const table = React.useMemo(() => ({
    padding,
    size,
    stickyHeader
  }), [padding, size, stickyHeader]);
  return /*#__PURE__*/jsx(TableContext.Provider, {
    value: table,
    children: /*#__PURE__*/jsx(TableRoot, {
      as: component,
      role: component === defaultComponent$3 ? null : 'table',
      ref: ref,
      className: clsx(classes.root, className),
      ownerState: ownerState,
      ...other
    })
  });
});
process.env.NODE_ENV !== "production" ? Table.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the table, normally `TableHead` and `TableBody`.
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
   * Allows TableCells to inherit padding of the Table.
   * @default 'normal'
   */
  padding: PropTypes.oneOf(['checkbox', 'none', 'normal']),
  /**
   * Allows TableCells to inherit size of the Table.
   * @default 'medium'
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['medium', 'small']), PropTypes.string]),
  /**
   * Set the header sticky.
   * @default false
   */
  stickyHeader: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;

/**
 * @ignore - internal component.
 */
const Tablelvl2Context = /*#__PURE__*/React.createContext();
if (process.env.NODE_ENV !== 'production') {
  Tablelvl2Context.displayName = 'Tablelvl2Context';
}

function getTableBodyUtilityClass(slot) {
  return generateUtilityClass('MuiTableBody', slot);
}
generateUtilityClasses('MuiTableBody', ['root']);

const useUtilityClasses$4 = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getTableBodyUtilityClass, classes);
};
const TableBodyRoot = styled('tbody', {
  name: 'MuiTableBody',
  slot: 'Root'
})({
  display: 'table-row-group'
});
const tablelvl2$1 = {
  variant: 'body'
};
const defaultComponent$2 = 'tbody';
const TableBody = /*#__PURE__*/React.forwardRef(function TableBody(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiTableBody'
  });
  const {
    className,
    component = defaultComponent$2,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses$4(ownerState);
  return /*#__PURE__*/jsx(Tablelvl2Context.Provider, {
    value: tablelvl2$1,
    children: /*#__PURE__*/jsx(TableBodyRoot, {
      className: clsx(classes.root, className),
      as: component,
      ref: ref,
      role: component === defaultComponent$2 ? null : 'rowgroup',
      ownerState: ownerState,
      ...other
    })
  });
});
process.env.NODE_ENV !== "production" ? TableBody.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `TableRow`.
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;

function getTableCellUtilityClass(slot) {
  return generateUtilityClass('MuiTableCell', slot);
}
const tableCellClasses = generateUtilityClasses('MuiTableCell', ['root', 'head', 'body', 'footer', 'sizeSmall', 'sizeMedium', 'paddingCheckbox', 'paddingNone', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'stickyHeader']);

const useUtilityClasses$3 = ownerState => {
  const {
    classes,
    variant,
    align,
    padding,
    size,
    stickyHeader
  } = ownerState;
  const slots = {
    root: ['root', variant, stickyHeader && 'stickyHeader', align !== 'inherit' && `align${capitalize(align)}`, padding !== 'normal' && `padding${capitalize(padding)}`, `size${capitalize(size)}`]
  };
  return composeClasses(slots, getTableCellUtilityClass, classes);
};
const TableCellRoot = styled('td', {
  name: 'MuiTableCell',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`size${capitalize(ownerState.size)}`], ownerState.padding !== 'normal' && styles[`padding${capitalize(ownerState.padding)}`], ownerState.align !== 'inherit' && styles[`align${capitalize(ownerState.align)}`], ownerState.stickyHeader && styles.stickyHeader];
  }
})(memoTheme(({
  theme
}) => ({
  ...theme.typography.body2,
  display: 'table-cell',
  verticalAlign: 'inherit',
  // Workaround for a rendering bug with spanned columns in Chrome 62.0.
  // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
  borderBottom: theme.vars ? `1px solid ${theme.vars.palette.TableCell.border}` : `1px solid
    ${theme.palette.mode === 'light' ? theme.lighten(theme.alpha(theme.palette.divider, 1), 0.88) : theme.darken(theme.alpha(theme.palette.divider, 1), 0.68)}`,
  textAlign: 'left',
  padding: 16,
  variants: [{
    props: {
      variant: 'head'
    },
    style: {
      color: (theme.vars || theme).palette.text.primary,
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightMedium
    }
  }, {
    props: {
      variant: 'body'
    },
    style: {
      color: (theme.vars || theme).palette.text.primary
    }
  }, {
    props: {
      variant: 'footer'
    },
    style: {
      color: (theme.vars || theme).palette.text.secondary,
      lineHeight: theme.typography.pxToRem(21),
      fontSize: theme.typography.pxToRem(12)
    }
  }, {
    props: {
      size: 'small'
    },
    style: {
      padding: '6px 16px',
      [`&.${tableCellClasses.paddingCheckbox}`]: {
        width: 24,
        // prevent the checkbox column from growing
        padding: '0 12px 0 16px',
        '& > *': {
          padding: 0
        }
      }
    }
  }, {
    props: {
      padding: 'checkbox'
    },
    style: {
      width: 48,
      // prevent the checkbox column from growing
      padding: '0 0 0 4px'
    }
  }, {
    props: {
      padding: 'none'
    },
    style: {
      padding: 0
    }
  }, {
    props: {
      align: 'left'
    },
    style: {
      textAlign: 'left'
    }
  }, {
    props: {
      align: 'center'
    },
    style: {
      textAlign: 'center'
    }
  }, {
    props: {
      align: 'right'
    },
    style: {
      textAlign: 'right',
      flexDirection: 'row-reverse'
    }
  }, {
    props: {
      align: 'justify'
    },
    style: {
      textAlign: 'justify'
    }
  }, {
    props: ({
      ownerState
    }) => ownerState.stickyHeader,
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 2,
      backgroundColor: (theme.vars || theme).palette.background.default
    }
  }]
})));

/**
 * The component renders a `<th>` element when the parent context is a header
 * or otherwise a `<td>` element.
 */
const TableCell = /*#__PURE__*/React.forwardRef(function TableCell(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiTableCell'
  });
  const {
    align = 'inherit',
    className,
    component: componentProp,
    padding: paddingProp,
    scope: scopeProp,
    size: sizeProp,
    sortDirection,
    variant: variantProp,
    ...other
  } = props;
  const table = React.useContext(TableContext);
  const tablelvl2 = React.useContext(Tablelvl2Context);
  const isHeadCell = tablelvl2 && tablelvl2.variant === 'head';
  let component;
  if (componentProp) {
    component = componentProp;
  } else {
    component = isHeadCell ? 'th' : 'td';
  }
  let scope = scopeProp;
  // scope is not a valid attribute for <td/> elements.
  // source: https://html.spec.whatwg.org/multipage/tables.html#the-td-element
  if (component === 'td') {
    scope = undefined;
  } else if (!scope && isHeadCell) {
    scope = 'col';
  }
  const variant = variantProp || tablelvl2 && tablelvl2.variant;
  const ownerState = {
    ...props,
    align,
    component,
    padding: paddingProp || (table && table.padding ? table.padding : 'normal'),
    size: sizeProp || (table && table.size ? table.size : 'medium'),
    sortDirection,
    stickyHeader: variant === 'head' && table && table.stickyHeader,
    variant
  };
  const classes = useUtilityClasses$3(ownerState);
  let ariaSort = null;
  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }
  return /*#__PURE__*/jsx(TableCellRoot, {
    as: component,
    ref: ref,
    className: clsx(classes.root, className),
    "aria-sort": ariaSort,
    scope: scope,
    ownerState: ownerState,
    ...other
  });
});
process.env.NODE_ENV !== "production" ? TableCell.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the table cell content.
   *
   * Monetary or generally number fields **should be right aligned** as that allows
   * you to add them up quickly in your head without having to worry about decimals.
   * @default 'inherit'
   */
  align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
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
   * Sets the padding applied to the cell.
   * The prop defaults to the value (`'default'`) inherited from the parent Table component.
   */
  padding: PropTypes.oneOf(['checkbox', 'none', 'normal']),
  /**
   * Set scope attribute.
   */
  scope: PropTypes.string,
  /**
   * Specify the size of the cell.
   * The prop defaults to the value (`'medium'`) inherited from the parent Table component.
   */
  size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['medium', 'small']), PropTypes.string]),
  /**
   * Set aria-sort direction.
   */
  sortDirection: PropTypes.oneOf(['asc', 'desc', false]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Specify the cell type.
   * The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['body', 'footer', 'head']), PropTypes.string])
} : void 0;

function getTableContainerUtilityClass(slot) {
  return generateUtilityClass('MuiTableContainer', slot);
}
generateUtilityClasses('MuiTableContainer', ['root']);

const useUtilityClasses$2 = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getTableContainerUtilityClass, classes);
};
const TableContainerRoot = styled('div', {
  name: 'MuiTableContainer',
  slot: 'Root'
})({
  width: '100%',
  overflowX: 'auto'
});
const TableContainer = /*#__PURE__*/React.forwardRef(function TableContainer(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiTableContainer'
  });
  const {
    className,
    component = 'div',
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses$2(ownerState);
  return /*#__PURE__*/jsx(TableContainerRoot, {
    ref: ref,
    as: component,
    className: clsx(classes.root, className),
    ownerState: ownerState,
    ...other
  });
});
process.env.NODE_ENV !== "production" ? TableContainer.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `Table`.
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;

function getTableHeadUtilityClass(slot) {
  return generateUtilityClass('MuiTableHead', slot);
}
generateUtilityClasses('MuiTableHead', ['root']);

const useUtilityClasses$1 = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getTableHeadUtilityClass, classes);
};
const TableHeadRoot = styled('thead', {
  name: 'MuiTableHead',
  slot: 'Root'
})({
  display: 'table-header-group'
});
const tablelvl2 = {
  variant: 'head'
};
const defaultComponent$1 = 'thead';
const TableHead = /*#__PURE__*/React.forwardRef(function TableHead(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiTableHead'
  });
  const {
    className,
    component = defaultComponent$1,
    ...other
  } = props;
  const ownerState = {
    ...props,
    component
  };
  const classes = useUtilityClasses$1(ownerState);
  return /*#__PURE__*/jsx(Tablelvl2Context.Provider, {
    value: tablelvl2,
    children: /*#__PURE__*/jsx(TableHeadRoot, {
      as: component,
      className: clsx(classes.root, className),
      ref: ref,
      role: component === defaultComponent$1 ? null : 'rowgroup',
      ownerState: ownerState,
      ...other
    })
  });
});
process.env.NODE_ENV !== "production" ? TableHead.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `TableRow`.
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;

function getTableRowUtilityClass(slot) {
  return generateUtilityClass('MuiTableRow', slot);
}
const tableRowClasses = generateUtilityClasses('MuiTableRow', ['root', 'selected', 'hover', 'head', 'footer']);

const useUtilityClasses = ownerState => {
  const {
    classes,
    selected,
    hover,
    head,
    footer
  } = ownerState;
  const slots = {
    root: ['root', selected && 'selected', hover && 'hover', head && 'head', footer && 'footer']
  };
  return composeClasses(slots, getTableRowUtilityClass, classes);
};
const TableRowRoot = styled('tr', {
  name: 'MuiTableRow',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.head && styles.head, ownerState.footer && styles.footer];
  }
})(memoTheme(({
  theme
}) => ({
  color: 'inherit',
  display: 'table-row',
  verticalAlign: 'middle',
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${tableRowClasses.hover}:hover`]: {
    backgroundColor: (theme.vars || theme).palette.action.hover
  },
  [`&.${tableRowClasses.selected}`]: {
    backgroundColor: theme.alpha((theme.vars || theme).palette.primary.main, (theme.vars || theme).palette.action.selectedOpacity),
    '&:hover': {
      backgroundColor: theme.alpha((theme.vars || theme).palette.primary.main, `${(theme.vars || theme).palette.action.selectedOpacity} + ${(theme.vars || theme).palette.action.hoverOpacity}`)
    }
  }
})));
const defaultComponent = 'tr';
/**
 * Will automatically set dynamic row height
 * based on the material table element parent (head, body, etc).
 */
const TableRow = /*#__PURE__*/React.forwardRef(function TableRow(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiTableRow'
  });
  const {
    className,
    component = defaultComponent,
    hover = false,
    selected = false,
    ...other
  } = props;
  const tablelvl2 = React.useContext(Tablelvl2Context);
  const ownerState = {
    ...props,
    component,
    hover,
    selected,
    head: tablelvl2 && tablelvl2.variant === 'head',
    footer: tablelvl2 && tablelvl2.variant === 'footer'
  };
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/jsx(TableRowRoot, {
    as: component,
    ref: ref,
    className: clsx(classes.root, className),
    role: component === defaultComponent ? null : 'row',
    ownerState: ownerState,
    ...other
  });
});
process.env.NODE_ENV !== "production" ? TableRow.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Should be valid `<tr>` children such as `TableCell`.
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
   * If `true`, the table row will shade on hover.
   * @default false
   */
  hover: PropTypes.bool,
  /**
   * If `true`, the table row will have the selected shading.
   * @default false
   */
  selected: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;

export { TableContainer as T, Table as a, TableHead as b, TableRow as c, TableCell as d, TableBody as e };
