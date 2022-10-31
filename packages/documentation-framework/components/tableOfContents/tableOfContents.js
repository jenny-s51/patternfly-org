import React from "react";
import {JumpLinks, JumpLinksItem, JumpLinksList} from "@patternfly/react-core";
import {trackEvent} from "../../helpers";
import {SpecialCustomLink} from "./specialCustomLink";
import {findLastKey} from "lodash-es";

export const TableOfContents = ({items}) => {
  // Used to recalculate JumpLinks offset if screen size changes
  const [width, setWidth] = React.useState(window.innerWidth);
  // Used to calculate where TOC is positioned in smaller viewports
  const [stickyNavHeight, setStickyNavHeight] = React.useState(0);
  const [activeLink, setActiveLink] = React.useState("examples");

  React.useEffect(() => {
    if (document.getElementById("ws-sticky-nav-tabs")) {
      setStickyNavHeight(
        document.getElementById("ws-sticky-nav-tabs").offsetHeight
      );
    }
  }, []);

  const updateWidth = () => {
    const {innerWidth} = window;
    innerWidth !== width && setWidth(innerWidth);
  };
  let jumpLinksItems = [];
  let wasSublistRendered = false;
  const renderSublist = (item, nextItemArr) => {
    wasSublistRendered = true;
    return (
      <>
        {item.text}
        <JumpLinksList>
          {nextItemArr.map((curItem) => (
            <JumpLinksItem
              key={curItem.id}
              href={`#${curItem.id}`}
              className="ws-toc-item"
              onKeyDown={updateWidth}
              onMouseDown={updateWidth}
              // isActive={window.location.href.endsWith(`#${curItem.id}`)}
              // isActive={window.location.href.endsWith(`#${curItem.id}`)}
              onClick={(e) => {
                // e.preventDefault();
                trackEvent(
                  "jump_link_click",
                  "click_event",
                  curItem.id.toUpperCase()
                );
                (window.location.href =
                  window.location.pathname + `#${curItem.id}`)
              }}
            >
              {curItem.text}
            </JumpLinksItem>
          ))}
        </JumpLinksList>
      </>
    );
  };

  const renderJumpLinksItems = () => {
    items.forEach((item, index) => {
      let nextItem = items[index + 1];
      // Don't render empty <JumpLinksItem> for an array of sublist items
      if (wasSublistRendered) {
        wasSublistRendered = false;
        return;
      }
      if (!Array.isArray(nextItem) && Array.isArray(item)) {
        {
          item.map((curItem) =>
            jumpLinksItems.push(
              <JumpLinksItem
                key={curItem.id}
                href={`#${curItem.id}`}
                className="ws-toc-item"
                onKeyDown={updateWidth}
                onMouseDown={updateWidth}
                // isActive={window.location.href.endsWith(`#${curItem.id}`)}
                onClick={() =>
                  (window.location.href =
                    window.location.pathname + `#${curItem.id}`)
                }

                // onClick={(e) => {
                //   e.preventDefault();
                //   trackEvent(
                //     "jump_link_click",
                //     "click_event",
                //     curItem.id.toUpperCase()
                //     // console.log(curItem.id)
                //   );
                // }}
              >
                {curItem.text}
              </JumpLinksItem>
            )
          );
        }
      } else {
        jumpLinksItems.push(
          <JumpLinksItem
            key={item.id}
            href={`#${item.id}`}
            className="ws-toc-item"
            onKeyDown={updateWidth}
            onMouseDown={updateWidth}
            // isActive={window.location.href.endsWith(`#${item.id}`)}
            onClick={() =>
              (window.location.href = window.location.pathname + `#${item.id}`)
            }

            // onClick={(e) => {
            //   e.preventDefault;
            //   trackEvent(
            //     "jump_link_click",
            //     "click_event",
            //     item.id.toUpperCase()
            //     // console.log(item.id)
            //   );
            // }}
          >
            {Array.isArray(nextItem)
              ? renderSublist(item, nextItem)
              : item.text}
          </JumpLinksItem>
        );
      }
    });
    return jumpLinksItems;
  };

  return (
    <JumpLinks
      label="Table of contents"
      isVertical
      scrollableSelector="#ws-page-main"
      className="ws-toc"
      style={{top: stickyNavHeight}}
      offset={width > 1450 ? 108 + stickyNavHeight : 148 + stickyNavHeight}
      expandable={{default: "expandable", "2xl": "nonExpandable"}}
    >
      {renderJumpLinksItems()}
    </JumpLinks>
  );
};
