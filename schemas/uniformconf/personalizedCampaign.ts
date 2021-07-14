import { DocumentType, StringField, ArrayField } from '@sanity/schema-types-react';

export const personalizedCampaignSchema: DocumentType = {
  title: 'Personalized Campaign',
  name: 'personalizedCampaign',
  type: 'document',
  fields: [
    {
      name: 'personalizedCampaignName',
      type: 'string',
      title: 'Personalized Campaign Name',
      validation: (Rule) => Rule.required(),
    } as StringField,
    // note: `array` field type is useful for one-to-many references. whereas `reference` field type is 1:1.
    // also note: by default `array` field type will store inline instances of objects. For our use, though,
    // we want to store references to existing objects.
    // Therefore we use an `array` field containing `reference` objects.
    {
      name: 'campaignVariations',
      type: 'array',
      title: 'Campaign Variations',
      of: [
        {
          type: 'reference',
          to: [{ type: 'campaign' }],
        },
      ],
    } as ArrayField,
  ],
  preview: {
    select: {
      title: 'personalizedCampaignName',
    },
  },
};
