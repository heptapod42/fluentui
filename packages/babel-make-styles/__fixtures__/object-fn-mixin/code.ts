import { makeStyles } from '@fluentui/react-make-styles';
import { createFocusIndicatorStyleRule } from './mixin';

export const useStyles = makeStyles({
  root: createFocusIndicatorStyleRule(theme => ({
    border: `1px solid ${theme.alias.color.neutral.neutralForeground1}`,
    borderRadius: '2px',
  })),
  label: createFocusIndicatorStyleRule({
    color: 'red',
  }),
});
