import 'bootstrap';
import AOS from 'aos';

const apiURL                = "https://mockend.com/Wide-Eye-Creative/technical-test-2022/posts";
const archivePostsTemplate  = require('../partials/single-post-item.hbs');
const archivePostsContainer = document.querySelector('.posts__container');

let allPosts          = null;
let postsSubset       = null;
let sortedPostsSubset = null;
let previousPostId    = 0;
let loadMorePosts     = document.querySelector('.load-more-posts');

// initialize scroll/fade in animations
AOS.init({
  duration: 1200,
});

// get all posts
fetch(apiURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Unsuccessful fetch attempt');
    }
    return response.json();
  })
  .then((data) => {
    allPosts          = data;
    postsSubset       = getPostSubset(allPosts, previousPostId);
    sortedPostsSubset = getSortedPostsSubset(postsSubset);

    renderHTML(sortedPostsSubset);
  })
  .catch(error => {
    console.error('An unexpected error occurred:', error);
  });

// compile and render HTML using handlebars template partial
function renderHTML(posts) {
  archivePostsContainer.insertAdjacentHTML('beforeend', archivePostsTemplate(posts));
}

// retrieve six posts at a time based on last index position
function getPostSubset(posts, index) {
  previousPostId += 6;
  let subset = allPosts.slice(index, index + 6, posts);

  // change date format to Month Day, Year ( March 05, 2011 )
  changePusblishDateFormat(subset);
  return subset;
}

// sort posts based on author name
function getSortedPostsSubset(posts) {
  return posts.sort((a, b) => (a.authorName.toUpperCase() < b.authorName.toUpperCase()) ? -1 :
    (a.authorName.toUpperCase() > b.authorName.toUpperCase()) ? 1 : 0);
}

// set published date format to Month Day, Year format
function changePusblishDateFormat(posts) {
  posts.forEach(post => {
    const publishedDate     = new Date(post.publishedDate);
    const dateFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    post.publishedDate      = publishedDate.toLocaleDateString('en-us', dateFormatOptions);
  });
}

// load additional posts in sorted order
loadMorePosts.addEventListener('click', () => {
  postsSubset       = getPostSubset(allPosts, previousPostId);
  sortedPostsSubset = getSortedPostsSubset(postsSubset);

  renderHTML(sortedPostsSubset);
});
