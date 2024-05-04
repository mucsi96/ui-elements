import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'BTTable',
};
type Story = StoryObj;

export default meta;

export const Default: Story = {
  render: () =>
    html`<table bt>
      <thead>
        <tr>
          <th>Person</th>
          <th>Most interest in</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Chris</td>
          <td>HTML tables</td>
          <td>22</td>
        </tr>
        <tr>
          <td>Dennis</td>
          <td>Web accessibility</td>
          <td>45</td>
        </tr>
        <tr>
          <td>Sarah</td>
          <td>JavaScript frameworks</td>
          <td>29</td>
        </tr>
        <tr>
          <td>Karen</td>
          <td>Web performance</td>
          <td>36</td>
        </tr>
      </tbody>
    </table>`,
};

export const WithSelection: Story = {
  render: () =>
    html`<table bt>
      <thead>
        <tr>
          <th></th>
          <th>Person</th>
          <th>Most interest in</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td bt-row-selector></td>
          <td>Chris</td>
          <td>HTML tables</td>
          <td>22</td>
        </tr>
        <tr aria-selected="true">
          <td bt-row-selector></td>
          <td>Dennis</td>
          <td>Web accessibility</td>
          <td>45</td>
        </tr>
        <tr>
          <td bt-row-selector></td>
          <td>Sarah</td>
          <td>JavaScript frameworks</td>
          <td>29</td>
        </tr>
        <tr>
          <td bt-row-selector></td>
          <td>Karen</td>
          <td>Web performance</td>
          <td>36</td>
        </tr>
      </tbody>
    </table>`,
};
