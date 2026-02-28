
Assignment-4 

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans:

Think of these like different ways to find a thing in a area

getElementById: This is like having a specific GPS  for finding one thing. It only ever looks for a single, unique ID. It’s the fastest way to find something, but it only returns one element.

getElementsByClassName: This is like looking for "all blue kind of thing." It gives you a collection of every element that has that specific class name.

querySelector / querySelectorAll: These are like using a very specific description. "The person in the kitchen wearing a red shirt and holding a knife to chop a meat.


2. How do you create and insert a new element into the DOM?

ans:

Think of this like adding a new photo to a gallery wall.

First, you build the frame: You tell JavaScript to create a new "thing" (like a paragraph or a button). At this point, it exists in your hands, but it’s not on the wall yet.

Then, you hang it up: You find the wall where you want it to go and "append" (attach) it. You have to tell it exactly which room and which wall it belongs to, or it will just stay in your hands forever!

3. What is Event Bubbling? And how does it work?

ans :
Imagine you are standing in a room, inside a house, on a specific street. If you pop a party popper or Kali Photka in Eid , the "pop" happens in the room first and you got scolded by your mom. But the sound doesn't stay there—it travels (bubbles) out to the hallway, then out to the house, and finally, people on the street might hear it too.

In JavaScript, if you click a button inside a div, the button "feels" the click first. Then, the div feels it. Then, the whole page feels it. The event bubbles up from the center to the outside.

4. What is Event Delegation in JavaScript? Why is it useful?

ans:

Imagine you have a big family dinner with 200 kids kind of like kids war. Instead of giving every single kid their own personal waiter to take their order, you just put one waiter at the head of the table.

When a kid wants juice, they tap the table. The waiter at the head of the table hears the tap (thanks to bubbling!), looks to see which kid tapped, and brings them the juice. This is Event Delegation. It’s way easier to manage one waiter than 200 , and if a 201st kid joins the table later, the waiter is already there to help them too!

5. What is the difference between preventDefault() and stopPropagation() methods?

ans:

These two are like "security guards" for your events:

preventDefault(): This stops the Action. Imagine a "Submit" button usually sends a letter. If you use preventDefault, the button still gets clicked, but the letter never gets sent. You're saying, "Wait, don't do your normal and very, very boring job yet!"

stopPropagation(): This stops the News. It tells the "pop" from the Kali Photka to stay inside the room. It stops the event from bubbling up to the parents. You’re saying, "Keep this click a secret; don't tell the rest of the house about it!"

   

