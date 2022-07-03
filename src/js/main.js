import 'bootstrap';

const apiURL                = "https://mockend.com/Wide-Eye-Creative/technical-test-2022/posts";
const archivePostsTemplate  = require( '../partials/single-post-item.hbs' );
const archivePostsContainer = document.querySelector( '.posts__container' );

let allPosts          = null;
let postsSubset       = null;
let sortedPostsSubset = null;
let previousPostId    = 0;
// let loadMorePosts        = document.querySelector( '.load-more-posts' );

/**
 * TODO:
 * 1. site styles
 * 2. add social icons to footer section
 * 3. hookup event listener to load more posts when link is click (must append)
 */

fetch( apiURL )
  .then( ( response ) => {
    return response.json();
  })
  .then( ( data ) => {
    allPosts          = data;
    postsSubset       = getPostSubset( allPosts, previousPostId );
    sortedPostsSubset = getSortedPostsSubset( postsSubset );

    renderHTML( sortedPostsSubset );
  })
  .then();

function renderHTML( posts ) {
  // compile and render HTML using handlebars template partial
  archivePostsContainer.insertAdjacentHTML( 'afterbegin', archivePostsTemplate( posts ) );
  // archivePostsContainer.innerHTML = archivePostsTemplate( sortedPostsSubset );
}

// Get six posts at a time based on last index position
function getPostSubset( posts, index ) {
  previousPostId += 6;
  return allPosts.slice( index, index + 6, posts );
}

function getSortedPostsSubset( posts ) {
  return posts.sort( ( a, b ) => ( a.authorName.toUpperCase() < b.authorName.toUpperCase() ) ? -1 : 
    ( a.authorName.toUpperCase() > b.authorName.toUpperCase() ) ? 1 : 0 );
}

// loadMorePosts.addEventListener( 'click', () => {
  // subPostCollection = getSubPostCollection( allPosts, postIndex );
  //some other stuff needs to happen
// });
