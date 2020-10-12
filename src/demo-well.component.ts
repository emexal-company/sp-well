import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-well.styles';
import template from './demo-well.template';


// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { Well } from '@spectrum/sp-well';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-well')
export class DemoWell extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-well': DemoWell;
  }
}
