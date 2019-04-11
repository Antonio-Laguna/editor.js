/**
 * @class MoveDownTune
 * @classdesc Editor's default tune - Moves down highlighted block
 *
 * @copyright <CodeX Team> 2018
 */

import $ from '../dom';
import {API, BlockTune} from '../../../types';

export default class AlignLeftTune implements BlockTune {
  /**
   * Property that contains Editor.js API methods
   * @see {api.md}
   */
  private readonly api: API;

  /**
   * Styles
   * @type {{wrapper: string}}
   */
  private CSS = {
    button: 'ce-settings__button',
    wrapper: 'ce-tune-align-left',
    animation: 'wobble',
  };

  /**
   * MoveDownTune constructor
   *
   * @param {{api: API}} api
   */
  public constructor({api}) {
    this.api = api;
  }

  /**
   * Return 'move down' button
   */
  public render() {
    const alignLeftButton = $.make('div', [this.CSS.button, this.CSS.wrapper], {});
    alignLeftButton.appendChild($.svg('italic', 14, 14));
    this.api.listeners.on(
      alignLeftButton,
      'click',
      (event) => this.handleClick(event as MouseEvent, alignLeftButton),
      false,
    );
    return alignLeftButton;
  }

  /**
   * Handle clicks on 'move down' button
   * @param {MouseEvent} event
   * @param {HTMLElement} button
   */
  public handleClick(event: MouseEvent, button: HTMLElement) {
    const currentBlockIndex = this.api.blocks.getCurrentBlockIndex();
    alert('working');
  }
}
