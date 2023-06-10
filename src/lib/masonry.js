export function renderMasonry() {
  let masonry = new Masonry('.grid', {
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true,
  });
}
