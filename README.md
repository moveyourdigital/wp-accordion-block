# Accordion Block for WordPress Gutenberg

![WordPress Version](https://img.shields.io/badge/WordPress-5.8%2B-blue)
![PHP Version](https://img.shields.io/badge/PHP-7.4%2B-blue)
![License](https://img.shields.io/badge/License-GPL--2.0--or--later-green)

A simple and customizable accordion block for the WordPress block editor (Gutenberg).

## 📌 Features

- 🏗 **Gutenberg-native**: Easily insert accordions directly within the block editor.
- 🔄 **Collapsible Sections**: Expand and collapse sections with a simple click.
- ✏ **Custom Titles**: Edit accordion titles from the block settings panel.
- 🔗 **Inner Blocks Support**: Nest any other blocks inside the accordion content.
- 📱 **Fully Responsive**: Works across all devices and screen sizes.
- 🎨 **Customizable**: Supports CSS styling and additional JavaScript functionality.

This plugin is perfect for **FAQs, collapsible sections, and structured content layouts**.

---

## 🚀 Installation

### **1. Install from ZIP**
1. Clone the repository or [download the latest release](https://github.com/lightningspirit/accordion-block).
2. Upload the plugin files to `/wp-content/plugins/accordion-block`, or install via the **Plugins** screen in WordPress.

### **1. Install via GitHub & Composer**
You can install the plugin using Composer by adding the repository to your `composer.json`:

```sh
composer config repositories.accordion-block vcs https://github.com/moveyourdigital/wp-accordion-block.git
composer require moveyourdigital/wp-accordion-block
```

### Activation
1. Activate the plugin via **WordPress Admin > Plugins**.
1. In the **Gutenberg editor**, search for **Accordion Block**, insert it, and start adding content.
1. Customize via the block settings panel.

---

## ❓ FAQ

### How do I add an accordion to my post?
Simply insert the **Accordion Block** from the Gutenberg editor, set a title, and add content inside the accordion.

### Can I use multiple accordions on the same page?
Yes! Each accordion block works independently.

### Does this plugin work with all themes?
Yes, it is designed to work with any **Gutenberg-compatible theme**. You may need to adjust styles for better integration.

### Can I set the accordion to be open by default?
Yes, you can set whether the accordion starts **open or closed** in the block settings.

---

## 📜 Changelog

### v0.1.0
- Initial release 🎉
- Added collapsible accordion sections
- Integrated **InnerBlocks** for flexible content
- Customizable titles and settings via **Inspector Controls**

---

## 🛠 Development & Contribution

This plugin was scaffolded using the [WordPress Create Block](https://developer.wordpress.org/block-editor/getting-started/create-block/) tool.

### Contribute:
1. Fork this repository.
2. Create a new feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Added new feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a **Pull Request**.

---

## 🏆 Support

For issues or feature requests:
- 📌 Open an issue on [GitHub Issues](https://github.com/lightningspirit/accordion-block/issues).
- 📩 Reach out via the **WordPress support forum**.

---

## 📜 License

This plugin is licensed under **GPL-2.0-or-later**. See the [LICENSE](LICENSE) file for details.
