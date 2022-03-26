import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './components/styles/App.css';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myBooks: [
        {
          id: 1,
          category: 'Thriller',
          title: 'Inferno',
          author: 'Dan Brown',
          comment: 'Comments',
          remove: 'Remove',
          edit: 'Edit',
          currentChapter: 'Current chapter',
          chapter: 'Chapter 1',
          updateProgress: 'UPDATE PROGRESS',
        },
        {
          id: 2,
          category: 'Fantasy',
          title: 'A Song of Ice and Fire',
          author: 'Geroge R.R Martin',
          comment: 'Comments',
          remove: 'Remove',
          edit: 'Edit',
          currentChapter: 'Current chapter',
          chapter: 'Chapter 11',
          updateProgress: 'UPDATE PROGRESS',
        },
      ],
    };
  }

  render() {
    const { myBooks } = this.state;
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Books myBooks={myBooks} />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </div>
    );
  }
}

export default App;
