import React from "react";

import "./assets/styles/root.scss";

// DataDisplay
export const Avatar = React.lazy(() =>
  import("./stories/DataDisplay/Avatar").then((module) => ({
    default: module.Avatar,
  })),
);

export const Image = React.lazy(() =>
  import("./stories/DataDisplay/Image").then((module) => ({
    default: module.Image,
  })),
);

export const Typography = React.lazy(() =>
  import("./stories/DataDisplay/Typography").then((module) => ({
    default: module.Typography,
  })),
);

// FEEDBACK
export const Skeleton = React.lazy(() =>
  import("./stories/Feedback/Skeleton").then((module) => ({
    default: module.Skeleton,
  })),
);

export const Dialog = React.lazy(() =>
  import("./stories/Feedback/Dialog").then((module) => ({
    default: module.Dialog,
  })),
);

// FORM
export const FormControl = React.lazy(() =>
  import("./stories/Form/FormControl").then((module) => ({
    default: module.FormControl,
  })),
);

export const FormControlLabel = React.lazy(() =>
  import("./stories/Form/FormControlLabel").then((module) => ({
    default: module.FormControlLabel,
  })),
);

export const FormLabel = React.lazy(() =>
  import("./stories/Form/FormLabel").then((module) => ({
    default: module.FormLabel,
  })),
);

// INPUTS
export const Button = React.lazy(() =>
  import("./stories/Inputs/Button").then((module) => ({
    default: module.Button,
  })),
);

export const ButtonGroup = React.lazy(() =>
  import("./stories/Inputs/ButtonGroup").then((module) => ({
    default: module.ButtonGroup,
  })),
);

export const Checkbox = React.lazy(() =>
  import("./stories/Inputs/Checkbox").then((module) => ({
    default: module.Checkbox,
  })),
);

export const Radio = React.lazy(() =>
  import("./stories/Inputs/Radio").then((module) => ({
    default: module.Radio,
  })),
);

export const RadioGroup = React.lazy(() =>
  import("./stories/Inputs/RadioGroup").then((module) => ({
    default: module.RadioGroup,
  })),
);

export const TextField = React.lazy(() =>
  import("./stories/Inputs/TextField").then((module) => ({
    default: module.TextField,
  })),
);

export const Select = React.lazy(() =>
  import("./stories/Inputs/Select").then((module) => ({
    default: module.Select,
  })),
);

export const Switch = React.lazy(() =>
  import("./stories/Inputs/Switch").then((module) => ({
    default: module.Switch,
  })),
);

// ICONS
export { Icon, Icons } from "./stories/Icons";

// LAYOUT
export const Box = React.lazy(() =>
  import("./stories/Layout/Box").then((module) => ({
    default: module.Box,
  })),
);

export const Grid = React.lazy(() =>
  import("./stories/Layout/Grid").then((module) => ({
    default: module.Grid,
  })),
);

export const GridRuler = React.lazy(() =>
  import("./stories/Layout/GridRuler").then((module) => ({
    default: module.GridRuler,
  })),
);

export const Flex = React.lazy(() =>
  import("./stories/Layout/Flex").then((module) => ({
    default: module.Flex,
  })),
);

// NAVIGATION
export const Link = React.lazy(() =>
  import("./stories/Navigation/Link").then((module) => ({
    default: module.Link,
  })),
);

export const Menu = React.lazy(() =>
  import("./stories/Navigation/Menu").then((module) => ({
    default: module.Menu,
  })),
);

export const MenuTrigger = React.lazy(() =>
  import("./stories/Navigation/Menu").then((module) => ({
    default: module.MenuTrigger,
  })),
);

export const MenuContent = React.lazy(() =>
  import("./stories/Navigation/Menu").then((module) => ({
    default: module.MenuContent,
  })),
);

export const MenuItem = React.lazy(() =>
  import("./stories/Navigation/Menu").then((module) => ({
    default: module.MenuItem,
  })),
);

// SURFACES
export const AppBar = React.lazy(() =>
  import("./stories/Surfaces/AppBar").then((module) => ({
    default: module.AppBar,
  })),
);

export const Card = React.lazy(() =>
  import("./stories/Surfaces/Card").then((module) => ({
    default: module.Card,
  })),
);

export const CardHeader = React.lazy(() =>
  import("./stories/Surfaces/Card").then((module) => ({
    default: module.CardHeader,
  })),
);

export const CardMedia = React.lazy(() =>
  import("./stories/Surfaces/Card").then((module) => ({
    default: module.CardMedia,
  })),
);

export const Accordion = React.lazy(() =>
  import("./stories/Surfaces/Accordion").then((module) => ({
    default: module.Accordion,
  })),
);

export const CardActions = React.lazy(() =>
  import("./stories/Surfaces/Card").then((module) => ({
    default: module.CardActions,
  })),
);

export const CardContent = React.lazy(() =>
  import("./stories/Surfaces/Card").then((module) => ({
    default: module.CardContent,
  })),
);

// PROVIDERS
export * from "./system/base.provider";
