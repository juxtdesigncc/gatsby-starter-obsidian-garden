<h1 align="center">
  Gatsby Starter Obsidian Garden
  </h1>
</div>
<div align="center"> 
<a href="https://github.com/juxtdesigncc/gatsby-starter-obsidian-garden">
  <img src="https://img.shields.io/github/stars/juxtdesigncc/gatsby-starter-obsidian-garden?style=social" alt="Star this repo on Github" />
</a>
<a href="https://twitter.com/intent/follow?screen_name=juxtdesigncc">
  <img src="https://img.shields.io/twitter/follow/juxtdesigncc.svg?label=Follow%20@juxtdesigncc" alt="Follow @juxtdesigncc on Twitter" />
  </a>
</div>

A Gatsby starter template to publish [Obsidian](https://obsidian.md/) vault for free, created by [@juxtdesigncc](https:/juxtdesign.cc/?utm_source=obsidian-garden)

<a href="">
  <img src="https://img.shields.io/badge/Demo-Gatsby%20Cloud-5b2c8a?style=for-the-badge" alt="Demo Website"/>
</a>

## 💎 Key Features

Obsidian currently offers Publish services ($20/month) with advance features. This starter is a free alternative for Obsidian users who want to publish their digital garden as a website. Obsidian can also serve as an on-device CMS to manage your content. (Cross-platform synchronization is also possible via Obsidian Sync / [Git](https://desktopofsamuel.com/how-to-sync-obsidian-vault-for-free-using-git/?utm_source=github&utm_medium=readme&utm_id=starter-obsidian))

- Publish your [Obsidian](https://obsidian.md/) knowledge base as a website for free using Gatsby
- Support same YAML (e.g. tags, publish) as Obsidian
- Display notes' maturity, customizable stages (This template used [Maggie Appleton's metaphor](https://maggieappleton.com/garden-history) - "Seedling", "Budding", "Evergreen" as an example to illustrate notes' maturity)
- Better SEO than Obsidian Publish (Using `react-helmet` for basic SEO setup)

---

## 🚀 Getting Started

### 1. Create a Gatsby site.

Clone this template and navigate into the folder

```
git clone https://github.com/juxtdesigncc/gatsby-starter-obsidian-garden project-name
cd project-name
```

### 2. Install dependencies.

Install dependencies using yarn or npm

`yarn install` or `npm install`

### 3. Open the code and start customizing!

Running `gatsby develop` or `yarn run develop` to start the site

Your site is now running at http://localhost:8000!

---

## 💻 Setup

**Read before you use your own Obsidian vault or create a new one**

Whether you wish to use your existing Obsidian vault or start a new vault, the following Obsidian preferences has to be set up correctly. Starting a new vault is highly recommended as these options are not on by default. All existing notes using the `[[Wikilinks]]` will need to update manually. Here're a list of preferences:

- Settings - Files & Links: Use [[Wikilinks]] option should be OFF. It will change the link format from `[[Wikilinks]]` to `[MarkdownLink]`.
- Settings - Default location for new attachments: Should be set as 'In a folder specificed below' and create a folder named `media`, remember to update the config in `gatsby-source-filesystem` in `gatsby-config.js` if the media folder has changed.
- By default, all notes will be published , but add frontmatter `publish: false` to hide a note.

Current example vault in `/content/vault` has already implemented all the aforementioned preference settings

## 🎯 Roadmap

- [ ] Better SEO
- [ ] Wiki Link
- [ ] Obsidian-like node graphs

## 💪🏻 Support

Thank you for trying this out! I'm still constantly shipping new updates to this project. Stay tuned for more news!

You can support this project by:

- Raise issues on [Github](https://github.com/juxtdesigncc/gatsby-starter-obsidian-garden/issues) if you catch any bugs
- Submit a [PR](https://github.com/juxtdesigncc/gatsby-starter-obsidian-garden/pulls) if you discovered a solution
- Share this project on Twitter and tag [me](https://twitter.com/juxtdesigncc)!
- Give me a star on [Github](https://github.com/juxtdesigncc/gatsby-starter-obsidian-garden/)
