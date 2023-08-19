
import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const add = () => {
    if (text.trim() !== "") {
      setList([...list, text]);
      setText("");
    }
  };

  const toggleEdit = (index) => {
    if (selectedIndex === index) {
      saveEdit(index);
    } else {
      setSelectedIndex(index);
      setText(list[index]);
    }
  };

  const saveEdit = () => {
    if (selectedIndex !== -1 && text.trim() !== "") {
      const updatedList = [...list];
      updatedList[selectedIndex] = text;
      setList(updatedList);
      setSelectedIndex(-1);
      setText("");
    }
  };

  const deleteItem = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
    setSelectedIndex(-1);
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={selectedIndex !== -1}
      />
      <button onClick={add}>Add</button>
      <button onClick={() => toggleEdit(selectedIndex)}>Edit</button>
      <button onClick={() => deleteItem(selectedIndex)}>Delete</button>
      {list.map((item, index) => (
        <div key={index}>
          <p>
            {selectedIndex === index ? (
              <>
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <button onClick={() => saveEdit()}>Save</button>
                <button onClick={() => setSelectedIndex(-1)}>Cancel</button>
              </>
            ) : (
              item
            )}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;

