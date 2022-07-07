function altText(postExcerpt) {
    let words = postExcerpt.toLowerCase().replace(/[^a-zA-Z\s-]/, '').split(' ');

    return (words.length >= 3) ? words.slice(0, 3).join(' ') :
        words.slice(0, (words.length - 1)).join(' ');
}

export default altText;
// module.exports = altText;