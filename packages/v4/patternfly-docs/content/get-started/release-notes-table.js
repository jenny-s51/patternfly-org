import React from "react";
import { debounce } from "@patternfly/react-core";
import {
  Table,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
  ExpandableRowContent
} from "@patternfly/react-table";
import { releaseNotes } from "./release-notes-data.js";

export const ReleaseNotesTable = () => {
  const onCollapse = () => {};

  // need to build a toolbar which allows for string searching across components, descriptions, and details
  // toolbar should also have checkboxes or toggles to filter based on repo & fixed by codemods

  // the components column should be sorted (maybe sortable)
  // expand/collapse not yet working.

  return (
    <React.Fragment>
      <Table
        variant="compact"
        aria-label="PatternFly 5 release notes"
      >
        <Thead>
          <Tr>
            <Th />
            <Th>Component</Th>
            <Th>Repo</Th>
            <Th>Description</Th>
            <Th>PR link</Th>
            <Th>Fixed with code mod</Th>
          </Tr>
        </Thead>
        {releaseNotes.map((row, rowIndex) => (
            <Tbody key={rowIndex} isExpanded={row.isOpen}>
              <Tr>
                <Td
                  expand={
                    row.details
                      ? {
                        rowIndex,
                        isExpanded: true,
                        onToggle: onCollapse,
                        expandId: `release-notes-expandable-toggle-${row.pullRequestURL}`
                      }
                      : undefined
                  }
                />
                <Td dataLabel="Component">{row.component}</Td>
                <Td dataLabel="Repo">{row.repo}</Td>
                <Td dataLabel="Description">{row.description}</Td>
                <Td dataLabel="PR link"><a target="_blank" href={row.pullRequestURL}>#{row.pullRequestURL.slice(-4)}</a></Td>
                <Td dataLabel="Fixed with code mod">{row.fixedWithCodeMod ? "Yes" : "No"}</Td>
              </Tr>
              {row.details ? (
                <Tr isExpanded={true}>
                  <Td />
                  <Td dataLabel="Details" colSpan={4}><ExpandableRowContent>{row.details}</ExpandableRowContent></Td>
                </Tr>
              ) : null}
            </Tbody>
          ))}
      </Table>
    </React.Fragment>
  )
}
