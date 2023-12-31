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

import {getUsedLinks} from './utils';
import {LinkContext, TypeContext} from './types';
import React, {useContext} from 'react';
import styles from './docs.css';
import typographyStyles from '@adobe/spectrum-css-temp/components/typography/vars.css';

export function TypeLink({links, type}) {
  let registered = useContext(LinkContext);
  registered.set(type.id, {type, links});

  let used = getUsedLinks(type, links);
  for (let id in used) {
    registered.set(id, {type: used[id], links});
  }

  return (
    <TypeContext.Provider value={links}>
      <code className={`${typographyStyles['spectrum-Code4']}`}>
        <a href={'#' + type.id} data-link={type.id} className={`${styles.colorLink} token hljs-name`} data-hover={styles['is-hovered']}>{type.name}</a>
      </code>
    </TypeContext.Provider>
  );
}
