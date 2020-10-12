import { html } from 'lit-element';

import { DemoWell } from './demo-well.component';


import '@spectrum/sp-well';
import '@spectrum/sp-container';
import '@spectrum/sp-rule';

export default function template(this: DemoWell) {
  return html`
  <sp-container>
    <section>
    <sp-rule medium label="Well"></sp-rule>
  <sp-demo width="500" >
    <pre>
<sp-well label="Well Label (Optional)">
  <sp-well>
    <em>Well done is better than well said.</em>
    <br>
    <strong>Benjamin Franklin</strong>
    <br><br>
    Well said Ben!
    <sp-well>
      <em>Well done is better than well said.</em>
      <br>
      <strong>Benjamin Franklin</strong>
      <br><br>
      Well said Ben!        
    </sp-well>                        
  </sp-well>
</sp-well></pre>
  </sp-demo>
    <br>
    </section>
  </sp-container>
  `;
}
