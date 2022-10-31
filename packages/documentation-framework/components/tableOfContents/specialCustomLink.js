import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/JumpLinks/jump-links';
import { JumpLinksList } from '@patternfly/react-core';
import {Link} from "@patternfly/documentation-framework/components";

export const SpecialCustomLink = ({
  isActive,
  href,
  // eslint-disable-next-line
  node,
  children,
  onClick,
  className,
  ...props
}) => {
  const childrenArr = React.Children.toArray(children);
  const sublists = childrenArr.filter(child => child.type === JumpLinksList);
  children = childrenArr.filter(child => child.type !== JumpLinksList);

  return (
    <li
      className={css(styles.jumpLinksItem, isActive && styles.modifiers.current, className)}
      {...(isActive && { 'aria-current': 'location' })}
      {...props}
    >
      <a className={styles.jumpLinksLink} href={href} onClick={onClick}>
        <span className={styles.jumpLinksLinkText}>{children}</span>
      </a>
      {sublists}
    </li>
  );
};
