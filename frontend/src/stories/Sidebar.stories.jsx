import Sidebar from '../components/sidebar/Sidebar';
import MenuItem from '../components/MenuItem';
import Logo from '../components/Logo';

import { Section1, Section2 } from './MenuItem.stories';

export default {
  title: 'Playground/Sidebar',
  component: Sidebar,
  subcomponents: { MenuItem },
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { table: { disable: true } },
  },
};

const Template = {
  render: (args) => (
    <Sidebar {...args}>
      <div className="divide-y">
        <Logo />
        <Section1.render />
        <Section2.render />
      </div>
    </Sidebar>
  ),
};

export const Default = {
  ...Template,
};

export const Drawer = {
  render: (args) => (
    <div className="drawer">
      <input id="app-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="app-drawer" className="btn btn-primary drawer-button">
          Open drawer
          <input hidden type="checkbox" />
        </label>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="app-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        >
          <input hidden type="checkbox" />
        </label>
        <Template.render {...args} />
      </div>
    </div>
  ),
};
