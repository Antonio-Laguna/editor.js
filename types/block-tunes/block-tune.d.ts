import {API, ToolConfig} from '../index';

/**
 * Describes BlockTune blueprint
 */
export interface BlockTune {
  /**
   * Returns block tune HTMLElement
   *
   * @return {HTMLElement}
   */
  render(): HTMLElement;
}

/**
 * Describes BlockTune class constructor function
 */
export interface BlockTuneConstructable {
  new (config: {api: API, settings?: ToolConfig}): BlockTune;
}

/**
 * Describes different alignments available for blocks
 */
export enum Alignment {
  Left = 'left',
  Right = 'right',
  Center = 'center',
  Justify = 'justify',
}
