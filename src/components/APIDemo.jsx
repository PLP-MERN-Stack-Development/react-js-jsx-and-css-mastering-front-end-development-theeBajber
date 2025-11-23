import React, { useState, useEffect, useCallback } from 'react';
import Button from './Button';
import Card from './Card';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import { api } from '../api/jsonPlaceholder';

const APIDemo = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchPosts = useCallback(async (pageNum = 1, search = '') => {
    setLoading(true);
    setError(null);
    try {
      let data;
      if (search) {
        data = await api.searchPosts(search);
      } else {
        data = await api.getPosts(pageNum, 10);
      }
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts(page, searchQuery);
  }, [fetchPosts, page, searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchPosts(1, searchQuery);
  };

  const handleNextPage = () => {
    setPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    setPage(prev => Math.max(1, prev - 1));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        API Integration Demo
      </h2>

      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
        This demo fetches data from JSONPlaceholder API to display blog posts.
        You can search through posts and browse different pages.
      </p>

      {/* Search Form */}
      <Card>
        <CardBody>
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for posts by title or content..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <Button type="submit" variant="primary">
              Search Posts
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setSearchQuery('');
                setPage(1);
                fetchPosts(1, '');
              }}
            >
              Clear Search
            </Button>
          </form>
        </CardBody>
      </Card>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Loading blog posts...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <Card>
          <CardBody>
            <div className="text-red-600 dark:text-red-400 text-center">
              <p className="text-lg font-semibold">Error Loading Posts</p>
              <p className="mt-2">{error}</p>
              <Button
                variant="primary"
                onClick={() => fetchPosts(page, searchQuery)}
                className="mt-4"
              >
                Try Again
              </Button>
            </div>
          </CardBody>
        </Card>
      )}

      {/* Posts Grid */}
      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardBody>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                    {post.body}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>Post #{post.id}</span>
                    <span>By User #{post.userId}</span>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {!searchQuery && posts.length > 0 && (
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="secondary"
                onClick={handlePrevPage}
                disabled={page === 1}
              >
                ← Previous Page
              </Button>
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Page {page}
              </span>
              <Button
                variant="secondary"
                onClick={handleNextPage}
                disabled={posts.length < 10}
              >
                Next Page →
              </Button>
            </div>
          )}

          {/* No Results */}
          {posts.length === 0 && !loading && (
            <Card>
              <CardBody>
                <p className="text-center text-gray-500 dark:text-gray-400 py-8 text-lg">
                  No posts found matching your search. Try different keywords.
                </p>
              </CardBody>
            </Card>
          )}

          {/* Results Count */}
          {posts.length > 0 && (
            <div className="text-center text-gray-500 dark:text-gray-400">
              Showing {posts.length} post{posts.length !== 1 ? 's' : ''}
              {searchQuery && ' matching your search'}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default APIDemo;