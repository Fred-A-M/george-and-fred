# The (Extremely Wicked and Badman) Stunts, Gags and Hijinks of George and Fred

<p align="center">
  <img src="./logo.png" width="300">
</p>

George and Fred is a card game built with **React.js** and **JavaScript**, powered by **Vite**. In this game, Player 1 competes against the computer in a battle of attributes. The goal is to strategically choose the attribute with the highest value to win the opponent's card. The game ends when one player collects all the cards.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Game Rules](#game-rules)
- [Technologies Used](#technologies-used)

## Features

- Player vs. Computer gameplay.
- Ability to choose the size of the deck before starting.
- Simple and engaging card-based attribute comparison mechanics.
- Fun, cartoonish characters with unique attributes.

## Installation

To get started with Mutant Trumps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/george-and-fred.git
   ```
   
2. Navigate to the client directory:
  ```bash
  cd george-and-fred/client
  ```
3. Install dependencies
  ```bash
  npm install
  ```
4. Start the development server
   ```bash
   npm run dev
   ```

The app will start on http://localhost:5173 (or the next available port if 5173 is in use).

## How to Play
Choose the size of the deck from the available options.

Player 1 goes first. On your turn, select an attribute that you believe is higher than the computer's card for that attribute.

If your chosen attribute is higher than the computer's, you win the round and take the computer's card.

If the computer's attribute is higher, it takes your card.

Continue playing until one player has all the cards in the deck, winning the game.

## Game Rules
Turn-Based: Player 1 and the computer alternate turns.

Attribute Comparison: Each card has five attributes. The goal is to choose an attribute that you believe is stronger than the opponent’s.

Winning the Game: A player wins by taking all the other player’s cards.

## Technologies Used
React.js: Frontend library for building user interfaces.

JavaScript: Core game logic.

Vite: Build tool for fast and efficient development.

## License
