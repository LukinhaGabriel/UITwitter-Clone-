import {FileText, BookmarksSimple, Envelope, Bell, Hash, House, User, DotsThreeCircle, Pencil} from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import twitterLogo from '../assets/logo-twitter.svg';

import './Sidebar.css';

export const Sidebar = () => {
  return(
    <aside className="sidebar">
        <img className="logo" src={twitterLogo} alt="Logo Twitter" />
        <nav className="main-navigation">
          <NavLink  to="/">
            <House weight="fill" />
            <span>Home</span>
          </NavLink>
          <a href="">
            <Hash />  
            <span>Explora</span>
          </a>
          <a href="">
            <Bell />
            <span>Notifications</span>
          </a>
          <a href="">
            <Envelope />
            <span>Messages</span>
          </a>
          <a href="">
            <BookmarksSimple/>
            <span>Bookmarks</span>
          </a>
          <a href="">
            <FileText/>
            <span>Lists</span>
          </a>
          <a href="">
            <User />
            <span>User</span>
          </a>
          <a href="">
            <DotsThreeCircle />
            <span>More</span>
          </a>
        </nav>
        <button className='new-tweet' type='button'>
          <Pencil />
          <span>Tweet</span>
        </button>
      </aside>
  );
}