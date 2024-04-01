import type { Schema, Attribute } from '@strapi/strapi';

export interface MtgStaffStaff extends Schema.Component {
  collectionName: 'components_mtg_staff_staff';
  info: {
    displayName: 'Staff';
    icon: 'handHeart';
  };
  attributes: {
    Name: Attribute.Text;
    PhoneNumber: Attribute.Text;
    Photo: Attribute.Media;
    Email: Attribute.Email;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'mtg-staff.staff': MtgStaffStaff;
    }
  }
}
