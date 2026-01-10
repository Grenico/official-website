export default {
  template: /*html*/ `
    <div class="content-panel">
    <div class="content">
      <span class="icons">
        <i :class="iconClass"></i>
      </span>
      <p style="text-align: center">{{title}}</p>
    </div>
  </div>
    `,
  props: {
    title: String,
    iconClass: String,
  },
};
