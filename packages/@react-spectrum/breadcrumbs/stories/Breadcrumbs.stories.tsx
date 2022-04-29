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
import {Breadcrumbs} from '../';
import {Button} from '@react-spectrum/button';
import {DOMRefValue, FocusableRefValue} from '@react-types/shared';
// import {Heading} from '@react-spectrum/text';
import {Item} from '@react-stately/collections';
import React, {useRef, useState} from 'react';
import {SpectrumBreadcrumbsProps} from '@react-types/breadcrumbs';
import {storiesOf} from '@storybook/react';

let styles = {
  width: '100vw'
};
const CenterDecorator = storyFn => <div style={styles}><div>{storyFn()}</div></div>;

storiesOf('Breadcrumbs', module)
  .addDecorator(CenterDecorator)
  .addParameters({providerSwitcher: {status: 'negative'}})
  .add(
    'Default (with 3 items)',
    () => render()
  )
  .add(
    'Default (with 7 items)',
    () => renderMany({})
  )
  .add(
    'isMultiline',
    () => render({isMultiline: true})
  )
  .add(
    'size: S',
    () => render({size: 'S'})
  )
  .add(
    'size: S, isMultiline',
    () => render({size: 'S', isMultiline: true})
  )
  .add(
    'size: M',
    () => render({size: 'M'})
  )
  .add(
    'size: M, isMultiline',
    () => render({size: 'M', isMultiline: true})
  )
  .add(
    'truncated',
    () => (
      <div style={{width: '120px'}}>
        {render({})}
      </div>
    )
  )
  .add(
    'truncated, isMultiline',
    () => (
      <div style={{width: '100px'}}>
        {render({isMultiline: true})}
      </div>
    )
  )
  .add(
    'many items, showRoot: true',
    () => renderMany({showRoot: true})
  )
  .add(
    'many items, isMultiline',
    () => renderMany({isMultiline: true})
  )
  .add(
    'many items, isMultiline, showRoot: true',
    () => renderMany({maxVisibleItems: 'auto', isMultiline: true, showRoot: true})
  )
  .add(
    'isDisabled: true',
    () => render({isDisabled: true})
  )
  .add(
    'isDisabled: true, isMultiline',
    () => render({isDisabled: true, isMultiline: true})
  )
  .add(
    'resizeable',
    () => (
      <div style={{minWidth: '100px', width: '300px', padding: '10px', resize: 'horizontal', overflow: 'auto', backgroundColor: 'var(--spectrum-global-color-gray-50)'}}>
        {renderMany({})}
      </div>
    )
  )
  // .add(
  //   'last item Heading',
  //   () => renderHeading()
  // )
  // .add(
  //   'last item Heading, size: S',
  //   () => renderHeading({size: 'S'})
  // )
  // .add(
  //   'last item Heading, size: M',
  //   () => renderHeading({size: 'M'})
  // )
  // .add(
  //   'last item Heading, isMultiline',
  //   () => renderHeading({isMultiline: true})
  // )
  // .add(
  //   'last item Heading, size: S, isMultiline',
  //   () => renderHeading({isMultiline: true, size: 'S'})
  // )
  // .add(
  //   'last item Heading, size: M, isMultiline',
  //   () => renderHeading({isMultiline: true, size: 'M'})
  // )
  .add(
    'Only one item',
    () => (
      <Breadcrumbs>
        <Item>Root</Item>
      </Breadcrumbs>
    )
  )
  .add(
    'Only one item, isMultiline',
    () => (
      <Breadcrumbs isMultiline>
        <Item>Root</Item>
      </Breadcrumbs>
    )
  )
  .add(
    'Only one item, showRoot',
    () => (
      <Breadcrumbs showRoot>
        <Item key="Root-1">Root</Item>
      </Breadcrumbs>
    )
  )
  .add(
    'autoFocusCurrent',
    () => (
      <div style={{minWidth: '100px', width: '400px', padding: '10px', resize: 'horizontal', overflow: 'auto', backgroundColor: 'var(--spectrum-global-color-gray-50)'}}>
        {renderDynamicBreadcrumbs({autoFocusCurrent: true})}
      </div>
    )
  )
  .add(
    'Dynamic breadcrumbs with focus management',
    () => (
      renderDynamicBreadcrumbs({showRoot: true})
    )
  )
  .add(
    'Set focus to something else after action',
    () => (
      renderDynamicBreadcrumbs({showRoot: true, setFocusToButtonAfterAction: true})
    )
  );

function render(props = {}) {
  return (
    <Breadcrumbs {...props} onAction={action('onAction')}>
      <Item key="Folder 1">The quick brown fox jumps over</Item>
      <Item key="Folder 2">My Documents</Item>
      <Item key="Folder 3">Kangaroos jump high</Item>
    </Breadcrumbs>
  );
}

// function renderHeading(props = {}) {
//   return (
//     <Breadcrumbs {...props} onAction={action('onAction')}>
//       <Item key="Folder 1">
//         The quick brown fox jumps over
//       </Item>
//       <Item key="Folder 2">
//         My Documents
//       </Item>
//       <Item key="Folder 3">
//         <Heading level={1}>
//           Kangaroos jump high
//         </Heading>
//       </Item>
//     </Breadcrumbs>
//   );
// }

function renderMany(props = {}) {
  return (
    <Breadcrumbs {...props} onAction={action('onAction')}>
      <Item key="Folder 1">The quick brown fox jumps over</Item>
      <Item key="Folder 2">My Documents</Item>
      <Item key="Folder 3">Kangaroos jump high</Item>
      <Item key="Folder 4">Koalas are very cute</Item>
      <Item key="Folder 5">Wombat's noses</Item>
      <Item key="Folder 6">Wattle trees</Item>
      <Item key="Folder 7">April 7</Item>
    </Breadcrumbs>
  );
}

interface DynamicBreadcrumbsProps<T> extends Omit<SpectrumBreadcrumbsProps<T>, 'children'>  {
  setFocusToButtonAfterAction?: boolean
}

export function DynamicBreadcrumbs(props:DynamicBreadcrumbsProps<object> = {}) {
  let {setFocusToButtonAfterAction = false, ...otherProps} = props;
  const defaultItems = [
    {key: 'Folder 1', children: 'The quick brown fox jumps over'},
    {key: 'Folder 2', children: 'My Documents'},
    {key: 'Folder 3', children: 'Kangaroos jump high'},
    {key: 'Folder 4', children: 'Koalas are very cute'},
    {key: 'Folder 5', children: 'Wombat\'s noses'},
    {key: 'Folder 6', children: 'Wattle trees'},
    {key: 'Folder 7', children: 'April 7'}
  ];
  let [items, setItems] = useState(defaultItems);
  let domRef = useRef<DOMRefValue<HTMLDivElement>>();
  let focusableRef = useRef<FocusableRefValue<HTMLButtonElement>>();

  return (<>
    <Breadcrumbs
      ref={domRef}
      {...otherProps}
      onAction={key => {
        // Update breadcrumbs based on activated item.
        setItems(items.slice(0, items.findIndex(item => key === item.key) + 1));
        if (setFocusToButtonAfterAction && focusableRef.current) {
          focusableRef.current.focus();
        }
      }}>
      {items.map((item) => <Item {...item} />)}
    </Breadcrumbs>
    <p>
      <Button ref={focusableRef} variant="primary" onPress={() => setItems(defaultItems)}>Reset</Button>
    </p>
  </>);
}


function renderDynamicBreadcrumbs(props:DynamicBreadcrumbsProps<object> = {}) {
  return <DynamicBreadcrumbs {...props}  />;
}
