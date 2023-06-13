import React from "react";
import { debounce } from "@patternfly/react-core";
import {
  Table,
  Thead,
  Th,
  Tr,
  Tbody,
  Td
} from "@patternfly/react-table";
import releaseNotes from "release-notes-data.js";

export const ReleaseNotesTable = () => {
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
                        isExpanded: row.isOpen,
                        onToggle: this.onCollapse,
                        expandId: `release-notes-expandable-toggle-${this.props.prefix}`
                      }
                      : undefined
                  }
                />
                <Td dataLabel="Component">{row.cells[0]}</Td>
                <Td dataLabel="Repo">{row.cells[1]}</Td>
                <Td dataLabel="Description">{row.cells[2]}</Td>
                <Td dataLabel="PR link">{row.cells[3]}</Td>
                <Td dataLabel="Fixed with code mod">{row.cells[4]}</Td>
              </Tr>
              {row.details ? (
                <Tr isExpanded={row.isOpen}>
                  <Td />
                  <Td dataLabel="Details" colSpan={5}>{row.details}</Td>
                </Tr>
              ) : null}
            </Tbody>
          ))}
      </Table>
    </React.Fragment>
  )
}
