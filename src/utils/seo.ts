type MetaOptions = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

function ensureMeta(name: string, property: boolean = false) {
  const selector = property ? `meta[property=\"${name}\"]` : `meta[name=\"${name}\"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    if (property) el.setAttribute('property', name);
    else el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  return el as HTMLMetaElement;
}

export function setMeta(opts: MetaOptions) {
  if (opts.title) document.title = opts.title;
  if (opts.description) {
    const m = ensureMeta('description');
    m.content = opts.description;
  }
  if (opts.image) {
    const ogImg = ensureMeta('og:image', true);
    ogImg.content = opts.image;
    const twImg = ensureMeta('twitter:image');
    twImg.content = opts.image;
  }
  if (opts.title) {
    const ogTitle = ensureMeta('og:title', true);
    ogTitle.content = opts.title;
    const twTitle = ensureMeta('twitter:title');
    twTitle.content = opts.title;
  }
  if (opts.description) {
    const ogDesc = ensureMeta('og:description', true);
    ogDesc.content = opts.description;
    const twDesc = ensureMeta('twitter:description');
    twDesc.content = opts.description;
  }
  if (opts.url) {
    const ogUrl = ensureMeta('og:url', true);
    ogUrl.content = opts.url;
  }
}

export default setMeta;
