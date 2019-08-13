var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var el = wp.element.createElement;

registerBlockType("my-block/firstblock", {
  title: __("First block", "my-block"),
  description: __("My first block", "my-block"),
  category: "layout",
  icon: {
    background: "#ea732f",
    foreground: "#fff",
    src: "admin-network"
  },
  keywords: [__('photo', 'my-block'), __('image', 'my-block')],
  edit: function() {
    return el('p', null, 'First Editor');
  },
  save: function() {
    return el('p', null, 'Saved first content');
  }
});
