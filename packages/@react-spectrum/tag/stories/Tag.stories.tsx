/*
 * Copyright 2020 Adobe. All rights reserved.
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
import Camera from '@spectrum-icons/workflow/Camera';
import React from 'react';
import {Tag} from '../src';

export default {
  title: 'Tag'
};

export const Default = {
  render: () => render({}, 'Cool tag'),
  name: 'default'
};

export const Disabled = {
  render: () =>
    render(
      {
        isDisabled: true
      },
      'Cool tag'
    ),
  name: 'disabled'
};

export const Icon = {
  render: () =>
    render(
      {
        icon: <Camera />
      },
      'Cool tag'
    ),
  name: 'icon'
};

export const Removable = {
  render: () =>
    render(
      {
        onRemove: action('onRemove'),
        isRemovable: true
      },
      'Cool tag'
    ),
  name: 'removable'
};

export const Invalid = {
  render: () =>
    render(
      {
        validationState: 'invalid'
      },
      'Cool tag'
    ),
  name: 'invalid'
};

export const InvalidRemovable = {
  render: () =>
    render(
      {
        validationState: 'invalid',
        onRemove: action('onRemove'),
        isRemovable: true
      },
      'Cool tag'
    ),
  name: 'invalid, removable'
};

export const IconRemovable = {
  render: () =>
    render(
      {
        icon: <Camera />,
        onRemove: action('onRemove'),
        isRemovable: true
      },
      'Cool tag'
    ),
  name: 'icon, removable'
};

export const DisabledIconRemovable = {
  render: () =>
    render(
      {
        isDisabled: true,
        icon: <Camera />,
        onRemove: action('onRemove'),
        isRemovable: true
      },
      'Cool tag'
    ),
  name: 'disabled, icon, removable'
};

function render(props, childText: string) {
  return <Tag {...props}>{childText}</Tag>;
}
