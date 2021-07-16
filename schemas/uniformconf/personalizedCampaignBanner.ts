import { DocumentType, StringField, ArrayField } from '@sanity/schema-types-react';

export const personalizedCampaignBannerSchema: DocumentType = {
  title: 'Personalized Campaign Banner',
  name: 'personalizedCampaignBanner',
  type: 'document',
  fields: [
    {
      name: 'personalizedCampaignBannerName',
      type: 'string',
      title: 'Personalized Campaign Banner Name',
      validation: (Rule) => Rule.required(),
    } as StringField,
    // note: `array` field type is useful for one-to-many references. whereas `reference` field type is 1:1.
    // also note: by default `array` field type will store inline instances of objects. For our use, though,
    // we want to store references to existing objects.
    // Therefore we use an `array` field containing `reference` objects.
    {
      name: 'campaignBannerVariations',
      type: 'array',
      title: 'Campaign Banner Variations',
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
      title: 'personalizedCampaignBannerName',
    },
  },
};
