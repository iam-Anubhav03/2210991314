import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-blue-600 text-white">
      <Link to="/">Feed</Link>
      <Link to="/top-users">Top Users</Link>
      <Link to="/trending-posts">Trending Posts</Link>
    </nav>
  );
}
