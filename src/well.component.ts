import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import wellStyles from './well.styles';
import template from './well.template';

@customElement('sp-well')
export class Well extends Base {
  public static componentStyles = wellStyles;

  @property({ type: String }) public Label: string = '';
  
  

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-well': Well;
  }
}
