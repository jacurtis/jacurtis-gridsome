---
title: How to Use Emojis on Linux
slug: how-to-use-emojis-linux-ubuntu
date: 2020-01-17
published: false
tags: ['Linux']
series: false
canonical_url: false
description: "Emojis are a fun way to express yourself, but on Linux it is hard to use them... until now!"
---

Emojis are a fun way to express yourself. I used to think they were silly, but now we use them everyday in text messages, love notes, and even at work.

I recently have become a fan of putting emoji characters in my commit messages through git. Any modern terminal will show them and Gitlab, Bitbucket, and Github all support them. It adds some spice and fun to an otherwise boring UI when you see messages with fun little emojis in them.

Yesterday I found myself writing a simple commit message. I wanted to write `"🐾 Set up a leaning footer"` and I thought it would be fun to add an emoji foot in the message (because of the footer...get it? 🤣).

On a mac this is easy, you just press `Ctrl + Alt + Space` to pull up an emoji picker. On Windows you can press `Windows Key + .` (period).

But this week my Mac is in for repairs, and I have been coding exclusively on Linux. My Linux laptop runs [Pop!_OS](https://system76.com/pop) (derived from Ubuntu), and I couldn't figure out how to easily add an Emoji symbol.

But I figured it out, and now I will share the secret to having emoji fun on Linux.

## Adding Emoji Keyboard to Ubuntu, POP!_OS, and Other Linux Distros

Installing the emoji keyboard was pretty simple. I found several projects that attempted to do this, but ultimately I settled on [Emoji Keyboard from Ozymandias The Great](https://github.com/OzymandiasTheGreat/emoji-keyboard). 

I liked this project because it seemed to be widely supported, runs on python which is generally effecient and fast, and works on both X or Wayland GUIs for Linux. This means it should thoeretically work on nearly every popular distro out there. Furthermore, it can be installed with either pip or apt-get (via a PPA).

### Installing Emoji Keyboard

The installation was pretty simple. You need to make sure you have a bunch of python dependencies first. I for whatever reason already had all but one of them (appindicator was the one I didn't have). And since I don't do anything crazy with this computer, you probably already have these too.

In the terminal run:

```
sudo apt install python3 python3-gi gir1.2-gtk-3.0 gir1.2-glib-2.0 python3-evdev gir1.2-appindicator3-0.1
```

Since the gnome UI that I am using (standard for Pop!_OS) runs on X, then I also had to install:

```
pip3 install python-xlib
```

But if you are using Wayland, check the [github link](https://github.com/OzymandiasTheGreat/emoji-keyboard), since there are a few different steps.

Then finally you have all the dependencies. Installing the actual program is easy with pip.

```
sudo pip3 install https://github.com/OzymandiasTheGreat/emoji-keyboard/archive/master.zip
```

It installed without any hassle for me. If you prefer to use apt, there is a PPA you can find on github.

### Using the Emoji Keyboard

Once you have it installed, you can simply access the emoji keyboard from your app menu. I open most apps by pressing the Super key (Windows Key) and then typing the first few letters of the application I want to launch. So for me, I just press something like `Super + E M O` and the emoji keyboard pops up, and I press enter.

Once it is running, the keyboard will stay on top of all your other windows.

### Customizing the Emoji Keyboard

I did find one customization that I felt was necessary and that is that I preferred to copy the emoji to my clipboard when I selected it, instead of having it type the emoji into the selected area. 

The preferences panel was a bit tricky to find at first, because it is accessed from the terminal.

In your terminal type:

```
emoji-keyboard -p
```

This will open a small preferences box. As far as I know, this is the only way to access this. I changed the option to "copy" and that was it. I was happy with the current settings for everything else.

## Wrapping Up

That's it! Super simple to start using emojis on Linux. Of course there isn't a built in solution, but that isn't surprising, because it is the Linux way. There are several different solutions out there and you can customize your OS to meet your needs. It is a "some assembly required" operating system, and I like that. Because it comes across as a custom experience.

