import { MakeStylesStyleRule } from '@fluentui/make-styles';
import { Theme } from '@fluentui/react-theme';

export const createFocusIndicatorStyleRule = (
  rule: MakeStylesStyleRule<Theme>,
): MakeStylesStyleRule<Theme> => theme => ({
  ':focus-visible': {
    outline: 'none',
  },
  '.foo :focus': typeof rule === 'function' ? rule(theme) : rule,
});
