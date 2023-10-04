import React from "react";

export function Dragicon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="dragicon"
      focusable="false"
      aria-hidden="true"
    >
      <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2m0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8m0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14m6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6m0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8m0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14"></path>
    </svg>
  );
}

export function Editicon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="editicon"
      focusable="false"
      aria-hidden="true"
    >
      <path
        d="M17.086 2.912a3.126 3.126 0 0 0-4.414 0l-9.379 9.379a.998.998 0 0 0-.263.464l-1 4a1 1 0 0 0 1.212 1.213l4-1c.176-.044.337-.135.465-.263l9.38-9.379a3.125 3.125 0 0 0 0-4.414zm-1.414 3L15 6.584l-1.586-1.586.672-.672a1.125 1.125 0 0 1 1.586 0 1.123 1.123 0 0 1 0 1.586zM5.414 12.998L12 6.412l1.586 1.586L7 14.584l-1.586-1.586z"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
}

export function Deleteicon({ onClick }: { onClick: () => void }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className="deleteicon"
      focusable="false"
      aria-hidden="true"
      onClick={onClick}
    >
      <path
        d="M16 6H4a1 1 0 1 0 0 2h1v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8h1a1 1 0 1 0 0-2zM9 4a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2H9zm2 12h2V8h-2v8zm-4 0h2V8H7v8z"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
}
