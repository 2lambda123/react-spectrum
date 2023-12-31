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

// This file is generated by lib/varsToTypeScript.js! DO NOT EDIT.

/** See the [Styling docs](styling.html#dimension-values) for a visualization of these values. */
export type DimensionValue =
  | 'size-0'
  | 'size-10'
  | 'size-25'
  | 'size-40'
  | 'size-50'
  | 'size-65'
  | 'size-75'
  | 'size-85'
  | 'size-100'
  | 'size-115'
  | 'size-125'
  | 'size-130'
  | 'size-150'
  | 'size-160'
  | 'size-175'
  | 'size-200'
  | 'size-225'
  | 'size-250'
  | 'size-275'
  | 'size-300'
  | 'size-325'
  | 'size-350'
  | 'size-400'
  | 'size-450'
  | 'size-500'
  | 'size-550'
  | 'size-600'
  | 'size-675'
  | 'size-700'
  | 'size-800'
  | 'size-900'
  | 'size-1000'
  | 'size-1200'
  | 'size-1250'
  | 'size-1600'
  | 'size-1700'
  | 'size-2000'
  | 'size-2400'
  | 'size-3000'
  | 'size-3400'
  | 'size-3600'
  | 'size-4600'
  | 'size-5000'
  | 'size-6000'
  | 'static-size-0'
  | 'static-size-10'
  | 'static-size-25'
  | 'static-size-50'
  | 'static-size-40'
  | 'static-size-65'
  | 'static-size-100'
  | 'static-size-115'
  | 'static-size-125'
  | 'static-size-130'
  | 'static-size-150'
  | 'static-size-160'
  | 'static-size-175'
  | 'static-size-200'
  | 'static-size-225'
  | 'static-size-250'
  | 'static-size-300'
  | 'static-size-400'
  | 'static-size-450'
  | 'static-size-500'
  | 'static-size-550'
  | 'static-size-600'
  | 'static-size-700'
  | 'static-size-800'
  | 'static-size-900'
  | 'static-size-1000'
  | 'static-size-1200'
  | 'static-size-1700'
  | 'static-size-2400'
  | 'static-size-2600'
  | 'static-size-3400'
  | 'static-size-3600'
  | 'static-size-4600'
  | 'static-size-5000'
  | 'static-size-6000'
  | 'single-line-height'
  | 'single-line-width'
  // This allows autocomplete to work properly and not collapse the above options into just `string`.
  // See https://github.com/microsoft/TypeScript/issues/29729.
  | (string & {})
  | number;

export type ColorValue =
  | 'celery-400'
  | 'celery-500'
  | 'celery-600'
  | 'celery-700'
  | 'chartreuse-400'
  | 'chartreuse-500'
  | 'chartreuse-600'
  | 'chartreuse-700'
  | 'yellow-400'
  | 'yellow-500'
  | 'yellow-600'
  | 'yellow-700'
  | 'magenta-400'
  | 'magenta-500'
  | 'magenta-600'
  | 'magenta-700'
  | 'fuchsia-400'
  | 'fuchsia-500'
  | 'fuchsia-600'
  | 'fuchsia-700'
  | 'purple-400'
  | 'purple-500'
  | 'purple-600'
  | 'purple-700'
  | 'indigo-400'
  | 'indigo-500'
  | 'indigo-600'
  | 'indigo-700'
  | 'seafoam-400'
  | 'seafoam-500'
  | 'seafoam-600'
  | 'seafoam-700'
  | 'red-400'
  | 'red-500'
  | 'red-600'
  | 'red-700'
  | 'orange-400'
  | 'orange-500'
  | 'orange-600'
  | 'orange-700'
  | 'green-400'
  | 'green-500'
  | 'green-600'
  | 'green-700'
  | 'blue-400'
  | 'blue-500'
  | 'blue-600'
  | 'blue-700'
  | 'gray-50'
  | 'gray-75'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'
  | 'static-black'
  | 'static-white'
  | 'static-blue'
  | 'static-gray-50'
  | 'static-gray-75'
  | 'static-gray-100'
  | 'static-gray-200'
  | 'static-gray-300'
  | 'static-gray-400'
  | 'static-gray-500'
  | 'static-gray-600'
  | 'static-gray-700'
  | 'static-gray-800'
  | 'static-gray-900'
  | 'static-blue-200'
  | 'static-blue-300'
  | 'static-blue-400'
  | 'static-blue-500'
  | 'static-blue-600'
  | 'static-blue-700'
  | 'static-blue-800'
  | 'static-red-400'
  | 'static-red-500'
  | 'static-red-600'
  | 'static-red-700'
  | 'static-orange-400'
  | 'static-orange-500'
  | 'static-orange-600'
  | 'static-orange-700'
  | 'static-green-400'
  | 'static-green-500'
  | 'static-green-600'
  | 'static-green-700'
  | 'static-celery-200'
  | 'static-celery-300'
  | 'static-celery-400'
  | 'static-celery-500'
  | 'static-celery-600'
  | 'static-celery-700'
  | 'static-chartreuse-300'
  | 'static-chartreuse-400'
  | 'static-chartreuse-500'
  | 'static-chartreuse-600'
  | 'static-chartreuse-700'
  | 'static-yellow-200'
  | 'static-yellow-300'
  | 'static-yellow-400'
  | 'static-yellow-500'
  | 'static-yellow-600'
  | 'static-yellow-700'
  | 'static-magenta-200'
  | 'static-magenta-300'
  | 'static-magenta-400'
  | 'static-magenta-500'
  | 'static-magenta-600'
  | 'static-magenta-700'
  | 'static-fuchsia-400'
  | 'static-fuchsia-500'
  | 'static-fuchsia-600'
  | 'static-fuchsia-700'
  | 'static-purple-400'
  | 'static-purple-500'
  | 'static-purple-600'
  | 'static-purple-700'
  | 'static-purple-800'
  | 'static-indigo-200'
  | 'static-indigo-300'
  | 'static-indigo-400'
  | 'static-indigo-500'
  | 'static-indigo-600'
  | 'static-indigo-700'
  | 'static-seafoam-200'
  | 'static-seafoam-300'
  | 'static-seafoam-400'
  | 'static-seafoam-500'
  | 'static-seafoam-600'
  | 'static-seafoam-700'
  | SemanticColorValue;

export type ColorValueV6 =
  | 'gray-50'
  | 'gray-75'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'
  | 'red-100'
  | 'red-200'
  | 'red-300'
  | 'red-400'
  | 'red-500'
  | 'red-600'
  | 'red-700'
  | 'red-800'
  | 'red-900'
  | 'red-1000'
  | 'red-1100'
  | 'red-1200'
  | 'red-1300'
  | 'red-1400'
  | 'orange-100'
  | 'orange-200'
  | 'orange-300'
  | 'orange-400'
  | 'orange-500'
  | 'orange-600'
  | 'orange-700'
  | 'orange-800'
  | 'orange-900'
  | 'orange-1000'
  | 'orange-1100'
  | 'orange-1200'
  | 'orange-1300'
  | 'orange-1400'
  | 'yellow-100'
  | 'yellow-200'
  | 'yellow-300'
  | 'yellow-400'
  | 'yellow-500'
  | 'yellow-600'
  | 'yellow-700'
  | 'yellow-800'
  | 'yellow-900'
  | 'yellow-1000'
  | 'yellow-1100'
  | 'yellow-1200'
  | 'yellow-1300'
  | 'yellow-1400'
  | 'chartreuse-100'
  | 'chartreuse-200'
  | 'chartreuse-300'
  | 'chartreuse-400'
  | 'chartreuse-500'
  | 'chartreuse-600'
  | 'chartreuse-700'
  | 'chartreuse-800'
  | 'chartreuse-900'
  | 'chartreuse-1000'
  | 'chartreuse-1100'
  | 'chartreuse-1200'
  | 'chartreuse-1300'
  | 'chartreuse-1400'
  | 'celery-100'
  | 'celery-200'
  | 'celery-300'
  | 'celery-400'
  | 'celery-500'
  | 'celery-600'
  | 'celery-700'
  | 'celery-800'
  | 'celery-900'
  | 'celery-1000'
  | 'celery-1100'
  | 'celery-1200'
  | 'celery-1300'
  | 'celery-1400'
  | 'green-100'
  | 'green-200'
  | 'green-300'
  | 'green-400'
  | 'green-500'
  | 'green-600'
  | 'green-700'
  | 'green-800'
  | 'green-900'
  | 'green-1000'
  | 'green-1100'
  | 'green-1200'
  | 'green-1300'
  | 'green-1400'
  | 'seafoam-100'
  | 'seafoam-200'
  | 'seafoam-300'
  | 'seafoam-400'
  | 'seafoam-500'
  | 'seafoam-600'
  | 'seafoam-700'
  | 'seafoam-800'
  | 'seafoam-900'
  | 'seafoam-1000'
  | 'seafoam-1100'
  | 'seafoam-1200'
  | 'seafoam-1300'
  | 'seafoam-1400'
  | 'cyan-100'
  | 'cyan-200'
  | 'cyan-300'
  | 'cyan-400'
  | 'cyan-500'
  | 'cyan-600'
  | 'cyan-700'
  | 'cyan-800'
  | 'cyan-900'
  | 'cyan-1000'
  | 'cyan-1100'
  | 'cyan-1200'
  | 'cyan-1300'
  | 'cyan-1400'
  | 'blue-100'
  | 'blue-200'
  | 'blue-300'
  | 'blue-400'
  | 'blue-500'
  | 'blue-600'
  | 'blue-700'
  | 'blue-800'
  | 'blue-900'
  | 'blue-1000'
  | 'blue-1100'
  | 'blue-1200'
  | 'blue-1300'
  | 'blue-1400'
  | 'indigo-100'
  | 'indigo-200'
  | 'indigo-300'
  | 'indigo-400'
  | 'indigo-500'
  | 'indigo-600'
  | 'indigo-700'
  | 'indigo-800'
  | 'indigo-900'
  | 'indigo-1000'
  | 'indigo-1100'
  | 'indigo-1200'
  | 'indigo-1300'
  | 'indigo-1400'
  | 'purple-100'
  | 'purple-200'
  | 'purple-300'
  | 'purple-400'
  | 'purple-500'
  | 'purple-600'
  | 'purple-700'
  | 'purple-800'
  | 'purple-900'
  | 'purple-1000'
  | 'purple-1100'
  | 'purple-1200'
  | 'purple-1300'
  | 'purple-1400'
  | 'fuchsia-100'
  | 'fuchsia-200'
  | 'fuchsia-300'
  | 'fuchsia-400'
  | 'fuchsia-500'
  | 'fuchsia-600'
  | 'fuchsia-700'
  | 'fuchsia-800'
  | 'fuchsia-900'
  | 'fuchsia-1000'
  | 'fuchsia-1100'
  | 'fuchsia-1200'
  | 'fuchsia-1300'
  | 'fuchsia-1400'
  | 'magenta-100'
  | 'magenta-200'
  | 'magenta-300'
  | 'magenta-400'
  | 'magenta-500'
  | 'magenta-600'
  | 'magenta-700'
  | 'magenta-800'
  | 'magenta-900'
  | 'magenta-1000'
  | 'magenta-1100'
  | 'magenta-1200'
  | 'magenta-1300'
  | 'magenta-1400'
  | SemanticColorValue;

type SemanticColorValue =
  | 'negative'
  | 'notice'
  | 'positive'
  | 'informative';

type BorderColorAlias =
  | 'negative'
  | 'notice'
  | 'positive'
  | 'informative'
  | 'hover'
  | 'down'
  | 'focus'
  | 'mouse-focus'
  | 'disabled'
  | 'extralight'
  | 'light'
  | 'mid'
  | 'dark'
  | 'transparent'
  | 'translucent-dark'
  | 'translucent-darker';

type BackgroundColorAlias =
  | 'default'
  | 'disabled'
  | 'transparent'
  | 'label-gray';

export type IconColorValue =
  | 'negative'
  | 'notice'
  | 'positive'
  | 'informative';

export type BorderSizeValue =
  | 'thin'
  | 'thick'
  | 'thicker'
  | 'thickest'
  | 'none';

export type BorderRadiusValue =
  | 'xsmall'
  | 'small'
  | 'regular'
  | 'medium'
  | 'large';

export type BorderColorValue =
  | 'default'
  | BorderColorAlias
  | ColorValue;

export type BorderColorValueV6 =
  | BorderColorAlias
  | ColorValueV6;

export type BackgroundColorValue =
  | BackgroundColorAlias
  | ColorValue;

export type BackgroundColorValueV6 =
  | BackgroundColorAlias
  | ColorValueV6;
