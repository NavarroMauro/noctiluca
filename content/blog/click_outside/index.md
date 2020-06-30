---
title: Truco para capturar un click fuera usando hooks
date: "2020-06-30T10:00:00.284Z"
description: "Click outside"
published: true
featuredImage: ./hooks.jpg
---

It’s 2019, React 16.8.0 is here. It’s probably a good idea to revisiting our snippet of capturing clicking outside and to solve it with the new tools we have today, Hooks.
So Hooks?

First of all, let me help react team broadcast some message.

    “You don’t need to write everything in hooks now.”

Hooks is a way for a functional component to archive some effect such as state, DOM Events, context without having to convert them into class components. If you already have something up and running in class components, there’s no immediate need to refactor.
Problem revisited

If you have tried to develop your own dropdown, modal or popover. I’m guessing you’ve been in this situation. “How do I capture clicking outside component so I can close it??”

"here a picture example"

Luckily it’s not that complex, and not very different from what we used to do two years ago. (https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-react-component-5604830beb7f)

Here’s what you need to do

    Create a reference to your outer div (We’ll be using useRef)

const node = useRef();... some other code ...return (
  <div ref={node}>
    ...
  </div>
);

1. Add event listener mousedown (or click) to the document whenever this component is appear on screen (eg. mount) and also don’t forget to remove the event on unmount too. (This time, We will be using useEffect to handle it.)

useEffect(() => {
  // add when mounted
  document.addEventListener("mousedown", handleClick);  // return function to be called when unmounted
  return () => {
    document.removeEventListener("mousedown", handleClick);
  };
}, []);

Note: Pass empty array to 2nd arguments for optimisation.
Note from Official React Docs [link](https://reactjs.org/docs/hooks-effect.html)

3. Inside the event (handleClick) node.current.contains(e.target) will return true if whatever you are clicking is inside the “node” ref.

const handleClick = e => {
  if (node.current.contains(e.target)) {
    // inside click
    return;
  }  // outside click 
  ... do whatever on click outside here ...
};

There you have it, a workable click outside detector snippet. But if you like some further challenge, you can try to merge this into your own reusable hook. I will be trying that too, to get into the Hook world.

Here’s some working example of Dropdown with code above. (https://codesandbox.io/s/w62xl39907)

    *Update 17 April 2019: Shout out to Олег Чулановский. A better (optimised) version. (https://codesandbox.io/s/9o3lw5792w)

Happy Coding, guys!
