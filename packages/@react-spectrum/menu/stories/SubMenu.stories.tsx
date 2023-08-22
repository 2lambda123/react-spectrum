/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {action} from '@storybook/addon-actions';
import defaultConfig, {render as renderMenuTrigger} from './MenuTrigger.stories';
import {Item, Menu, Section, SubMenuTrigger} from '../';
import React from 'react';
import {Heading, Keyboard, Text} from '@react-spectrum/text';


export default {
  ...defaultConfig,
  title: 'MenuTrigger/SubMenu'
};

// TODO: add menu item actions (with action override), multiple triggers in a sub menu, complex items, controls for submenu orientation/placement
// TODO: add chromatic stories
export const SubMenuStatic = {
  render: () => (
    renderMenuTrigger(
      <Menu onAction={action('onAction')}>
        <Item key="Lvl 1 Item 1">Lvl 1 Item 1</Item>
        <SubMenuTrigger>
          <Item key="Lvl 1 Item 2">Lvl 1 Item 2</Item>
          <Menu>
            <Item key="Lvl 2 Item 1">Lvl 2 Item 1</Item>
            <Item key="Lvl 1 Item 2">Lvl 2 Item 2</Item>
            <SubMenuTrigger>
              <Item key="Lvl 2 Item 3">Lvl 2 Item 3</Item>
              <Menu>
                <Item key="Lvl 3 Item 1">Lvl 3 Item 1</Item>
                <Item key="Lvl 3 Item 2">Lvl 3 Item 2</Item>
                <Item key="Lvl 3 Item 3">Lvl 3 Item 3</Item>
              </Menu>
            </SubMenuTrigger>
          </Menu>
        </SubMenuTrigger>
        <Item key="Lvl 1 Item 3">Lvl 1 Item 3</Item>
      </Menu>
    )
  ),
  name: 'static submenu items'
};

let dynamicSubMenu = [
  {name: 'Lvl 1 Item 1'},
  {name: 'Lvl 1 Item 2', children: [
    {name: 'Lvl 2 Item 1'},
    {name: 'Lvl 2 Item 2'},
    {name: 'Lvl 2 Item 3', children: [
      {name: 'Lvl 3 Item 1'},
      {name: 'Lvl 3 Item 2'},
      {name: 'Lvl 3 Item 3'}
    ]}
  ]},
  {name: 'Lvl 1 Item 3'}
];

// TODO: is this really the only way to define the dynamic render func? Kinda annoying that we have
// to define this func separately and recursively call it, but I don't think we can do the same approach as
// collapsible rows tableview since Menu isn't a collection component nor are we making the parent Menu tree collection
// track the full "tree" of menu items (we aren't making Item take other items/sections as children and are relying on each submenu having its own
// tree state + collection tracking its own level of items).
let dynamicRenderFunc = (item) => {
  if (item.children) {
    return (
      <SubMenuTrigger>
        <Item key={item.name}>{item.name}</Item>
        <Menu items={item.children}>
          {(item) => dynamicRenderFunc(item)}
        </Menu>
      </SubMenuTrigger>
    );
  } else {
    return <Item key={item.name}>{item.name}</Item>;
  }
};

export const SubMenuDynamic = {
  render: () => (
    renderMenuTrigger(
      <Menu items={dynamicSubMenu} onAction={action('onAction')}>
        {(item) => dynamicRenderFunc(item)}
      </Menu>
    )
  ),
  name: 'dynamic submenu items'
};

// TODO: TreeState might be too much/not a good fit since expandedKeys should only support one (can't have multiple sub menus at a time), something to keep in mind

export const SubMenuStaticSections = {
  render: () => (
    renderMenuTrigger(
      <Menu onAction={action('onAction')}>
        <Section title="Section 1">
          <Item key="Sec 1 Lvl 1 Item 1">Sec 1 Lvl 1 Item 1</Item>
          <SubMenuTrigger>
            <Item key="Sec 1 Lvl 1 Item 2">Sec 1 Lvl 1 Item 2</Item>
            <Menu id="gaweg">
              <Section title="Sub Section 1">
                <Item key="Sec 1 SubSec 1 Lvl 2 Item 1">Sec 1 SubSec 1 Lvl 2 Item 1</Item>
                <Item key="Sec 1 SubSec 1 Lvl 2 Item 2">Sec 1 SubSec 1 Lvl 2 Item 2</Item>
                <Item key="Sec 1 SubSec 1 Lvl 2 Item 3">Sec 1 SubSec 1 Lvl 2 Item 3</Item>
              </Section>
            </Menu>
          </SubMenuTrigger>
          <Item key="Sec 1 Lvl 1 Item 3">Sec 1 Lvl 1 Item 3</Item>
        </Section>
        <Section title="Section 2">
          <Item key="Sec 2 Lvl 1 Item 1">Sec 2 Lvl 1 Item 1</Item>
          <SubMenuTrigger>
            <Item key="Sec 2 Lvl 1 Item 2">Sec 2 Lvl 1 Item 2</Item>
            <Menu id="test">
              <Section title="Sub Section 1">
                <Item key="Sec 2 SubSec 1 Lvl 2 Item 1">Sec 2 SubSec 1 Lvl 2 Item 1</Item>
                <Item key="Sec 2 SubSec 1 Lvl 2 Item 2">Sec 2 SubSec 1 Lvl 2 Item 2</Item>
                <Item key="Sec 2 SubSec 1 Lvl 2 Item 3">Sec 2 SubSec 1 Lvl 2 Item 3</Item>
              </Section>
            </Menu>
          </SubMenuTrigger>
          <Item key="Sec 2 Lvl 1 Item 3">Sec 2 Lvl 1 Item 3</Item>
        </Section>
      </Menu>
    )
  ),
  name: 'static submenu items with sections'
};

let dynamicSubMenuSections = [
  {name: 'Section 1', isSection: true,  children: [
    {name: 'Sec 1 Lvl 1 Item 1'},
    {name: 'Sec 1 Lvl 1 Item 2', children: [
      {name: 'Sub Section 1', isSection: true, children: [
        {name: 'Sec 1 SubSec 1 Lvl 2 Item 1'},
        {name: 'Sec 1 SubSec 1 Lvl 2 Item 2'},
        {name: 'Sec 1 SubSec 1 Lvl 2 Item 3', children: [
          {name: 'Sub Section 1.1', isSection: true,  children: [
            {name: 'Sec 1 SubSec 1.1 Lvl 3 Item 1'},
            {name: 'Sec 1 SubSec 1 Lvl 3 Item 2'},
            {name: 'Sec 1 SubSec 1 Lvl 3 Item 3'}
          ]}
        ]}
      ]}
    ]},
    {name: 'Sec 1 Lvl 1 Item 3'}
  ]},
  {name: 'Section 2', isSection: true, children: [
    {name: 'Sec 2 Lvl 1 Item 1'},
    {name: 'Sec 2 Lvl 1 Item 2', children: [
      {name: 'Sub Section 1', isSection: true, children: [
        {name: 'Sec 2 SubSec 1 Lvl 2 Item 1'},
        {name: 'Sec 2 SubSec 1 Lvl 2 Item 2'},
        {name: 'Sec 2 SubSec 1 Lvl 2 Item 3'}
      ]}
    ]},
    {name: 'Sec 2 Lvl 1 Item 3'}
  ]}
];

interface ItemNode {
  name: string,
  isSection?: boolean,
  children?: ItemNode[]
}

let dynamicRenderFuncSections = (item: ItemNode) => {
  if (item.children) {
    if (item.isSection) {
      return (
        <Section key={item.name} title={item.name} items={item.children}>
          {(item) => {
            if (item.children) {
              return (
                <SubMenuTrigger>
                  <Item key={item.name}>{item.name}</Item>
                  <Menu items={item.children}>
                    {(item) => dynamicRenderFuncSections(item)}
                  </Menu>
                </SubMenuTrigger>
              );
            } else {
              return <Item key={item.name}>{item.name}</Item>;
            }
          }}
        </Section>
      );
    } else {
      return (
        <SubMenuTrigger>
          <Item key={item.name}>{item.name}</Item>
          <Menu items={item.children}>
            {(item) => dynamicRenderFuncSections(item)}
          </Menu>
        </SubMenuTrigger>
      );
    }
  } else {
    return <Item key={item.name}>{item.name}</Item>;
  }
};

export const SubMenuDynamicSections = {
  render: () => (
    renderMenuTrigger(
      <Menu items={dynamicSubMenuSections} onAction={action('onAction')}>
        {(item) => dynamicRenderFuncSections(item)}
      </Menu>
    )
  ),
  name: 'dynamic submenu items with sections'
};

let subMenuNoSection = [
  {name: 'Section 1', isSection: true, children: [
    {name: 'Sec 1 Lvl 1 Item 1'},
    {name: 'Sec 1 Lvl 1 Item 2', children: [
      {name: 'Sec 1 Lvl 2 Item 1'},
      {name: 'Sec 1 Lvl 2 Item 2'},
      {name: 'Sec 1 Lvl 2 Item 3'}
    ]},
    {name: 'Sec 1 Lvl 1 Item 3'}
  ]}
];

export const MainSectionsSubNoSections = {
  render: () => (
    renderMenuTrigger(
      <Menu items={subMenuNoSection} onAction={action('onAction')}>
        {(item) => dynamicRenderFuncSections(item)}
      </Menu>
    )
  ),
  name: 'dynamic, main menu w/ sections, sub menu no sections'
};

let subMenuSections = [
  {name: 'Lvl 1 Item 1'},
  {name: 'Lvl 1 Item 2', children: [
    {name: 'Section 1', isSection: true, children: [
      {name: 'Lvl 2 Sec 1 Item 1'},
      {name: 'Lvl 2 Sec 1 Item 2'},
      {name: 'Lvl 2 Sec 1 Item 3'}
    ]}
  ]},
  {name: 'Lvl 1 Item 3'}
];

export const MainNoSectionsSubSections = {
  render: () => (
    renderMenuTrigger(
      <Menu items={subMenuSections} onAction={action('onAction')}>
        {(item) => dynamicRenderFuncSections(item)}
      </Menu>
    )
  ),
  name: 'dynamic, main menu no sections, sub menu w/ sections'
};

// TODO: add the complex one here: aka with icons, multiple submenus per menu, some with sections, some without

export const ActionOverride = {
  render: () => renderMenuTrigger(
    <Menu onAction={action('onAction')} onClose={action('onClose menu 1')}>
      <Item key="Lvl 1 Item 1">Lvl 1 Item 1</Item>
      <SubMenuTrigger>
        <Item key="Lvl 1 Item 2">Lvl 1 Item 2</Item>
        <Menu onAction={action('onAction submenu 2')} onClose={action('onClose menu 2')}>
          <Item key="Lvl 2 Item 1">Lvl 2 Item 1</Item>
          <Item key="Lvl 1 Item 2">Lvl 2 Item 2</Item>
          <SubMenuTrigger>
            <Item key="Lvl 2 Item 3">Lvl 2 Item 3</Item>
            <Menu onClose={action('onClose menu 3')}>
              <Item key="Lvl 3 Item 1">Lvl 3 Item 1</Item>
              <Item key="Lvl 3 Item 2">Lvl 3 Item 2</Item>
              <Item key="Lvl 3 Item 3">Lvl 3 Item 3</Item>
            </Menu>
          </SubMenuTrigger>
        </Menu>
      </SubMenuTrigger>
      <Item key="Lvl 1 Item 3">Lvl 1 Item 3</Item>
    </Menu>
  ),
  name: 'submenu onAction override with onClose',
  parameters: {description: {data: 'Lvl 1 and Lv3 menu items share the same onAction via inheritance. Lvl2 menu item has its own onAction override. Each menu should have its own onClose triggered only if its direct menu option was acted upon.'}}
};

// TODO add mix of sub menus with sections and without section