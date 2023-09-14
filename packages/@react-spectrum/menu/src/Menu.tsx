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

import {ActionButton} from '@react-spectrum/button';
import ArrowLeftMedium from '@spectrum-icons/ui/ArrowLeftMedium';
import {classNames, useDOMRef, useIsMobileDevice, useStyleProps} from '@react-spectrum/utils';
import {DOMRef} from '@react-types/shared';
import {Flex} from '@react-spectrum/layout';
import {FocusScope} from '@react-aria/focus';
// @ts-ignore
import intlMessages from '../intl/*.json';
import {MenuContext, MenuStateContext, useMenuStateContext} from './context';
import {MenuItem} from './MenuItem';
import {MenuSection} from './MenuSection';
import {mergeProps, useLayoutEffect, useSlotId, useSyncRef} from '@react-aria/utils';
import React, {ReactElement, useContext, useRef, useState} from 'react';
import {SpectrumMenuProps} from '@react-types/menu';
import styles from '@adobe/spectrum-css-temp/components/menu/vars.css';
import {useLocale, useLocalizedStringFormatter} from '@react-aria/i18n';
import {useMenu} from '@react-aria/menu';
import {useTreeState} from '@react-stately/tree';

function Menu<T extends object>(props: SpectrumMenuProps<T>, ref: DOMRef<HTMLUListElement>) {
  let isSubMenu = true;
  let stringFormatter = useLocalizedStringFormatter(intlMessages);
  let contextProps = useContext(MenuContext);
  let parentMenuContext = useMenuStateContext();
  let {menuTreeState, state: parentMenuTreeState} = parentMenuContext || {};
  if (!parentMenuContext) {
    menuTreeState = contextProps.menuTreeState;
    isSubMenu = false;
  }
  let completeProps = {
    ...mergeProps(contextProps, props)
  };
  let domRef = useDOMRef(ref);
  let popoverContainerRef = useRef(null);
  let trayContainerRef = useRef(null);
  let state = useTreeState(completeProps);
  let {menuProps} = useMenu(completeProps, state, domRef);
  let {styleProps} = useStyleProps(completeProps);
  useSyncRef(contextProps, domRef);
  let {direction} = useLocale();

  let [leftOffset, setLeftOffset] = useState({left: 0});
  useLayoutEffect(() => {
    let {left} = popoverContainerRef.current.getBoundingClientRect();
    setLeftOffset({left: -1 * left});
  }, []);

  let isMobile = useIsMobileDevice();
  let hasOpenSubMenu = state.expandedKeys.size > 0;
  // let trayStyles = {opacity: state.expandedKeys.size > 0 ? 0 : 100, position: isSubMenu ? 'absolute' : 'unset', width: '100%'};
  let trayStyles = {
    ...(hasOpenSubMenu && {
      height: '0px',
      maxHeight: '0px'
    }),
    width: '100%'
  };

  let backButtonText = parentMenuTreeState?.collection.getItem(menuTreeState.expandedKeysStack.slice(-1)[0])?.textValue;
  let backButtonLabel = stringFormatter.format('backButton', {
    prevMenuButton: backButtonText
  });
  // TODO: add code to position absolute the subMenu and opacity 0 the non leaf menus? But that means
  // TODO: add slide transition
  return (
    <MenuStateContext.Provider value={{popoverContainerRef, trayContainerRef, menu: domRef, menuTreeState, state}}>
      {/* TODO: this is a tray container for the base menu, each sub menu should also have the same so that we can still have the proper MenuState context nesting? */}
      <div ref={trayContainerRef} />
      <FocusScope contain={state.expandedKeys.size > 0}>
        <div style={{overflow: 'hidden', maxHeight: '100%', display: 'inline-flex', flexDirection: 'column', borderRadius: 'var(--spectrum-alias-border-radius-regular)', ...(isMobile && trayStyles)}}>
          {isMobile && isSubMenu && state.expandedKeys.size === 0 && (
            // TODO: check labeling with team and get translated strings
            // Also fix styling, get rid of Flex with normal div if we don't need it
            <Flex>
              <ActionButton
                aria-label={backButtonLabel}
                isQuiet
                onPress={() => {
                  // TODO: Perhaps get this from MenuContext from SubMenuTrigger since Tray is a spectrum detail
                  completeProps.onSubMenuClose();
                }}>
                {direction === 'rtl' ? <ArrowLeftMedium UNSAFE_style={{rotate: '180deg'}} /> : <ArrowLeftMedium />}
              </ActionButton>
              {/* TODO style text positioning */}
              <span style={{display: 'flex'}}>{backButtonText}</span>
            </Flex>
          )}
          <ul
            {...menuProps}
            {...styleProps}
            ref={domRef}
            className={
              classNames(
                styles,
                'spectrum-Menu',
                styleProps.className
              )
            }>
            {[...state.collection].map(item => {
              if (item.type === 'section') {
                return (
                  <MenuSection
                    key={item.key}
                    item={item}
                    state={state}
                    onAction={completeProps.onAction} />
                );
              }

              let menuItem = (
                <MenuItem
                  key={item.key}
                  item={item}
                  state={state}
                  onAction={completeProps.onAction} />
              );

              if (item.wrapper) {
                menuItem = item.wrapper(menuItem);
              }

              return menuItem;
            })}
          </ul>
        </div>
        {/* Make the portal container for submenus wide enough so that the submenu items can render as wide as they need to be */}
        <div ref={popoverContainerRef} style={{width: '100vw', position: 'absolute', top: 0, ...leftOffset}} />
      </FocusScope>
    </MenuStateContext.Provider>
  );
}

/**
 * Menus display a list of actions or options that a user can choose.
 */
// forwardRef doesn't support generic parameters, so cast the result to the correct type
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref
const _Menu = React.forwardRef(Menu) as <T>(props: SpectrumMenuProps<T> & {ref?: DOMRef<HTMLUListElement>}) => ReactElement;
export {_Menu as Menu};
