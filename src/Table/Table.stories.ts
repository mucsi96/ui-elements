import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { BTTableProps } from './Table';

const meta: Meta<BTTableProps> = {
  title: 'BTTable',
};
type Story = StoryObj<BTTableProps>;

export default meta;

export const Default: Story = {
  render: () =>
    html`<table is="bt-table">
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
    html`<table is="bt-table">
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
          <td is="bt-row-selector"></td>
          <td>Chris</td>
          <td>HTML tables</td>
          <td>22</td>
        </tr>
        <tr>
          <td is="bt-row-selector" selected></td>
          <td>Dennis</td>
          <td>Web accessibility</td>
          <td>45</td>
        </tr>
        <tr>
          <td is="bt-row-selector"></td>
          <td>Sarah</td>
          <td>JavaScript frameworks</td>
          <td>29</td>
        </tr>
        <tr>
          <td is="bt-row-selector"></td>
          <td>Karen</td>
          <td>Web performance</td>
          <td>36</td>
        </tr>
      </tbody>
    </table>`,
};
