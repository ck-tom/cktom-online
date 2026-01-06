
import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        blog: collection({
            label: 'Blog',
            slugField: 'title',
            path: 'src/content/blog/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                description: fields.text({ label: 'Description', multiline: true }),
                pubDate: fields.date({ label: 'Published Date' }),
                updatedDate: fields.date({ label: 'Updated Date' }),
                heroImage: fields.text({ label: 'Hero Image path' }),
                tags: fields.array(
                    fields.text({ label: 'Tag' }),
                    {
                        label: 'Tags',
                        itemLabel: props => props.value
                    }
                ),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/posts',
                        publicPath: '/images/posts/',
                    },
                }),
            },
        }),
        projects: collection({
            label: 'Projects',
            slugField: 'title',
            path: 'src/content/projects/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                description: fields.text({ label: 'Description', multiline: true }),
                year: fields.text({ label: 'Year' }),
                link: fields.url({ label: 'Project Link' }),
                tags: fields.array(
                    fields.text({ label: 'Tag' }),
                    {
                        label: 'Tags',
                        itemLabel: props => props.value
                    }
                ),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                }),
            },
        }),
    },
    singletons: {
        homepage: singleton({
            label: 'Home Page',
            path: 'src/content/homepage/index',
            schema: {
                greeting: fields.text({ label: 'Greeting' }),
                headline: fields.text({ label: 'Headline', multiline: true }),
                intro: fields.text({ label: 'Intro Text', multiline: true }),
            },
        }),
        about: singleton({
            label: 'About Page',
            path: 'src/content/about/index',
            schema: {
                title: fields.text({ label: 'Title' }),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/about',
                        publicPath: '/images/about/',
                    },
                }),
            },
        }),
        contact: singleton({
            label: 'Contact Page',
            path: 'src/content/contact/index',
            schema: {
                title: fields.text({ label: 'Title' }),
                intro: fields.text({ label: 'Intro Text', multiline: true }),
                email: fields.text({ label: 'Email Address' }),
                socialLinks: fields.array(
                    fields.object({
                        platform: fields.text({ label: 'Platform Name' }),
                        url: fields.url({ label: 'Profile URL' }),
                        handle: fields.text({ label: 'Handle/Username' }),
                    }),
                    {
                        label: 'Social Links',
                        itemLabel: (props) => props.fields.platform.value || 'Link',
                    }
                ),
            },
        }),
    },
});
