import React from 'react';
import {
  Button,
  Dropdown,
  DropdownPosition,
  DropdownToggle,
  DropdownItem,
  KebabToggle,
  TextInput,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import flexStyles from '@patternfly/patternfly-next/utilities/Flex/flex.css';
import spacingStyles from '@patternfly/patternfly-next/utilities/Spacing/spacing.css';
import { ListUlIcon, SortAlphaDownIcon, TableIcon } from '@patternfly/react-icons';

class SimpleToolbarDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropDownOpen: false,
      isKebabOpen: false,
      searchValue: ''
    };
  }

  handleTextInputChange = value => {
    this.setState({ searchValue: value });
  };

  onDropDownToggle = isOpen => {
    this.setState({
      isDropDownOpen: isOpen
    });
  };

  onDropDownSelect = event => {
    this.setState({
      isDropDownOpen: !this.state.isDropDownOpen
    });
  };

  onKebabToggle = isOpen => {
    this.setState({
      isKebabOpen: isOpen
    });
  };

  onKebabSelect = event => {
    this.setState({
      isKebabOpen: !this.state.isKebabOpen
    });
  };
  buildSearchBox = () => {
    const { value } = this.state.searchValue;
    return (
      <TextInput value={value} type="search" onChange={this.handleTextInputChange} aria-label="search text input" />
    );
  };
  buildDropdown = () => {
    const { isDropDownOpen } = this.state;
    return (
      <Dropdown
        onToggle={this.onDropDownToggle}
        onSelect={this.onDropDownSelect}
        position={DropdownPosition.right}
        toggle={<DropdownToggle onToggle={this.onDropDownToggle}>All</DropdownToggle>}
        isOpen={isDropDownOpen}
        dropdownItems={[
          <DropdownItem key="item-1">Item 1</DropdownItem>,
          <DropdownItem key="item2">Item 2</DropdownItem>,
          <DropdownItem key="item-3">Item 3</DropdownItem>,
          <DropdownItem isDisabled key="all">All</DropdownItem>
        ]}
      >
      </Dropdown>
    );
  };
  buildKebab = () => {
    const { isKebabOpen } = this.state;

    return (
      <Dropdown
        onToggle={this.onKebabToggle}
        onSelect={this.onKebabSelect}
        position={DropdownPosition.right}
        toggle={<KebabToggle onToggle={this.onKebabToggle} />}
        isOpen={isKebabOpen}
        isPlain
        dropdownItems={[
          <DropdownItem key="link">Link</DropdownItem>,
          <DropdownItem component="button" key="action-button">Action</DropdownItem>,
          <DropdownItem isDisabled key="disabled-link">Disabled Link</DropdownItem>,
          <DropdownItem isDisabled component="button" key="disabled-button">
            Disabled Action
          </DropdownItem>
        ]}
      >
      </Dropdown>
    );
  };
  render() {
    return (
      <Toolbar className={css(flexStyles.justifyContentSpaceBetween, spacingStyles.mxXl, spacingStyles.myMd)}>
        <ToolbarGroup>
          <ToolbarItem className={css(spacingStyles.mrXl)}>{this.buildSearchBox()}</ToolbarItem>
          <ToolbarItem className={css(spacingStyles.mrMd)}>{this.buildDropdown()}</ToolbarItem>
          <ToolbarItem>
            <Button variant="plain" aria-label="Sort A-Z">
              <SortAlphaDownIcon />
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem>
            <Button variant="plain" aria-label="Insert Table">
              <TableIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem className={css(spacingStyles.mxMd)}>
            <Button variant="plain" aria-label="Insert Bulleted List">
              <ListUlIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button variant="plain" aria-label="Action 1">
              Action
            </Button>
          </ToolbarItem>
          <ToolbarItem className={css(spacingStyles.mxMd)}>
            <Button aria-label="Action 2">Action</Button>
          </ToolbarItem>
          <ToolbarItem>{this.buildKebab()}</ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default SimpleToolbarDemo;
