import React, { useState } from 'react';

export default function Task({
  task: {id, title, state },
  onArchiveTask,
  onPinTask
}) {
  const [pin, setPin] = useState(false)
 
  return (
    <div className={`list-item ${state}`}>
      <input
        type="checkbox"
        name="checked"
        disabled={true}
        checked={state === "TASK_ARCHIVED"}
      />
      <input
        type="text"
        name="title"
        value={title}
        readOnly
        placeholder="Input title"
      />

      <button
        onClick={() => onArchiveTask(id)}
      >
        archive
      </button>

      {state === "TASK_PINNED" && (
        <button
          className="pin-button"
          onClick={() => {
            onPinTask(pin ? 'unpin' : 'pin');
            setPin(prev => !prev);
          }}

        >
          <span className={pin ? "pin-button-text" : "unpin-button-text"}>
            {pin ? 'unpin' : 'pin'}
          </span>
        </button>
      )}
    </div>
  );
}