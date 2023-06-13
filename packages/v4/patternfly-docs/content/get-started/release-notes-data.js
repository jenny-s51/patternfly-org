import React from "react";
import { CodeBlock, CodeBlockCode, TextContent, Text, TextList, TextListItem } from '@patternfly/react-core';

export releaseNotes = [
  {
    component: "Card",
    description: "Updates design for selectable and clickable cards",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5409",
    repo: "html/css",
    fixedWithCodeMod: false
  }, {
    component: "Card",
    description: "Refactors the card header code to be more flexible and improves the visual appearance of card header items\n",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5280",
    repo: "html/css",
    fixedWithCodeMod: false
  }, {
    component: "Card",
    description: "Refactors the card title to be more flexible, and changes the default card title font weight to normal",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5363",
    repo: "html/css",
    fixedWithCodeMod: false
  }
  , {
    component: "Card",
    description: "Deprecate various props",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5363",
    details: (
      <TextContent>
        <Text component={TextVariants.p}>The following props have been deprecated on card:</Text>
        <TextList>
          <TextListItem>isSelectableRaised</TextListItem>
          <TextListItem>isDisabledRaised</TextListItem>
          <TextListItem>hasSelectableInput</TextListItem>
          <TextListItem>selectableInputAriaLabel</TextListItem>
          <TextListItem>selectableInputAriaLabel</TextListItem>
        </TextList>
        <Text component={TextVariants.p}>
          We recommend using our new implementation of clickable and selectable cards instead. Code mods will raise a warning, but can provide fixes when using the isSelectableRaised or isDisabledRaised props.
        </Text>
        <Text component={TextVariants.h2}>Example in</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Card isSelectableRaised isDisabledRaised />
<Card isSelectableRaised hasSelectableInput />`}
          </CodeBlockCode>
        </CodeBlock>
        <Text component={TextVariants.h2}>Example out</Text>
        <CodeBlock>
          <CodeBlockCode>
            {`<Card isSelectable isDisabled />
<Card isSelectable hasSelectableInput tabIndex={0} />`}
          </CodeBlockCode>
        </CodeBlock>
      </TextContent>
    ),
    repo: "react",
    fixedWithCodeMod: true
  }
];
