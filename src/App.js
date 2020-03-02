import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Navbar,
  NavbarHeading,
  Alignment,
  Menu,
  MenuItem,
  Popover,
  Position,
  Classes
} from "@blueprintjs/core";

import { Column, Table, Cell } from "@blueprintjs/table";

import { Tab, Tabs } from "@blueprintjs/core";

class TableDollarExample extends React.PureComponent {
  render() {
    const cellRenderer = rowIndex => (
      <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
    );
    return (
      <>
        <Table numRows={this.props.numRows}>
          <Column name="Dollars" cellRenderer={cellRenderer} />
        </Table>
      </>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanelOnly: true
    };
  }

  render() {
    const FileMenu = () => {
      return (
        <Menu>
          <MenuItem text="From local disk" />
          <MenuItem text="From Public URL" />
          <MenuItem text="Connected Google Drive" />
        </Menu>
      );
    };

    return (
      <>
        <Navbar>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Excellence Editor</Navbar.Heading>
            <Navbar.Divider />
            <Button className={Classes.MINIMAL} icon="home" text="Home" />
            <Popover content={<FileMenu />} position={Position.RIGHT_TOP}>
              <Button icon="archive" text="Open CSV File" />
            </Popover>
          </Navbar.Group>
        </Navbar>
        <Tabs
          animate={this.state.animate}
          id="TabsExample"
          key={this.state.vertical ? "vertical" : "horizontal"}
          renderActiveTabPanelOnly={this.state.activePanelOnly}
          vertical={this.state.vertical}
        >
          <Tab
            id="rx"
            title="Table1"
            panel={<TableDollarExample numRows={12} />}
          />
          <Tab
            id="ng"
            title="Table2"
            panel={<TableDollarExample numRows={15} />}
          />
        </Tabs>
      </>
    );
  }
}

export default App;
