// @flow
/* eslint-disable no-unused-expressions, no-undef */

declare type NodeType = 'FORK' | 'INLINE_LEAF' | 'LEAF';

declare type ComputedStyle = { [prop: string]: string };

declare type Styles = {
  nodeId: number,
  parentComputedStyle: ComputedStyle,
  computedStyle: ComputedStyle,
  inlineStyle: CSSStyle,
  attributesStyle: CSSStyle,
  matchedCSSRules: RuleMatch[],
  inherited: Object,
  pseudoElements: Object,
  cssKeyframesRules: Object,
};