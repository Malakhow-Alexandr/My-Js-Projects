export default class LoadMoreBtn {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector);

    hidden && this.hide();
  }
  getRefs(selector) {
    const refs = {};
    refs.showBtn = document.querySelector(selector);
    refs.label = refs.showBtn.querySelector('.label');
    refs.spinner = refs.showBtn.querySelector('.spinner');

    return refs;
  }

  enable() {
    this.refs.showBtn.disabled = false;
    this.refs.label.textContent = 'Show more';
    this.refs.spinner.classList.add('is-hidden');
  }

  disable() {
    this.refs.showBtn.disabled = true;
    this.refs.label.textContent = 'Loading...';
    this.refs.spinner.classList.remove('is-hidden');
  }

  show(){
    this.refs.showBtn.classList.remove('is-hidden');
  }
  hide(){
    this.refs.showBtn.classList.add('is-hidden');
  }
}
