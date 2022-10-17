import { CollectionConfig } from 'payload/types';

export const Media: CollectionConfig = {
    slug: 'media',
    fields: [],
    upload: {
        staticURL: '/media',
        staticDir: 'media',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'centre',
            },
            {
                name: 'card',
                width: 768,
                height: 1024,
                position: 'centre',
            },
            {
                name: 'tablet',
                width: 1024,
                height: null,
                position: 'centre',
            },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
};