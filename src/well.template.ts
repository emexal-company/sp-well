import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { Well } from './well.component';

export default function template(this: Well) {
    
    return html`
    <h3 class="spectrum-Heading--subtitle2">${this.Label}</h3>
    <span class="spectrum-Well">
        <slot></slot>
    </span>`;
}