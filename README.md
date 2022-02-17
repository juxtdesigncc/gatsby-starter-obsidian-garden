<h1 align="center">
  Gatsby Starter Obsidian Garden
</h1>

## Introduction

A Gatsby starter template created by [@juxtdesigncc](https:/juxtdesign.cc/?utm_source=obsidian-garden) to publish Obsidian vault for free with Gatsby Cloud.

## Key Features

- Publish your [Obsidian](https://obsidian.md/) knowledge base as a website for free using Gatsby
- Support YAML (e.g. tags, publish) that also supported by Obsidian

## Obsidian Preference

Starting a new vault is highly recommended as Wikilinks options are not on by default. All previous notes using the `[[Wikilinks]]` will need to update. Here're a list of preferences:

- Settings - Files & Links: Use [[Wikilinks]] option should be OFF. It will change the link format from `[[Wikilinks]]` to `[MarkdownLink]`.
- Settings - Default location for new attachments: Should be set as 'In a folder specificed below' and create a folder named `media`, remember to update the config in `gatsby-source-filesystem` in `gatsby-config.js` if the media folder has changed.
- By default, all pages will be published directly, but add frontmatter `publish: false` if you wish to hide certain notes.

### Why `gatsby-remark-relative-images` need to be not the latest version?

https://stackoverflow.com/questions/63698552/gatsby-node-js-threw-an-error-while-running-the-oncreatenode-lifecycle-fmimag
